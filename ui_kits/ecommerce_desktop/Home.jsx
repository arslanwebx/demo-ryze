function Home({ go, add }) {
  const { Button, ProductCard, Badge, Card, Icon, Accordion, OfferFlag } = window;
  const P = window.SC_DATA.products;

  const Section = ({ children, style }) => (
    <section style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: '0 var(--page-gutter)', ...style }}>{children}</section>
  );
  const Eyebrow = ({ children }) => (
    <div style={{
      fontFamily: 'var(--font-label)', fontSize: 'var(--size-meta)', fontWeight: 600,
      letterSpacing: 'var(--tracking-mono)', color: 'var(--ink-60)',
      marginBottom: 'var(--space-4)'
    }}>{children}</div>
  );

  return (
    <main>
      {/* Hero */}
      <Section style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-16)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 'var(--space-16)', alignItems: 'center' }}>
          <div>
            <Eyebrow>Longevity, from the cell out</Eyebrow>
            <h1 style={{
              margin: 0, fontFamily: 'var(--font-display)', fontWeight: 900,
              fontSize: 'var(--size-hero)', lineHeight: 'var(--leading-tight)',
              letterSpacing: 'var(--tracking-display)', textTransform: 'uppercase'
            }}>Age is a<br />number.<br />Cells are<br />the story.</h1>
            <p style={{
              margin: 'var(--space-8) 0 0', maxWidth: 520,
              fontSize: 'var(--size-body-lg)', lineHeight: 'var(--leading-body)'
            }}>Cell turnover slows after 40. That is biology, not a failing. We build the three things that slow it down, and nothing you do not need.</p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'var(--space-10)', alignItems: 'center' }}>
              <Button size="lg" onClick={() => go('plp')}>Shop the routine</Button>
              <Button size="lg" variant="outline" iconRight="arrow-right">Read the study</Button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginTop: 'var(--space-6)' }}>
              <OfferFlag />
              <span style={{ fontSize: 'var(--size-body)', color: 'var(--ink-80)' }}>Always on. No code, no deadline.</span>
            </div>
          </div>
          <div style={{
            aspectRatio: '4 / 5', background: 'var(--sun)', borderRadius: 'var(--radius-card)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40, textAlign: 'center'
          }}>
            <span style={{
              fontFamily: 'var(--font-label)', fontSize: 'var(--size-meta)', fontWeight: 600, letterSpacing: 'var(--tracking-mono)',
              opacity: 0.55, lineHeight: 1.8
            }}>Hero portrait goes here<br />woman 45 to 60, warm daylight</span>
          </div>
        </div>
      </Section>

      {/* Proof band */}
      <div style={{ background: 'var(--ink)', color: 'var(--white)' }}>
        <Section style={{ padding: 'var(--space-12) var(--page-gutter)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-12)' }}>
            {[['92%', 'saw firmer skin at twelve weeks'], ['3 types', 'of collagen in every shot'], ['0', 'proprietary blends, ever']].map(([n, t]) => (
              <div key={n}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'var(--size-display)', letterSpacing: 'var(--tracking-display)', lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: 'var(--size-body)', marginTop: 'var(--space-3)', color: 'var(--ink-20)' }}>{t}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 'var(--space-8)', fontFamily: 'var(--font-label)', fontSize: 'var(--size-meta)', fontWeight: 600, letterSpacing: 'var(--tracking-mono)', color: 'var(--ink-40)' }}>
            In a 12-week study of 84 women, aged 35 to 60
          </div>
        </Section>
      </div>

      {/* Bestsellers */}
      <Section style={{ paddingTop: 'var(--section-gap)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 'var(--space-10)' }}>
          <h2 style={{
            margin: 0, fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'var(--size-display)',
            letterSpacing: 'var(--tracking-display)', textTransform: 'uppercase', lineHeight: 1
          }}>Best sellers</h2>
          <Button variant="quiet" iconRight="arrow-right" onClick={() => go('plp')}>See all</Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--grid-gap)' }}>
          {P.slice(0, 3).map((p) => (
            <ProductCard key={p.id} family={p.family} name={p.name} subtitle={p.subtitle} flavor={p.flavor}
              price={p.sub} compareAt={p.price} rating={p.rating} reviewCount={p.reviews} badge={p.badge}
              onAdd={(line) => add(p, line)} style={{ cursor: 'pointer' }} onClick={() => go('pdp')} />
          ))}
        </div>
      </Section>

      {/* Routine */}
      <Section style={{ paddingTop: 'var(--section-gap)' }}>
        <div style={{ background: 'var(--surface-sunk)', borderRadius: 'var(--radius-card)', padding: 'var(--space-16)' }}>
          <Eyebrow>The routine</Eyebrow>
          <h2 style={{
            margin: 0, maxWidth: 760, fontFamily: 'var(--font-display)', fontWeight: 900,
            fontSize: 'var(--size-h1)', letterSpacing: 'var(--tracking-display)', textTransform: 'uppercase', lineHeight: 1.02
          }}>Three steps. Sixty seconds. No chalk.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--grid-gap)', marginTop: 'var(--space-12)' }}>
            {[['01', 'Drink it', 'SC-12 in the morning. Types I and III collagen with the vitamin C that lets your body use them.'],
              ['02', 'Wear it', 'SC-02 SPF before anything else. The single highest-leverage thing you can do.'],
              ['03', 'Feed it', 'SC-07 at night. NMN and magnesium, no stimulants, no melatonin hangover.']].map(([n, t, b]) => (
              <Card key={n} style={{ background: 'var(--white)' }}>
                <div style={{ fontFamily: 'var(--font-label)', fontSize: 'var(--size-meta)', color: 'var(--ink-60)', letterSpacing: 'var(--tracking-mono)' }}>{n}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--size-h3)', marginTop: 'var(--space-3)', letterSpacing: '-0.02em' }}>{t}</div>
                <p style={{ margin: 'var(--space-3) 0 0', fontSize: 'var(--size-body)', lineHeight: 'var(--leading-body)', color: 'var(--ink-80)' }}>{b}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Promise band */}
      <div style={{ background: 'var(--sun)', marginTop: 'var(--section-gap)' }}>
        <Section style={{ padding: 'var(--space-16) var(--page-gutter)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-12)' }}>
            {[['shield-check', 'Sixty-day returns', 'Opened or not. Full refund, no questions.'],
              ['repeat', 'Skip or cancel anytime', 'From your account. No phone call.'],
              ['truck', 'Free shipping, always', 'Two to four days, everywhere in the US.']].map(([ic, t, b]) => (
              <div key={t} style={{ display: 'flex', gap: 'var(--space-4)' }}>
                <Icon name={ic} size={32} />
                <div>
                  <div style={{ fontSize: 'var(--size-body-lg)', fontWeight: 800 }}>{t}</div>
                  <div style={{ fontSize: 'var(--size-body)', marginTop: 4, lineHeight: 1.45 }}>{b}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* FAQ */}
      <Section style={{ paddingTop: 'var(--section-gap)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 'var(--space-16)' }}>
          <h2 style={{
            margin: 0, fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'var(--size-h1)',
            letterSpacing: 'var(--tracking-display)', textTransform: 'uppercase', lineHeight: 1
          }}>Straight answers</h2>
          <Accordion items={window.SC_DATA.faqs} defaultOpen={0} />
        </div>
      </Section>
    </main>
  );
}

window.SCKit = Object.assign(window.SCKit || {}, { Home });
