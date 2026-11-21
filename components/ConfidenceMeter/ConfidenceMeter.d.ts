import * as React from 'react';

export interface ConfidenceMeterProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Score from 0 to 1. Sets the level (0.8+ high, 0.5+ medium) unless `level` is given. */
  value?: number;
  /** Explicit level. Overrides `value` for the pips and words. */
  level?: 'high' | 'medium' | 'low';
  /** Replaces the default words ("High confidence"). */
  label?: React.ReactNode;
  /** Show the percentage after the words. @default false */
  showValue?: boolean;
  /** @default "md" */
  size?: 'sm' | 'md';
  /** White pips and text for navy panels. @default false */
  onInk?: boolean;
}

/** How sure an AI result is: five pips plus words, never colour alone. */
export function ConfidenceMeter(props: ConfidenceMeterProps): JSX.Element;

/** Maps a 0 to 1 score onto "high" | "medium" | "low" using the system thresholds. */
export function confidenceLevel(value?: number): 'high' | 'medium' | 'low';
