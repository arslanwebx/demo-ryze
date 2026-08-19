The buy box on every PDP. SUNNYCELLS sells subscriptions only.

```jsx
<SubscriptionBox
  compareAt={49}
  value={cadence}
  onChange={setCadence}
  plans={[
    { id: '30', label: 'Every month', price: 39, note: '30 servings', flag: 'Most chosen', per: 'per month' },
    { id: '60', label: 'Every 2 months', price: 37, note: '60 servings', per: 'per month' },
    { id: '90', label: 'Every 3 months', price: 35, note: '90 servings', per: 'per month' }
  ]}
/>
```

- **Leads with the standing 50% first-order offer.** The headline figure is the halved price, with `Then $39 per month` stated directly beneath it. Never show the first price without the ongoing one.
- **There is no one-time option.** The choice is cadence. Do not reintroduce a subscribe-vs-one-time toggle; `SubscribeToggle` was removed from the system for this reason.
- Two or three cadences maximum, longest interval cheapest per month.
- At most one plan carries a `flag`, and it says `Most chosen`, never `Best value` or `Limited time`.
- Savings are computed from `compareAt` in whole dollars. Never a percentage, never a per-day or per-serving figure, both of which force a decimal.
- The reassurance rows are part of the box, not decoration. Cancellation terms sit above the fold, next to the price.
- No countdown, no stock counter, no "sale ends in".
