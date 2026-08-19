import * as React from 'react';

/** Hairline-separated disclosure list. FAQ, ingredient detail, shipping info. */
export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: Array<{ title: string; body: React.ReactNode }>;
  /** Index open on mount. -1 (default) opens nothing. */
  defaultOpen?: number;
}

export declare function Accordion(props: AccordionProps): React.JSX.Element;
