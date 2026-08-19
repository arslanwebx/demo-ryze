import * as React from 'react';

/**
 * Lucide icon at SUNNYCELLS' 2px stroke weight. Icons are always --ink and
 * always accompany a label, except in the header utility row.
 * Requires the Lucide UMD bundle to be present on the page.
 */
export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Lucide icon name, kebab or Pascal: "shopping-bag" | "ShoppingBag" */
  name: string;
  /** 24 inline with body copy, 28 in nav/header. Default 24. */
  size?: number;
  /** Default 2. Do not go below; 1.5 is too thin for this audience. */
  strokeWidth?: number;
  /** Set to "currentColor" for solid glyphs (filled stars). Default "none". */
  fill?: string;
  /** Accessible label. Omit for decorative icons (renders aria-hidden). */
  title?: string;
}

export declare function Icon(props: IconProps): React.JSX.Element;
