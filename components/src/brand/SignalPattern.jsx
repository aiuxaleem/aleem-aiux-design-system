import React from 'react';

/**
 * The brand's signature graphic: rows of pills, like tokens in a design system or words in an
 * AI answer. A "signal" travels through them, one pill lighting at a time (the same blue to
 * cyan as the I in the logo), then they rest. Purely decorative (aria-hidden). `seed` gives a
 * different, repeatable arrangement; `tone` is ink (on navy), light or brand. Still under
 * reduced motion, or with animate={false}.
 */
export function SignalPattern({ rows = 5, seed = 1, tone = 'ink', animate = true, density = 3, height, align = 'start', style, ...rest }) {
  let s = (seed * 9301 + 49297) % 233280;
  const rnd = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  const palette = {
    ink: ['var(--navy-600)', 'var(--navy-500)', 'var(--blue-500)', 'var(--cyan-500)', 'var(--cyan-300)'],
    light: ['var(--blue-200)', 'var(--cyan-200)', 'var(--blue-300)', 'var(--surface-sunken)', 'var(--cyan-300)'],
    brand: ['rgba(255,255,255,0.28)', 'rgba(255,255,255,0.5)', 'rgba(255,255,255,0.9)', 'rgba(255,255,255,0.38)', 'rgba(255,255,255,0.7)'],
  }[tone] || [];
  let k = 0;
  return (
    <span aria-hidden="true" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '9%', height: height ?? '100%', minHeight: 80, width: '100%', ...style }} {...rest}>
      {Array.from({ length: rows }).map((_, r) => {
        const n = Math.max(2, Math.round(density - 0.5 + rnd()));
        const ws = Array.from({ length: n }).map(() => 14 + rnd() * 30);
        const total = ws.reduce((a, b) => a + b, 0); const scale = (62 + rnd() * 34) / total;
        return (
          <span key={r} style={{ display: 'flex', gap: '3%', height: `${Math.min(13, 62 / rows)}%`, minHeight: 8, justifyContent: align === 'end' ? 'flex-end' : 'flex-start' }}>
            {ws.map((w, i) => {
              const c = palette[Math.floor(rnd() * palette.length)];
              const delay = (k++ * 0.28).toFixed(2);
              return <span key={i} className={animate ? 'cory-signal-pill' : undefined} style={{ width: `${w * scale}%`, borderRadius: 999, background: c, animationDelay: `${delay}s` }} />;
            })}
          </span>
        );
      })}
    </span>
  );
}
