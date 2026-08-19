import * as React from 'react';

/** Navigation link. Underlines on hover; colour never changes. */
export interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  active?: boolean;
  /** "sm" (17px) for footer columns, "md" (20px) for primary nav. */
  size?: 'sm' | 'md';
}

export declare function NavLink(props: NavLinkProps): React.JSX.Element;
