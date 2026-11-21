import * as React from 'react';

export type MenuItem =
  | { separator: true }
  | { label: React.ReactNode; icon?: string; hint?: React.ReactNode; href?: string; danger?: boolean; disabled?: boolean; onSelect?: (e: React.SyntheticEvent) => void; separator?: false };
export interface MenuProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'onSelect'> {
  /** Button text and the menu's name. @default "More" */
  label?: React.ReactNode;
  items?: MenuItem[];
  /** Replaces the button content. */
  trigger?: React.ReactNode;
  /** Which edge of the button the menu lines up with. @default "start" */
  align?: 'start' | 'end';
  /** @default "bottom" */
  placement?: 'bottom' | 'top';
  /** Called with the chosen item. */
  onSelect?: (item: MenuItem, e: React.SyntheticEvent) => void;
}

/** Dropdown of actions on one thing, with full keyboard support. */
export function Menu(props: MenuProps): JSX.Element;
