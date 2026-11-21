import * as React from 'react';

export interface SignalPatternProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default 5 */
  rows?: number;
  /** A different, repeatable arrangement per seed. @default 1 */
  seed?: number;
  /** ink: on navy. light: on white or page. brand: on the brand gradient. @default "ink" */
  tone?: 'ink' | 'light' | 'brand';
  /** The travelling signal. Always still under reduced motion. @default true */
  animate?: boolean;
  /** Average pills per row. @default 3 */
  density?: number;
  height?: number | string;
  /** Which side the rows hang from. @default "start" */
  align?: 'start' | 'end';
}

/** The brand's signature graphic: pill rows with a travelling signal. Decorative. */
export function SignalPattern(props: SignalPatternProps): JSX.Element;
