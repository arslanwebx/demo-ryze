# UI kit: Ecommerce mobile web (390px)

The same store at phone width. Open `index.html`.

## Screens (all in `Screens.jsx`)
| Component | Screen |
|---|---|
| `MobileApp` | Shell + router + bag state |
| `MobileHeader` / `MenuSheet` | Sticky 72px header; full-screen display-type menu |
| `MobileHome` | Hero, black proof band, 1-up bestsellers, sunny promise band, FAQ |
| `MobileListing` | Horizontally scrolling filter chips, 1-up grid |
| `MobileProduct` | Full-bleed colour block, subscription buy box, tabs, **sticky add-to-bag bar** |
| `BagSheet` | Bottom sheet with quantity steppers |

## Mobile-specific rules this kit demonstrates
- Gutters drop to 20px; section gap drops to 64px. **Body text does not drop below 20px.**
- The bag is a bottom sheet, not a right drawer.
- Add-to-bag is pinned to the bottom on the PDP.
- Every tap target still clears 48px.

## Placeholders
Product cutouts and the hero portrait are labelled colour blocks. Copy and prices are invented to brand voice; prices are integers.
