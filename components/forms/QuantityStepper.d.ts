import * as React from 'react';

/** Minus / count / plus control for bag rows and PDPs. Both buttons clear 48px. */
export interface QuantityStepperProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}

export declare function QuantityStepper(props: QuantityStepperProps): React.JSX.Element;
