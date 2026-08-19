import * as React from 'react';

/** Rectangular mono label for merchandising flags on product blocks. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  /** Match the product's family colour, or use ink on imagery. */
  tone?: 'ink' | 'sun' | 'zest' | 'sky' | 'sprout' | 'success' | 'error';
}

export declare function Badge(props: BadgeProps): React.JSX.Element;
