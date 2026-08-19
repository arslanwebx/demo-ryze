The standing acquisition offer. SUNNYCELLS leads with 50% off the first order everywhere.

```jsx
<OfferFlag />                       // 50% OFF FIRST ORDER
<OfferFlag tone="sun" size="sm" />
{firstOrderPrice(39)}               // 19
```

- **The one percentage in the brand.** Every other saving is stated in dollars (`Save $10`).
- It is a **standing term, not a promotion**: no countdown, no "today only", no expiry date, no urgency copy. That is what makes it credible.
- Always derive the discounted figure with `firstOrderPrice()`, which rounds **down** to a whole dollar so the integer rule holds and the rounding favours the customer.
- Always show what happens next to it: `$19 first month, then $39`. Never state the first price alone.
