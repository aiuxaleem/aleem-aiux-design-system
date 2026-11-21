import React, { useState, useId } from 'react';

/**
 * One choice from a short list (2 to 5 options), all visible at once. Native radios inside a fieldset,
 * so arrow keys and screen readers work for free. `variant="card"` makes bigger option tiles with hints
 * (plans, engagement types); `default` is a compact list.
 */
export function RadioGroup({
  label, hint, error, options = [], value, defaultValue, onChange, name, variant = 'default', orientation = 'vertical',
  required = false, disabled = false, style, ...rest
}) {
  const [inner, setInner] = useState(defaultValue);
  const sel = value !== undefined ? value : inner;
  const [focusVal, setFocusVal] = useState(null);
  const auto = (typeof useId === 'function' ? useId() : 'rg').replace(/:/g, '');
  const groupName = name || `radio-${auto}`;
  const msg = error || hint;
  const msgId = msg ? `${groupName}-msg` : undefined;
  const card = variant === 'card';
  const pick = (v, e) => { if (value === undefined) setInner(v); onChange && onChange(v, e); };
  return (
    <fieldset aria-describedby={msgId} aria-invalid={!!error || undefined} disabled={disabled}
      style={{ margin: 0, padding: 0, border: 0, minWidth: 0, display: 'grid', gap: 10, fontFamily: 'var(--font-sans)', opacity: disabled ? 'var(--opacity-disabled)' : 1, ...style }} {...rest}>
      {label && <legend style={{ padding: 0, marginBottom: 10, fontSize: 'var(--text-label)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-strong)' }}>{label}{required && <span aria-hidden="true" style={{ color: 'var(--text-danger)', marginInlineStart: 3 }}>*</span>}</legend>}
      <div style={{ display: card ? 'grid' : 'flex', gridTemplateColumns: card ? 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))' : undefined, flexDirection: orientation === 'horizontal' ? 'row' : 'column', flexWrap: 'wrap', gap: card ? 12 : orientation === 'horizontal' ? '10px 24px' : 10 }}>
        {options.map((o) => {
          const on = sel === o.value;
          const id = `${groupName}-${String(o.value).replace(/\s+/g, '-')}`;
          const ring = focusVal === o.value ? 'var(--shadow-focus)' : 'none';
          const dot = (
            <span aria-hidden="true" style={{ position: 'relative', width: 20, height: 20, flexShrink: 0, marginTop: 1, borderRadius: '50%', border: `1px solid ${on ? 'var(--action-primary)' : error ? 'var(--fill-danger)' : 'var(--border-interactive)'}`, background: 'var(--surface-card)', boxShadow: ring, display: 'grid', placeItems: 'center', transition: 'border-color var(--duration-fast) var(--ease-out)' }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--action-primary)', transform: on ? 'scale(1)' : 'scale(0)', transition: 'transform var(--duration-fast) var(--ease-spring, ease-out)' }} />
            </span>
          );
          return (
            <label key={o.value} htmlFor={id}
              style={card
                ? { position: 'relative', display: 'flex', gap: 12, alignItems: 'flex-start', padding: '14px 16px', borderRadius: 'var(--radius-lg)', cursor: o.disabled ? 'not-allowed' : 'pointer', background: on ? 'var(--surface-info)' : 'var(--surface-card)', border: `1px solid ${on ? 'var(--action-primary)' : 'var(--border-default)'}`, boxShadow: on ? 'var(--shadow-sm)' : 'none', opacity: o.disabled ? 'var(--opacity-disabled)' : 1, transition: 'background var(--duration-base) var(--ease-out), border-color var(--duration-base) var(--ease-out)' }
                : { display: 'inline-flex', gap: 10, alignItems: 'flex-start', cursor: o.disabled ? 'not-allowed' : 'pointer', minHeight: 24, opacity: o.disabled ? 'var(--opacity-disabled)' : 1 }}>
              <input id={id} type="radio" name={groupName} value={o.value} checked={on} disabled={o.disabled} required={required}
                onChange={(e) => pick(o.value, e)}
                onFocus={(e) => setFocusVal(e.currentTarget.matches(':focus-visible') ? o.value : null)} onBlur={() => setFocusVal(null)}
                style={{ position: 'absolute', opacity: 0, width: 1, height: 1, margin: 0 }} />
              {dot}
              <span style={{ display: 'grid', gap: 2, minWidth: 0 }}>
                <span style={{ fontSize: 'var(--text-ui-sm)', fontWeight: card ? 'var(--weight-semibold)' : 'var(--weight-medium)', color: 'var(--text-strong)', lineHeight: 1.4 }}>{o.label}</span>
                {o.hint && <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)', lineHeight: 1.45 }}>{o.hint}</span>}
              </span>
              {card && o.meta && <span style={{ marginInlineStart: 'auto', fontSize: 'var(--text-caption)', fontWeight: 'var(--weight-bold)', color: on ? 'var(--text-info)' : 'var(--text-muted)', whiteSpace: 'nowrap' }}>{o.meta}</span>}
            </label>
          );
        })}
      </div>
      {msg && <span id={msgId} role={error ? 'alert' : undefined} style={{ fontSize: 'var(--text-overline)', fontWeight: error ? 'var(--weight-medium)' : undefined, color: error ? 'var(--text-danger)' : 'var(--text-muted)' }}>{msg}</span>}
    </fieldset>
  );
}
