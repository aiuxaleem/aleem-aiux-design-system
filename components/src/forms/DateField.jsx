import React, { useState } from 'react';

/**
 * A date (or date and time). It wraps the browser's own date input, so the picker is the one
 * people already know on their device, works with the keyboard and screen readers, and
 * follows their locale. Matches Input: label, hint, error, success, required, disabled.
 * Values are ISO strings ("2026-11-21"); min and max limit the range.
 */
export function DateField({ label, hint, error, success, required = false, disabled = false, type = 'date', value, defaultValue = '', onChange, min, max, id, style, ...rest }) {
  const [inner, setInner] = useState(defaultValue);
  const [focus, setFocus] = useState(false);
  const v = value !== undefined ? value : inner;
  const fieldId = id || (label ? `date-${String(label).replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const msg = error || success || hint;
  const msgId = msg && fieldId ? `${fieldId}-msg` : undefined;
  const border = error ? 'var(--fill-danger)' : success ? 'var(--fill-success)' : focus ? 'var(--border-focus)' : 'var(--border-interactive)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, opacity: disabled ? 'var(--opacity-disabled)' : 1, fontFamily: 'var(--font-sans)', minWidth: 0, ...style }}>
      {label && <label htmlFor={fieldId} style={{ fontSize: 'var(--text-label)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-strong)' }}>{label}{required && <span aria-hidden="true" style={{ color: 'var(--text-danger)', marginInlineStart: 3 }}>*</span>}</label>}
      <input id={fieldId} type={type} value={v} min={min} max={max} required={required} disabled={disabled}
        aria-invalid={!!error || undefined} aria-describedby={msgId}
        onChange={(e) => { if (value === undefined) setInner(e.target.value); onChange && onChange(e.target.value, e); }}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} className="cory-date"
        style={{ width: '100%', boxSizing: 'border-box', minHeight: 46, padding: '10px 14px', fontSize: 'var(--text-ui)', fontFamily: 'var(--font-sans)', color: 'var(--text-strong)', background: 'var(--surface-card)', border: `1px solid ${border}`, borderRadius: 'var(--radius-md)', outline: 'none', boxShadow: focus ? 'var(--shadow-focus)' : 'none', cursor: disabled ? 'not-allowed' : undefined, transition: 'border-color var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)' }}
        {...rest} />
      {msg && <span id={msgId} role={error ? 'alert' : undefined} style={{ fontSize: 'var(--text-overline)', fontWeight: error ? 'var(--weight-medium)' : undefined, color: error ? 'var(--text-danger)' : success ? 'var(--text-success)' : 'var(--text-muted)' }}>{msg}</span>}
    </div>
  );
}
