import React from 'react';

/**
 * The standing acquisition offer: 50% off the first order. This is the ONLY place
 * the brand states a saving as a percentage, and the only offer it runs. It is a
 * permanent term, not a promotion, so it never carries a deadline or a countdown.
 */
export function OfferFlag({ percent = 50, label = 'off first order', tone = 'ink', size = 'md', style, ...rest }) {
  const solid = tone === 'ink';
  const sm = size === 'sm';
  return (
    <span {...rest} style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      height: sm ? 32 : 40, padding: sm ? '0 12px' : '0 16px',
      background: solid ? 'var(--ink)' : 'var(--sun)',
      color: solid ? 'var(--white)' : 'var(--ink)',
      borderRadius: 'var(--radius-xs)',
      fontFamily: 'var(--font-text)', fontWeight: 800,
      fontSize: sm ? 'var(--size-meta)' : 'var(--size-body)',
      letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase',
      lineHeight: 1, whiteSpace: 'nowrap', ...style
    }}>{percent + '% ' + label}</span>
  );
}

/** Half price, rounded DOWN to a whole dollar so the figure stays an integer and
    the rounding never goes against the customer. $39 becomes $19, not $20. */
export function firstOrderPrice(price, percent) {
  const off = (percent == null ? 50 : percent) / 100;
  return Math.floor(Math.round(price) * (1 - off));
}
