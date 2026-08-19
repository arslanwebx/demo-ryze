Every price in the brand goes through this component.

```jsx
<Price value={39} compareAt={49} size="lg" />
```

- Integers only, $49, never $49.00 or $49.99. The component enforces this by rounding.
- Savings render as dollars (Save $10), never percentages.
- Set in the display face at 900 weight so the price reads as a headline, not a label.
