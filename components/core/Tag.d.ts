import * as React from 'react';

/** Pill chip for filters and product attributes. The only pill shape in the system. */
export interface TagProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  /** Selected state: 2px black rule + --sun-tint fill. */
  selected?: boolean;
}

export declare function Tag(props: TagProps): React.JSX.Element;
