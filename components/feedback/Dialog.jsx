import React from 'react';
import { IconButton } from '../core/IconButton.jsx';

/** Centred modal on desktop, bottom sheet on mobile (set variant="sheet"). */
export function Dialog({ open = true, title, children, footer, onClose, variant = 'modal', width = 520, style, ...rest }) {
  if (!open) return null;
  const sheet = variant === 'sheet';
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 100,
      background: 'rgba(13,13,12,0.5)',
      display: 'flex', alignItems: sheet ? 'flex-end' : 'center', justifyContent: 'center',
      padding: sheet ? 0 : 'var(--space-6)'
    }} onClick={onClose}>
      <div
        {...rest}
        role="dialog" aria-modal="true" aria-label={title}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: sheet ? '100%' : '100%', maxWidth: sheet ? 'none' : width,
          background: 'var(--surface-card)',
          borderRadius: sheet ? 'var(--radius-sheet) var(--radius-sheet) 0 0' : 'var(--radius-sheet)',
          boxShadow: sheet ? 'var(--shadow-sheet)' : 'var(--shadow-raised)',
          overflow: 'hidden', ...style
        }}
      >
        <div style={{
          display: 'flex', alignItems: 'center', gap: 'var(--space-4)',
          padding: 'var(--space-5) var(--space-5) var(--space-4) var(--space-6)'
        }}>
          <h2 style={{
            flex: 1, margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'var(--size-h4)', letterSpacing: 'var(--tracking-heading)'
          }}>{title}</h2>
          {onClose ? <IconButton icon="x" label="Close" size="sm" onClick={onClose} /> : null}
        </div>
        <div style={{ padding: '0 var(--space-6) var(--space-6)', fontSize: 'var(--size-body)', lineHeight: 'var(--leading-body)' }}>
          {children}
        </div>
        {footer ? (
          <div style={{
            display: 'flex', gap: 'var(--space-3)', padding: 'var(--space-5) var(--space-6)',
            borderTop: '1px solid var(--border-hairline)', background: 'var(--surface-sunk)'
          }}>{footer}</div>
        ) : null}
      </div>
    </div>
  );
}
