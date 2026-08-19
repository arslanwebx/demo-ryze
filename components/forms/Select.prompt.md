Dropdown for shipping frequency, quantity tiers, country.

```jsx
<Select label="Deliver every" options={['30 days', '60 days', '90 days']} />
```

- Use `RadioOption` instead when there are three or fewer choices and the difference matters (bundle size, flavour).
