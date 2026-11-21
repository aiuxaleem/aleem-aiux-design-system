import React, { useState } from 'react';
import { Icon } from '../icons/Icon.jsx';
import { ConfidenceMeter } from './ConfidenceMeter.jsx';

const ACT = {
  display: 'inline-flex', alignItems: 'center', gap: 6, minHeight: 32, padding: '0 10px', borderRadius: 'var(--radius-pill)',
  border: '1px solid transparent', color: 'var(--text-muted)', fontFamily: 'var(--font-sans)',
  fontSize: 'var(--text-caption)', fontWeight: 'var(--weight-semibold)', cursor: 'pointer',
};

/** Inline citation marker: a numbered pill that links to its source. Use inside AIResponse text. */
export function Citation({ n, href, title, style, ...rest }) {
  const Tag = href ? 'a' : 'span';
  return (
    <Tag href={href} target={href ? '_blank' : undefined} rel={href ? 'noreferrer' : undefined} title={title}
      aria-label={`Source ${n}${title ? `: ${title}` : ''}`}
      className="cory-ltr"
      style={{ display: 'inline-grid', placeItems: 'center', minWidth: 18, height: 18, padding: '0 5px', marginInline: 2, verticalAlign: '0.15em', borderRadius: 'var(--radius-pill)', background: 'var(--surface-info)', border: '1px solid var(--border-info)', color: 'var(--text-info)', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 'var(--weight-semibold)', lineHeight: 1, textDecoration: 'none', ...style }}
      {...rest}>{n}</Tag>
  );
}

/** Numbered list of the sources an answer used. Each opens in a new tab. */
export function SourceList({ sources = [], title = 'Sources', style, ...rest }) {
  if (!sources.length) return null;
  return (
    <div style={{ display: 'grid', gap: 8, ...style }} {...rest}>
      <span className="cory-overline" style={{ fontSize: 'var(--text-micro)' }}>{title}</span>
      <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 200px), 1fr))', gap: 8 }}>
        {sources.map((s, i) => (
          <li key={i} style={{ minWidth: 0 }}>
            <a href={s.url} target="_blank" rel="noreferrer"
              style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '10px 12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', background: 'var(--surface-sunken)', color: 'inherit', textDecoration: 'none', minHeight: 44 }}>
              <span className="cory-ltr" style={{ flexShrink: 0, display: 'inline-grid', placeItems: 'center', width: 20, height: 20, borderRadius: 'var(--radius-pill)', background: 'var(--surface-info)', color: 'var(--text-info)', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 'var(--weight-semibold)' }}>{i + 1}</span>
              <span style={{ minWidth: 0, display: 'grid', gap: 2 }}>
                <span style={{ fontSize: 'var(--text-caption)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-strong)', lineHeight: 1.35 }}>{s.title}</span>
                {s.domain && <span className="cory-ltr" style={{ fontSize: 'var(--text-micro)', color: 'var(--text-subtle)' }}>{s.domain}</span>}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}

/**
 * One AI answer, built to earn trust: an "AI" label, a confidence read-out, the answer with inline
 * citations, the sources, and feedback actions. `status`: streaming (caret + Stop), done, error (with Retry).
 */
export function AIResponse({
  children, label = 'AI answer', model, confidence, confidenceLevel, sources = [], status = 'done',
  onStop, onRetry, onCopy, onRegenerate, onFeedback, feedback: feedbackProp, disclaimer = 'AI can make mistakes. Check the sources before you act on this.',
  errorMessage = "I couldn't finish this answer.", style, ...rest
}) {
  const [inner, setInner] = useState(null);
  const [copied, setCopied] = useState(false);
  const feedback = feedbackProp !== undefined ? feedbackProp : inner;
  const vote = (v) => { const next = feedback === v ? null : v; if (feedbackProp === undefined) setInner(next); onFeedback && onFeedback(next); };
  const copy = () => { onCopy && onCopy(); setCopied(true); setTimeout(() => setCopied(false), 1600); };
  const streaming = status === 'streaming', failed = status === 'error';
  return (
    <article
      aria-busy={streaming || undefined}
      style={{ display: 'grid', gap: 14, padding: 'var(--space-5)', borderRadius: 'var(--radius-xl)', background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)', fontFamily: 'var(--font-sans)', color: 'var(--text-body)', minWidth: 0, ...style }}
      {...rest}
    >
      <header style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <span aria-hidden="true" style={{ display: 'inline-grid', placeItems: 'center', width: 26, height: 26, borderRadius: 8, background: 'var(--gradient-brand-deep)', color: '#fff' }}><Icon name="sparkles" size={15} duotone={false} strokeWidth={2} /></span>
          <span style={{ fontSize: 'var(--text-caption)', fontWeight: 'var(--weight-bold)', color: 'var(--text-strong)' }}>{label}</span>
          {model && <span style={{ fontSize: 'var(--text-micro)', color: 'var(--text-subtle)' }}>{model}</span>}
        </span>
        {(confidence != null || confidenceLevel) && !failed && <ConfidenceMeter value={confidence} level={confidenceLevel} size="sm" showValue={confidence != null} />}
      </header>

      {failed ? (
        <div role="alert" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 10, color: 'var(--text-danger)', fontSize: 'var(--text-ui-sm)', fontWeight: 'var(--weight-medium)' }}>
          <Icon name="alert" size={18} duotone={false} />{errorMessage}
          {onRetry && <button type="button" className="cory-ai-act" onClick={onRetry} style={{ ...ACT, color: 'var(--text-link)', border: '1px solid var(--border-default)' }}><Icon name="refresh" size={14} duotone={false} />Try again</button>}
        </div>
      ) : (
        <div aria-live={streaming ? 'polite' : undefined} style={{ fontSize: 'var(--text-ui)', lineHeight: 1.65, color: 'var(--text-body)', maxWidth: 'var(--measure-body)' }}>
          {children}
          {streaming && <span aria-hidden="true" className="cory-caret" style={{ display: 'inline-block', width: 8, height: '1.1em', marginInlineStart: 2, verticalAlign: '-0.15em', borderRadius: 2, background: 'var(--action-primary)', animation: 'cory-blink 1s steps(2, start) infinite' }} />}
        </div>
      )}

      {!failed && !streaming && <SourceList sources={sources} />}

      {!failed && <footer style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 8, paddingTop: 10, borderTop: '1px solid var(--border-subtle)' }}>
        {streaming ? (
          <button type="button" className="cory-ai-act" onClick={onStop} style={{ ...ACT, border: '1px solid var(--border-interactive)', color: 'var(--text-strong)' }}><Icon name="pause" size={14} duotone={false} />Stop generating</button>
        ) : (
          <span style={{ display: 'inline-flex', flexWrap: 'wrap', gap: 2 }}>
            <button type="button" className="cory-ai-act" onClick={copy} style={ACT} aria-live="polite"><Icon name={copied ? 'check' : 'copy'} size={15} duotone={false} />{copied ? 'Copied' : 'Copy'}</button>
            <button type="button" className="cory-ai-act" onClick={() => vote('up')} aria-pressed={feedback === 'up'} style={{ ...ACT, ...(feedback === 'up' ? { background: 'var(--surface-success)', color: 'var(--text-success)' } : null) }}><Icon name="thumbs-up" size={15} duotone={feedback === 'up'} />Helpful</button>
            <button type="button" className="cory-ai-act" onClick={() => vote('down')} aria-pressed={feedback === 'down'} style={{ ...ACT, ...(feedback === 'down' ? { background: 'var(--surface-warning)', color: 'var(--text-warning)' } : null) }}><Icon name="thumbs-up" size={15} duotone={feedback === 'down'} style={{ transform: 'scaleY(-1)' }} />Not helpful</button>
            {onRegenerate && <button type="button" className="cory-ai-act" onClick={onRegenerate} style={ACT}><Icon name="refresh" size={15} duotone={false} />Regenerate</button>}
          </span>
        )}
        {disclaimer && <span style={{ fontSize: 'var(--text-micro)', color: 'var(--text-subtle)', lineHeight: 1.4 }}>{disclaimer}</span>}
      </footer>}
    </article>
  );
}
