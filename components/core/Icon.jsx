import React from 'react';

const pascal = (n) =>
  String(n).split(/[-_\s]/).filter(Boolean).map(s => s[0].toUpperCase() + s.slice(1)).join('');

/**
 * Lucide icon wrapper. Requires the Lucide UMD bundle on the page:
 * <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
 * SUNNYCELLS renders Lucide at 2px stroke. 1.5px reads too thin next to 500-weight type.
 */
export function Icon({ name, size = 24, strokeWidth = 2, fill = 'none', title, style, ...rest }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    let cancelled = false;
    let tries = 0;
    const paint = () => {
      if (cancelled || !ref.current) return;
      const lib = typeof window !== 'undefined' ? window.lucide : null;
      const node = lib && lib.icons && (lib.icons[pascal(name)] || lib.icons[name]);
      if (!node || !lib.createElement) {
        if (tries++ < 40) setTimeout(paint, 100);
        return;
      }
      const svg = lib.createElement(node);
      svg.setAttribute('width', size);
      svg.setAttribute('height', size);
      svg.setAttribute('stroke-width', strokeWidth);
      svg.setAttribute('fill', fill);
      svg.setAttribute('stroke-linecap', 'round');
      svg.setAttribute('stroke-linejoin', 'round');
      svg.style.display = 'block';
      if (title) svg.setAttribute('aria-label', title);
      ref.current.replaceChildren(svg);
    };
    paint();
    return () => { cancelled = true; };
  }, [name, size, strokeWidth, fill, title]);

  return (
    <span
      ref={ref}
      aria-hidden={title ? undefined : true}
      style={{ display: 'inline-flex', width: size, height: size, color: 'currentColor', flex: 'none', ...style }}
      {...rest}
    />
  );
}
