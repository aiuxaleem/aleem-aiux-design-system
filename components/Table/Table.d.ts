import * as React from 'react';

export interface TableColumn<Row = any> {
  key: string;
  label: React.ReactNode;
  /** End-aligned, tabular figures. */
  numeric?: boolean;
  align?: 'start' | 'center' | 'end';
  sortable?: boolean;
  width?: number | string;
  nowrap?: boolean;
  /** Custom cell. */
  render?: (row: Row, index: number) => React.ReactNode;
}
export interface TableProps<Row = any> extends React.HTMLAttributes<HTMLDivElement> {
  columns?: TableColumn<Row>[];
  rows?: Row[];
  /** Names the table; always set it. */
  caption?: React.ReactNode;
  /** Keep the caption for screen readers only. @default false */
  captionHidden?: boolean;
  /** Controlled sort. */
  sort?: { key: string; dir: 'asc' | 'desc' };
  onSort?: (next: { key: string; dir: 'asc' | 'desc' }) => void;
  rowKey?: (row: Row) => string | number;
  /** Draw skeleton rows. @default false */
  loading?: boolean;
  /** @default 5 */
  skeletonRows?: number;
  /** Shown when there are no rows. @default "Nothing to show yet." */
  empty?: React.ReactNode;
  /** Replaces the rows with an alert. */
  error?: React.ReactNode;
  dense?: boolean;
  striped?: boolean;
  stickyHeader?: boolean;
  /** Narrowest the table gets before it scrolls sideways. @default 132px per column */
  minWidth?: number | string;
}

/** Data table with sorting, numeric alignment, loading, empty and error rows; scrolls sideways on phones. */
export function Table<Row = any>(props: TableProps<Row>): JSX.Element;
