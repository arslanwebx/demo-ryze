Modal on desktop, bottom sheet on mobile, bag, size guide, ingredient detail.

```jsx
<Dialog title="Added to bag" onClose={close} footer={<Button fullWidth>Checkout</Button>}>…</Dialog>
```

- Scrim is flat `rgba(13,13,12,0.5)`, never blurred.
- `variant="sheet"` for every mobile use.
- Title is Sentence case, not caps.
