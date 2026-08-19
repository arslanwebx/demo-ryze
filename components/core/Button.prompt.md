The primary action control, all-caps, 12px corners, minimum 48px tall.

```jsx
<Button variant="accent" size="lg" fullWidth price={49}>Add to bag</Button>
```

- `variant="primary"` (black) is the default CTA everywhere except on a product card, where the button takes that product's family colour (`accent` / `zest` / `sky` / `sprout`).
- `price` renders `· $49`, always an integer; the component rounds and never shows cents.
- `outline` is the secondary action; `quiet` is for tertiary/inline actions only.
- Never override `borderRadius` to a pill, that is off-brand.
