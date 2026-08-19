import * as React from 'react';

/** 28px black check box with a 48px-tall clickable row. */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: React.ReactNode;
  /** 17px secondary line under the label. */
  description?: string;
  checked?: boolean;
  onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export declare function Checkbox(props: CheckboxProps): React.JSX.Element;
