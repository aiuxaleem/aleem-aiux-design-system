import * as React from 'react';

export interface ChatBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Who is speaking. assistant: a neutral AI. aleem: Aleem himself (AIUX tile). cory: the admissions case-study mascot. system: a centred quiet note. @default "cory" */
  from?: 'assistant' | 'aleem' | 'cory' | 'user' | 'system';
  /** Message content. */
  children?: React.ReactNode;
  /** Optional timestamp shown under the bubble. */
  time?: React.ReactNode;
  /** Reserve/show the avatar gutter. @default true */
  showAvatar?: boolean;
  /** Delivery state for user messages: sending dims the bubble, failed shows a red edge, "Not sent" and Retry. */
  status?: 'sending' | 'sent' | 'failed';
  /** Called by the Retry link when status is failed. */
  onRetry?: () => void;
  /** @default "Retry" */
  retryLabel?: string;
  /** @default "Not sent" */
  failedLabel?: string;
}

/**
 * One message in the Aleem chat widget, mascot bubble at inline-start or brand-gradient
 * user bubble at inline-end; mirrors automatically in RTL. Carries delivery status.
 */
export function ChatBubble(props: ChatBubbleProps): JSX.Element;
