import React, { useEffect, useState } from 'react';
import { Icon } from '../icons/Icon.jsx';

/**
 * Light / dark switch. Writes data-theme on <html>, persists to localStorage ('cory-theme'),
 * and defaults to the OS preference. Pair with the color tokens' dark block.
 */
export function ThemeToggle({ size = 'md', variant = 'secondary', storageKey = 'cory-theme', style, ...rest }) {
  const read = () => {
    if (typeof document === 'undefined') return 'light';
    const attr = document.documentElement.getAttribute('data-theme');
    if (attr) return attr;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };
  const [theme, setTheme] = useState(read);
  const [hover, setHover] = useState(false);
  useEffect(() => {
    try { const saved = localStorage.getItem(storageKey); if (saved && saved !== theme) { setTheme(saved); return; } } catch (e) {}
    document.documentElement.setAttribute('data-theme', theme);
  }, []);
  const apply = (next) => {
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem(storageKey, next); } catch (e) {}
  };
  useEffect(() => { document.documentElement.setAttribute('data-theme', theme); }, [theme]);
  const dark = theme === 'dark';
  const px = { sm: 36, md: 44, lg: 52 }[size] || 44;
  const looks = {
    secondary: { background: 'var(--surface-card)', color: 'var(--text-strong)', border: '1px solid var(--border-interactive)' },
    ghost: { background: hover ? 'var(--action-ghost-hover)' : 'transparent', color: 'var(--text-body)', border: '1px solid transparent' },
    onInk: { background: hover ? 'var(--on-ink-fill-hover)' : 'var(--on-ink-fill)', color: 'var(--on-ink-strong)', border: '1px solid var(--on-ink-border)' },
  };
  return (
    <button type="button" role="switch" aria-checked={dark} aria-label="Dark theme" title={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      onClick={() => apply(dark ? 'light' : 'dark')} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ position: 'relative', display: 'inline-grid', placeItems: 'center', width: px, height: px, borderRadius: 'var(--radius-pill)', cursor: 'pointer', padding: 0, overflow: 'hidden',
        transition: 'background var(--duration-base) var(--ease-out), transform var(--duration-fast) var(--ease-out)', transform: hover ? 'translateY(-1px)' : 'none', ...(looks[variant] || looks.secondary), ...style }} {...rest}>
      <span aria-hidden="true" style={{ position: 'absolute', display: 'grid', placeItems: 'center', color: 'currentColor', opacity: dark ? 0 : 1, transform: dark ? `rotate(-90deg) scale(0.6)` : 'none', transition: 'transform var(--duration-slow) var(--ease-spring), opacity var(--duration-base) var(--ease-out)' }}>
        <Icon name="sun" size={Math.round(px * 0.48)} />
      </span>
      <span aria-hidden="true" style={{ position: 'absolute', display: 'grid', placeItems: 'center', color: 'currentColor', opacity: dark ? 1 : 0, transform: dark ? 'none' : 'rotate(90deg) scale(0.6)', transition: 'transform var(--duration-slow) var(--ease-spring), opacity var(--duration-base) var(--ease-out)' }}>
        <Icon name="moon" size={Math.round(px * 0.46)} />
      </span>
    </button>
  );
}
