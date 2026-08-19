Filter chip / attribute pill. Sentence case, 48px tall.

```jsx
<Tag selected onClick={() => setFilter('skin')}>Skin</Tag>
```

- Selection reads as a 2px black rule plus `--sun-tint` fill, never a coloured fill.
- Omit `onClick` for a read-only attribute pill.
