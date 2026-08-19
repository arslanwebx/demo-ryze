import * as React from 'react';

/** Underline tabs for PDP content sections (Benefits / Ingredients / Results). */
export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: Array<string | { value: string; label: string }>;
  value?: string;
  onChange?: (value: string) => void;
}

export declare function Tabs(props: TabsProps): React.JSX.Element;
