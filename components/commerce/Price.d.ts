import * as React from 'react';

/**
 * The single source of truth for prices. Integers only, the component
 * rounds and never renders cents. Never hand-write a price string.
 */
export interface PriceProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Rounded to a whole dollar. */
  value: number;
  /** Struck-through original, set in --ink-60 to clear AA. Renders "Save $10" underneath automatically. */
  compareAt?: number;
  /** sm 22 · md 30 · lg 44 · xl 60 (PDP hero). */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Overrides the auto "Save $x" line, e.g. "per month". */
  note?: string;
  align?: 'left' | 'right';
}

export declare function Price(props: PriceProps): React.JSX.Element;
