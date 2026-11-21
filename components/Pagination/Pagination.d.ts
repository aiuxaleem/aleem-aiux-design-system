import * as React from 'react';

export interface PaginationProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
  /** Current page, from 1. @default 1 */
  page?: number;
  /** Total pages. @default 1 */
  count?: number;
  onChange?: (page: number) => void;
  /** Numbers shown on each side of the current page. @default 1 */
  siblings?: number;
  /** "Page 2 of 9" between the arrows. @default false */
  compact?: boolean;
  /** Render real links. */
  hrefFor?: (page: number) => string;
  /** @default "Pagination" */
  label?: string;
}

/** Page through a list: Previous, numbers with ellipses, Next. */
export function Pagination(props: PaginationProps): JSX.Element;
