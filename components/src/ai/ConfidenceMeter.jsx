import React from 'react';

const LEVELS = {
  high: { pips: 5, word: 'High confidence', color: 'var(--text-success)', fill: 'var(--fill-success)' },
  medium: { pips: 3, word: 'Medium confidence', color: 'var(--text-info)', fill: 'var(--fill-info)' },
  low: { pips: 1, word: 'Low confidence', color: 'var(--text-warning)', fill: 'var(--fill-warning)' },
};

/** Map a 0 to 1 score onto a level. Thresholds are the system default; pass `level` to override. */
export function confidenceLevel(value) {
  if (value == null || Number.isNaN(+value)) return 'medium';
  return value >= 0.8 ? 'high' : value >= 0.5 ? 'medium' : 'low';
}

/**
 * How sure the AI is, shown as five pips plus words. Never colour alone: the count of filled pips
 * and the label carry the meaning. `value` (0 to 1) shows a percentage when `showValue` is set.
 */
export function ConfidenceMeter({ value, level, label, showValue = false, size = 'md', onInk = false, style, ...rest }) {
  const lv = LEVELS[level] ? level : confidenceLevel(value);
  const L = LEVELS[lv];
  const filled = value != null && !level ? Math.max(1, Math.round(value * 5)) : L.pips;
  const sm = size === 'sm';
  const words = label || L.word;
  const pct = value != null ? `${Math.round(value * 100)}%` : null;
  return (
    <span
      role="img"
      aria-label={pct ? `${words}, ${pct}` : words}
      style={{ display: 'inline-flex', alignItems: 'center', gap: sm ? 6 : 8, fontFamily: 'var(--font-sans)', fontSize: sm ? 'var(--text-micro)' : 'var(--text-caption)', fontWeight: 'var(--weight-semibold)', color: onInk ? 'var(--on-ink-strong)' : L.color, lineHeight: 1.2, ...style }}
      {...rest}
    >
      <span aria-hidden="true" style={{ display: 'inline-flex', alignItems: 'flex-end', gap: 2 }}>
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} style={{ width: sm ? 3 : 4, height: (sm ? 6 : 8) + i * (sm ? 1.5 : 2), borderRadius: 2, background: i < filled ? (onInk ? 'var(--on-ink-strong)' : L.fill) : (onInk ? 'var(--on-ink-border-strong)' : 'var(--border-strong)') }} />
        ))}
      </span>
      <span aria-hidden="true">{words}{showValue && pct ? <span className="cory-ltr" style={{ fontFamily: 'var(--font-mono)', fontWeight: 'var(--weight-medium)', marginInlineStart: 6, color: onInk ? 'var(--on-ink-body)' : 'var(--text-muted)' }}>{pct}</span> : null}</span>
    </span>
  );
}
