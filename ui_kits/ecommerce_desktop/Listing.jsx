function Listing({ go, add }) {
  const { Breadcrumb, Tag, ProductCard, Select } = window;
  const P = window.SC_DATA.products;
  const [filter, setFilter] = React.useState('All');
  const cats = ['All', 'Skin', 'Hair', 'Wellness'];
  const shown = filter === 'All' ? P : P.filter((p) => p.category === filter);

  return (
    <main style={{ maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--space-10) var(--page-gutter) 0' }}>
      <Breadcrumb items={[{ label: 'Home' }, { label: 'Shop all' }]} />
      <h1 style={{
        margin: 'var(--space-6) 0 0', fontFamily: 'var(--font-display)', fontWeight: 900,
        fontSize: 'var(--size-display)', letterSpacing: 'var(--tracking-display)',
        textTransform: 'uppercase', lineHeight: 1
      }}>Shop all</h1>
      <p style={{ margin: 'var(--space-4) 0 0', maxWidth: 620, fontSize: 'var(--size-body-lg)', lineHeight: 'var(--leading-body)', color: 'var(--ink-80)' }}>
        Six products. Every ingredient listed, every dose disclosed.
      </p>

      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-6)',
        margin: 'var(--space-10) 0 var(--space-8)', paddingBottom: 'var(--space-6)',
        borderBottom: '1px solid var(--border-hairline)'
      }}>
        <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
          {cats.map((c) => <Tag key={c} selected={filter === c} onClick={() => setFilter(c)}>{c}</Tag>)}
        </div>
        <Select options={['Most loved', 'Newest', 'Price: low to high']} containerStyle={{ width: 260 }} aria-label="Sort" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--grid-gap)' }}>
        {shown.map((p) => (
          <ProductCard key={p.id} family={p.family} name={p.name} subtitle={p.subtitle} flavor={p.flavor}
            price={p.sub} compareAt={p.price} rating={p.rating} reviewCount={p.reviews} badge={p.badge}
            onAdd={(line) => add(p, line)} onClick={() => go('pdp')} style={{ cursor: 'pointer' }} />
        ))}
      </div>
    </main>
  );
}

window.SCKit = Object.assign(window.SCKit || {}, { Listing });
