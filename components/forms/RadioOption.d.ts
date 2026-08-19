import * as React from 'react';

/**
 * Large radio card for a small set of described or priced choices: bundle size,
 * flavour, delivery cadence. Selected = 2px black border + --sun-tint fill.
 * Not for purchase mode; the brand sells subscriptions only (see SubscriptionBox).
 */
export interface RadioOptionProps extends React.HTMLAttributes<HTMLLabelElement> {
  label: string;
  description?: string;
  /** Integer only, rendered as $49, never $49.00. */
  price?: number;
  /** 17px line under the price, e.g. "per month". */
  priceNote?: string;
  selected?: boolean;
  onSelect?: () => void;
  /** Radio group name. */
  name?: string;
  /** Optional <Badge> element beside the label. */
  badge?: React.ReactNode;
}

export declare function RadioOption(props: RadioOptionProps): React.JSX.Element;
