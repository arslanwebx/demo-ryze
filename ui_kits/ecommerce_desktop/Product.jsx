function Product({ add }) {
  const { Breadcrumb, Badge, StarRating, SubscriptionBox, Tabs, Accordion, Icon, Card } = window;
  const p = window.SC_DATA.products[0];
  const [cadence, setCadence] = React.useState('30');
  const [tab, setTab] = React.useState('Benefits');

  const panels = {
    Benefits: [
      'Firmer skin at twelve weeks in 92% of the study group.',
      'Hair that breaks less. Measured, not self-reported.',
      'Joints that complain less on stairs. We were surprised too.'
    ],
    Ingredients: [
      'Hydrolysed collagen peptides, types I and III: 10 g.',
      'Vitamin C: 90 mg. Collagen does nothing without it.',
      'Hyaluronic acid: 120 mg. Nothing else. No blend, no filler.'
    ],
    Results: [
      '92% saw firmer skin.',
      '78% saw less breakage.',
      '4 out of 5 stayed subscribed past six months.'
    ]
  };

  return (
    <main style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--space-10) var(--page-gutter) 0' }}>
      <Breadcrumb items={[{ label: 'Home' }, { label: 'Wellness' }, { label: p.name }]} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-16)', marginTop: 'var(--space-6)', alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 120 }}>
          <div style={{
            aspectRatio: '1 / 1', background: 'var(--sun)', borderRadius: 'var(--radius-card)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'
          }}>
            <Badge tone="ink" style={{ position: 'absolute', top: 20, left: 20 }}>{p.badge}</Badge>
            <span style={{
              fontFamily: 'var(--font-label)', fontSize: 'var(--size-meta)', fontWeight: 600, letterSpacing: 'var(--tracking-mono)',
              opacity: 0.5, textAlign: 'center', lineHeight: 1.8
            }}>Product cutout goes here</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-3)', marginTop: 'var(--space-3)' }}>
            {['sun', 'sun-tint', 'shell', 'sun'].map((c, i) => (
              <div key={i} style={{
                aspectRatio: '1 / 1', background: 'var(--' + c + ')', borderRadius: 'var(--radius-image)',
                border: i === 0 ? '2px solid var(--ink)' : '1px solid var(--border-hairline)', cursor: 'pointer'
              }} />
            ))}
          </div>
        </div>

        <div>
          <div style={{
            fontFamily: 'var(--font-label)', fontSize: 'var(--size-meta)', fontWeight: 600, letterSpacing: 'var(--tracking-mono)',
            color: 'var(--ink-60)'
          }}>{p.spec}</div>
          <h1 style={{
            margin: 'var(--space-3) 0 0', fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 'var(--size-h1)', letterSpacing: 'var(--tracking-display)', lineHeight: 1.02, textTransform: 'uppercase'
          }}>{p.name}</h1>
          <p style={{ margin: 'var(--space-4) 0 0', fontSize: 'var(--size-body-lg)', lineHeight: 'var(--leading-body)', color: 'var(--ink-80)', maxWidth: 520 }}>
            Collagen you drink, not collagen you hope for. Three types, one shot, sixty seconds.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-5)', margin: 'var(--space-6) 0 var(--space-8)' }}>
            <StarRating value={p.rating} count={p.reviews} showValue size={22} />
          </div>

          <SubscriptionBox
            compareAt={p.price}
            value={cadence}
            onChange={setCadence}
            onAdd={(line) => add(p, line)}
            plans={p.plans}
          />

          <div style={{ marginTop: 'var(--space-12)' }}>
            <Tabs items={['Benefits', 'Ingredients', 'Results']} value={tab} onChange={setTab} />
            <ul style={{ margin: 'var(--space-6) 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {panels[tab].map((t) => (
                <li key={t} style={{ display: 'flex', gap: 'var(--space-3)', fontSize: 'var(--size-body)', lineHeight: 'var(--leading-body)' }}>
                  <Icon name="check" size={24} /><span>{t}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 'var(--space-6)', fontFamily: 'var(--font-label)', fontSize: 'var(--size-meta)', fontWeight: 600, letterSpacing: 'var(--tracking-mono)', color: 'var(--ink-60)' }}>
              In a 12-week study of 84 women, aged 35 to 60
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 'var(--section-gap)' }}>
        <h2 style={{
          margin: '0 0 var(--space-8)', fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 'var(--size-h1)', letterSpacing: 'var(--tracking-display)', textTransform: 'uppercase'
        }}>What she said</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--grid-gap)' }}>
          {[['4.7', 'Six weeks in, my jawline came back. I did not expect to notice it that fast.', 'Dana, 52'],
            ['5.0', 'The taste is the whole reason I kept going. No chalk, no shaker, no ritual to dread.', 'Marisol, 47'],
            ['4.0', 'I wanted the ingredient list, not the promise. This is the only one that gave me both.', 'Ruth, 61']].map(([r, q, n]) => (
            <Card key={n}>
              <StarRating value={parseFloat(r)} size={20} />
              <p style={{ margin: 'var(--space-4) 0 var(--space-5)', fontSize: 'var(--size-body)', lineHeight: 'var(--leading-body)' }}>{q}</p>
              <div style={{ fontSize: 'var(--size-meta)', fontWeight: 700, color: 'var(--ink-60)' }}>{n}</div>
            </Card>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 'var(--section-gap)' }}>
        <Accordion items={window.SC_DATA.faqs} defaultOpen={0} />
      </div>
    </main>
  );
}

window.SCKit = Object.assign(window.SCKit || {}, { Product });
