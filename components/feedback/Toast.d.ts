import * as React from 'react';

/** Transient black confirmation. Success only, errors belong inline in the form. */
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Lucide icon name. Default "check". */
  icon?: string;
  /** One inline action, rendered as a yellow underlined link. */
  action?: { label: string; onClick: () => void };
  onDismiss?: () => void;
}

export declare function Toast(props: ToastProps): React.JSX.Element;
