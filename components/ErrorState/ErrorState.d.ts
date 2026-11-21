import * as React from 'react';

export interface ErrorStateProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Sets the icon, tone and default copy. @default "error" */
  kind?: 'error' | 'offline' | 'timeout' | 'not-found' | 'permission' | 'server';
  /** Overrides the default title. */
  title?: React.ReactNode;
  /** Overrides the default message. */
  children?: React.ReactNode;
  /** Adds a Try again button. */
  onRetry?: () => void;
  /** @default "Try again" */
  retryLabel?: string;
  /** Shows "Trying again…" with a turning icon. @default false */
  retrying?: boolean;
  /** Extra actions beside Try again (e.g. a Button to go home or ask for access). */
  action?: React.ReactNode;
  secondaryAction?: React.ReactNode;
  /** Error code or message, in a collapsed "Technical details". */
  details?: React.ReactNode;
  /** @default "md" */
  size?: 'sm' | 'md';
  /** card: bordered tile. plain: no frame. @default "card" */
  variant?: 'card' | 'plain';
  onInk?: boolean;
}

/** A region that failed: what happened, that nothing was lost, and the one action that fixes it. role=alert. */
export function ErrorState(props: ErrorStateProps): JSX.Element;
