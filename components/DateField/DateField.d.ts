import * as React from 'react';

export interface DateFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type'> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  success?: React.ReactNode;
  /** @default "date" */
  type?: 'date' | 'datetime-local' | 'time' | 'month';
  /** ISO string, e.g. "2026-11-21". */
  value?: string;
  defaultValue?: string;
  min?: string;
  max?: string;
  onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
}

/** Native date input styled like Input. */
export function DateField(props: DateFieldProps): JSX.Element;
