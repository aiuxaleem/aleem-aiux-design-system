import React from 'react';
import { SignalPattern } from './SignalPattern.jsx';

/**
 * The opening of a page: one idea, one gradient moment, one primary action. `highlight` is the
 * part of the title that takes the brand gradient (one phrase only). `art` fills the second
 * column (default: the SignalPattern on an ink panel with an off-edge glow); pass a live
 * component there, such as an AIResponse, to make the hero prove the point. `proof` is a row of
 * up to three real numbers. Stacks to one column on phones, with the art after the actions.
 */
export function Hero({ eyebrow, title, highlight, children, actions, art, proof = [], layout = 'split', headingLevel = 1, style, ...rest }) {
  const H = `h${headingLevel}`;
  let head = title;
  if (typeof title === 'string' && highlight && title.includes(highlight)) {
    const [a, b] = title.split(highlight);
    head = <>{a}<span className="cory-gradient-text" style={{ display: 'inline-block' }}>{highlight}</span>{b}</>;
  }
  const center = layout === 'center';
  return (
    <section style={{ display: 'grid', gridTemplateColumns: center ? 'minmax(0, 1fr)' : 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', alignItems: 'center', gap: 'clamp(24px, 5vw, 56px)', fontFamily: 'var(--font-sans)', minWidth: 0, ...style }} {...rest}>
      <div style={{ display: 'grid', gap: 'clamp(14px, 2vw, 20px)', justifyItems: center ? 'center' : 'start', textAlign: center ? 'center' : 'start', minWidth: 0 }}>
        {eyebrow && <span className="cory-eyebrow-pill">{eyebrow}</span>}
        <H style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'clamp(2.1rem, 1.2rem + 4.2vw, 4rem)', lineHeight: 1.04, letterSpacing: '-0.03em', fontWeight: 'var(--weight-extrabold, 800)', color: 'var(--text-strong)', textWrap: 'balance', overflowWrap: 'break-word', maxWidth: '16ch' }}>{head}</H>
        {children && <p style={{ margin: 0, fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.2rem)', lineHeight: 1.6, color: 'var(--text-body)', maxWidth: '46ch' }}>{children}</p>}
        {actions && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: center ? 'center' : 'flex-start', marginTop: 4 }}>{actions}</div>}
        {proof.length > 0 && (
          <dl style={{ display: 'flex', flexWrap: 'wrap', gap: '14px clamp(20px, 4vw, 40px)', margin: '10px 0 0', paddingTop: 18, borderTop: '1px solid var(--border-subtle)', width: '100%', justifyContent: center ? 'center' : 'flex-start' }}>
            {proof.slice(0, 3).map((p) => (
              <div key={p.label} style={{ display: 'grid', gap: 2 }}>
                <dd className="cory-metric" style={{ margin: 0, fontSize: 'clamp(1.6rem, 1.2rem + 1.6vw, 2.25rem)', lineHeight: 1, color: 'var(--text-strong)' }}>{p.value}</dd>
                <dt style={{ fontSize: 'var(--text-caption)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-muted)' }}>{p.label}</dt>
              </div>
            ))}
          </dl>
        )}
      </div>
      {!center && (
        <div style={{ minWidth: 0 }}>
          {art ?? (
            <div className="cory-ink" style={{ position: 'relative', aspectRatio: '4 / 3', padding: '10% 10% 10% 14%' }}>
              <span aria-hidden="true" style={{ position: 'absolute', width: '70%', aspectRatio: '1', insetInlineEnd: '-22%', top: '-34%', background: 'var(--glow-cyan)', filter: 'blur(40px)', zIndex: -1 }} />
              <SignalPattern tone="ink" rows={6} seed={7} />
            </div>
          )}
        </div>
      )}
    </section>
  );
}
