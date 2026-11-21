import React from 'react';

/*
 * Skeleton loading, in two layers:
 *  - Skeleton: the primitive bone (text lines, circle, rect, pill).
 *  - SkeletonPreset: ready-made skeletons that match the real components' geometry,
 *    so nothing jumps when content arrives.
 * Bones are drawn by the .cory-skel class in bundle.css: one wave that travels across the
 * whole page in step (background-attachment: fixed), a calm pulse, or none. Under
 * prefers-reduced-motion every bone is a still, solid tint. Bones are aria-hidden: the
 * loading region (LoadingRegion or StateView) carries aria-busy and the spoken label.
 */

const TEXT_H = { caption: '0.7em', body: '0.9em', title: '1.25em', heading: '1.7em', metric: '2.6em' };
const RAGGED = ['100%', '94%', '97%', '88%', '92%'];

export function Skeleton({
  variant = 'text', width, height, lines = 1, lineWidths, size = 'body', radius, animation = 'wave', onInk = false,
  gap = '0.6em', className, style, ...rest
}) {
  const data = { 'data-anim': animation === 'wave' ? undefined : animation, 'data-ink': onInk ? '' : undefined };
  const cls = ['cory-skel', className].filter(Boolean).join(' ');
  if (variant === 'text') {
    const n = Math.max(1, lines);
    const h = height ?? TEXT_H[size] ?? TEXT_H.body;
    return (
      <span aria-hidden="true" style={{ display: 'flex', flexDirection: 'column', gap, width: width ?? '100%', minWidth: 0, ...style }} {...rest}>
        {Array.from({ length: n }).map((_, i) => {
          const w = lineWidths ? lineWidths[i % lineWidths.length] : n > 1 && i === n - 1 ? '62%' : n > 1 ? RAGGED[i % RAGGED.length] : '100%';
          return <span key={i} className={cls} {...data} style={{ display: 'block', height: h, width: w, borderRadius: radius ?? 'var(--radius-xs)' }} />;
        })}
      </span>
    );
  }
  const circle = variant === 'circle';
  const d = circle ? (width ?? height ?? 40) : null;
  const r = radius ?? (circle || variant === 'pill' ? 'var(--radius-pill)' : 'var(--radius-md)');
  return (
    <span aria-hidden="true" className={cls} {...data}
      style={{ display: 'block', flexShrink: 0, width: d ?? width ?? '100%', height: d ?? height ?? (variant === 'pill' ? 28 : 120), borderRadius: r, ...style }} {...rest} />
  );
}

const S = (p) => <Skeleton {...p} />;
const row = (gap = 12, extra) => ({ display: 'flex', alignItems: 'center', gap, minWidth: 0, ...extra });
const cardFrame = (onInk, extra) => ({
  display: 'flex', flexDirection: 'column', minWidth: 0, borderRadius: 'var(--radius-xl)', overflow: 'hidden',
  background: onInk ? 'transparent' : 'var(--surface-card)', border: `1px solid ${onInk ? 'var(--on-ink-border)' : 'var(--border-subtle)'}`,
  boxShadow: onInk ? 'none' : 'var(--shadow-sm)', ...extra,
});

function ProjectCardBones({ featured, a, onInk }) {
  return (
    <div className={featured ? 'span-2' : undefined} style={cardFrame(onInk)}>
      <S variant="rect" animation={a} onInk={onInk} radius="0" height="auto" style={{ aspectRatio: featured ? '21 / 9' : '16 / 9' }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 'var(--space-5) var(--space-6) var(--space-6)' }}>
        <S width="46%" size="caption" animation={a} onInk={onInk} />
        <S lines={featured ? 1 : 2} size="title" lineWidths={featured ? ['72%'] : ['92%', '58%']} animation={a} onInk={onInk} />
        <S lines={2} animation={a} onInk={onInk} />
        <div style={row(12, { justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: 8 })}>
          <span style={{ display: 'grid', gap: 6, width: '30%' }}><S size="metric" width="60%" animation={a} onInk={onInk} /><S size="caption" animation={a} onInk={onInk} /></span>
          <S width="28%" animation={a} onInk={onInk} />
        </div>
        <div style={row(6, { paddingTop: 12, borderTop: `1px solid ${onInk ? 'var(--on-ink-border)' : 'var(--border-subtle)'}` })}>
          {[64, 52, 72].map((w, i) => <S key={i} variant="pill" width={w} height={22} animation={a} onInk={onInk} />)}
        </div>
      </div>
    </div>
  );
}

const PRESETS = {
  'project-card': ({ i, a, onInk, featured }) => <ProjectCardBones featured={featured && i === 0} a={a} onInk={onInk} />,
  'feature-card': ({ a, onInk }) => (
    <div style={{ ...cardFrame(onInk), gap: 14, padding: 'var(--space-6)' }}>
      <S variant="rect" width={48} height={48} radius="var(--radius-md)" animation={a} onInk={onInk} />
      <S size="title" width="64%" animation={a} onInk={onInk} />
      <S lines={3} animation={a} onInk={onInk} />
    </div>
  ),
  stat: ({ a, onInk }) => (
    <div style={{ display: 'grid', gap: 8, minWidth: 0 }}>
      <S size="metric" width="56%" animation={a} onInk={onInk} />
      <S width="78%" animation={a} onInk={onInk} />
      <S size="caption" width="52%" animation={a} onInk={onInk} />
    </div>
  ),
  'ai-answer': ({ a, onInk }) => (
    <div style={{ ...cardFrame(onInk), gap: 14, padding: 'var(--space-5)' }}>
      <div style={row(8, { justifyContent: 'space-between' })}>
        <span style={row(8, { flex: 1 })}><S variant="rect" width={26} height={26} radius="8px" animation={a} onInk={onInk} /><S width="22%" animation={a} onInk={onInk} /></span>
        <S variant="pill" width={110} height={16} animation={a} onInk={onInk} />
      </div>
      <S lines={4} animation={a} onInk={onInk} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 180px), 1fr))', gap: 8 }}>
        {[0, 1].map((k) => <S key={k} variant="rect" height={52} animation={a} onInk={onInk} />)}
      </div>
      <div style={row(10, { paddingTop: 10, borderTop: `1px solid ${onInk ? 'var(--on-ink-border)' : 'var(--border-subtle)'}` })}>
        {[56, 72, 92].map((w, k) => <S key={k} variant="pill" width={w} height={24} animation={a} onInk={onInk} />)}
      </div>
    </div>
  ),
  chat: ({ i, a, onInk }) => {
    const mine = i % 2 === 1;
    return (
      <div style={row(10, { alignItems: 'flex-end', flexDirection: mine ? 'row-reverse' : 'row' })}>
        {!mine && <S variant="circle" width={32} animation={a} onInk={onInk} />}
        <S variant="rect" width={mine ? '46%' : '64%'} height={i % 3 === 2 ? 64 : 44} radius="18px" animation={a} onInk={onInk} />
      </div>
    );
  },
  list: ({ a, onInk }) => (
    <div style={row(12, { paddingBlock: 10 })}>
      <S variant="circle" width={40} animation={a} onInk={onInk} />
      <span style={{ flex: 1, display: 'grid', gap: 8, minWidth: 0 }}><S width="42%" animation={a} onInk={onInk} /><S size="caption" width="68%" animation={a} onInk={onInk} /></span>
      <S variant="pill" width={64} height={24} animation={a} onInk={onInk} />
    </div>
  ),
  timeline: ({ a, onInk }) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(64px, 112px) 14px minmax(0, 1fr)', columnGap: 14, paddingBottom: 22 }}>
      <S size="caption" width="80%" style={{ justifySelf: 'end', marginTop: 4 }} animation={a} onInk={onInk} />
      <S variant="circle" width={14} animation={a} onInk={onInk} style={{ marginTop: 3 }} />
      <span style={{ display: 'grid', gap: 8 }}><S size="title" width="48%" animation={a} onInk={onInk} /><S size="caption" width="30%" animation={a} onInk={onInk} /><S lines={2} animation={a} onInk={onInk} /></span>
    </div>
  ),
  table: ({ i, a, onInk, columns = 4 }) => (
    <div style={{ display: 'grid', gridTemplateColumns: `1.6fr repeat(${columns - 1}, 1fr)`, gap: 16, alignItems: 'center', paddingBlock: 12, borderBottom: `1px solid ${onInk ? 'var(--on-ink-border)' : 'var(--border-subtle)'}` }}>
      {Array.from({ length: columns }).map((_, c) => <S key={c} size={i === 0 ? 'caption' : 'body'} width={c === 0 ? '78%' : ['54%', '66%', '40%'][(c + i) % 3]} animation={a} onInk={onInk} />)}
    </div>
  ),
  form: ({ a, onInk }) => (
    <div style={{ display: 'grid', gap: 8 }}>
      <S size="caption" width="26%" animation={a} onInk={onInk} />
      <S variant="rect" height={46} radius="var(--radius-md)" animation={a} onInk={onInk} />
    </div>
  ),
  article: ({ a, onInk }) => (
    <div style={{ display: 'grid', gap: 14 }}>
      <S size="caption" width="18%" animation={a} onInk={onInk} />
      <S size="heading" lines={2} lineWidths={['86%', '54%']} animation={a} onInk={onInk} />
      <S lines={4} animation={a} onInk={onInk} />
      <S variant="rect" height={180} animation={a} onInk={onInk} />
      <S lines={3} animation={a} onInk={onInk} />
    </div>
  ),
};

const LAYOUT = {
  'project-card': { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: 16 },
  'feature-card': { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))', gap: 16 },
  stat: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 150px), 1fr))', gap: 24 },
  'ai-answer': { display: 'grid', gap: 16 },
  chat: { display: 'grid', gap: 12 },
  list: { display: 'grid' },
  timeline: { display: 'grid' },
  table: { display: 'grid' },
  form: { display: 'grid', gap: 18 },
  article: { display: 'grid', gap: 32 },
};

/**
 * A ready-made skeleton that matches a real component's shape. `kind`: project-card, feature-card,
 * stat, ai-answer, chat, list, timeline, table, form, article. `count` repeats it (table counts the
 * header row). `featured` makes the first project card span two columns, like the real grid.
 */
export function SkeletonPreset({ kind = 'list', count, featured = false, columns = 4, animation = 'wave', onInk = false, style, ...rest }) {
  const draw = PRESETS[kind] || PRESETS.list;
  const n = count ?? ({ 'project-card': 3, 'feature-card': 3, stat: 4, 'ai-answer': 1, chat: 4, list: 4, timeline: 3, table: 5, form: 3, article: 1 }[kind] || 3);
  const layout = LAYOUT[kind] || LAYOUT.list;
  const grid = kind === 'project-card' && featured ? { ...layout, gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))' } : layout;
  return (
    <div aria-hidden="true" className={kind === 'project-card' && featured ? 'cory-bento' : undefined} style={{ ...grid, minWidth: 0, ...style }} {...rest}>
      {Array.from({ length: n }).map((_, i) => <React.Fragment key={i}>{draw({ i, a: animation, onInk, featured, columns })}</React.Fragment>)}
    </div>
  );
}
