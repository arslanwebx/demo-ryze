import * as React from 'react';

/** Modal (desktop) or bottom sheet (mobile). Flat scrim, never blurred. */
export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  title: string;
  children: React.ReactNode;
  /** Buttons row pinned to a --shell footer. */
  footer?: React.ReactNode;
  onClose?: () => void;
  /** "sheet" slides from the bottom and squares its lower corners. Use on mobile. */
  variant?: 'modal' | 'sheet';
  width?: number;
}

export declare function Dialog(props: DialogProps): React.JSX.Element;
