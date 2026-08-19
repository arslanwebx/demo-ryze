/* SUNNYCELLS mobile web at 390px. Screens compose design-system primitives only. */

function MobileHeader({ bagCount, onBag, onMenu, go }) {
  const { Wordmark, IconButton } = window;
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 30,
      background: 'rgba(255,255,255,0.94)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-hairline)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 var(--space-2)', height: 72
    }}>
      <IconButton icon="menu" label="Menu" onClick={onMenu} />
      <a href="#" onClick={(e) => { e.preventDefault(); go('home'); }}><Wordmark size={24} /></a>
      <div style={{ position: 'relative' }}>
        <IconButton icon="shopping-bag" label={'Bag, ' + bagCount + (bagCount === 1 ? ' item' : ' items')} onClick={onBag} />
        {bagCount > 0 ? (
          <span style={{
            position: 'absolute', top: 4, right: 2, minWidth: 22, height: 22,
            borderRadius: 'var(--radius-pill)', background: 'var(--sun)', color: 'var(--ink)',
            fontSize: 13, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>{bagCount}</span>
        ) : null}
      </div>
    </header>
  );
}

function MenuSheet({ open, onClose, go }) {
  const { NavLink, Icon } = window;
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 60, background: 'var(--white)',
      transform: open ? 'translateY(0)' : 'translateY(-100%)',
      transition: 'transform var(--duration-slow) var(--ease-out)',
      display: 'flex', flexDirection: 'column'
    }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: 'var(--space-3)' }}>
        <button onClick={onClose} aria-label="Close menu" style={{ appearance: 'none', background: 'transparent', border: 0, padding: 14, cursor: 'pointer' }}>
          <Icon name="x" size={28} />
        </button>
      </div>
      <nav style={{ display: 'flex', flexDirection: 'column', padding: '0 var(--page-gutter-mobile)' }}>
        {['Skin', 'Hair', 'Wellness', 'Bundles', 'Our science'].map((l) => (
          <a key={l} href="#" onClick={(e) => { e.preventDefault(); go('plp'); onClose(); }} style={{
            fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 40, letterSpacing: '-0.03em',
            textTransform: 'uppercase', padding: '14px 0', textDecoration: 'none', color: 'var(--ink)'
          }}>{l}</a>
        ))}
      </nav>
    </div>
  );
}

function MobileHome({ go, add }) {
  const { Button, ProductCard, Icon, Accordion } = window;
  const P = window.SC_DATA.products;
  const pad = { padding: '0 var(--page-gutter-mobile)' };
  return (
    <main>
      <section style={{ ...pad, paddingTop: 'var(--space-10)', paddingBottom: 'var(--space-10)' }}>
        <div style={{
          fontFamily: 'var(--font-label)', fontSize: 'var(--size-meta)', fontWeight: 600, letterSpacing: 'var(--tracking-mono)',
          color: 'var(--ink-60)'
        }}>Longevity, from the cell out</div>
        <h1 style={{
          margin: 'var(--space-4) 0 0', fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 'var(--size-hero-m)', lineHeight: 'var(--leading-tight)',
          letterSpacing: 'var(--tracking-display)', textTransform: 'uppercase'
        }}>Age is a number. Cells are the story.</h1>
        <p style={{ margin: 'var(--space-5) 0 0', fontSize: 'var(--size-body)', lineHeight: 'var(--leading-body)' }}>
          Cell turnover slows after 40. That is biology, not a failing.
        </p>
        <div style={{ marginTop: 'var(--space-6)' }}>
          <Button size="lg" fullWidth onClick={() => go('plp')}>Shop the routine</Button>
        </div>
        <div style={{
          marginTop: 'var(--space-6)', aspectRatio: '4 / 3', background: 'var(--sun)',
          borderRadius: 'var(--radius-card)', display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <span style={{
            fontFamily: 'var(--font-label)', fontSize: 'var(--size-meta)', fontWeight: 600, letterSpacing: 'var(--tracking-mono)',
            opacity: 0.5, textAlign: 'center', lineHeight: 1.8
          }}>Hero portrait goes here</span>
        </div>
      </section>

      <div style={{ background: 'var(--ink)', color: 'var(--white)', padding: 'var(--space-10) var(--page-gutter-mobile)' }}>
        {[['92%', 'saw firmer skin at twelve weeks'], ['3 types', 'of collagen in every shot'], ['0', 'proprietary blends, ever']].map(([n, t], i) => (
          <div key={n} style={{ paddingTop: i ? 'var(--space-6)' : 0 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'var(--size-display-m)', letterSpacing: 'var(--tracking-display)', lineHeight: 1 }}>{n}</div>
            <div style={{ fontSize: 'var(--size-body)', marginTop: 4, color: 'var(--ink-20)' }}>{t}</div>
          </div>
        ))}
        <div style={{ marginTop: 'var(--space-8)', fontFamily: 'var(--font-label)', fontSize: 'var(--size-meta)', fontWeight: 600, letterSpacing: 'var(--tracking-mono)', color: 'var(--ink-40)' }}>
          In a 12-week study of 84 women, aged 35 to 60
        </div>
      </div>

      <section style={{ ...pad, paddingTop: 'var(--section-gap-mobile)' }}>
        <h2 style={{
          margin: '0 0 var(--space-6)', fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 'var(--size-display-m)', letterSpacing: 'var(--tracking-display)', textTransform: 'uppercase', lineHeight: 1
        }}>Best sellers</h2>
        <div style={{ display: 'grid', gap: 'var(--grid-gap)' }}>
          {P.slice(0, 3).map((p) => (
            <ProductCard key={p.id} family={p.family} name={p.name} subtitle={p.subtitle} flavor={p.flavor}
              price={p.sub} compareAt={p.price} rating={p.rating} reviewCount={p.reviews} badge={p.badge}
              blockHeight={230} onAdd={(line) => add(p, line)} onClick={() => go('pdp')} />
          ))}
        </div>
      </section>

      <div style={{ background: 'var(--sun)', marginTop: 'var(--section-gap-mobile)', padding: 'var(--space-10) var(--page-gutter-mobile)' }}>
        {[['shield-check', 'Sixty-day returns'], ['repeat', 'Skip or cancel anytime'], ['truck', 'Free shipping, always']].map(([ic, t], i) => (
          <div key={t} style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center', paddingTop: i ? 'var(--space-5)' : 0 }}>
            <Icon name={ic} size={28} />
            <span style={{ fontSize: 'var(--size-body)', fontWeight: 700 }}>{t}</span>
          </div>
        ))}
      </div>

      <section style={{ ...pad, paddingTop: 'var(--section-gap-mobile)' }}>
        <h2 style={{
          margin: '0 0 var(--space-4)', fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 'var(--size-h1-m)', letterSpacing: 'var(--tracking-display)', textTransform: 'uppercase'
        }}>Straight answers</h2>
        <Accordion items={window.SC_DATA.faqs} defaultOpen={0} />
      </section>
    </main>
  );
}

function MobileListing({ go, add }) {
  const { Tag, ProductCard } = window;
  const P = window.SC_DATA.products;
  const [filter, setFilter] = React.useState('All');
  const shown = filter === 'All' ? P : P.filter((p) => p.category === filter);
  return (
    <main style={{ padding: 'var(--space-8) var(--page-gutter-mobile) 0' }}>
      <h1 style={{
        margin: 0, fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'var(--size-display-m)',
        letterSpacing: 'var(--tracking-display)', textTransform: 'uppercase', lineHeight: 1
      }}>Shop all</h1>
      <div style={{ display: 'flex', gap: 'var(--space-2)', overflowX: 'auto', margin: 'var(--space-6) -20px var(--space-6)', padding: '0 20px 4px' }}>
        {['All', 'Skin', 'Hair', 'Wellness'].map((c) => (
          <Tag key={c} selected={filter === c} onClick={() => setFilter(c)} style={{ flex: 'none' }}>{c}</Tag>
        ))}
      </div>
      <div style={{ display: 'grid', gap: 'var(--grid-gap)' }}>
        {shown.map((p) => (
          <ProductCard key={p.id} family={p.family} name={p.name} subtitle={p.subtitle} flavor={p.flavor}
            price={p.sub} compareAt={p.price} rating={p.rating} reviewCount={p.reviews} badge={p.badge}
            blockHeight={230} onAdd={(line) => add(p, line)} onClick={() => go('pdp')} />
        ))}
      </div>
    </main>
  );
}

function MobileProduct({ add }) {
  const { Badge, StarRating, SubscriptionBox, Button, Tabs, Accordion, Icon } = window;
  const p = window.SC_DATA.products[0];
  const [cadence, setCadence] = React.useState('30');
  const [tab, setTab] = React.useState('Ingredients');
  const plan = p.plans.find(function (x) { return x.id === cadence; });
  const first = window.firstOrderPrice(plan.price);
  const panels = {
    Benefits: ['Firmer skin at twelve weeks in 92% of the study group.', 'Hair that breaks less. Measured, not self-reported.'],
    Ingredients: ['Collagen peptides, types I and III: 10 g.', 'Vitamin C: 90 mg.', 'Hyaluronic acid: 120 mg. Nothing else.'],
    Results: ['92% saw firmer skin.', '78% saw less breakage.']
  };
  return (
    <main style={{ paddingBottom: 120 }}>
      <div style={{
        aspectRatio: '1 / 1', background: 'var(--sun)', position: 'relative',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <Badge tone="ink" style={{ position: 'absolute', top: 16, left: 16 }}>{p.badge}</Badge>
        <span style={{
          fontFamily: 'var(--font-label)', fontSize: 'var(--size-meta)', fontWeight: 600, letterSpacing: 'var(--tracking-mono)',
          opacity: 0.5, textAlign: 'center', lineHeight: 1.8
        }}>Product cutout goes here</span>
      </div>

      <div style={{ padding: 'var(--space-6) var(--page-gutter-mobile) 0' }}>
        <div style={{
          fontFamily: 'var(--font-label)', fontSize: 'var(--size-meta)', fontWeight: 600, letterSpacing: 'var(--tracking-mono)',
          color: 'var(--ink-60)'
        }}>{p.spec}</div>
        <h1 style={{
          margin: 'var(--space-3) 0 0', fontFamily: 'var(--font-display)', fontWeight: 900,
          fontSize: 'var(--size-h1-m)', letterSpacing: 'var(--tracking-display)', textTransform: 'uppercase', lineHeight: 1.04
        }}>{p.name}</h1>
        <p style={{ margin: 'var(--space-3) 0 0', fontSize: 'var(--size-body)', lineHeight: 'var(--leading-body)', color: 'var(--ink-80)' }}>
          Collagen you drink, not collagen you hope for.
        </p>
        <div style={{ margin: 'var(--space-5) 0' }}>
          <StarRating value={p.rating} count={p.reviews} showValue size={20} />
        </div>
        <SubscriptionBox
          compareAt={p.price}
          value={cadence}
          onChange={setCadence}
          onAdd={(line) => add(p, line)}
          plans={p.plans}
        />
        <div style={{ marginTop: 'var(--space-8)' }}>
          <Tabs items={['Benefits', 'Ingredients', 'Results']} value={tab} onChange={setTab} style={{ gap: 'var(--space-6)' }} />
          <ul style={{ margin: 'var(--space-5) 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {panels[tab].map((t) => (
              <li key={t} style={{ display: 'flex', gap: 'var(--space-3)', fontSize: 'var(--size-body)', lineHeight: 'var(--leading-body)' }}>
                <Icon name="check" size={24} /><span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ marginTop: 'var(--space-10)' }}>
          <Accordion items={window.SC_DATA.faqs.slice(0, 3)} />
        </div>
      </div>

      <div style={{
        position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 25,
        padding: 'var(--space-4) var(--page-gutter-mobile) var(--space-5)',
        background: 'rgba(255,255,255,0.94)', backdropFilter: 'blur(12px)',
        borderTop: '1px solid var(--border-hairline)'
      }}>
        <Button size="lg" fullWidth price={first}
          onClick={() => add(p, { plan: plan, price: plan.price, firstPrice: first })}>Start my routine</Button>
      </div>
    </main>
  );
}

function BagSheet({ open, items, onClose, onQty }) {
  const { Button, QuantityStepper, Price, Icon } = window;
  const subtotal = items.reduce((s, i) => s + i.firstPrice * i.qty, 0);
  const recurring = items.reduce((s, i) => s + i.price * i.qty, 0);
  return (
    <React.Fragment>
      <div onClick={onClose} style={{
        position: 'fixed', inset: 0, zIndex: 70, background: 'rgba(13,13,12,0.5)',
        opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none',
        transition: 'opacity var(--duration-base) var(--ease-standard)'
      }} />
      <div style={{
        position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 71, maxHeight: '86%',
        background: 'var(--white)', borderRadius: 'var(--radius-sheet) var(--radius-sheet) 0 0',
        boxShadow: 'var(--shadow-sheet)', display: 'flex', flexDirection: 'column',
        transform: open ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform var(--duration-slow) var(--ease-out)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'var(--space-5) var(--space-5) var(--space-4)' }}>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'var(--size-h3-m)', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>Your bag</h2>
          <button onClick={onClose} aria-label="Close bag" style={{ appearance: 'none', background: 'transparent', border: 0, padding: 10, cursor: 'pointer' }}>
            <Icon name="x" size={26} />
          </button>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
          margin: '0 var(--space-5) var(--space-5)', padding: 'var(--space-3) var(--space-4)',
          background: 'var(--sun-tint)', borderRadius: 'var(--radius-md)',
          fontSize: 'var(--size-body)', fontWeight: 700
        }}>
          <Icon name="truck" size={22} />Free shipping on every subscription
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '0 var(--space-5)' }}>
          {items.length === 0 ? (
            <p style={{ fontSize: 'var(--size-body)', color: 'var(--ink-60)', padding: '24px 0' }}>Nothing here yet.</p>
          ) : items.map((it) => (
            <div key={it.key} style={{ display: 'flex', gap: 'var(--space-4)', padding: 'var(--space-4) 0', borderTop: '1px solid var(--border-hairline)' }}>
              <div style={{
                width: 72, height: 72, flex: 'none', borderRadius: 'var(--radius-image)',
                background: 'var(--' + ({ ingestible: 'sun', topical: 'zest', hair: 'sky', wellness: 'sprout' }[it.family]) + ')'
              }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 'var(--size-body)', fontWeight: 800, lineHeight: 1.3 }}>{it.name}</div>
                <div style={{ fontSize: 'var(--size-meta)', color: 'var(--ink-60)' }}>{it.cadence || 'Every month'}</div>
                {it.firstPrice < it.price ? (
                  <div style={{ fontSize: 'var(--size-meta)', fontWeight: 700 }}>{'Then $' + it.price + ' per month'}</div>
                ) : null}
                <div style={{ marginTop: 'var(--space-3)' }}><QuantityStepper value={it.qty} onChange={(n) => onQty(it.key, n)} /></div>
              </div>
              <Price value={it.firstPrice * it.qty} size="sm" align="right" />
            </div>
          ))}
        </div>
        <div style={{ padding: 'var(--space-5)', borderTop: '1px solid var(--border-hairline)', background: 'var(--surface-sunk)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <span style={{ fontSize: 'var(--size-body)', fontWeight: 700 }}>Today</span>
            <Price value={subtotal} size="md" />
          </div>
          {recurring > subtotal ? (
            <div style={{
              marginTop: 'var(--space-2)', marginBottom: 'var(--space-4)',
              fontSize: 'var(--size-meta)', fontWeight: 600, color: 'var(--ink-60)'
            }}>{'Then $' + recurring + ' per month. You save $' + (recurring - subtotal) + ' today.'}</div>
          ) : <div style={{ marginBottom: 'var(--space-4)' }} />}
          <Button fullWidth size="lg" disabled={items.length === 0}>Checkout</Button>
        </div>
      </div>
    </React.Fragment>
  );
}

function MobileApp() {
  const { Banner, Toast } = window;
  const [route, setRoute] = React.useState('home');
  const [menu, setMenu] = React.useState(false);
  const [bag, setBag] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [toast, setToast] = React.useState(false);

  const go = (r) => { setRoute(r); window.scrollTo(0, 0); };
  const add = (p, line) => {
    const chosen = (line && line.plan) || (p.plans && p.plans[0]);
    const price = (line && line.price) != null ? line.price : chosen.price;
    const firstPrice = (line && line.firstPrice) != null ? line.firstPrice : price;
    setItems((prev) => {
      const key = p.id + ':' + chosen.id;
      const hit = prev.find((i) => i.key === key);
      if (hit) return prev.map((i) => i.key === key ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, {
        key: key, id: p.id, name: p.name, family: p.family,
        price: price, firstPrice: firstPrice, cadence: chosen.label, qty: 1
      }];
    });
    setToast(true);
    setTimeout(() => setToast(false), 2600);
  };
  const onQty = (key, n) => setItems((prev) => n === 0 ? prev.filter((i) => i.key !== key) : prev.map((i) => i.key === key ? { ...i, qty: n } : i));
  const count = items.reduce((s, i) => s + i.qty, 0);

  return (
    <React.Fragment>
      <Banner tone="sun" icon="tag">50% off your first order</Banner>
      <MobileHeader bagCount={count} onBag={() => setBag(true)} onMenu={() => setMenu(true)} go={go} />
      {route === 'home' ? <MobileHome go={go} add={add} /> : null}
      {route === 'plp' ? <MobileListing go={go} add={add} /> : null}
      {route === 'pdp' ? <MobileProduct add={add} /> : null}
      <MenuSheet open={menu} onClose={() => setMenu(false)} go={go} />
      <BagSheet open={bag} items={items} onClose={() => setBag(false)} onQty={onQty} />
      {toast ? (
        <div style={{ position: 'fixed', left: 20, right: 20, bottom: 110, zIndex: 80, display: 'flex' }}>
          <Toast action={{ label: 'View bag', onClick: () => setBag(true) }} style={{ flex: 1 }}>Added to bag</Toast>
        </div>
      ) : null}
    </React.Fragment>
  );
}

window.SCKit = Object.assign(window.SCKit || {}, { MobileApp });
