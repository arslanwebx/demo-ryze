/*
  Preview loader for SUNNYCELLS design-system cards and UI kits.

  In the Design System tab the generated _ds_bundle.js is present and is used directly.
  When it isn't (opening a card straight from the filesystem), this falls back to
  fetching the component .jsx sources, stripping their import/export statements and
  compiling them with Babel standalone into one namespace. Preview-only plumbing, never ship it, and never edit component behaviour here.
*/
window.addEventListener('error', function (e) {
  window.__scErr = { m: e.message, f: e.filename, l: e.lineno, s: e.error && e.error.stack };
});

(function () {
  if (window.Babel && window.Babel.registerPreset) {
    window.Babel.registerPreset('sc-react', {
      presets: [[window.Babel.availablePresets.react, { runtime: 'classic' }]]
    });
  }

  var ORDER = [["core","Icon"],["core","Button"],["core","IconButton"],["core","Badge"],["core","OfferFlag"],["core","Tag"],["core","Card"],["core","Wordmark"],["forms","Input"],["forms","Select"],["forms","Checkbox"],["forms","RadioOption"],["forms","Switch"],["forms","QuantityStepper"],["feedback","Banner"],["feedback","Dialog"],["feedback","Toast"],["navigation","NavLink"],["navigation","Tabs"],["navigation","Accordion"],["navigation","Breadcrumb"],["commerce","Price"],["commerce","StarRating"],["commerce","ProductCard"],["commerce","SubscriptionBox"]];

  function resolve(names) {
    var keys = Object.getOwnPropertyNames(window);
    for (var i = 0; i < keys.length; i++) {
      var v;
      try { v = window[keys[i]]; } catch (e) { continue; }
      if (!v || typeof v !== 'object' || v === window) continue;
      var ok = names.length > 0;
      try {
        if (v.window === v || v.self === v || v.document) continue;
        for (var j = 0; j < names.length; j++) {
          if (typeof v[names[j]] !== 'function') { ok = false; break; }
        }
      } catch (e) { continue; }
      if (ok) return v;
    }
    return null;
  }

  function compile(base) {
    var defined = [];
    return Promise.all(ORDER.map(function (e) {
      return fetch(base + 'components/' + e[0] + '/' + e[1] + '.jsx').then(function (r) { return r.text(); });
    })).then(function (sources) {
      var body = sources.map(function (src, i) {
        var name = ORDER[i][1];
        var clean = src
          .replace(/^[ \t]*import[^;\n]*;?[ \t]*$/gm, '')
          .replace(/^export[ \t]+function/gm, 'function');
        var inject = defined.length ? 'var ' + defined.map(function (n) { return n + ' = __m.' + n; }).join(', ') + ';' : '';
        defined.push(name);
        var extra = name === 'OfferFlag' ? '\n__m.firstOrderPrice = firstOrderPrice;' : '';
        return '__m.' + name + ' = (function(){ ' + inject + '\n' + clean + extra + '\nreturn ' + name + '; })();';
      }).join('\n');

      var wrapped = '(function(React, __m){\n' + body + '\nreturn __m;\n})';
      var out = Babel.transform(wrapped, { presets: [[Babel.availablePresets.react, { runtime: 'classic' }]] }).code;
      // eslint-disable-next-line no-eval
      return (0, eval)(out)(window.React, {});
    });
  }

  /**
   * mountDS(base, names, cb), resolves the component namespace, assigns every
   * component onto window so JSX can reference them bare, then invokes cb(NS).
   */
  window.mountDS = function (base, names, cb) {
    var found = resolve(names || []);
    if (found) { Object.assign(window, found); return cb(found); }
    compile(base).then(function (ns) {
      Object.assign(window, ns);
      cb(ns);
    }).catch(function (err) {
      console.error('[SUNNYCELLS] preview loader failed', err);
      document.body.insertAdjacentHTML('beforeend',
        '<pre style="font:12px monospace;color:#B32D18;white-space:pre-wrap">' + String(err) + '</pre>');
    });
  };
})();

/**
 * mountCard(base, needs), used by the @dsCard preview pages. Reads the demo
 * source from <script type="text/plain" id="sc-demo">, compiles it with the
 * classic JSX runtime, and renders <Demo /> into #root.
 */
window.mountCard = function (base, needs) {
  window.mountDS(base, needs, function () {
    var el = document.getElementById('sc-demo');
    if (!el) return;
    var src = el.textContent + '\nReactDOM.createRoot(document.getElementById("root")).render(React.createElement(Demo));';
    try {
      var out = Babel.transform(src, { presets: [[Babel.availablePresets.react, { runtime: 'classic' }]] }).code;
      (0, eval)(out);
    } catch (err) {
      console.error('[SUNNYCELLS] card demo failed', err);
      document.body.insertAdjacentHTML('beforeend',
        '<pre style="font:12px monospace;color:#B32D18;white-space:pre-wrap">' + String(err && err.message) + '</pre>');
    }
  });
};
