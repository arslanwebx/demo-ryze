FAQ and detail disclosure.

```jsx
<Accordion items={[{ title: 'How soon will I see results?', body: '…' }]} />
```

- Plus / minus glyphs, never a rotating chevron.
- One panel open at a time.
- Row height clears 68px so the whole row is an easy target.
- The panel animates open over `--duration-base` by collapsing its grid row, so it eases to its natural height with no fixed `max-height` to outgrow. It drops to an instant open under `prefers-reduced-motion`.
