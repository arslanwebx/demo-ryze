import * as React from 'react';

/** Star rating built from Lucide star glyphs, never a unicode star character. */
export interface StarRatingProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 0-5. Displayed to one decimal, the only decimal the brand permits. */
  value?: number;
  /** Review count, comma-grouped. */
  count?: number;
  /** Glyph size in px. Default 20. */
  size?: number;
  /** Show the numeric rating beside the stars. */
  showValue?: boolean;
}

export declare function StarRating(props: StarRatingProps): React.JSX.Element;
