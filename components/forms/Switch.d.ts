import * as React from 'react';

/** Binary preference toggle for account settings only, never a purchase decision. */
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: React.ReactNode;
  description?: string;
  checked?: boolean;
  onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export declare function Switch(props: SwitchProps): React.JSX.Element;
