Icon-only control for header utilities (search, account, bag) and dismiss actions.

```jsx
<IconButton icon="shopping-bag" label="Bag" />
```

- `label` is required and becomes the `aria-label`; this is the only place icons appear without visible text.
- Minimum rendered size is 48px so it clears the tap-target floor.
- `variant="quiet"` in headers, `"solid"` on light imagery, `"outline"` beside outline buttons.
