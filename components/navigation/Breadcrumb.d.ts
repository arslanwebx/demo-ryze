import * as React from 'react';

/** 17px trail above a PDP or PLP heading. */
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items?: Array<{ label: string; href?: string }>;
}

export declare function Breadcrumb(props: BreadcrumbProps): React.JSX.Element;
