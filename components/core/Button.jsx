import React from 'react';
import { Icon } from './Icon.jsx';

const HEIGHTS = { sm: 'var(--control-h-sm)', md: 'var(--control-h-md)', lg: 'var(--control-h-lg)' };
const FONTS = { sm: '17px', md: '18px', lg: '20px' };
const PADS = { sm: '0 20px', md: '0 28px', lg: '0 36px' };

const FILLS = {
  primary: { bg: 'var(--action-primary-bg)', fg: 'var(--action-primary-fg)', press: 'var(--action-primary-bg-press)', border: 'transparent' },
  accent:  { bg: 'var(--action-accent-bg)',  fg: 'var(--action-accent-fg)',  press: 'var(--action-accent-bg-press)',  border: 'transparent' },
  zest:    { bg: 'var(--zest)',    fg: 'var(--ink)', press: 'var(--zest-press)',    border: 'transparent' },
  sky:     { bg: 'var(--sky)',     fg: 'var(--ink)', press: 'var(--sky-press)',     border: 'transparent' },
  sprout:  { bg: 'var(--sprout)',  fg: 'var(--ink)', press: 'var(--sprout-press)',  border: 'transparent' },
  outline: { bg: 'transparent',    fg: 'var(--ink)', press: 'var(--ink-10)',        border: 'var(--ink)' },
  quiet:   { bg: 'transparent',    fg: 'var(--ink)', press: 'var(--ink-10)',        border: 'transparent' }
};

/** Family colour -> button fill, so an add-to-bag button can match its product block. */
export function Button({
  children, variant = 'primary', size = 'md', fullWidth = false, disabled = false,
  iconLeft, iconRight, price, as = 'button', style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const f = FILLS[variant] || FILLS.primary;
  const Tag = as;

  const base = {
    appearance: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-3)',
    width: fullWidth ? '100%' : undefined,
    minHeight: HEIGHTS[size],
    padding: PADS[size],
    fontFamily: 'var(--font-text)',
    fontSize: FONTS[size],
    fontWeight: 800,
    letterSpacing: 'var(--tracking-caps)',
    textTransform: 'uppercase',
    textDecoration: 'none',
    lineHeight: 1,
    whiteSpace: 'nowrap',
    color: disabled ? 'var(--action-disabled-fg)' : f.fg,
    background: disabled ? 'var(--action-disabled-bg)' : (hover || down ? f.press : f.bg),
    border: '2px solid ' + (disabled ? 'transparent' : f.border),
    borderRadius: 'var(--radius-button)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transform: down && !disabled ? 'scale(var(--press-scale))' : 'none',
    transition: 'background var(--duration-fast) var(--ease-standard), transform var(--duration-instant) var(--ease-standard)',
    ...style
  };

  return (
    <Tag
      {...rest}
      disabled={as === 'button' ? disabled : undefined}
      aria-disabled={disabled || undefined}
      style={base}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setDown(false); }}
      onMouseDown={() => setDown(true)}
      onMouseUp={() => setDown(false)}
    >
      {iconLeft ? <Icon name={iconLeft} size={size === 'lg' ? 24 : 20} /> : null}
      <span>{children}</span>
      {price != null ? (
        <React.Fragment>
          <span aria-hidden="true" style={{ opacity: 0.45, fontWeight: 700 }}>·</span>
          <span>{'$' + Math.round(price)}</span>
        </React.Fragment>
      ) : null}
      {iconRight ? <Icon name={iconRight} size={size === 'lg' ? 24 : 20} /> : null}
    </Tag>
  );
}
