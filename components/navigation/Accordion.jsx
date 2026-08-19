import React from 'react';
import { Icon } from '../core/Icon.jsx';

/* The panel stays mounted and collapses via grid-template-rows 0fr -> 1fr, so it
   animates to its natural height without any measurement or fixed max-height. */
export function Accordion({ items = [], defaultOpen = -1, style, ...rest }) {
  const [open, setOpen] = React.useState(defaultOpen);
  const [instant, setInstant] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setInstant(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  const ease = instant ? '0ms' : 'var(--duration-base) var(--ease-standard)';

  return (
    <div {...rest} style={{ borderTop: '1px solid var(--border-hairline)', ...style }}>
      {items.map((it, i) => {
        const on = open === i;
        const panelId = 'sc-acc-' + i;
        return (
          <div key={it.title} style={{ borderBottom: '1px solid var(--border-hairline)' }}>
            <button
              type="button" aria-expanded={on} aria-controls={panelId}
              onClick={() => setOpen(on ? -1 : i)}
              style={{
                appearance: 'none', background: 'transparent', border: 0, width: '100%',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)',
                minHeight: 68, padding: '18px 0', textAlign: 'left', cursor: 'pointer',
                fontFamily: 'var(--font-text)', fontSize: 'var(--size-body-lg)', fontWeight: 700, color: 'var(--ink)'
              }}
            >
              <span>{it.title}</span>
              <span aria-hidden="true" style={{
                display: 'flex', flex: 'none',
                transform: on ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform ' + ease
              }}>
                <Icon name={on ? 'minus' : 'plus'} size={26} />
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              style={{
                display: 'grid',
                gridTemplateRows: on ? '1fr' : '0fr',
                opacity: on ? 1 : 0,
                transition: 'grid-template-rows ' + ease + ', opacity ' + ease
              }}
            >
              <div style={{ overflow: 'hidden' }}>
                <div style={{
                  padding: '0 0 22px', fontSize: 'var(--size-body)',
                  lineHeight: 'var(--leading-body)', color: 'var(--ink-80)', maxWidth: 620
                }}>{it.body}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
