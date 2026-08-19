import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Lucide stars + review count. The rating is the only decimal in the system. */
export function StarRating({ value = 0, count, size = 20, showValue = false, style, ...rest }) {
  const pct = Math.max(0, Math.min(100, (value / 5) * 100));
  const row = (color, solid) => (
    <span style={{ display: 'flex', gap: 2, color: color }}>
      {[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" size={size} fill={solid ? 'currentColor' : 'none'} />)}
    </span>
  );
  return (
    <div {...rest} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', ...style }}
      aria-label={value + ' out of 5' + (count ? ', ' + count.toLocaleString('en-US') + ' reviews' : '')}>
      <span style={{ position: 'relative', display: 'inline-flex' }} aria-hidden="true">
        {row('var(--ink-20)', false)}
        <span style={{ position: 'absolute', inset: 0, width: pct + '%', overflow: 'hidden' }}>
          {row('var(--ink)', true)}
        </span>
      </span>
      {showValue ? <span style={{ fontSize: 'var(--size-meta)', fontWeight: 800 }}>{value.toFixed(1)}</span> : null}
      {count != null ? (
        <span style={{ fontSize: 'var(--size-meta)', fontWeight: 500, color: 'var(--ink-60)' }}>
          {count.toLocaleString('en-US')} reviews
        </span>
      ) : null}
    </div>
  );
}
