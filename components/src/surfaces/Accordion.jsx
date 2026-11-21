import React, { useState, useId } from 'react';
import { Icon } from '../icons/Icon.jsx';

/**
 * Questions and answers, process details, or long specs that most readers skip. Each header is a
 * real button (aria-expanded); Up/Down/Home/End move between headers. `multiple` lets several stay open.
 */
export function Accordion({ items = [], multiple = false, defaultOpen = [], variant = 'card', headingLevel = 3, onToggle, style, ...rest }) {
  const [open, setOpen] = useState(() => new Set([].concat(defaultOpen).map(String)));
  const base = (typeof useId === 'function' ? useId() : 'acc').replace(/:/g, '');
  const H = `h${headingLevel}`;
  const toggle = (id) => {
    setOpen((prev) => {
      const next = new Set(multiple ? prev : prev.has(id) ? [id] : []);
      next.has(id) ? next.delete(id) : next.add(id);
      onToggle && onToggle(id, next.has(id));
      return next;
    });
  };
  const keys = (e) => {
    const btns = Array.from(e.currentTarget.querySelectorAll('[data-acc-btn]'));
    const i = btns.indexOf(document.activeElement);
    if (i < 0) return;
    const go = { ArrowDown: i + 1, ArrowUp: i - 1, Home: 0, End: btns.length - 1 }[e.key];
    if (go === undefined) return;
    e.preventDefault();
    btns[(go + btns.length) % btns.length].focus();
  };
  const card = variant === 'card';
  return (
    <div onKeyDown={keys} style={{ display: 'grid', gap: card ? 10 : 0, fontFamily: 'var(--font-sans)', minWidth: 0, ...style }} {...rest}>
      {items.map((it, i) => {
        const id = it.id ?? String(i);
        const isOpen = open.has(id);
        const bid = `${base}-b-${i}`, pid = `${base}-p-${i}`;
        return (
          <div key={id} style={card
            ? { borderRadius: 'var(--radius-lg)', background: 'var(--surface-card)', border: `1px solid ${isOpen ? 'var(--border-default)' : 'var(--border-subtle)'}`, boxShadow: isOpen ? 'var(--shadow-sm)' : 'none', transition: 'box-shadow var(--duration-base) var(--ease-out)' }
            : { borderBottom: '1px solid var(--border-subtle)' }}>
            <H style={{ margin: 0 }}>
              <button
                type="button" id={bid} data-acc-btn aria-expanded={isOpen} aria-controls={pid} disabled={it.disabled}
                onClick={() => toggle(id)}
                style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 12, minHeight: 56, padding: card ? '14px 18px' : '14px 2px', border: 0, background: 'transparent', cursor: it.disabled ? 'not-allowed' : 'pointer', textAlign: 'start', color: 'var(--text-strong)', fontFamily: 'inherit', fontSize: 'var(--text-ui)', fontWeight: 'var(--weight-semibold)', lineHeight: 1.4, borderRadius: card ? 'var(--radius-lg)' : 0, opacity: it.disabled ? 'var(--opacity-disabled)' : 1 }}
              >
                <span style={{ flex: 1, minWidth: 0 }}>{it.title}</span>
                {it.meta && <span style={{ fontSize: 'var(--text-caption)', fontWeight: 'var(--weight-medium)', color: 'var(--text-muted)' }}>{it.meta}</span>}
                <span aria-hidden="true" style={{ display: 'inline-grid', placeItems: 'center', width: 28, height: 28, borderRadius: 'var(--radius-pill)', background: isOpen ? 'var(--surface-info)' : 'var(--surface-sunken)', color: isOpen ? 'var(--text-info)' : 'var(--text-muted)', transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform var(--duration-base) var(--ease-out), background var(--duration-base) var(--ease-out)' }}>
                  <Icon name="chevron-down" size={16} duotone={false} strokeWidth={2} />
                </span>
              </button>
            </H>
            <div id={pid} role="region" aria-labelledby={bid} hidden={!isOpen}
              style={{ padding: card ? '0 18px 18px' : '0 2px 18px', fontSize: 'var(--text-ui-sm)', lineHeight: 1.65, color: 'var(--text-body)', maxWidth: 'var(--measure-body)' }}>
              {it.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
