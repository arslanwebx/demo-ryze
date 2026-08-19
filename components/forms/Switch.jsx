import React from 'react';

export function Switch({ label, description, checked = false, onChange, disabled = false, style, ...rest }) {
  return (
    <label style={{
      display: 'flex', gap: 'var(--space-4)', alignItems: 'center',
      minHeight: 'var(--tap-min)', cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1, ...style
    }}>
      <input
        {...rest} type="checkbox" role="switch" checked={checked} disabled={disabled}
        onChange={(e) => onChange && onChange(e.target.checked, e)}
        style={{ position: 'absolute', opacity: 0, width: 1, height: 1 }}
      />
      <span aria-hidden="true" style={{
        width: 60, height: 34, flex: 'none', borderRadius: 'var(--radius-pill)',
        background: checked ? 'var(--ink)' : 'var(--ink-20)',
        border: '2px solid ' + (checked ? 'var(--ink)' : 'var(--border-input)'),
        display: 'flex', alignItems: 'center',
        padding: 2, transition: 'background var(--duration-fast) var(--ease-standard)'
      }}>
        <span style={{
          width: 26, height: 26, borderRadius: '50%', background: 'var(--white)',
          transform: checked ? 'translateX(26px)' : 'translateX(0)',
          transition: 'transform var(--duration-fast) var(--ease-standard)'
        }} />
      </span>
      <span>
        <span style={{ display: 'block', fontSize: 'var(--size-body)', fontWeight: 600 }}>{label}</span>
        {description ? <span style={{ display: 'block', fontSize: 'var(--size-meta)', color: 'var(--ink-60)', marginTop: 2 }}>{description}</span> : null}
      </span>
    </label>
  );
}
