import * as React from 'react';

export interface StepperProps extends React.HTMLAttributes<HTMLElement> {
  steps?: Array<{ label: React.ReactNode; description?: React.ReactNode; error?: boolean }>;
  /** Index of the current step, from 0. @default 0 */
  current?: number;
  /** @default "horizontal" */
  orientation?: 'horizontal' | 'vertical';
  /** "Step 2 of 4: Details" with a bar. @default false */
  compact?: boolean;
  /** Makes completed steps clickable. */
  onStepClick?: (index: number) => void;
  /** @default "Progress" */
  label?: string;
}

/** Progress through a short ordered flow. */
export function Stepper(props: StepperProps): JSX.Element;
