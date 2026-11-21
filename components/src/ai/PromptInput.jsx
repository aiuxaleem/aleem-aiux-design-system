import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '../icons/Icon.jsx';

/**
 * The composer for talking to an AI. Grows with the text, sends on Enter (Shift+Enter for a new line),
 * offers starter suggestions, counts characters near the limit, and turns into Stop while the AI answers.
 */
export function PromptInput({
  value, defaultValue = '', onChange, onSubmit, onStop, busy = false, disabled = false,
  placeholder = 'Ask anything about my work', label = 'Message', suggestions = [], maxLength, hint = 'Enter to send, Shift + Enter for a new line',
  id = 'prompt-input', style, ...rest
}) {
  const [inner, setInner] = useState(defaultValue);
  const [focus, setFocus] = useState(false);
  const text = value !== undefined ? value : inner;
  const ref = useRef(null);
  const set = (v) => { if (value === undefined) setInner(v); onChange && onChange(v); };
  useEffect(() => { const el = ref.current; if (!el) return; el.style.height = 'auto'; el.style.height = Math.min(el.scrollHeight, 200) + 'px'; }, [text]);
  const canSend = !busy && !disabled && text.trim().length > 0 && (!maxLength || text.length <= maxLength);
  const send = () => { if (!canSend) return; onSubmit && onSubmit(text.trim()); if (value === undefined) setInner(''); };
  const near = maxLength && text.length > maxLength * 0.8;
  const over = maxLength && text.length > maxLength;
  return (
    <div style={{ display: 'grid', gap: 10, fontFamily: 'var(--font-sans)', minWidth: 0, ...style }} {...rest}>
      {suggestions.length > 0 && !text && (
        <div role="list" aria-label="Suggestions" style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {suggestions.map((s) => (
            <button key={s} type="button" role="listitem" disabled={busy || disabled} onClick={() => { set(s); ref.current && ref.current.focus(); }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, minHeight: 36, padding: '6px 14px', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-default)', background: 'var(--surface-card)', color: 'var(--text-body)', fontFamily: 'inherit', fontSize: 'var(--text-caption)', fontWeight: 'var(--weight-medium)', cursor: 'pointer' }}>
              <Icon name="sparkles" size={14} duotone={false} style={{ color: 'var(--text-info)' }} />{s}
            </button>
          ))}
        </div>
      )}
      <div
        style={{ display: 'flex', alignItems: 'flex-end', gap: 8, padding: 8, paddingInlineStart: 16, borderRadius: 'var(--radius-xl)', background: 'var(--surface-card)', border: `1px solid ${over ? 'var(--fill-danger)' : focus ? 'var(--border-focus)' : 'var(--border-interactive)'}`, boxShadow: focus ? 'var(--shadow-focus)' : 'var(--shadow-sm)', opacity: disabled ? 'var(--opacity-disabled)' : 1, transition: 'border-color var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)' }}
      >
        <label htmlFor={id} className="cory-visually-hidden">{label}</label>
        <textarea
          ref={ref} id={id} rows={1} value={text} disabled={disabled} placeholder={placeholder}
          aria-describedby={`${id}-hint`} aria-invalid={over || undefined}
          onChange={(e) => set(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) { e.preventDefault(); send(); } }}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{ flex: 1, minWidth: 0, minHeight: 28, maxHeight: 200, resize: 'none', border: 0, outline: 'none', background: 'transparent', padding: '8px 0', fontFamily: 'inherit', fontSize: 'var(--text-md)', lineHeight: 1.5, color: 'var(--text-strong)' }}
        />
        {busy ? (
          <button type="button" onClick={onStop} aria-label="Stop generating"
            style={{ flexShrink: 0, display: 'grid', placeItems: 'center', width: 44, height: 44, borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-interactive)', background: 'var(--surface-card)', color: 'var(--text-strong)', cursor: 'pointer' }}>
            <span style={{ width: 12, height: 12, borderRadius: 3, background: 'currentColor' }} />
          </button>
        ) : (
          <button type="button" onClick={send} disabled={!canSend} aria-label="Send"
            style={{ flexShrink: 0, display: 'grid', placeItems: 'center', width: 44, height: 44, borderRadius: 'var(--radius-pill)', border: 0, background: canSend ? 'var(--gradient-brand-deep)' : 'var(--surface-sunken)', color: canSend ? '#fff' : 'var(--text-disabled)', cursor: canSend ? 'pointer' : 'not-allowed', boxShadow: canSend ? 'var(--shadow-brand)' : 'none', transition: 'background var(--duration-base) var(--ease-out)' }}>
            <Icon name="arrow-up" size={20} duotone={false} strokeWidth={2.25} />
          </button>
        )}
      </div>
      <div id={`${id}-hint`} style={{ display: 'flex', justifyContent: 'space-between', gap: 12, paddingInline: 8, fontSize: 'var(--text-micro)', color: 'var(--text-subtle)' }}>
        <span>{busy ? 'Answering. You can stop at any time.' : hint}</span>
        {near && <span className="cory-ltr" role={over ? 'alert' : undefined} style={{ fontFamily: 'var(--font-mono)', color: over ? 'var(--text-danger)' : 'var(--text-muted)' }}>{text.length}/{maxLength}</span>}
      </div>
    </div>
  );
}
