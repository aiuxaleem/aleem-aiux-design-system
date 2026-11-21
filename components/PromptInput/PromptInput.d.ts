import * as React from 'react';

export interface PromptInputProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onSubmit'> {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** Called with the trimmed text on Enter or Send. */
  onSubmit?: (value: string) => void;
  /** While true, Send becomes Stop. @default false */
  busy?: boolean;
  onStop?: () => void;
  disabled?: boolean;
  /** @default "Ask anything about my work" */
  placeholder?: string;
  /** Visually hidden label. @default "Message" */
  label?: string;
  /** Starter prompts, shown while the field is empty. */
  suggestions?: string[];
  maxLength?: number;
  /** @default "Enter to send, Shift + Enter for a new line" */
  hint?: React.ReactNode;
  /** Unique per page. @default "prompt-input" */
  id?: string;
}

/** The composer for talking to an AI: auto-grows, Enter to send, suggestions, Stop while answering. */
export function PromptInput(props: PromptInputProps): JSX.Element;
