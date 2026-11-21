import * as React from 'react';

export interface TimelineItem {
  period: React.ReactNode;
  title: React.ReactNode;
  org?: React.ReactNode;
  place?: React.ReactNode;
  summary?: React.ReactNode;
  highlights?: React.ReactNode[];
  /** Marks the present role with the signal dot and "Now". */
  current?: boolean;
}

export interface TimelineProps extends React.OlHTMLAttributes<HTMLOListElement> {
  items: TimelineItem[];
  /** @default 3 */
  headingLevel?: 2 | 3 | 4;
}

/** Experience or milestones, newest first. */
export function Timeline(props: TimelineProps): JSX.Element;
