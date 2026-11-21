import React from 'react';
import { Avatar } from '../core/Avatar.jsx';

/**
 * The bottom of a site: brand and one line about it, link columns, social links and the legal
 * line. Each column is its own labelled nav, so screen-reader users can jump between them.
 */
export function SiteFooter({ brand, tagline, columns = [], social = [], legal, children, style, ...rest }) {
  const a = { display: 'inline-flex', alignItems: 'center', minHeight: 32, color: 'var(--text-muted)', textDecoration: 'none', fontSize: 'var(--text-ui-sm)' };
  return (
    <footer style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--surface-card)', fontFamily: 'var(--font-sans)', ...style }} {...rest}>
      <div style={{ maxWidth: 'var(--container-max, 1200px)', marginInline: 'auto', padding: 'var(--space-10, 48px) var(--gutter, 20px) var(--space-6, 24px)', display: 'grid', gap: 32 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '28px 32px' }}>
          <div style={{ display: 'grid', gap: 12, alignContent: 'start', flex: '2 1 280px', minWidth: 0 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-ui-lg)', color: 'var(--text-strong)' }}>
              {brand ?? <><Avatar kind="aiux" size={36} /><span>Aleem</span></>}
            </span>
            {tagline && <p style={{ margin: 0, maxWidth: '36ch', fontSize: 'var(--text-ui-sm)', lineHeight: 1.55, color: 'var(--text-muted)' }}>{tagline}</p>}
            {children}
          </div>
          {columns.map((c) => (
            <nav key={c.title} aria-label={c.title} style={{ display: 'grid', gap: 6, alignContent: 'start', flex: '1 1 130px', minWidth: 0 }}>
              <h2 style={{ margin: '0 0 4px', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-caption)', fontWeight: 'var(--weight-bold)', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-strong)' }}>{c.title}</h2>
              {c.links.map((l) => <a key={l.label} href={l.href} className="cory-foot-link" style={a} {...(l.external ? { target: '_blank', rel: 'noreferrer' } : null)}>{l.label}</a>)}
            </nav>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '8px 24px', paddingTop: 20, borderTop: '1px solid var(--border-subtle)' }}>
          <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>{legal}</span>
          {social.length > 0 && (
            <nav aria-label="Social" style={{ display: 'flex', flexWrap: 'wrap', gap: '0 16px' }}>
              {social.map((l) => <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="cory-foot-link" style={{ ...a, minHeight: 44, fontWeight: 'var(--weight-semibold)' }}>{l.label}</a>)}
            </nav>
          )}
        </div>
      </div>
    </footer>
  );
}
