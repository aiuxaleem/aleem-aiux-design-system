import * as React from 'react';

export interface LoadingRegionProps extends React.HTMLAttributes<HTMLElement> {
  /** True while the data is on its way. */
  loading?: boolean;
  /** What to show while loading: a SkeletonPreset or your own Skeletons. */
  skeleton?: React.ReactNode;
  children?: React.ReactNode;
  /** Spoken when loading starts, e.g. "Loading case studies". @default "Loading" */
  label?: string;
  /** Spoken when it finishes. @default "Loaded" */
  doneLabel?: string;
  /** Show nothing for this long, so fast loads feel instant. @default 300 */
  delay?: number;
  /** Once shown, keep the skeleton at least this long, so it never flashes. @default 600 */
  minDuration?: number;
  /** On a refetch, keep the current content (dimmed, with an "Updating" hint) instead of a skeleton. @default true */
  keepPrevious?: boolean;
  /** Text of the refetch hint. @default "Updating" */
  refreshing?: React.ReactNode;
  /** Element tag. @default "div" */
  as?: string;
}

/** Applies the loading timing rules (300 ms delay, 600 ms minimum, 200 ms fade) with aria-busy and spoken status. */
export function LoadingRegion(props: LoadingRegionProps): JSX.Element;
