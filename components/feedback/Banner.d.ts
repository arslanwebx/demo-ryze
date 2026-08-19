import * as React from 'react';

/** Full-width strip at the top of the page or above a form. All-caps, 17px. */
export interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  tone?: 'ink' | 'sun' | 'success' | 'error';
  /** Lucide icon name, e.g. "truck". */
  icon?: string;
  onDismiss?: () => void;
}

export declare function Banner(props: BannerProps): React.JSX.Element;
