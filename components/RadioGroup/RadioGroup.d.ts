import * as React from 'react';

export interface RadioOption {
  value: string;
  label: React.ReactNode;
  hint?: React.ReactNode;
  /** Card variant only: quiet text at the inline end ("Open"). */
  meta?: React.ReactNode;
  disabled?: boolean;
}

export interface RadioGroupProps extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, 'onChange'> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  options: RadioOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Group name; generated when omitted. */
  name?: string;
  /** @default "default" */
  variant?: 'default' | 'card';
  /** @default "vertical" */
  orientation?: 'vertical' | 'horizontal';
  required?: boolean;
  disabled?: boolean;
}

/** One choice from 2 to 5 visible options; native radios in a fieldset. */
export function RadioGroup(props: RadioGroupProps): JSX.Element;
