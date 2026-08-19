The brand's core merchandising unit. Use it for every product grid.

```jsx
<ProductCard family="topical" name="SC-04 Barrier Cream" subtitle="Ceramides + squalane"
  price={54} rating={4.6} reviewCount={3820} badge="Bestseller" onAdd={add} />
```

- The family prop drives both the block colour and the CTA fill. Never set them independently, and never mix two family colours in one card.
- Omit the image prop and the block renders an honest "product cutout goes here" placeholder; do not substitute stock art.
- Prices are integers; the card renders savings in dollars.
