import * as React from 'react';
import type { SkeletonPresetProps } from '../Skeleton/Skeleton';
import type { ErrorStateProps } from '../ErrorState/ErrorState';
import type { EmptyStateProps } from '../EmptyState/EmptyState';

export interface StateViewProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Which state the region is in. @default "ready" */
  status?: 'loading' | 'refreshing' | 'ready' | 'empty' | 'partial' | 'error' | 'offline' | 'timeout' | 'not-found' | 'permission' | 'server';
  /** The real content (ready, partial, refreshing). */
  children?: React.ReactNode;
  /** A SkeletonPreset kind, or your own skeleton node. @default "list" */
  skeleton?: SkeletonPresetProps['kind'] | React.ReactNode;
  skeletonCount?: number;
  /** Spoken loading and done labels. */
  label?: string;
  doneLabel?: string;
  /** Props for the EmptyState (title, children, action, icon, scene…). */
  empty?: Partial<EmptyStateProps> & { children?: React.ReactNode };
  /** Props for the ErrorState (title, children, details, action…). */
  error?: Partial<ErrorStateProps>;
  /** The warning shown above children when status is "partial". */
  partial?: { title?: React.ReactNode; children?: React.ReactNode; action?: React.ReactNode };
  onRetry?: () => void;
  retrying?: boolean;
  /** Keep the region this tall in every state, so switching never jolts the page. */
  minHeight?: number | string;
}

/** One region, every state, one prop: loading, refreshing, ready, empty, partial and six kinds of error. */
export function StateView(props: StateViewProps): JSX.Element;
