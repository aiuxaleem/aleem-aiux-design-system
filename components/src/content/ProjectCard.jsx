import React, { useState } from 'react';
import { Icon } from '../icons/Icon.jsx';

/** Placeholder cover until a real image exists: the brand's pill rows on ink (featured) or a soft tint. */
function CoverArt({ featured, seed = 0, hover }) {
  const rows = [[44, 22, 30], [26, 40, 18], [36, 18, 34], [20, 46, 24], [38, 28, 20]];
  const ink = featured;
  const tone = (i, j) => {
    const k = (i * 3 + j + seed) % 5;
    return ink ? ['var(--cyan-500)', 'var(--blue-500)', 'var(--navy-600)', 'var(--navy-500)', 'var(--cyan-300)'][k]
      : ['var(--blue-200)', 'var(--cyan-200)', 'var(--blue-300)', 'var(--surface-card)', 'var(--cyan-300)'][k];
  };
  return (
    <span aria-hidden="true" style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '7%', paddingInline: '8%', paddingInlineStart: '40%' }}>
      <span style={{ position: 'absolute', inset: 0, background: ink ? 'radial-gradient(55% 80% at 90% 0%, rgba(41,190,221,0.32), transparent 70%)' : 'radial-gradient(55% 80% at 90% 0%, rgba(37,138,253,0.16), transparent 70%)' }} />
      {rows.map((r, i) => (
        <span key={i} style={{ position: 'relative', display: 'flex', gap: '3%', height: featured ? '9%' : '8%', transform: hover ? `translateX(calc(${(i % 2 ? -6 : 6)}px * var(--dir, 1)))` : 'none', transition: 'transform var(--duration-slow) var(--ease-out)' }}>
          {r.map((w, j) => <span key={j} style={{ width: `${w}%`, borderRadius: 999, background: tone(i, j) }} />)}
        </span>
      ))}
    </span>
  );
}

/**
 * A case study in the portfolio grid: cover, context line, title, one-line outcome, the proof metric
 * and tags. The whole card is one link. `featured` spans two columns in a `.cory-bento` and uses the ink cover.
 */
export function ProjectCard({
  title, href, image, imageAlt = '', client, role, year, summary, metric, tags = [], featured = false, status,
  headingLevel = 3, style, ...rest
}) {
  const [hover, setHover] = useState(false);
  const H = `h${headingLevel}`;
  const meta = [client, role, year].filter(Boolean);
  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      className={featured ? 'span-2' : undefined}
      style={{
        display: 'flex', flexDirection: 'column', minWidth: 0, height: '100%', borderRadius: 'var(--radius-xl)', overflow: 'hidden', textDecoration: 'none', color: 'inherit',
        background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: hover ? 'translateY(var(--lift-hover, -3px))' : 'none',
        transition: 'transform var(--duration-slow) var(--ease-out), box-shadow var(--duration-slow) var(--ease-out)', ...style,
      }}
      {...rest}
    >
      <div style={{ position: 'relative', aspectRatio: featured ? 'var(--aspect-cover, 21 / 9)' : 'var(--aspect-video, 16 / 9)', background: featured ? 'var(--gradient-ink)' : 'var(--surface-sunken)', overflow: 'hidden' }}>
        {image
          ? <img src={image} alt={imageAlt} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transform: hover ? 'scale(1.03)' : 'none', transition: 'transform var(--duration-cinematic, 600ms) var(--ease-out)' }} />
          : <CoverArt featured={featured} seed={String(title || '').length} hover={hover} />}
        {status && <span style={{ position: 'absolute', insetBlockStart: 12, insetInlineStart: 12, padding: '4px 10px', borderRadius: 'var(--radius-pill)', background: 'rgba(6,18,31,0.72)', color: '#fff', fontSize: 'var(--text-micro)', fontWeight: 'var(--weight-semibold)', backdropFilter: 'blur(6px)' }}>{status}</span>}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: 'var(--space-5) var(--space-6) var(--space-6)', flex: 1 }}>
        {meta.length > 0 && <span style={{ fontSize: 'var(--text-caption)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-muted)' }}>{meta.join(' · ')}</span>}
        <H style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: featured ? 'var(--text-h2)' : 'var(--text-h3)', fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-tight)', lineHeight: 1.25, color: 'var(--text-strong)', textWrap: 'balance' }}>{title}</H>
        {summary && <p style={{ margin: 0, fontSize: 'var(--text-ui-sm)', lineHeight: 1.6, color: 'var(--text-body)', maxWidth: '60ch' }}>{summary}</p>}
        <div style={{ marginTop: 'auto', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12, paddingTop: 8 }}>
          {metric && (
            <span style={{ display: 'grid', gap: 2 }}>
              <span className="cory-metric cory-gradient-text" style={{ fontSize: featured ? 'var(--text-metric-md)' : 'var(--text-metric-sm)', lineHeight: 1 }}>{metric.value}</span>
              <span style={{ fontSize: 'var(--text-caption)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-muted)' }}>{metric.label}</span>
            </span>
          )}
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 'var(--text-ui-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-link)' }}>
            Read case study<Icon name="arrow-right" size={16} duotone={false} style={{ transform: hover ? 'translateX(calc(3px * var(--dir, 1)))' : 'none', transition: 'transform var(--duration-base) var(--ease-out)' }} />
          </span>
        </div>
        {tags.length > 0 && (
          <ul aria-label="Topics" style={{ listStyle: 'none', margin: 0, padding: '12px 0 0', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {tags.map((t) => <li key={t} style={{ padding: '3px 10px', borderRadius: 'var(--radius-pill)', background: 'var(--surface-sunken)', color: 'var(--text-muted)', fontSize: 'var(--text-micro)', fontWeight: 'var(--weight-semibold)' }}>{t}</li>)}
          </ul>
        )}
      </div>
    </a>
  );
}
