import React from 'react';
import { Button } from '../core/Button.jsx';
import { Badge } from '../core/Badge.jsx';
import { StarRating } from './StarRating.jsx';
import { OfferFlag, firstOrderPrice } from '../core/OfferFlag.jsx';

const BLOCKS = {
  ingestible: { fill: 'var(--sun)',    btn: 'accent' },
  topical:    { fill: 'var(--zest)',   btn: 'zest' },
  hair:       { fill: 'var(--sky)',    btn: 'sky' },
  wellness:   { fill: 'var(--sprout)', btn: 'sprout' }
};

/**
 * The brand's signature merchandising unit:
 * flat family-coloured block, white info well, full-width CTA in the family colour.
 * The image prop should be a transparent-background product cutout; when absent the
 * block renders a typographic placeholder rather than fake art.
 */
export function ProductCard({
  name, subtitle, family = 'ingestible', price, compareAt, rating, reviewCount,
  badge, flavor, image, ctaLabel = 'Add to bag', onAdd, blockHeight = 260,
  per = 'per month', offerPercent = 50, style, ...rest
}) {
  const first = offerPercent ? firstOrderPrice(price, offerPercent) : null;
  const [hover, setHover] = React.useState(false);
  const b = BLOCKS[family] || BLOCKS.ingestible;
  return (
    <div
      {...rest}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column',
        background: 'var(--surface-card)',
        border: '1px solid var(--border-hairline)',
        borderRadius: 'var(--radius-card)',
        overflow: 'hidden',
        boxShadow: hover ? 'var(--shadow-card)' : 'none',
        transform: hover ? 'translateY(var(--hover-lift))' : 'none',
        transition: 'box-shadow var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
        ...style
      }}
    >
      <div style={{
        position: 'relative', height: blockHeight, background: b.fill,
        display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'
      }}>
        {badge ? <div style={{ position: 'absolute', top: 14, left: 14 }}><Badge tone="ink">{badge}</Badge></div> : null}
        {first != null ? (
          <div style={{ position: 'absolute', bottom: 14, left: 14 }}>
            <OfferFlag percent={offerPercent} size="sm" />
          </div>
        ) : null}
        {image ? (
          <img src={image} alt={name} style={{ maxHeight: '116%', maxWidth: '78%', objectFit: 'contain', marginTop: '-6%' }} />
        ) : (
          <div style={{
            fontFamily: 'var(--font-label)', fontSize: 'var(--size-meta)', fontWeight: 600,
            letterSpacing: 'var(--tracking-mono)',
            color: 'var(--ink)', opacity: 0.5, textAlign: 'center', padding: '0 24px', lineHeight: 1.6
          }}>Product cutout goes here</div>
        )}
      </div>

      <div style={{ padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', flex: 1 }}>
        {flavor ? (
          <div style={{
            fontFamily: 'var(--font-label)', fontSize: 'var(--size-meta)', fontWeight: 600,
            letterSpacing: 'var(--tracking-mono)', color: 'var(--ink-60)'
          }}>{flavor}</div>
        ) : null}
        <h3 style={{
          margin: 0, fontFamily: 'var(--font-text)', fontSize: 'var(--size-body-lg)',
          fontWeight: 800, lineHeight: 1.25, letterSpacing: '-0.01em'
        }}>{name}</h3>
        {subtitle ? (
          <p style={{ margin: 0, fontSize: 'var(--size-body)', color: 'var(--ink-60)', lineHeight: 1.4 }}>{subtitle}</p>
        ) : null}
        {rating != null ? (
          <div style={{ marginTop: 'auto', paddingTop: 'var(--space-3)' }}>
            <StarRating value={rating} count={reviewCount} size={18} />
          </div>
        ) : <div style={{ marginTop: 'auto' }} />}
      </div>

      <div style={{ padding: '0 var(--space-5) var(--space-5)' }}>
        <div style={{
          display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
          gap: 'var(--space-3)', marginBottom: 'var(--space-3)'
        }}>
          {first != null
            ? <span style={{ fontSize: 'var(--size-meta)', fontWeight: 700 }}>{'Then $' + Math.round(price) + ' ' + per}</span>
            : per ? <span style={{ fontSize: 'var(--size-meta)', fontWeight: 600, color: 'var(--ink-60)' }}>{per}</span> : <span />}
          {compareAt != null ? (
            <span style={{ fontSize: 'var(--size-meta)', fontWeight: 700, color: 'var(--status-success)' }}>
              {'Save $' + (Math.round(compareAt) - Math.round(price))}
            </span>
          ) : null}
        </div>
        <Button
          variant={b.btn} fullWidth
          price={first != null ? first : price}
          onClick={function () {
            onAdd && onAdd({ price: Math.round(price), firstPrice: first != null ? first : Math.round(price) });
          }}
        >{ctaLabel}</Button>
      </div>
    </div>
  );
}
