import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Select({ label, hint, options = [], id, style, containerStyle, ...rest }) {
  const auto = React.useId ? React.useId() : 'sel';
  const selId = id || 'sc-' + auto;
  const [focus, setFocus] = React.useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', ...containerStyle }}>
      {label ? (
        <label htmlFor={selId} style={{ fontSize: 'var(--size-body)', fontWeight: 700, color: 'var(--ink)' }}>{label}</label>
      ) : null}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <select
          {...rest}
          id={selId}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            appearance: 'none', width: '100%', minHeight: 'var(--control-h-md)',
            padding: '0 56px 0 18px',
            fontFamily: 'var(--font-text)', fontSize: 'var(--size-body)', fontWeight: 600,
            color: 'var(--ink)', background: 'var(--white)',
            border: '2px solid ' + (focus ? 'var(--ink)' : 'var(--border-input)'),
            borderRadius: 'var(--radius-input)', outline: 'none', cursor: 'pointer',
            ...style
          }}
        >
          {options.map((o) => {
            const val = typeof o === 'string' ? o : o.value;
            const lab = typeof o === 'string' ? o : o.label;
            return <option key={val} value={val}>{lab}</option>;
          })}
        </select>
        <span style={{ position: 'absolute', right: 18, pointerEvents: 'none', display: 'flex' }}>
          <Icon name="chevron-down" size={24} />
        </span>
      </div>
      {hint ? <div style={{ fontSize: 'var(--size-meta)', color: 'var(--ink-60)', fontWeight: 500 }}>{hint}</div> : null}
    </div>
  );
}
