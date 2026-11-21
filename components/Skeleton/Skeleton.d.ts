import * as React from 'react';

export interface SkeletonProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** text: one or more bars (ragged, last one shorter). rect: a block. circle: an avatar. pill: a chip or button. @default "text" */
  variant?: 'text' | 'rect' | 'circle' | 'pill';
  width?: number | string;
  height?: number | string;
  /** Number of bars for text. @default 1 */
  lines?: number;
  /** Width of each text bar, repeating, e.g. ['92%', '58%']. */
  lineWidths?: Array<number | string>;
  /** Text bar height: caption 0.7em, body 0.9em, title 1.25em, heading 1.7em, metric 2.6em. @default "body" */
  size?: 'caption' | 'body' | 'title' | 'heading' | 'metric';
  /** Override corner radius. */
  radius?: number | string;
  /** wave: one shine that crosses the page in step. pulse: a calm fade. none: still. Reduced motion is always still. @default "wave" */
  animation?: 'wave' | 'pulse' | 'none';
  /** On-ink tint for navy panels. @default false */
  onInk?: boolean;
}

/** One skeleton bone (aria-hidden). Put aria-busy and a spoken label on the region: LoadingRegion or StateView do it for you. */
export function Skeleton(props: SkeletonProps): JSX.Element;

export interface SkeletonPresetProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Which real component to mirror. @default "list" */
  kind?: 'project-card' | 'feature-card' | 'stat' | 'ai-answer' | 'chat' | 'list' | 'timeline' | 'table' | 'form' | 'article';
  /** How many to draw (table counts its header row). Defaults per kind. */
  count?: number;
  /** project-card: the first one spans two columns, like the real bento. @default false */
  featured?: boolean;
  /** table: number of columns. @default 4 */
  columns?: number;
  animation?: 'wave' | 'pulse' | 'none';
  onInk?: boolean;
}

/** A ready-made skeleton with the same geometry as the component it stands in for, so nothing jumps on arrival. */
export function SkeletonPreset(props: SkeletonPresetProps): JSX.Element;
