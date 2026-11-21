import React from 'react';
import { Icon } from '../icons/Icon.jsx';

/**
 * Progress through a short, ordered flow (2 to 6 steps): onboarding, a booking, a checkout.
 * Each step shows a number or a tick plus its label, so status never relies on colour. The
 * current step has aria-current="step". Completed steps become buttons when onStepClick is
 * given. `compact` shows "Step 2 of 4: Details" with a bar, for phones.
 */
export function Stepper({ steps = [], current = 0, orientation = 'horizontal', compact = false, onStepClick, label = 'Progress', style, ...rest }) {
  const n = steps.length;
  if (compact) {
    const s = steps[current] || {};
    return (
      <div role="group" aria-label={label} style={{ display: 'grid', gap: 8, fontFamily: 'var(--font-sans)', minWidth: 0, ...style }} {...rest}>
        <span style={{ fontSize: 'var(--text-ui-sm)', color: 'var(--text-muted)' }}>Step {Math.min(current + 1, n)} of {n}: <b style={{ color: 'var(--text-strong)' }}>{s.label}</b></span>
        <span aria-hidden="true" style={{ display: 'flex', gap: 4 }}>
          {steps.map((_, i) => <span key={i} style={{ flex: 1, height: 4, borderRadius: 4, background: i <= current ? 'var(--action-primary)' : 'var(--border-default)' }} />)}
        </span>
      </div>
    );
  }
  const vertical = orientation === 'vertical';
  return (
    <ol aria-label={label} style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: vertical ? 'column' : 'row', gap: vertical ? 0 : 8, fontFamily: 'var(--font-sans)', minWidth: 0, ...style }} {...rest}>
      {steps.map((s, i) => {
        const state = s.error ? 'error' : i < current ? 'done' : i === current ? 'current' : 'todo';
        const dot = {
          done: { background: 'var(--action-primary)', color: '#fff', border: '1px solid transparent' },
          current: { background: 'var(--surface-card)', color: 'var(--text-info)', border: '2px solid var(--action-primary)' },
          todo: { background: 'var(--surface-card)', color: 'var(--text-muted)', border: '1px solid var(--border-interactive)' },
          error: { background: 'var(--surface-danger)', color: 'var(--text-danger)', border: '1px solid var(--border-danger)' },
        }[state];
        const clickable = onStepClick && state === 'done';
        const Tag = clickable ? 'button' : 'span';
        const last = i === n - 1;
        return (
          <li key={i} aria-current={state === 'current' ? 'step' : undefined} style={{ flex: vertical ? undefined : 1, display: 'flex', flexDirection: vertical ? 'row' : 'column', gap: vertical ? 12 : 8, minWidth: 0 }}>
            <span style={{ display: 'flex', flexDirection: vertical ? 'column' : 'row', alignItems: 'center', gap: vertical ? 4 : 8 }}>
              <span aria-hidden="true" style={{ flexShrink: 0, display: 'inline-grid', placeItems: 'center', width: 28, height: 28, borderRadius: '50%', fontSize: 'var(--text-caption)', fontWeight: 'var(--weight-bold)', ...dot }}>
                {state === 'done' ? <Icon name="check" size={14} duotone={false} strokeWidth={2.5} /> : state === 'error' ? '!' : i + 1}
              </span>
              {!last && <span aria-hidden="true" style={vertical ? { flex: 1, width: 2, minHeight: 20, background: i < current ? 'var(--action-primary)' : 'var(--border-default)' } : { flex: 1, height: 2, background: i < current ? 'var(--action-primary)' : 'var(--border-default)' }} />}
            </span>
            <Tag {...(clickable ? { type: 'button', onClick: () => onStepClick(i) } : null)}
              style={{ display: 'grid', gap: 2, textAlign: 'start', padding: vertical ? '2px 0 18px' : 0, border: 0, background: 'transparent', font: 'inherit', cursor: clickable ? 'pointer' : undefined, minWidth: 0 }}>
              <span style={{ fontSize: 'var(--text-ui-sm)', fontWeight: state === 'current' ? 'var(--weight-bold)' : 'var(--weight-semibold)', color: state === 'todo' ? 'var(--text-muted)' : state === 'error' ? 'var(--text-danger)' : clickable ? 'var(--text-link)' : 'var(--text-strong)' }}>
                {s.label}<span className="cory-visually-hidden">{state === 'done' ? ', completed' : state === 'current' ? ', current step' : state === 'error' ? ', needs attention' : ', not started'}</span>
              </span>
              {s.description && <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)', lineHeight: 1.4 }}>{s.description}</span>}
            </Tag>
          </li>
        );
      })}
    </ol>
  );
}
