import * as React from 'react';

/**
 * The standing "50% off first order" flag. The brand leads with this offer
 * everywhere: announcement bar, product cards, the buy box, the quiz result.
 * It is a permanent term, never a limited-time promotion, so it takes no
 * countdown, no "today only", and no expiry.
 *
 * This is the single documented exception to the rule that savings are stated in
 * dollars rather than percentages. Every OTHER saving stays in dollars.
 */
export interface OfferFlagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Default 50. Integer only. */
  percent?: number;
  /** Default "off first order". */
  label?: string;
  /** "ink" (black, the default) or "sun" on white and on photography. */
  tone?: 'ink' | 'sun';
  /** "sm" beside a product name, "md" beside a price. */
  size?: 'sm' | 'md';
}

export declare function OfferFlag(props: OfferFlagProps): React.JSX.Element;

/**
 * The discounted first-order figure, rounded DOWN to a whole dollar: $39 -> $19.
 * Rounding down keeps the integer-price rule intact and never rounds against the
 * customer. Always derive the number with this; never hand-write it.
 */
export declare function firstOrderPrice(price: number, percent?: number): number;
