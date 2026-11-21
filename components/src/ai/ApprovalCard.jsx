import React from 'react';
import { Icon } from '../icons/Icon.jsx';
import { Button } from '../core/Button.jsx';

const RISK = {
  low: { word: 'Low risk', fg: 'var(--text-success)', bg: 'var(--surface-success)', icon: 'shield' },
  medium: { word: 'Check first', fg: 'var(--text-warning)', bg: 'var(--surface-warning)', icon: 'warning' },
  high: { word: 'High impact', fg: 'var(--text-danger)', bg: 'var(--surface-danger)', icon: 'alert' },
};

/**
 * Human in the loop: an agent proposes an action and waits for a person. Shows what will happen,
 * to what, how risky it is, and three clear choices. After a decision, `status` shows the outcome.
 */
export function ApprovalCard({
  agent = 'Agent', title, children, details = [], risk = 'low', status = 'pending', reversible,
  onApprove, onEdit, onReject, approveLabel = 'Approve', editLabel = 'Edit', rejectLabel = "Don't do it",
  decidedBy, style, ...rest
}) {
  const R = RISK[risk] || RISK.low;
  const done = status === 'approved' || status === 'rejected';
  return (
    <section
      aria-label={`${agent} is asking for approval`}
      style={{ display: 'grid', gap: 14, padding: 'var(--space-5)', borderRadius: 'var(--radius-xl)', background: 'var(--surface-card)', border: `1px solid ${done ? 'var(--border-subtle)' : 'var(--border-default)'}`, boxShadow: done ? 'none' : 'var(--shadow-md)', fontFamily: 'var(--font-sans)', minWidth: 0, ...style }}
      {...rest}
    >
      <header style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 'var(--text-caption)', color: 'var(--text-muted)', fontWeight: 'var(--weight-semibold)' }}>
          <span aria-hidden="true" style={{ display: 'inline-grid', placeItems: 'center', width: 24, height: 24, borderRadius: 7, background: 'var(--surface-ink)', color: 'var(--on-ink-link)' }}><Icon name="sparkles" size={14} duotone={false} strokeWidth={2} /></span>
          {agent} wants to
        </span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: R.bg, color: R.fg, fontSize: 'var(--text-micro)', fontWeight: 'var(--weight-bold)' }}>
          <Icon name={R.icon} size={13} duotone={false} strokeWidth={2} />{R.word}
        </span>
      </header>

      <div style={{ display: 'grid', gap: 6 }}>
        <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--text-h4)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-tight)', lineHeight: 1.3, color: 'var(--text-strong)' }}>{title}</h3>
        {children && <p style={{ margin: 0, fontSize: 'var(--text-ui-sm)', lineHeight: 1.55, color: 'var(--text-body)' }}>{children}</p>}
      </div>

      {details.length > 0 && (
        <dl style={{ margin: 0, display: 'grid', gap: 8, padding: '12px 14px', borderRadius: 'var(--radius-md)', background: 'var(--surface-sunken)', fontSize: 'var(--text-caption)' }}>
          {details.map((d, i) => (
            <div key={i} style={{ display: 'flex', flexWrap: 'wrap', gap: '2px 16px', minWidth: 0 }}>
              <dt style={{ flex: '0 0 88px', color: 'var(--text-muted)', fontWeight: 'var(--weight-medium)' }}>{d.label}</dt>
              <dd style={{ flex: '1 1 160px', margin: 0, color: 'var(--text-strong)', fontWeight: 'var(--weight-semibold)', minWidth: 0, overflowWrap: 'anywhere' }}>{d.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {reversible != null && !done && (
        <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: 6, fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>
          <Icon name={reversible ? 'refresh' : 'lock'} size={14} duotone={false} />{reversible ? 'You can undo this for 10 minutes.' : 'This cannot be undone.'}
        </p>
      )}

      {done ? (
        <p role="status" style={{ margin: 0, display: 'flex', alignItems: 'center', gap: 8, fontSize: 'var(--text-ui-sm)', fontWeight: 'var(--weight-semibold)', color: status === 'approved' ? 'var(--text-success)' : 'var(--text-muted)' }}>
          <Icon name={status === 'approved' ? 'check-circle' : 'x-circle'} size={18} duotone={false} />
          {status === 'approved' ? 'Approved' : 'Not done'}{decidedBy ? `, by ${decidedBy}` : ''}
        </p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          <Button variant="ink" onClick={onApprove} iconStart={<Icon name="check" size={16} duotone={false} strokeWidth={2.25} />}>{approveLabel}</Button>
          {onEdit && <Button variant="secondary" onClick={onEdit} iconStart={<Icon name="pencil" size={16} duotone={false} />}>{editLabel}</Button>}
          <Button variant="ghost" onClick={onReject}>{rejectLabel}</Button>
        </div>
      )}
    </section>
  );
}
