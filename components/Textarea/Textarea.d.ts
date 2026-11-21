import * as React from 'react';

export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  success?: React.ReactNode;
  /** Starting height in lines. @default 4 */
  rows?: number;
  /** Lines before it scrolls. @default 12 */
  maxRows?: number;
  /** Grow with the text. false restores the resize handle. @default true */
  autoResize?: boolean;
  maxLength?: number;
  /** When to show the counter. @default "near" (from 80% of maxLength) */
  showCount?: 'near' | 'always' | 'never';
  value?: string;
  defaultValue?: string;
  onChange?: (value: string, e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

/** Multi-line text field matching Input, with auto-grow and a near-limit counter. */
export function Textarea(props: TextareaProps): JSX.Element;
