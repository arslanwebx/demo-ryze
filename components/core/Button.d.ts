import * as React from 'react';

/**
 * The SUNNYCELLS button. All-caps label, +0.08em tracking, 12px corners,
 * 48/56/64px heights. Never pill-shaped, never below 48px tall.
 *
 * @startingPoint section="Core" subtitle="Primary, accent, family-coloured and outline buttons" viewport="700x220"
 */
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  children: React.ReactNode;
  /**
   * primary:  black fill, the default CTA
   * accent:   sunny yellow with black text
   * zest / sky / sprout: match the button to a product family block
   * outline:  2px black rule on transparent
   * quiet:    text only, fills --ink-10 on hover
   */
  variant?: 'primary' | 'accent' | 'zest' | 'sky' | 'sprout' | 'outline' | 'quiet';
  /** sm 48px · md 56px · lg 64px. Default md. */
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  /** Lucide icon name rendered before the label. */
  iconLeft?: string;
  /** Lucide icon name rendered after the label. */
  iconRight?: string;
  /** Appends "· $49". ALWAYS an integer. The component rounds, never shows cents. */
  price?: number;
  /** Render as an anchor for link-buttons. */
  as?: 'button' | 'a';
}

export declare function Button(props: ButtonProps): React.JSX.Element;
