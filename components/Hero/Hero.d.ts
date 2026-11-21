import * as React from 'react';

export interface HeroProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  eyebrow?: React.ReactNode;
  /** The headline. A string lets `highlight` work. */
  title?: React.ReactNode;
  /** The one phrase of the title that takes the brand gradient. */
  highlight?: string;
  /** The supporting sentence. */
  children?: React.ReactNode;
  /** One primary Button, optionally one secondary. */
  actions?: React.ReactNode;
  /** Second column. Defaults to the SignalPattern on an ink panel. */
  art?: React.ReactNode;
  /** Up to three real numbers. */
  proof?: Array<{ value: React.ReactNode; label: string }>;
  /** @default "split" */
  layout?: 'split' | 'center';
  /** @default 1 */
  headingLevel?: 1 | 2 | 3;
}

/** Page opening: one idea, one gradient phrase, one action, optional proof and art. */
export function Hero(props: HeroProps): JSX.Element;
