import React from 'react';
import { Icon } from '../core/Icon.jsx';

const TONES = {
  ink:     { bg: 'var(--ink)',     fg: 'var(--white)' },
  sun:     { bg: 'var(--sun)',     fg: 'var(--ink)' },
  success: { bg: 'var(--status-success-tint)', fg: 'var(--status-success)' },
  error:   { bg: 'var(--status-error-tint)',   fg: 'var(--status-error)' }
};

/** Full-bleed announcement strip for shipping terms, order status, service notices. */
export function Banner({ children, tone = 'ink', icon, onDismiss, style, ...rest }) {
  const t = TONES[tone] || TONES.ink;
  return (
    <div {...rest} role="status" style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-3)',
      minHeight: 52, padding: '10px 20px',
      background: t.bg, color: t.fg,
      fontSize: 'var(--size-meta)', fontWeight: 700,
      letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase',
      textAlign: 'center', ...style
    }}>
      {icon ? <Icon name={icon} size={20} /> : null}
      <span>{children}</span>
      {onDismiss ? (
        <button type="button" onClick={onDismiss} aria-label="Dismiss"
          style={{ marginLeft: 'auto', appearance: 'none', background: 'transparent', border: 0, color: 'inherit', cursor: 'pointer', display: 'flex', padding: 8 }}>
          <Icon name="x" size={20} />
        </button>
      ) : null}
    </div>
  );
}
