import * as React from 'react';

/** Square icon-only control, minimum 48px. Always requires an accessible label. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Lucide icon name. */
  icon: string;
  /** Required. Becomes aria-label. */
  label: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'quiet' | 'outline' | 'solid';
  disabled?: boolean;
}

export declare function IconButton(props: IconButtonProps): React.JSX.Element;
