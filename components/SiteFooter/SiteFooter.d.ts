import * as React from 'react';

export interface SiteFooterProps extends React.HTMLAttributes<HTMLElement> {
  /** Replaces the default AIUX mark and "Aleem". */
  brand?: React.ReactNode;
  tagline?: React.ReactNode;
  /** Link columns; each becomes a nav named by its title. */
  columns?: Array<{ title: string; links: Array<{ label: string; href: string; external?: boolean }> }>;
  /** Social links, written as words. */
  social?: Array<{ label: string; href: string }>;
  /** Copyright or legal line. */
  legal?: React.ReactNode;
  /** Extra content under the tagline. */
  children?: React.ReactNode;
}

/** Site footer: brand, link columns, social links, legal line. */
export function SiteFooter(props: SiteFooterProps): JSX.Element;
