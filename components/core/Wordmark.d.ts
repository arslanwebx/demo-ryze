import * as React from 'react';

/**
 * Typographic wordmark. Outfit 900, -0.04em. Placeholder for a real logo,
 * which was not supplied. Never substitute a drawn mark.
 */
export interface WordmarkProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Font size in px. 28 in headers, 42+ in footers and hero lockups. */
  size?: number;
  tone?: 'ink' | 'inverse';
}

export declare function Wordmark(props: WordmarkProps): React.JSX.Element;
