import * as React from 'react';

/** Native select in SUNNYCELLS clothing, 56px, chevron-down glyph, 20px text. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  /** Strings, or {value,label} pairs. */
  options?: Array<string | { value: string; label: string }>;
  containerStyle?: React.CSSProperties;
}

export declare function Select(props: SelectProps): React.JSX.Element;
