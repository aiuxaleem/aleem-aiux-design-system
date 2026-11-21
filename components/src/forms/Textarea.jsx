import React, { useState, useRef, useEffect } from 'react';

/**
 * Multi-line text: messages, briefs, feedback. Matches Input (label, hint, error, success) and adds
 * auto-grow and a character count that appears near the limit, so people are never cut off by surprise.
 */
export function Textarea({
  label, hint, error, success, required = false, disabled = false, rows = 4, maxRows = 12, autoResize = true,
  maxLength, showCount = 'near', value, defaultValue = '', onChange, id, style, ...rest
}) {
  const [inner, setInner] = useState(defaultValue);
  const text = value !== undefined ? value : inner;
  const [focus, setFocus] = useState(false);
  const ref = useRef(null);
  const fieldId = id || (label ? `ta-${String(label).replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const msgId = fieldId ? `${fieldId}-msg` : undefined;
  const len = (text || '').length;
  const over = maxLength && len > maxLength;
  const showCounter = maxLength && (showCount === 'always' || (showCount === 'near' && len > maxLength * 0.8));
  useEffect(() => {
    const el = ref.current; if (!el || !autoResize) return;
    const lh = parseFloat(getComputedStyle(el).lineHeight) || 24;
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight + 2, lh * maxRows + 26) + 'px';
  }, [text, autoResize, maxRows]);
  const border = error || over ? 'var(--fill-danger)' : success ? 'var(--fill-success)' : focus ? 'var(--border-focus)' : 'var(--border-interactive)';
  const msg = error || success || hint;
  const msgColor = error ? 'var(--text-danger)' : success ? 'var(--text-success)' : 'var(--text-muted)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, opacity: disabled ? 'var(--opacity-disabled)' : 1, fontFamily: 'var(--font-sans)', minWidth: 0, ...style }}>
      {label && (
        <label htmlFor={fieldId} style={{ fontSize: 'var(--text-label)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-strong)' }}>
          {label}{required && <span aria-hidden="true" style={{ color: 'var(--text-danger)', marginInlineStart: 3 }}>*</span>}
        </label>
      )}
      <textarea
        ref={ref} id={fieldId} rows={rows} value={text} disabled={disabled} required={required}
        aria-invalid={!!error || over || undefined} aria-describedby={msg || showCounter ? msgId : undefined}
        onChange={(e) => { if (value === undefined) setInner(e.target.value); onChange && onChange(e.target.value, e); }}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          width: '100%', boxSizing: 'border-box', padding: '12px 14px', fontSize: 'var(--text-ui)', fontFamily: 'var(--font-sans)', lineHeight: 1.55,
          color: 'var(--text-strong)', background: 'var(--surface-card)', border: `1px solid ${border}`, borderRadius: 'var(--radius-md)',
          outline: 'none', resize: autoResize ? 'none' : 'vertical', cursor: disabled ? 'not-allowed' : undefined,
          boxShadow: focus ? 'var(--shadow-focus)' : 'none', transition: 'border-color var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)',
        }}
        {...rest}
      />
      {(msg || showCounter) && (
        <span id={msgId} style={{ display: 'flex', justifyContent: 'space-between', gap: 12, fontSize: 'var(--text-overline)' }}>
          <span role={error ? 'alert' : undefined} style={{ color: msgColor, fontWeight: error ? 'var(--weight-medium)' : undefined }}>{msg}</span>
          {showCounter && <span className="cory-ltr" role={over ? 'alert' : undefined} style={{ fontFamily: 'var(--font-mono)', color: over ? 'var(--text-danger)' : 'var(--text-muted)', whiteSpace: 'nowrap' }}>{len}/{maxLength}{over ? ', too long' : ''}</span>}
        </span>
      )}
    </div>
  );
}
