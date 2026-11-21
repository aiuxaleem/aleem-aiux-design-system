import React from 'react';
import { Icon } from '../icons/Icon.jsx';

function pages(page, count, siblings) {
  const set = new Set([1, count]);
  for (let p = page - siblings; p <= page + siblings; p++) if (p >= 1 && p <= count) set.add(p);
  const list = [...set].sort((a, b) => a - b); const out = [];
  list.forEach((p, i) => { if (i && p - list[i - 1] > 1) out.push(p - list[i - 1] === 2 ? p - 1 : '…'); out.push(p); });
  return out;
}

/**
 * Move through pages of a list. Previous and Next carry words, the current page is marked
 * with aria-current and a filled tile, and every target is 44px. `compact` shows
 * "Page 2 of 9" between the arrows, for phones and tight toolbars.
 */
export function Pagination({ page = 1, count = 1, onChange, siblings = 1, compact = false, label = 'Pagination', hrefFor, style, ...rest }) {
  const go = (p) => (e) => { if (p < 1 || p > count || p === page) { e.preventDefault(); return; } if (onChange) { if (!hrefFor) e.preventDefault(); onChange(p); } };
  const base = { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6, minWidth: 44, minHeight: 44, padding: '0 12px', borderRadius: 'var(--radius-pill)', border: '1px solid transparent', background: 'transparent', color: 'var(--text-strong)', textDecoration: 'none', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-ui-sm)', fontWeight: 'var(--weight-semibold)', cursor: 'pointer' };
  const item = (p, children, props = {}) => {
    const off = p < 1 || p > count;
    const Tag = hrefFor && !off ? 'a' : 'button';
    return <Tag {...(Tag === 'a' ? { href: hrefFor(p) } : { type: 'button', disabled: off })} onClick={go(p)} className="cory-page-btn" style={{ ...base, ...(off ? { opacity: 'var(--opacity-disabled)', cursor: 'not-allowed' } : null), ...props.style }} aria-current={props.current ? 'page' : undefined} aria-label={props.label}>{children}</Tag>;
  };
  const arrow = (dir) => <Icon name={dir === 'prev' ? 'chevron-left' : 'chevron-right'} size={16} duotone={false} style={{ transform: 'scaleX(var(--dir, 1))' }} />;
  return (
    <nav aria-label={label} style={{ minWidth: 0, ...style }} {...rest}>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 4 }}>
        <li>{item(page - 1, <>{arrow('prev')}<span>Previous</span></>, { style: { border: '1px solid var(--border-interactive)', background: 'var(--surface-card)' } })}</li>
        {compact
          ? <li aria-live="polite" style={{ paddingInline: 10, fontFamily: 'var(--font-sans)', fontSize: 'var(--text-ui-sm)', color: 'var(--text-muted)' }}>Page <b style={{ color: 'var(--text-strong)' }}>{page}</b> of {count}</li>
          : pages(page, count, siblings).map((p, i) => p === '…'
            ? <li key={`e${i}`} aria-hidden="true" style={{ minWidth: 28, textAlign: 'center', color: 'var(--text-subtle)' }}>…</li>
            : <li key={p}>{item(p, p, { current: p === page, label: p === page ? `Page ${p}, current page` : `Page ${p}`, style: p === page ? { background: 'var(--action-ink)', color: 'var(--surface-card)' } : null })}</li>)}
        <li>{item(page + 1, <><span>Next</span>{arrow('next')}</>, { style: { border: '1px solid var(--border-interactive)', background: 'var(--surface-card)' } })}</li>
      </ul>
    </nav>
  );
}
