import React, { useState, useId } from 'react';
import { Icon } from '../icons/Icon.jsx';

const KINDS = {
  error: { icon: 'alert', title: "This didn't load", body: 'Something went wrong on our side. Nothing you entered was lost. Try again in a moment.' },
  offline: { icon: 'wifi-off', title: "You're offline", body: "What you've done here is kept. This page reconnects by itself when your connection is back." },
  timeout: { icon: 'clock', title: 'This is taking too long', body: "The request didn't finish in time. Try again, or come back in a few minutes." },
  'not-found': { icon: 'search', title: "This page doesn't exist", body: 'It may have moved, or the link may have a typo. Check the address, or go back to the home page.' },
  permission: { icon: 'lock', title: "You don't have access to this", body: 'Ask the owner to share it with you, or sign in with the account that has access.' },
  server: { icon: 'triangle-alert', title: 'The service is having trouble', body: "It's not something you did. It retries by itself, and you can try again now too." },
};

/**
 * A whole region that failed: says what happened, that nothing was lost, and the one action
 * that fixes it. kind: error · offline · timeout · not-found · permission · server (each has
 * default copy you can override). onRetry adds Try again; `retrying` shows
 * progress on it. `details` (an error code or message) sits in a collapsed "Technical details"
 * so support can help without scaring everyone else. role=alert so it is announced once.
 */
export function ErrorState({
  kind = 'error', title, children, onRetry, retryLabel = 'Try again', retrying = false, action, secondaryAction,
  details, size = 'md', variant = 'card', onInk = false, style, ...rest
}) {
  const k = KINDS[kind] || KINDS.error;
  const sm = size === 'sm';
  const [open, setOpen] = useState(false);
  const did = (typeof useId === 'function' ? useId() : 'err').replace(/:/g, '');
  const tone = kind === 'offline' || kind === 'timeout' ? 'warning' : kind === 'not-found' || kind === 'permission' ? 'info' : 'danger';
  const c = onInk
    ? { title: 'var(--on-ink-strong)', body: 'var(--on-ink-body)', tile: 'var(--on-ink-fill)', fg: `var(--on-ink-${tone === 'info' ? 'link' : tone})`, border: 'var(--on-ink-border-strong)', link: 'var(--on-ink-link)', code: 'var(--on-ink-fill)' }
    : { title: 'var(--text-strong)', body: 'var(--text-muted)', tile: `var(--surface-${tone})`, fg: `var(--text-${tone})`, border: 'var(--border-default)', link: 'var(--text-link)', code: 'var(--surface-sunken)' };
  const frame = variant === 'card' ? { border: `1px solid ${c.border}`, borderRadius: 'var(--radius-xl)', background: onInk ? 'transparent' : 'var(--surface-card)' } : null;
  const btn = (primary) => ({
    display: 'inline-flex', alignItems: 'center', gap: 8, minHeight: 44, padding: '0 20px', borderRadius: 'var(--radius-pill)', cursor: retrying ? 'progress' : 'pointer',
    fontFamily: 'var(--font-sans)', fontSize: 'var(--text-ui-sm)', fontWeight: 'var(--weight-semibold)',
    ...(primary
      ? { background: onInk ? 'var(--on-ink-strong)' : 'var(--action-ink)', color: onInk ? 'var(--navy-800)' : 'var(--surface-card)', border: '1px solid transparent' }
      : { background: 'transparent', color: c.link, border: `1px solid ${c.border}` }),
  });
  return (
    <div role="alert" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: sm ? 10 : 14, padding: sm ? '24px 20px' : '40px 28px', fontFamily: 'var(--font-sans)', minWidth: 0, ...frame, ...style }} {...rest}>
      <span aria-hidden="true" style={{ display: 'inline-grid', placeItems: 'center', width: sm ? 44 : 56, height: sm ? 44 : 56, borderRadius: 'var(--radius-md)', background: c.tile, color: c.fg }}>
        <Icon name={k.icon} size={sm ? 22 : 26} />
      </span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, maxWidth: '46ch' }}>
        <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: sm ? 'var(--text-ui-lg)' : 'var(--text-h4)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-tight)', lineHeight: 1.3, color: c.title }}>{title ?? k.title}</h3>
        <p style={{ margin: 0, fontSize: 'var(--text-ui-sm)', lineHeight: 1.55, color: c.body }}>{children ?? k.body}</p>
      </div>
      {(onRetry || action || secondaryAction) && (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, marginTop: 2 }}>
          {onRetry && (
            <button type="button" onClick={retrying ? undefined : onRetry} aria-disabled={retrying || undefined} style={btn(true)}>
              <Icon name="refresh" size={16} duotone={false} className={retrying ? 'cory-spin-icon' : undefined} />
              {retrying ? 'Trying again…' : retryLabel}
            </button>
          )}
          {action}
          {secondaryAction}
        </div>
      )}
      {details && (
        <div style={{ width: '100%', maxWidth: '46ch' }}>
          <button type="button" aria-expanded={open} aria-controls={did} onClick={() => setOpen(!open)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, minHeight: 32, padding: '0 8px', border: 0, background: 'transparent', color: c.link, cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-caption)', fontWeight: 'var(--weight-semibold)' }}>
            Technical details
            <Icon name="chevron-down" size={14} duotone={false} style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform var(--duration-base) var(--ease-out)' }} />
          </button>
          <pre id={did} hidden={!open} className="cory-ltr"
            style={{ margin: '6px 0 0', padding: '10px 12px', textAlign: 'start', whiteSpace: 'pre-wrap', overflowWrap: 'anywhere', borderRadius: 'var(--radius-md)', background: c.code, color: c.body, fontFamily: 'var(--font-mono)', fontSize: 'var(--text-micro)', lineHeight: 1.5 }}>{details}</pre>
        </div>
      )}
    </div>
  );
}
