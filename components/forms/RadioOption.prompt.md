A large choice card for bundle size, flavour, or delivery cadence.

```jsx
<RadioOption name="bundle" label="Two bottles" description="Sixty servings." price={74} priceNote="per delivery" selected onSelect={…} badge={<Badge tone="sun">Save $8</Badge>} />
```

- **Not for purchase mode.** SUNNYCELLS sells subscriptions only; the buy box is `SubscriptionBox`.
- Savings in the badge are **dollars, not percentages**.
- Prices are integers.
- Two or three options; more belongs in a `Select`.
