Renders a Lucide glyph at SUNNYCELLS' 2px stroke, use it anywhere an icon is needed, never a hand-drawn SVG or emoji.

```jsx
<Icon name="shopping-bag" size={28} title="Bag" />
```

- Requires `<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>` on the page.
- `strokeWidth` defaults to 2 and should not be lowered.
- Icons inherit `currentColor`; they are `--ink` in almost every context and never carry an accent colour on their own.
- Omit `title` for decorative icons that sit beside a text label.
