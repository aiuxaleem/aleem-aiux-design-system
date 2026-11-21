import React, { useState } from 'react';
import { Icon } from '../icons/Icon.jsx';

/**
 * Where this page sits: Home / Work / Case study. The last item is the current page (text,
 * not a link, aria-current). Long trails collapse the middle behind a "Show path" button.
 * Chevrons flip in RTL.
 */
export function Breadcrumb({ items = [], maxItems = 4, label = 'Breadcrumb', style, ...rest }) {
  const [all, setAll] = useState(false);
  const collapsed = !all && items.length > maxItems;
  const shown = collapsed ? [items[0], { ellipsis: true }, ...items.slice(-2)] : items;
  const linkStyle = { display: 'inline-flex', alignItems: 'center', minHeight: 32, paddingInline: 4, borderRadius: 'var(--radius-xs)', color: 'var(--text-link)', textDecoration: 'none', fontWeight: 'var(--weight-semibold)' };
  return (
    <nav aria-label={label} style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-ui-sm)', minWidth: 0, ...style }} {...rest}>
      <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 2 }}>
        {shown.map((it, i) => {
          const last = i === shown.length - 1;
          return (
            <li key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 2, minWidth: 0 }}>
              {it.ellipsis
                ? <button type="button" aria-label="Show full path" onClick={() => setAll(true)} style={{ ...linkStyle, minWidth: 32, justifyContent: 'center', border: 0, background: 'transparent', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit' }}>…</button>
                : last || !it.href
                  ? <span aria-current={last ? 'page' : undefined} style={{ paddingInline: 4, color: last ? 'var(--text-strong)' : 'var(--text-muted)', fontWeight: last ? 'var(--weight-semibold)' : undefined, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '32ch' }}>{it.label}</span>
                  : <a href={it.href} style={linkStyle}>{it.label}</a>}
              {!last && <Icon name="chevron-right" size={14} duotone={false} style={{ color: 'var(--text-subtle)', transform: 'scaleX(var(--dir, 1))' }} />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
