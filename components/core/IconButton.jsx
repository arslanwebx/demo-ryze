import React from 'react';
import { Icon } from './Icon.jsx';

const SIZES = { sm: 48, md: 52, lg: 56 };

export function IconButton({ icon, label, size = 'md', variant = 'quiet', disabled = false, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const px = SIZES[size] || SIZES.md;
  const solid = variant === 'solid';
  return (
    <button
      {...rest}
      type="button"
      aria-label={label}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        appearance: 'none',
        width: px, height: px,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: 'var(--radius-button)',
        border: variant === 'outline' ? '2px solid var(--ink)' : '2px solid transparent',
        background: disabled ? 'var(--action-disabled-bg)'
          : solid ? (hover ? 'var(--ink-80)' : 'var(--ink)')
          : (hover ? 'var(--ink-10)' : 'transparent'),
        color: disabled ? 'var(--action-disabled-fg)' : solid ? 'var(--white)' : 'var(--ink)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background var(--duration-fast) var(--ease-standard)',
        ...style
      }}
    >
      <Icon name={icon} size={size === 'sm' ? 22 : 26} />
    </button>
  );
}
