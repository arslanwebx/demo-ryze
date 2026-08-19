import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Breadcrumb({ items = [], style, ...rest }) {
  return (
    <nav {...rest} aria-label="Breadcrumb" style={{
      display: 'flex', alignItems: 'center', gap: 'var(--space-2)', flexWrap: 'wrap', ...style
    }}>
      {items.map((it, i) => (
        <React.Fragment key={it.label}>
          {i > 0 ? <span style={{ color: 'var(--ink-40)', display: 'flex' }}><Icon name="chevron-right" size={18} /></span> : null}
          {i === items.length - 1 ? (
            <span aria-current="page" style={{ fontSize: 'var(--size-meta)', fontWeight: 700, color: 'var(--ink)' }}>{it.label}</span>
          ) : (
            <a href={it.href || '#'} style={{ fontSize: 'var(--size-meta)', fontWeight: 600, color: 'var(--ink-60)', textDecoration: 'none' }}>{it.label}</a>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
