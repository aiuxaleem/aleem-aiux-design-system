import * as React from 'react';

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  /** The trail, root first. The last item is the current page and needs no href. */
  items?: Array<{ label: React.ReactNode; href?: string }>;
  /** Longer trails collapse the middle. @default 4 */
  maxItems?: number;
  /** @default "Breadcrumb" */
  label?: string;
}

/** Where this page sits; the last item is the current page. */
export function Breadcrumb(props: BreadcrumbProps): JSX.Element;
