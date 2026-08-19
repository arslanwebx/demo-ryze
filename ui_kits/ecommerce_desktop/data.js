/* Placeholder catalogue for the SUNNYCELLS UI kits.
   Names, copy, prices and review counts are invented to brand voice, not real SKUs.
   Every price is an integer, per the brand's price rule. */
function plansFor(base) {
  return [
    { id: '30', label: 'Every month', price: base, note: 'One bottle every month', flag: 'Most chosen', per: 'per month', unit: 'month' },
    { id: '60', label: 'Every 2 months', price: base - 2, note: 'Two bottles every 2 months', per: 'per month', unit: 'month' },
    { id: '90', label: 'Every 3 months', price: base - 4, note: 'Three bottles every 3 months', per: 'per month', unit: 'month' }
  ];
}

window.SC_DATA = {
  products: [
    { id: 'sc12', family: 'ingestible', name: 'SC-12 Liquid Collagen', subtitle: 'Types I + III + vitamin C',
      flavor: 'Mango', price: 49, sub: 39, rating: 4.7, reviews: 12480, badge: 'Bestseller',
      spec: '500 ml · 30 servings', category: 'Wellness' },
    { id: 'sc04', family: 'topical', name: 'SC-04 Barrier Cream', subtitle: 'Ceramides + squalane',
      price: 54, sub: 44, rating: 4.6, reviews: 3820, category: 'Skin', spec: '50 ml · 60 days' },
    { id: 'sc21', family: 'hair', name: 'SC-21 Scalp Serum', subtitle: 'Peptides + caffeine',
      price: 59, sub: 47, rating: 4.5, reviews: 1337, badge: 'New', category: 'Hair', spec: '60 ml · 45 days' },
    { id: 'sc07', family: 'wellness', name: 'SC-07 Daily Cell Powder', subtitle: 'NMN + magnesium',
      price: 39, sub: 31, rating: 4.4, reviews: 2104, category: 'Wellness', spec: '150 g · 30 servings' },
    { id: 'sc02', family: 'topical', name: 'SC-02 Morning SPF 40', subtitle: 'Mineral filter + niacinamide',
      price: 44, sub: 35, rating: 4.8, reviews: 6210, category: 'Skin', spec: '50 ml · 90 days' },
    { id: 'sc18', family: 'hair', name: 'SC-18 Density Shampoo', subtitle: 'Biotin + rice protein',
      price: 32, sub: 26, rating: 4.3, reviews: 890, category: 'Hair', spec: '300 ml · 60 days' }
  ],
  faqs: [
    { title: 'How soon will I see results?', body: 'Most women notice firmer skin around week six. The twelve-week study is where our numbers come from. We do not quote week-one anecdotes.' },
    { title: 'Can I take this alongside my other supplements?', body: 'Yes. SC-12 has no stimulants and no proprietary blend. The full ingredient list is on every bottle and on this page.' },
    { title: 'What happens if it is not for me?', body: 'Send it back within sixty days, opened or not. We refund the order in full.' },
    { title: 'Can I skip or cancel a subscription?', body: 'Any time, from your account, with no phone call and no retention flow.' }
  ]
};

/* Every plan price is a PER-MONTH equivalent, whatever the delivery interval, so
   "then $35 per month" reads true on all three cadences.
   Subscription only: `price` is the undiscounted list figure used as compareAt,
   `sub` is what a subscriber pays each month, and `plans` are the cadences. */
window.SC_DATA.products.forEach(function (p) { p.plans = plansFor(p.sub); });
