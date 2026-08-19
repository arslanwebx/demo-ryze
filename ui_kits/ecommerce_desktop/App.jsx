function App() {
  const { Banner, Toast } = window;
  const { Header, Footer, BagDrawer, Home, Listing, Product } = window.SCKit;
  const [route, setRoute] = React.useState('home');
  const [bagOpen, setBagOpen] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [toast, setToast] = React.useState(null);

  const go = (r) => { setRoute(r); window.scrollTo(0, 0); };

  /* line comes from ProductCard or SubscriptionBox and carries the figures that
     were on screen, so the bag charges exactly what the button said. Grid cards
     have no cadence picker and fall back to the monthly plan. */
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
    setToast(p.name);
    setTimeout(() => setToast(null), 2600);
  };

  const onQty = (key, n) => setItems((prev) => n === 0 ? prev.filter((i) => i.key !== key) : prev.map((i) => i.key === key ? { ...i, qty: n } : i));
  const count = items.reduce((s, i) => s + i.qty, 0);

  return (
    <React.Fragment>
      <Banner tone="sun" icon="tag">50% off your first order · Free shipping · Cancel anytime</Banner>
      <Header bagCount={count} onBag={() => setBagOpen(true)} route={route} go={go} />
      {route === 'home' ? <Home go={go} add={add} /> : null}
      {route === 'plp' ? <Listing go={go} add={add} /> : null}
      {route === 'pdp' ? <Product add={add} /> : null}
      <Footer />
      <BagDrawer open={bagOpen} items={items} onClose={() => setBagOpen(false)} onQty={onQty} />
      {toast ? (
        <div style={{ position: 'fixed', left: 32, bottom: 32, zIndex: 60 }}>
          <Toast action={{ label: 'View bag', onClick: () => setBagOpen(true) }}>Added to bag</Toast>
        </div>
      ) : null}
    </React.Fragment>
  );
}

window.SCKit = Object.assign(window.SCKit || {}, { App });
