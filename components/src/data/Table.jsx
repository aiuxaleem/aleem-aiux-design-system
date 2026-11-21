import React from 'react';
import { Icon } from '../icons/Icon.jsx';

/**
 * A data table: real <table> semantics, a caption, sortable headers (aria-sort + an arrow and
 * words for screen readers), numeric columns end-aligned in tabular figures, and built-in
 * loading (bones in the same grid), empty and error rows. On narrow screens it scrolls
 * sideways inside a focusable, labelled region instead of breaking the page.
 */
export function Table({
  columns = [], rows = [], caption, captionHidden = false, sort, onSort, rowKey, loading = false, skeletonRows = 5,
  empty = 'Nothing to show yet.', error, dense = false, striped = false, stickyHeader = false, minWidth, style, ...rest
}) {
  const padY = dense ? 8 : 13;
  const cell = (c) => ({ padding: `${padY}px 16px`, textAlign: c.align === 'end' || c.numeric ? 'end' : c.align === 'center' ? 'center' : 'start', verticalAlign: 'middle', width: c.width, whiteSpace: c.nowrap ? 'nowrap' : undefined });
  const next = (c) => () => { if (!onSort) return; const dir = sort && sort.key === c.key && sort.dir === 'asc' ? 'desc' : 'asc'; onSort({ key: c.key, dir }); };
  const state = error ? <span role="alert" style={{ color: 'var(--text-danger)', fontWeight: 'var(--weight-medium)' }}>{error}</span> : !loading && rows.length === 0 ? empty : null;
  return (
    <div role="region" aria-label={typeof caption === 'string' ? caption : 'Table'} tabIndex={0} aria-busy={loading || undefined}
      style={{ position: 'relative', overflowX: 'auto', width: '100%', maxWidth: '100%', minWidth: 0, contain: 'inline-size', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', background: 'var(--surface-card)', fontFamily: 'var(--font-sans)', ...style }} {...rest}>
      <table style={{ width: '100%', minWidth: minWidth ?? Math.max(columns.length * 132, 320), borderCollapse: 'collapse', overflowWrap: 'normal', wordBreak: 'normal', fontSize: 'var(--text-ui-sm)', color: 'var(--text-body)' }}>
        {caption && <caption className={captionHidden ? 'cory-visually-hidden' : undefined} style={captionHidden ? undefined : { captionSide: 'top', textAlign: 'start', padding: '14px 16px 10px', fontFamily: 'var(--font-display)', fontSize: 'var(--text-ui-lg)', fontWeight: 'var(--weight-bold)', color: 'var(--text-strong)' }}>{caption}</caption>}
        <thead>
          <tr>
            {columns.map((c) => {
              const active = sort && sort.key === c.key;
              const th = { ...cell(c), paddingBlock: 10, fontSize: 'var(--text-caption)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-muted)', background: 'var(--surface-sunken)', borderBottom: '1px solid var(--border-default)', whiteSpace: 'nowrap', ...(stickyHeader ? { position: 'sticky', top: 0, zIndex: 1 } : null) };
              return (
                <th key={c.key} scope="col" aria-sort={c.sortable ? (active ? (sort.dir === 'asc' ? 'ascending' : 'descending') : 'none') : undefined} style={th}>
                  {c.sortable ? (
                    <button type="button" onClick={next(c)} className="cory-th-sort"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 6, minHeight: 28, margin: '-4px -6px', padding: '4px 6px', border: 0, borderRadius: 'var(--radius-xs)', background: 'transparent', color: active ? 'var(--text-strong)' : 'inherit', font: 'inherit', cursor: 'pointer', flexDirection: c.numeric || c.align === 'end' ? 'row-reverse' : 'row' }}>
                      {c.label}
                      <Icon name={active && sort.dir === 'desc' ? 'arrow-down' : 'arrow-up'} size={14} duotone={false} style={{ opacity: active ? 1 : 0.35 }} />
                      <span className="cory-visually-hidden">{active ? (sort.dir === 'asc' ? ', sorted ascending' : ', sorted descending') : ', sortable'}</span>
                    </button>
                  ) : c.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {loading && Array.from({ length: skeletonRows }).map((_, r) => (
            <tr key={`s${r}`} aria-hidden="true">{columns.map((c, i) => (
              <td key={c.key} style={{ ...cell(c), borderBottom: '1px solid var(--border-subtle)' }}>
                <span className="cory-skel" data-anim="pulse" style={{ display: 'inline-block', height: '0.9em', width: `${[72, 48, 60, 40][(i + r) % 4]}%`, minWidth: 28, borderRadius: 'var(--radius-xs)', verticalAlign: 'middle' }} />
              </td>
            ))}</tr>
          ))}
          {!loading && !error && rows.map((row, r) => (
            <tr key={rowKey ? rowKey(row) : r} className="cory-tr" style={{ background: striped && r % 2 ? 'var(--surface-sunken)' : undefined }}>
              {columns.map((c, i) => {
                const v = c.render ? c.render(row, r) : row[c.key];
                const s = { ...cell(c), borderBottom: r < rows.length - 1 ? '1px solid var(--border-subtle)' : 0, ...(c.numeric ? { fontVariantNumeric: 'tabular-nums' } : null), ...(i === 0 ? { color: 'var(--text-strong)', fontWeight: 'var(--weight-semibold)' } : null) };
                return i === 0 ? <th key={c.key} scope="row" style={s}>{v}</th> : <td key={c.key} style={s}>{v}</td>;
              })}
            </tr>
          ))}
          {state && <tr><td colSpan={columns.length} style={{ padding: '32px 16px', textAlign: 'center', color: 'var(--text-muted)' }}>{state}</td></tr>}
        </tbody>
      </table>
    </div>
  );
}
