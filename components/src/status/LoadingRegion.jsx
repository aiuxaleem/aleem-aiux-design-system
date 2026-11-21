import React, { useState, useEffect, useRef } from 'react';

const VH = { position: 'absolute', width: 1, height: 1, margin: -1, padding: 0, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap', border: 0 };

/**
 * Wraps any region that loads, and applies the timing rules so loading never flickers:
 *  - nothing shows for the first `delay` ms (300): fast loads feel instant;
 *  - once the skeleton shows, it stays at least `minDuration` ms (600): no flash;
 *  - content then fades in (200 ms, none under reduced motion);
 *  - a refetch with content already on screen keeps that content, dims it slightly and
 *    shows the `refreshing` hint, centred on the region's top edge so it covers nothing
 *    (`keepPrevious`).
 * Screen readers hear `label` when loading starts and `doneLabel` when it ends (role=status);
 * the region carries aria-busy while it waits.
 */
export function LoadingRegion({
  loading = false, skeleton, children, label = 'Loading', doneLabel = 'Loaded', delay = 300, minDuration = 600,
  keepPrevious = true, refreshing, as: Tag = 'div', style, ...rest
}) {
  const [phase, setPhase] = useState(loading ? (delay > 0 ? 'wait' : 'skeleton') : 'ready'); // wait | skeleton | ready
  const [msg, setMsg] = useState('');
  const [hadContent, setHadContent] = useState(!loading);
  const shownAt = useRef(0);
  const timer = useRef(null);

  useEffect(() => {
    clearTimeout(timer.current);
    if (loading) {
      setMsg(label);
      if (phase === 'ready' && keepPrevious && hadContent) return;
      if (phase !== 'skeleton') {
        setPhase('wait');
        timer.current = setTimeout(() => { shownAt.current = Date.now(); setPhase('skeleton'); }, delay);
      }
    } else {
      const left = phase === 'skeleton' ? Math.max(0, minDuration - (Date.now() - shownAt.current)) : 0;
      timer.current = setTimeout(() => { setPhase('ready'); setHadContent(true); setMsg(doneLabel); }, left);
    }
    return () => clearTimeout(timer.current);
  }, [loading]); // eslint-disable-line react-hooks/exhaustive-deps

  const stale = loading && phase === 'ready';
  const busy = loading || phase !== 'ready';
  return (
    <Tag aria-busy={busy || undefined} style={{ position: 'relative', minWidth: 0, ...style }} {...rest}>
      <span role="status" style={VH}>{msg}</span>
      {phase === 'skeleton' && (skeleton ?? null)}
      {phase === 'wait' && !hadContent && null}
      {(phase === 'ready' || (phase === 'wait' && hadContent)) && (
        <div className={phase === 'ready' && !stale ? 'cory-state-in' : undefined}
          style={{ opacity: stale ? 0.6 : 1, transition: 'opacity var(--duration-base) var(--ease-out)', pointerEvents: stale ? 'none' : undefined }}>
          {children}
        </div>
      )}
      {stale && (
        <span aria-hidden="true" style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1, whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 12px', borderRadius: 'var(--radius-pill)', background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-caption)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-muted)' }}>
          <span className="cory-dot-pulse" style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--action-primary)' }} />
          {refreshing ?? 'Updating'}
        </span>
      )}
    </Tag>
  );
}
