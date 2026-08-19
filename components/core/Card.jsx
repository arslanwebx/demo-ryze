import React from 'react';

/** White surface, 1px hairline, 16px corners, no shadow at rest. */
export function Card({ children, hoverable = false, padded = true, tone = 'white', style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const bg = tone === 'shell' ? 'var(--surface-sunk)' : tone === 'ink' ? 'var(--surface-invert)' : 'var(--surface-card)';
  return (
    <div
      {...rest}
      onMouseEnter={hoverable ? () => setHover(true) : undefined}
      onMouseLeave={hoverable ? () => setHover(false) : undefined}
      style={{
        background: bg,
        color: tone === 'ink' ? 'var(--white)' : 'var(--ink)',
        border: '1px solid ' + (tone === 'ink' ? 'var(--ink)' : 'var(--border-hairline)'),
        borderRadius: 'var(--radius-card)',
        padding: padded ? 'var(--space-6)' : 0,
        overflow: 'hidden',
        boxShadow: hover ? 'var(--shadow-card)' : 'none',
        transform: hover ? 'translateY(var(--hover-lift))' : 'none',
        transition: 'box-shadow var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
        ...style
      }}
    >{children}</div>
  );
}
