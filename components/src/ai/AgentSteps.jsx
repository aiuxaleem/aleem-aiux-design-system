import React from 'react';
import { Icon } from '../icons/Icon.jsx';

const STATE = {
  done: { icon: 'check', word: 'Done', fg: 'var(--text-success)', bg: 'var(--surface-success)', ring: 'var(--border-success)' },
  running: { icon: null, word: 'Working', fg: 'var(--text-info)', bg: 'var(--surface-info)', ring: 'var(--border-info)' },
  waiting: { icon: 'pause', word: 'Needs you', fg: 'var(--text-warning)', bg: 'var(--surface-warning)', ring: 'var(--border-warning)' },
  error: { icon: 'close', word: 'Failed', fg: 'var(--text-danger)', bg: 'var(--surface-danger)', ring: 'var(--border-danger)' },
  pending: { icon: null, word: 'Up next', fg: 'var(--text-subtle)', bg: 'var(--surface-sunken)', ring: 'var(--border-default)' },
};

/**
 * What an agent is doing, step by step, so people can follow and step in. Each step has a status:
 * done, running, waiting (needs a person), error, or pending. Status is shown as an icon and a word.
 */
export function AgentSteps({ steps = [], title, summary, compact = false, style, ...rest }) {
  return (
    <section aria-label={title || 'Agent progress'} style={{ display: 'grid', gap: compact ? 10 : 14, fontFamily: 'var(--font-sans)', minWidth: 0, ...style }} {...rest}>
      {(title || summary) && (
        <header style={{ display: 'grid', gap: 2 }}>
          {title && <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--text-ui-lg)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)' }}>{title}</h3>}
          {summary && <p style={{ margin: 0, fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>{summary}</p>}
        </header>
      )}
      <ol aria-live="polite" style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid' }}>
        {steps.map((s, i) => {
          const S = STATE[s.status] || STATE.pending;
          const last = i === steps.length - 1;
          const dim = s.status === 'pending';
          return (
            <li key={i} aria-current={s.status === 'running' ? 'step' : undefined} style={{ display: 'grid', gridTemplateColumns: '28px minmax(0, 1fr)', columnGap: 12 }}>
              <span aria-hidden="true" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ display: 'grid', placeItems: 'center', width: 28, height: 28, borderRadius: '50%', background: S.bg, color: S.fg, boxShadow: `inset 0 0 0 1px ${S.ring}`, flexShrink: 0 }}>
                  {s.status === 'running'
                    ? <span style={{ width: 12, height: 12, borderRadius: '50%', border: '2px solid currentColor', borderInlineEndColor: 'transparent', animation: 'cory-spin 0.8s linear infinite' }} />
                    : S.icon ? <Icon name={S.icon} size={14} duotone={false} strokeWidth={2.25} />
                    : <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }} />}
                </span>
                {!last && <span style={{ flex: 1, width: 2, minHeight: compact ? 10 : 14, marginBlock: 4, borderRadius: 1, background: s.status === 'done' ? 'var(--border-success)' : 'var(--border-default)' }} />}
              </span>
              <div style={{ paddingBottom: last ? 0 : (compact ? 10 : 16), minWidth: 0, opacity: dim ? 0.78 : 1 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '2px 10px', minHeight: 28, paddingTop: 4 }}>
                  <span style={{ fontSize: 'var(--text-ui-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-strong)', lineHeight: 1.4 }}>{s.title}</span>
                  <span style={{ fontSize: 'var(--text-micro)', fontWeight: 'var(--weight-semibold)', color: S.fg, letterSpacing: '0.02em' }}>{S.word}</span>
                  {s.time && <span className="cory-ltr" style={{ marginInlineStart: 'auto', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-micro)', color: 'var(--text-subtle)' }}>{s.time}</span>}
                </div>
                {s.detail && <p style={{ margin: '2px 0 0', fontSize: 'var(--text-caption)', lineHeight: 1.5, color: 'var(--text-muted)' }}>{s.detail}</p>}
                {s.action && <div style={{ marginTop: 10 }}>{s.action}</div>}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
