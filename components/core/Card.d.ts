import * as React from 'react';

/** Generic surface. Structure comes from the hairline, not from depth. */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Lifts -2px and takes --shadow-card on hover. */
  hoverable?: boolean;
  /** Set false when the card contains an edge-to-edge colour block or image. */
  padded?: boolean;
  tone?: 'white' | 'shell' | 'ink';
}

export declare function Card(props: CardProps): React.JSX.Element;
