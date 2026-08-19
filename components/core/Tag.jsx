import React from 'react';

/** Pill-shaped filter/attribute chip. The only pill-shaped control in the system. */
export function Tag({ children, selected = false, onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const interactive = typeof onClick === 'function';
  return (
    <button
      {...rest}
      type="button"
      onClick={onClick}
      aria-pressed={interactive ? selected : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        appearance: 'none',
        display: 'inline-flex', alignItems: 'center',
        minHeight: 48, padding: '0 22px',
        fontFamily: 'var(--font-text)', fontSize: 'var(--size-body)', fontWeight: 600,
        color: 'var(--ink)',
        background: selected ? 'var(--sun-tint)' : (hover && interactive ? 'var(--ink-10)' : 'var(--white)'),
        border: selected ? '2px solid var(--ink)' : '1px solid var(--border-hairline)',
        borderRadius: 'var(--radius-pill)',
        cursor: interactive ? 'pointer' : 'default',
        transition: 'background var(--duration-fast) var(--ease-standard)',
        ...style
      }}
    >{children}</button>
  );
}
