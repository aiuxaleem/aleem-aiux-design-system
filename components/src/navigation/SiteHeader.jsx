import React, { useState, useEffect, useId } from 'react';
import { Icon } from '../icons/Icon.jsx';
import { Avatar } from '../core/Avatar.jsx';

/**
 * The top bar of a site: brand, primary links, one action. On narrow screens the links fold
 * into a menu button (a disclosure: aria-expanded, Escape closes, focus returns). Includes a
 * "Skip to content" link that appears on keyboard focus. The current page is marked with
 * aria-current and a visible underline, never colour alone.
 */
export function SiteHeader({
  brand, brandHref = '/', links = [], action, tools, sticky = true, skipTo = '#main', menuLabel = 'Menu', label = 'Main', style, ...rest
}) {
  const [open, setOpen] = useState(false);
  const id = (typeof useId === 'function' ? useId() : 'nav').replace(/:/g, '');
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') { setOpen(false); const b = document.getElementById(`${id}-btn`); b && b.focus(); } };
    document.addEventListener('keydown', onKey); return () => document.removeEventListener('keydown', onKey);
  }, [open, id]);
  const link = (l, block) => (
    <a key={l.href + l.label} href={l.href} aria-current={l.current ? 'page' : undefined} className="cory-nav-link" onClick={() => setOpen(false)}
      style={{ display: block ? 'flex' : 'inline-flex', alignItems: 'center', minHeight: 44, padding: block ? '0 4px' : '0 12px', borderRadius: 'var(--radius-pill)', textDecoration: 'none', fontSize: 'var(--text-ui-sm)', fontWeight: l.current ? 'var(--weight-bold)' : 'var(--weight-semibold)', color: l.current ? 'var(--text-strong)' : 'var(--text-muted)' }}>
      <span style={{ paddingBlock: 4, borderBottom: `2px solid ${l.current ? 'var(--action-primary)' : 'transparent'}` }}>{l.label}</span>
    </a>
  );
  return (
    <header style={{ position: sticky ? 'sticky' : 'relative', top: 0, zIndex: 'var(--z-sticky, 20)', background: 'var(--surface-glass, var(--surface-card))', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', borderBottom: '1px solid var(--border-subtle)', fontFamily: 'var(--font-sans)', ...style }} {...rest}>
      {skipTo && <a href={skipTo} className="cory-skip-link">Skip to content</a>}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, minHeight: 64, paddingInline: 'var(--gutter, 20px)', maxWidth: 'var(--container-max, 1200px)', marginInline: 'auto' }}>
        <a href={brandHref} aria-label={typeof brand === 'string' ? brand : undefined} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, minHeight: 44, textDecoration: 'none', color: 'var(--text-strong)', fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-ui-lg)', letterSpacing: 'var(--tracking-tight)' }}>
          {brand ?? <><Avatar kind="aiux" size={36} /><span>Aleem</span></>}
        </a>
        <nav aria-label={label} className="cory-nav-links" style={{ marginInlineStart: 'auto', alignItems: 'center', gap: 2 }}>{links.map((l) => link(l, false))}</nav>
        <div className="cory-nav-end" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {tools}
          <span className="cory-nav-action">{action}</span>
          <button id={`${id}-btn`} type="button" className="cory-nav-toggle" aria-expanded={open} aria-controls={`${id}-panel`} onClick={() => setOpen(!open)}
            style={{ alignItems: 'center', gap: 8, minHeight: 44, padding: '0 14px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-interactive)', background: 'var(--surface-card)', color: 'var(--text-strong)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-ui-sm)', fontWeight: 'var(--weight-semibold)', cursor: 'pointer' }}>
            <Icon name={open ? 'close' : 'menu'} size={18} duotone={false} />{open ? 'Close' : menuLabel}
          </button>
        </div>
      </div>
      <div id={`${id}-panel`} hidden={!open} className="cory-nav-panel" style={{ borderTop: '1px solid var(--border-subtle)', padding: '8px var(--gutter, 20px) 16px', background: 'var(--surface-card)' }}>
        <nav aria-label={`${label}, menu`} style={{ display: 'grid' }}>{links.map((l) => link(l, true))}</nav>
        {action && <div style={{ marginTop: 10, display: 'grid' }}>{action}</div>}
      </div>
    </header>
  );
}
