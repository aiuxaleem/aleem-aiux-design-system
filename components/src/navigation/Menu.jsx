import React, { useState, useRef, useEffect, useId } from 'react';
import { Icon } from '../icons/Icon.jsx';

/**
 * A dropdown of actions on one thing ("More": Edit, Duplicate, Delete). The trigger is a real
 * button; the list is role=menu with arrow keys, Home / End, type-ahead, Escape and outside
 * click to close, and focus returning to the trigger. Not for navigation (use links) and not
 * for choosing a value (use Select).
 */
export function Menu({ label = 'More', items = [], trigger, align = 'start', placement = 'bottom', onSelect, style, ...rest }) {
  const [open, setOpen] = useState(false);
  const root = useRef(null); const btn = useRef(null); const list = useRef(null);
  const id = (typeof useId === 'function' ? useId() : 'menu').replace(/:/g, '');
  const focusables = () => (list.current ? [...list.current.querySelectorAll('[role="menuitem"]:not([aria-disabled="true"])')] : []);
  const close = (refocus) => { setOpen(false); if (refocus && btn.current) btn.current.focus(); };
  useEffect(() => {
    if (!open) return;
    const f = focusables(); if (f[0]) f[0].focus();
    const out = (e) => { if (root.current && !root.current.contains(e.target)) close(false); };
    document.addEventListener('mousedown', out); return () => document.removeEventListener('mousedown', out);
  }, [open]);
  const onKey = (e) => {
    const f = focusables(); const i = f.indexOf(document.activeElement);
    if (e.key === 'Escape') { e.preventDefault(); close(true); }
    else if (e.key === 'ArrowDown') { e.preventDefault(); (f[i + 1] || f[0]).focus(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); (f[i - 1] || f[f.length - 1]).focus(); }
    else if (e.key === 'Home') { e.preventDefault(); f[0] && f[0].focus(); }
    else if (e.key === 'End') { e.preventDefault(); f[f.length - 1] && f[f.length - 1].focus(); }
    else if (e.key === 'Tab') { close(false); }
    else if (e.key.length === 1) { const m = f.find((el, k) => k > i && el.textContent.trim().toLowerCase().startsWith(e.key.toLowerCase())) || f.find((el) => el.textContent.trim().toLowerCase().startsWith(e.key.toLowerCase())); m && m.focus(); }
  };
  const pick = (it) => (e) => { if (it.disabled) { e.preventDefault(); return; } it.onSelect && it.onSelect(e); onSelect && onSelect(it, e); close(true); };
  return (
    <span ref={root} style={{ position: 'relative', display: 'inline-block', fontFamily: 'var(--font-sans)', ...style }} {...rest}>
      <button ref={btn} type="button" aria-haspopup="menu" aria-expanded={open} aria-controls={open ? `${id}-list` : undefined} onClick={() => setOpen(!open)}
        onKeyDown={(e) => { if (e.key === 'ArrowDown' && !open) { e.preventDefault(); setOpen(true); } }}
        className="cory-menu-btn"
        style={{ display: 'inline-flex', alignItems: 'center', gap: 6, minHeight: 44, padding: '0 16px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-interactive)', background: 'var(--surface-card)', color: 'var(--text-strong)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-ui-sm)', fontWeight: 'var(--weight-semibold)', cursor: 'pointer' }}>
        {trigger ?? <>{label}<Icon name="chevron-down" size={16} duotone={false} style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform var(--duration-base) var(--ease-out)' }} /></>}
      </button>
      {open && (
        <ul ref={list} id={`${id}-list`} role="menu" aria-label={typeof label === 'string' ? label : undefined} onKeyDown={onKey} className="cory-state-in"
          style={{ position: 'absolute', zIndex: 'var(--z-dropdown, 60)', [placement === 'top' ? 'bottom' : 'top']: 'calc(100% + 6px)', [align === 'end' ? 'insetInlineEnd' : 'insetInlineStart']: 0, minWidth: 200, maxWidth: 'min(320px, 90vw)', margin: 0, padding: 6, listStyle: 'none', borderRadius: 'var(--radius-lg)', background: 'var(--surface-card)', border: '1px solid var(--border-default)', boxShadow: 'var(--shadow-lg)' }}>
          {items.map((it, i) => it.separator
            ? <li key={i} role="separator" style={{ height: 1, margin: '6px 4px', background: 'var(--border-subtle)' }} />
            : (
              <li key={i} role="none">
                {React.createElement(it.href && !it.disabled ? 'a' : 'button', {
                  ...(it.href && !it.disabled ? { href: it.href } : { type: 'button' }),
                  role: 'menuitem', tabIndex: -1, 'aria-disabled': it.disabled || undefined, onClick: pick(it), className: 'cory-menu-item',
                  style: { display: 'flex', alignItems: 'center', gap: 10, width: '100%', minHeight: 40, padding: '0 10px', border: 0, borderRadius: 'var(--radius-sm)', background: 'transparent', textAlign: 'start', textDecoration: 'none', cursor: it.disabled ? 'not-allowed' : 'pointer', opacity: it.disabled ? 'var(--opacity-disabled)' : 1, color: it.danger ? 'var(--text-danger)' : 'var(--text-strong)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-ui-sm)', fontWeight: 'var(--weight-medium)' },
                }, it.icon && <Icon name={it.icon} size={18} />, <span style={{ flex: 1, minWidth: 0 }}>{it.label}</span>, it.hint && <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>{it.hint}</span>)}
              </li>
            ))}
        </ul>
      )}
    </span>
  );
}
