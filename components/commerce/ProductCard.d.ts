import * as React from 'react';

/**
 * The signature SUNNYCELLS merchandising card: flat family-colour block with the
 * product cutout overhanging it, white info well, full-width CTA in the family colour.
 *
 * @startingPoint section="Commerce" subtitle="Family-coloured product card with integer pricing" viewport="700x480"
 */
export interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  /** Ingredient line: "Collagen peptides + vitamin C". */
  subtitle?: string;
  /** Picks the block colour AND the CTA fill. One family per card, never mixed. */
  family?: 'ingestible' | 'topical' | 'hair' | 'wellness';
  /** Integer dollars. This is the SUBSCRIPTION price; the brand sells nothing one-time. */
  price: number;
  /** Struck original; renders "Save $10". */
  compareAt?: number;
  /** 0-5, one decimal. */
  rating?: number;
  reviewCount?: number;
  /** Short ALL-CAPS flag pinned to the block, e.g. "Bestseller". */
  badge?: string;
  /** Mono eyebrow above the name, e.g. "Mango". */
  flavor?: string;
  /** Transparent-PNG product cutout. Omit to render a labelled placeholder. */
  image?: string;
  /** Cadence line beside the savings, since every price is a subscription price.
   *  Default "per month". Pass null to hide. */
  per?: string | null;
  /** Standing first-order discount, default 50. Puts an OfferFlag on the block and
   *  makes the CTA show the halved price with "Then $39 per month" above it. */
  offerPercent?: number;
  ctaLabel?: string;
  /**
   * Receives the priced line, so the bag charges what the button showed.
   * firstPrice is the discounted first-order figure; price is the recurring one.
   */
  onAdd?: (line: { price: number; firstPrice: number }) => void;
  /** Colour-block height. 260 in a 3-up grid, 200 in a 2-up mobile grid. */
  blockHeight?: number;
}

export declare function ProductCard(props: ProductCardProps): React.JSX.Element;
