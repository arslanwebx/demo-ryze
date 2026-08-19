# UI kit: Ecommerce desktop (1440px)

A clickable recreation of the SUNNYCELLS storefront at desktop width. Open `index.html`.

## Screens
| File | Screen | Notes |
|---|---|---|
| `App.jsx` | Shell + router | Announcement banner, sticky header, bag state, toast |
| `Home.jsx` | Home | Hero, black proof band, bestsellers 3-up, routine, sunny promise band, FAQ |
| `Listing.jsx` | Shop all (PLP) | Tag filters, sort select, 3-up product grid |
| `Product.jsx` | Product (PDP) | Sticky gallery, subscription buy box, tabs, reviews, FAQ |
| `Chrome.jsx` | Header / Footer / Bag drawer | Bag slides from the right; shipping is free with no threshold |

## What you can click
Nav → listing · product card → PDP · Add to bag → toast + bag badge · bag icon → drawer · quantity steppers · delivery cadence · tabs · FAQ accordion · category filters.

## Placeholders
- **Product photography**: every colour block renders "product cutout goes here". Drop transparent PNGs in and pass them to `ProductCard`'s `image` prop.
- **Hero portrait**: the yellow hero block is a labelled placeholder for a real photograph.
- **Copy, product names, prices, review counts** are invented to brand voice. Prices obey the integer rule.

## Composition
Every control comes from the design system (`Button`, `ProductCard`, `Price`, `SubscriptionBox`, `Tabs`, `Accordion`, …). The kit only adds layout.

`data.js` holds the placeholder catalogue and is shared with the mobile kit.
