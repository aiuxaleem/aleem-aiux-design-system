import * as React from 'react';

export interface AccordionItem {
  id?: string;
  title: React.ReactNode;
  content: React.ReactNode;
  /** Quiet text before the chevron, e.g. "2 min read". */
  meta?: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: AccordionItem[];
  /** Allow several panels open at once. @default false */
  multiple?: boolean;
  /** Ids (or indexes as strings) open on first render. */
  defaultOpen?: string[];
  /** card: separate tiles. list: hairline dividers. @default "card" */
  variant?: 'card' | 'list';
  /** @default 3 */
  headingLevel?: 2 | 3 | 4 | 5;
  onToggle?: (id: string, open: boolean) => void;
}

/** Expandable sections with real buttons, aria-expanded and arrow-key movement between headers. */
export function Accordion(props: AccordionProps): JSX.Element;
