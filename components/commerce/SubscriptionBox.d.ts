import * as React from 'react';

/**
 * The SUNNYCELLS buy box. The brand sells SUBSCRIPTIONS ONLY, so the choice this
 * presents is delivery cadence, never subscribe-vs-one-time. Do not add a one-time
 * row, a countdown, a scarcity line, or a declined-offer opt-out.
 *
 * @startingPoint section="Commerce" subtitle="Subscription-only buy box with cadence tiers" viewport="560x620"
 */
export interface SubscriptionPlan {
  id: string;
  /** "Every month", "Every 2 months". */
  label: string;
  /** Integer dollars for this cadence. */
  price: number;
  /** 17px line under the label: "30 servings, delivered monthly". */
  note?: string;
  /** Short Badge text, e.g. "Most chosen". At most one plan carries it. */
  flag?: string;
  /** Unit line beside the headline price. Default "per delivery". */
  per?: string;
  /** Singular unit for the first-order line, e.g. "month". Default "month". */
  unit?: string;
}

export interface SubscriptionBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Two or three cadences. More belongs in a Select. */
  plans?: SubscriptionPlan[];
  /** Selected plan id. Defaults to the first plan. */
  value?: string;
  onChange?: (id: string) => void;
  /** Undiscounted price, integer. Drives the struck price and every "Save $x". */
  compareAt?: number;
  /**
   * Receives the chosen plan together with the figures on screen, so the bag
   * charges the first-order price the button showed rather than recomputing it.
   */
  onAdd?: (line: { plan: SubscriptionPlan; price: number; firstPrice: number }) => void;
  ctaLabel?: string;
  /**
   * The standing first-order discount, default 50. The box then leads with the
   * halved figure and states the ongoing price beneath it. Pass 0 to suppress,
   * which should be rare: the brand leads with this offer everywhere.
   */
  offerPercent?: number;
  /** [lucideIcon, label] pairs under the button. Defaults to shipping / cancel / returns. */
  reassurances?: Array<[string, string]>;
}

export declare function SubscriptionBox(props: SubscriptionBoxProps): React.JSX.Element;
