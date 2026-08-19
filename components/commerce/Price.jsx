import React from 'react';

const SIZES = { sm: 22, md: 30, lg: 44, xl: 60 };

/**
 * THE PRICE RULE: integers only. This component rounds and never renders cents.
 * Do not build an alternative price display anywhere in the system.
 */
export function Price({ value, compareAt, size = 'md', note, align = 'left', style, ...rest }) {
  const px = SIZES[size] || SIZES.md;
  const fmt = (n) => '$' + Math.round(n).toLocaleString('en-US');
  const saving = compareAt != null ? Math.round(compareAt) - Math.round(value) : 0;
  return (
    <div {...rest} style={{ display: 'flex', flexDirection: 'column', alignItems: align === 'right' ? 'flex-end' : 'flex-start', gap: 4, ...style }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-3)' }}>
        <span style={{
          fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: px,
          letterSpacing: 'var(--tracking-display)', lineHeight: 1, color: 'var(--ink)'
        }}>{fmt(value)}</span>
        {compareAt != null && saving > 0 ? (
          <span style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: Math.round(px * 0.6),
            color: 'var(--ink-60)', textDecoration: 'line-through', letterSpacing: '-0.02em'
          }}>{fmt(compareAt)}</span>
        ) : null}
      </div>
      {note || saving > 0 ? (
        <span style={{ fontSize: 'var(--size-meta)', fontWeight: 700, color: saving > 0 ? 'var(--status-success)' : 'var(--ink-60)' }}>
          {note || 'Save ' + fmt(saving)}
        </span>
      ) : null}
    </div>
  );
}
