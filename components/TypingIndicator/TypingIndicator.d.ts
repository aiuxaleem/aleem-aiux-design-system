import * as React from 'react';

export interface TypingIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Announced to screen readers. @default "Aleem is typing" */
  label?: React.ReactNode;
  /** @default true */
  showAvatar?: boolean;
  /** Avatar kind of whoever is typing. @default "cory" */
  avatar?: 'assistant' | 'aiux' | 'cory';
}

/** Three pulsing dots in a Aleem bubble while a reply is being composed. */
export function TypingIndicator(props: TypingIndicatorProps): JSX.Element;
