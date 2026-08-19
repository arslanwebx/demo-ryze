import * as React from 'react';

/** Text field, 56px tall, 10px corners, 2px border that goes black on focus. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  /** 17px helper line below the field. */
  hint?: string;
  /** Replaces the hint and turns the border red. Write it as a sentence: "We need an email address to send your order." */
  error?: string;
  /** Mono unit label pinned inside the right edge, e.g. "ML". */
  suffix?: string;
  containerStyle?: React.CSSProperties;
}

export declare function Input(props: InputProps): React.JSX.Element;
