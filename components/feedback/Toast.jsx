import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Brief black confirmation that slides up and leaves. Never carries an error. */
export function Toast({ children, icon = 'check', action, onDismiss, style, ...rest }) {
  return (
    <div {...rest} role="status" style={{
      display: 'inline-flex', alignItems: 'center', gap: 'var(--space-4)',
      background: 'var(--ink)', color: 'var(--white)',
      padding: '16px 20px', borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-raised)', fontSize: 'var(--size-body)', fontWeight: 600,
      ...style
    }}>
      {icon ? <Icon name={icon} size={24} /> : null}
      <span>{children}</span>
      {action ? (
        <button type="button" onClick={action.onClick} style={{
          appearance: 'none', background: 'transparent', border: 0, color: 'var(--sun)',
          fontFamily: 'var(--font-text)', fontSize: 'var(--size-body)', fontWeight: 800,
          textDecoration: 'underline', textUnderlineOffset: 4, cursor: 'pointer', padding: 0
        }}>{action.label}</button>
      ) : null}
      {onDismiss ? (
        <button type="button" onClick={onDismiss} aria-label="Dismiss" style={{
          appearance: 'none', background: 'transparent', border: 0, color: 'var(--ink-40)', cursor: 'pointer', display: 'flex', padding: 4
        }}><Icon name="x" size={20} /></button>
      ) : null}
    </div>
  );
}
