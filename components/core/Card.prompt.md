Base surface for content blocks: white fill, 1px hairline, 16px radius, no resting shadow.

```jsx
<Card hoverable padded={false}>…</Card>
```

- Set `padded={false}` whenever the card starts with a full-bleed colour block or image.
- `tone="ink"` for an inverted block; `tone="shell"` for a quiet section card.
- Do not add a resting shadow. Depth is reserved for hover, menus, and sheets.
