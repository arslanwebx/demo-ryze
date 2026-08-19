/* Header, footer and bag drawer for the desktop store. */

function Header({ bagCount, onBag, route, go }) {
  const { Wordmark, NavLink, IconButton } = window;
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 40,
      background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-hairline)'
    }}>
      <div style={{
        maxWidth: 'var(--page-max)', margin: '0 auto', padding: '0 var(--page-gutter)',
        height: 88, display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: 24
      }}>
        <nav style={{ display: 'flex', gap: 'var(--space-8)' }}>
          <NavLink active={route === 'plp'} onClick={(e) => { e.preventDefault(); go('plp'); }}>Skin</NavLink>
          <NavLink onClick={(e) => { e.preventDefault(); go('plp'); }}>Hair</NavLink>
          <NavLink onClick={(e) => { e.preventDefault(); go('plp'); }}>Wellness</NavLink>
          <NavLink onClick={(e) => e.preventDefault()} style={{ whiteSpace: 'nowrap' }}>Our science</NavLink>
        </nav>
        <a href="#" onClick={(e) => { e.preventDefault(); go('home'); }} style={{ textDecoration: 'none' }}>
          <Wordmark size={30} />
        </a>
        <div style={{ display: 'flex', gap: 'var(--space-1)', justifySelf: 'end' }}>
          <IconButton icon="search" label="Search" />
          <IconButton icon="user" label="Account" />
          <div style={{ position: 'relative' }}>
            <IconButton icon="shopping-bag" label={'Bag, ' + bagCount + (bagCount === 1 ? ' item' : ' items')} onClick={onBag} />
            {bagCount > 0 ? (
              <span style={{
                position: 'absolute', top: 6, right: 4, minWidth: 24, height: 24, padding: '0 6px',
                borderRadius: 'var(--radius-pill)', background: 'var(--sun)', color: 'var(--ink)',
                fontSize: 14, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>{bagCount}</span>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  const { Wordmark, NavLink, Input, Button } = window;
  const col = (title, links) => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{
        fontFamily: 'var(--font-label)', fontSize: 'var(--size-meta)', fontWeight: 600, letterSpacing: 'var(--tracking-mono)',
        color: 'var(--ink-60)', marginBottom: 6
      }}>{title}</div>
      {links.map((l) => <NavLink key={l} size="sm">{l}</NavLink>)}
    </div>
  );
  return (
    <footer style={{ borderTop: '1px solid var(--border-hairline)', marginTop: 'var(--section-gap)' }}>
      <div style={{
        maxWidth: 'var(--page-max)', margin: '0 auto', padding: 'var(--space-16) var(--page-gutter)',
        display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 'var(--space-12)'
      }}>
        <div>
          <Wordmark size={34} />
          <p style={{ marginTop: 'var(--space-4)', fontSize: 'var(--size-body)', lineHeight: 'var(--leading-body)', color: 'var(--ink-60)', maxWidth: 300 }}>
            Age is a number. Cells are the story.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-6)', alignItems: 'flex-end' }}>
            <Input label="Get the science, monthly" placeholder="you@example.com" containerStyle={{ flex: 1 }} />
            <Button size="md">Join</Button>
          </div>
        </div>
        {col('Shop', ['Skin', 'Hair', 'Wellness', 'Bundles'])}
        {col('Learn', ['Our science', 'Ingredients', 'Results', 'Journal'])}
        {col('Help', ['Shipping', 'Returns', 'Contact', 'Account'])}
      </div>
      <div style={{
        borderTop: '1px solid var(--border-hairline)',
        padding: 'var(--space-5) var(--page-gutter)', maxWidth: 'var(--page-max)', margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', fontSize: 'var(--size-meta)', color: 'var(--ink-60)'
      }}>
        <span>© 2026 Sunnycells</span>
        <span>These statements have not been evaluated by the FDA.</span>
      </div>
    </footer>
  );
}

function BagDrawer({ open, items, onClose, onQty }) {
  const { Button, QuantityStepper, Price, Icon } = window;
  const subtotal = items.reduce((s, i) => s + i.firstPrice * i.qty, 0);
  const recurring = items.reduce((s, i) => s + i.price * i.qty, 0);
  return (
    <React.Fragment>
      <div onClick={onClose} style={{
        position: 'fixed', inset: 0, zIndex: 50, background: 'rgba(13,13,12,0.5)',
        opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none',
        transition: 'opacity var(--duration-base) var(--ease-standard)'
      }} />
      <aside style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, width: 460, zIndex: 51,
        background: 'var(--surface-card)', display: 'flex', flexDirection: 'column',
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform var(--duration-slow) var(--ease-out)',
        boxShadow: 'var(--shadow-raised)'
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: 'var(--space-5) var(--space-6)', borderBottom: '1px solid var(--border-hairline)'
        }}>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'var(--size-h3)', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>Your bag</h2>
          <button onClick={onClose} aria-label="Close bag" style={{ appearance: 'none', background: 'transparent', border: 0, cursor: 'pointer', display: 'flex', padding: 10 }}>
            <Icon name="x" size={26} />
          </button>
        </div>

        <div style={{
          display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
          padding: 'var(--space-4) var(--space-6)', background: 'var(--sun-tint)',
          fontSize: 'var(--size-body)', fontWeight: 700
        }}>
          <Icon name="truck" size={22} />Free shipping on every subscription
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: 'var(--space-4) var(--space-6)' }}>
          {items.length === 0 ? (
            <p style={{ fontSize: 'var(--size-body)', color: 'var(--ink-60)', padding: '32px 0' }}>Nothing here yet.</p>
          ) : items.map((it) => (
            <div key={it.key} style={{ display: 'flex', gap: 'var(--space-4)', padding: 'var(--space-4) 0', borderBottom: '1px solid var(--border-hairline)' }}>
              <div style={{
                width: 88, height: 88, flex: 'none', borderRadius: 'var(--radius-image)',
                background: 'var(--' + ({ ingestible: 'sun', topical: 'zest', hair: 'sky', wellness: 'sprout' }[it.family]) + ')'
              }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 'var(--size-body)', fontWeight: 800, lineHeight: 1.3 }}>{it.name}</div>
                <div style={{ fontSize: 'var(--size-meta)', color: 'var(--ink-60)', marginTop: 2 }}>{it.cadence || 'Every month'}</div>
                {it.firstPrice < it.price ? (
                  <div style={{ fontSize: 'var(--size-meta)', fontWeight: 700, marginTop: 2 }}>{'Then $' + it.price + ' per month'}</div>
                ) : null}
                <div style={{ marginTop: 'var(--space-3)' }}>
                  <QuantityStepper value={it.qty} onChange={(n) => onQty(it.key, n)} style={{ height: 48 }} />
                </div>
              </div>
              <Price value={it.firstPrice * it.qty} size="sm" align="right" />
            </div>
          ))}
        </div>

        <div style={{ padding: 'var(--space-6)', borderTop: '1px solid var(--border-hairline)', background: 'var(--surface-sunk)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <span style={{ fontSize: 'var(--size-body-lg)', fontWeight: 700 }}>Today</span>
            <Price value={subtotal} size="md" />
          </div>
          {recurring > subtotal ? (
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
              marginTop: 'var(--space-2)', marginBottom: 'var(--space-5)',
              fontSize: 'var(--size-meta)', fontWeight: 600, color: 'var(--ink-60)'
            }}>
              <span>{'Then $' + recurring + ' per month'}</span>
              <span>{'You save $' + (recurring - subtotal) + ' today'}</span>
            </div>
          ) : <div style={{ marginBottom: 'var(--space-5)' }} />}
          <Button fullWidth size="lg" disabled={items.length === 0}>Checkout</Button>
        </div>
      </aside>
    </React.Fragment>
  );
}

window.SCKit = Object.assign(window.SCKit || {}, { Header, Footer, BagDrawer });
