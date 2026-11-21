import React from 'react';

/**
 * Experience or milestones, newest first. Each item: period, title, org, optional place, summary and
 * highlights. `current` marks the present role with the signal dot and a "Now" label (words, not colour alone).
 */
export function Timeline({ items = [], headingLevel = 3, style, ...rest }) {
  const H = `h${headingLevel}`;
  return (
    <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', fontFamily: 'var(--font-sans)', minWidth: 0, ...style }} {...rest}>
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <li key={i} className="cory-tl" style={{ display: 'grid', gridTemplateColumns: 'minmax(84px, 128px) 20px minmax(0, 1fr)', columnGap: 16 }}>
            <span className="cory-ltr cory-tl-period" style={{ paddingTop: 2, fontFamily: 'var(--font-mono)', fontSize: 'var(--text-caption)', fontWeight: 'var(--weight-medium)', color: 'var(--text-muted)', lineHeight: 1.5, textAlign: 'end' }}>{it.period}</span>
            <span aria-hidden="true" className="cory-tl-rail" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ width: 14, height: 14, marginTop: 4, borderRadius: '50%', flexShrink: 0, background: it.current ? 'var(--gradient-brand-deep)' : 'var(--surface-card)', boxShadow: it.current ? '0 0 0 4px var(--surface-info)' : 'inset 0 0 0 2px var(--border-strong)' }} />
              {!last && <span style={{ flex: 1, width: 2, marginBlock: 6, borderRadius: 1, background: 'var(--border-default)' }} />}
            </span>
            <div className="cory-tl-body" style={{ paddingBottom: last ? 0 : 'var(--space-8)', minWidth: 0, display: 'grid', gap: 6 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4px 10px' }}>
                <H style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--text-h4)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-tight)', lineHeight: 1.3, color: 'var(--text-strong)' }}>{it.title}</H>
                {it.current && <span style={{ padding: '2px 8px', borderRadius: 'var(--radius-pill)', background: 'var(--surface-info)', color: 'var(--text-info)', fontSize: 'var(--text-micro)', fontWeight: 'var(--weight-bold)' }}>Now</span>}
              </div>
              {(it.org || it.place) && <span style={{ fontSize: 'var(--text-ui-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-body)' }}>{[it.org, it.place].filter(Boolean).join(' · ')}</span>}
              {it.summary && <p style={{ margin: 0, fontSize: 'var(--text-ui-sm)', lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: '62ch' }}>{it.summary}</p>}
              {it.highlights && it.highlights.length > 0 && (
                <ul style={{ margin: '4px 0 0', paddingInlineStart: 18, display: 'grid', gap: 4, fontSize: 'var(--text-caption)', lineHeight: 1.55, color: 'var(--text-body)' }}>
                  {it.highlights.map((h, k) => <li key={k}>{h}</li>)}
                </ul>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
