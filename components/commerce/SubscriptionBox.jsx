import React from 'react';
import { Button } from '../core/Button.jsx';
import { Badge } from '../core/Badge.jsx';
import { Icon } from '../core/Icon.jsx';
import { OfferFlag, firstOrderPrice } from '../core/OfferFlag.jsx';

/**
 * The buy box. SUNNYCELLS sells subscriptions only, so the choice on offer is
 * DELIVERY CADENCE, never subscribe-vs-one-time. There is no one-time option to
 * decline, and no countdown, scarcity line, or shamed opt-out anywhere in it.
 */
export function SubscriptionBox({
  plans = [], value, onChange, compareAt, onAdd, ctaLabel = 'Start my routine',
  offerPercent = 50,
  reassurances = [
    ['truck', 'Free shipping, always'],
    ['repeat', 'Skip, change, or cancel anytime'],
    ['shield-check', 'Sixty-day returns, opened or not']
  ],
  style, ...rest
}) {
  const selectedId = value != null ? value : (plans[0] && plans[0].id);
  const plan = plans.find(function (p) { return p.id === selectedId; }) || plans[0] || {};
  const price = Math.round(plan.price || 0);
  const was = compareAt != null ? Math.round(compareAt) : null;
  const saving = was != null ? was - price : 0;
  const first = offerPercent ? firstOrderPrice(price, offerPercent) : null;

  return (
    <div {...rest} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', ...style }}>
      {first != null ? <OfferFlag percent={offerPercent} /> : null}

      <div>
        <div style={{
          fontFamily: 'var(--font-label)', fontSize: 'var(--size-meta)', fontWeight: 600,
          letterSpacing: 'var(--tracking-mono)', color: 'var(--ink-60)', marginBottom: 'var(--space-3)'
        }}>Choose how often it arrives</div>

        <div role="radiogroup" aria-label="Delivery frequency" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          {plans.map(function (p) {
            const on = p.id === selectedId;
            const pPrice = Math.round(p.price);
            const pSave = compareAt != null ? Math.round(compareAt) - pPrice : 0;
            return (
              <label key={p.id} style={{
                position: 'relative', display: 'flex', alignItems: 'center', gap: 'var(--space-4)',
                minHeight: 76, padding: 'var(--space-4) var(--space-5)',
                background: on ? 'var(--sun-tint)' : 'var(--white)',
                border: '2px solid ' + (on ? 'var(--ink)' : 'var(--border-hairline)'),
                borderRadius: 'var(--radius-md)', cursor: 'pointer',
                transition: 'background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)'
              }}>
                <input
                  type="radio" name="sc-cadence" checked={on}
                  onChange={function () { onChange && onChange(p.id); }}
                  style={{ position: 'absolute', opacity: 0, width: 1, height: 1 }}
                />
                <span aria-hidden="true" style={{
                  width: 28, height: 28, flex: 'none', borderRadius: '50%',
                  border: '2px solid ' + (on ? 'var(--ink)' : 'var(--border-input)'),
                  background: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>{on ? <span style={{ width: 14, height: 14, borderRadius: '50%', background: 'var(--ink)' }} /> : null}</span>

                <span style={{ flex: 1 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 'var(--size-body)', fontWeight: 700 }}>{p.label}</span>
                    {p.flag ? <Badge tone="sun">{p.flag}</Badge> : null}
                  </span>
                  {p.note ? (
                    <span style={{ display: 'block', fontSize: 'var(--size-meta)', color: 'var(--ink-60)', marginTop: 2 }}>{p.note}</span>
                  ) : null}
                </span>

                <span style={{ textAlign: 'right', flex: 'none' }}>
                  <span style={{
                    display: 'block', fontFamily: 'var(--font-display)', fontWeight: 800,
                    fontSize: 26, letterSpacing: '-0.02em'
                  }}>{'$' + pPrice}</span>
                  {pSave > 0 ? (
                    <span style={{ display: 'block', fontSize: 'var(--size-meta)', fontWeight: 700, color: 'var(--status-success)' }}>
                      {'Save $' + pSave}
                    </span>
                  ) : null}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
          <span style={{
            fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 44,
            letterSpacing: 'var(--tracking-display)', lineHeight: 1
          }}>{'$' + (first != null ? first : price)}</span>
          <span style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 26,
            color: 'var(--ink-60)', textDecoration: 'line-through', letterSpacing: '-0.02em'
          }}>{'$' + (first != null ? price : was)}</span>
          <span style={{ fontSize: 'var(--size-body)', fontWeight: 600, color: 'var(--ink-60)' }}>
            {first != null ? 'first ' + (plan.unit || 'month') : (plan.per || 'per delivery')}
          </span>
        </div>
        {first != null ? (
          <div style={{ marginTop: 'var(--space-2)', fontSize: 'var(--size-body)', fontWeight: 600, color: 'var(--ink-80)' }}>
            {'Then $' + price + ' ' + (plan.per || 'per month') + ', and you can change it any time.'}
          </div>
        ) : null}
      </div>

      <Button
        size="lg" fullWidth
        onClick={function () {
          onAdd && onAdd({ plan: plan, price: price, firstPrice: first != null ? first : price });
        }}
      >{ctaLabel}</Button>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        {reassurances.map(function (r) {
          return (
            <span key={r[1]} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', fontSize: 'var(--size-meta)', fontWeight: 600 }}>
              <Icon name={r[0]} size={20} />{r[1]}
            </span>
          );
        })}
      </div>
    </div>
  );
}
