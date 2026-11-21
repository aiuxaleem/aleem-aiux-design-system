import * as React from 'react';

export interface SiteHeaderLink { label: React.ReactNode; href: string; /** Marks the current page. */ current?: boolean; }
export interface SiteHeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** Replaces the default AIUX mark and "Aleem". */
  brand?: React.ReactNode;
  /** @default "/" */
  brandHref?: string;
  /** Primary links; five or fewer. */
  links?: SiteHeaderLink[];
  /** The one action, e.g. a small Button. Moves into the menu on phones. */
  action?: React.ReactNode;
  /** Always-visible tools, e.g. ThemeToggle. */
  tools?: React.ReactNode;
  /** Pin to the top. @default true */
  sticky?: boolean;
  /** Target of "Skip to content"; false to omit. @default "#main" */
  skipTo?: string | false;
  /** @default "Menu" */
  menuLabel?: string;
  /** aria-label of the nav. @default "Main" */
  label?: string;
}

/** Site top bar: brand, links, one action; folds to a menu below 760px; includes a skip link. */
export function SiteHeader(props: SiteHeaderProps): JSX.Element;
