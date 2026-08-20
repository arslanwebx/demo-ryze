# SUNNYCELLS. Design System

A longevity beauty brand for women who are done being talked down to. SUNNYCELLS sells **ingestible supplements** (liquid collagen, powders, drops), **topical skincare** (serums, creams, SPF), and **hair + scalp care**, a full routine, not a hero SKU.

The look: **black type on white paper**, big and bold, punctuated by flat blocks of sunny colour. The type is geometric, heavy, and slightly rounded, confident without being cold. Every size decision assumes a reader who is 35–55+ and reading on a phone in daylight.

---

## Sources & provenance

| Source | What it gave us |
|---|---|
| Written brand brief (chat, this project) | Name, audience, base palette (black/white), sunny accent, bold sans direction, soft-corner rule, integer-price rule |
| `uploads/Screenshot 2026-08-13 at 6.21.00 PM.png` | **Mood reference only**, a competitor page (SpoiledChild) supplied by the user as inspiration for the *flat colour-block-behind-product* merchandising idea and the *colour-coded product family* idea |
| Answers to the intake form | Product categories, surfaces (desktop + mobile web ecommerce), 4-colour accent set, geometric-rounded type, tone, 20px body floor |

**No codebase, Figma file, logo, or font files were provided.** Everything here was authored from the brief. Two flagged substitutions are listed under *Gaps & substitutions* at the bottom, read them before shipping anything to production.

The reference screenshot is **inspiration, not a target**. Nothing in this system reproduces another brand's marks, type, product names, or layout signatures. The colour-block merchandising pattern is a category-wide convention; SUNNYCELLS' execution of it (yellow-first hierarchy, black CTA default, hairline-framed cards, integer pricing) is its own.

---

## Content fundamentals

### Voice
Three registers, blended, never one at full volume:

1. **Warm and knowing.** We talk to her like a smart friend who already read the study. Not a coach, not a guru, not a chirpy DTC mascot.
2. **Bold and reframing.** We are against the idea that ageing is a problem to be hidden. We say so plainly, in the biggest type on the page.
3. **Calm and premium.** Few words. Lots of white space. Confidence reads as restraint.

### Person & address
- **"You"** for the reader. **"We"** for the brand. Never "I".
- Never "girl", "babe", "queen", "bestie", "anti-ageing", "fix", "flaw", "correct", "problem area", "reverse the clock", "young again".
- Age is stated as a fact, never as a warning: *"Cell turnover slows after 40. That's biology, not a failing."*

### Casing
| Element | Casing | Example |
|---|---|---|
| Hero / section headline | **ALL CAPS**, tight tracking | `AGE IS A NUMBER. CELLS ARE THE STORY.` |
| Product name | Title Case, code first | `SC-12 Liquid Collagen` |
| Body copy | Sentence case | `Three types of collagen, one shot a day.` |
| Buttons | **ALL CAPS**, `+0.08em` tracking | `ADD TO BAG` |
| Eyebrow / micro-label | Sentence case, text face +0.04em | `Clinically tested` |
| Nav links | Sentence case | `Skin`, `Hair`, `Wellness` |

### Sentence shape
Short declaratives. One idea per line. A headline is at most 6 words per line and 2 lines. Fragments are allowed and encouraged in display type; body copy uses complete sentences.

**Do**
> `THE INSIDE JOB`
> Collagen you drink, not collagen you hope for. Three types, one shot, sixty seconds.

**Don't**
> `Unlock Your Best Skin Yet! ✨`
> Our revolutionary, cutting-edge formula is scientifically designed to help combat the visible signs of aging so you can feel confident again.

### Purchase model
**SUNNYCELLS sells subscriptions only.** There is no one-time purchase anywhere in the system, so no buy box ever presents subscribe-vs-one-time. The choice on offer is **delivery cadence**: every month, every two months, every three months, with the longer interval cheaper per month. `SubscriptionBox` is the only buy box; `SubscribeToggle` was removed for offering a mode we do not sell.

**Shipping is free on every order, with no threshold.** There is no minimum to reach and no progress meter to fill; a threshold meter is a mechanic for one-time carts, and `ShippingBar` was removed with `SubscribeToggle`. Say `Free shipping, always`.

Cancellation terms sit **above the fold, beside the price**, never in a footer: free shipping, skip or cancel anytime, sixty-day returns. A subscription business that hides its cancel terms is telling on itself.

Every price shown in a product grid is a subscription price and carries a `per month` line so it is never mistaken for a one-time figure.

### The first-order offer
**Every surface leads with 50% off the first order.** It is the brand's single standing offer and the one thing every entry point says before anything else: the announcement bar, the hero, every product card, the buy box, and the quiz result.

- **It is a standing term, not a promotion.** No countdown, no expiry, no code to enter, no "today only". A permanent offer stated plainly is more credible than a fake deadline, and the 35-55+ audience has seen every version of the fake one.
- **This is the only percentage in the brand.** Every other saving is stated in dollars (`Save $10`). The exception exists because the first-order discount is an acquisition headline, and `50%` lands harder than `$19` before she knows what the product costs.
- **The discount is charged, not just displayed.** `ProductCard` and `SubscriptionBox` hand their `onAdd` a `{ price, firstPrice }` line, and the bag charges `firstPrice` today while showing `Then $39 per month`. A button that says `$19` and a bag that says `$39` is the fastest way to lose her.
- **Never state the first price alone.** It always appears with what happens next: `$19 first month, then $39`. Hiding the ongoing price is the thing that generates chargebacks and one-star reviews.
- **The discounted figure rounds down** to a whole dollar, so the integer rule holds and the rounding never goes against her. `$39` becomes `$19`, not `$20`. Derive it with `firstOrderPrice()` rather than writing it by hand.
- The flag is black on white or on a colour block, and `tone="sun"` on photography. Never red: red is reserved for errors.

### Numbers, claims, and prices
- **Prices are always integers. Never decimals, ever.** `$49`, not `$49.00`, not `$49.99`. Discounted prices are integers too (`$39`, strike `$49`). Subscription savings read `Save $10`, never `Save 20.4%`.
- Currency symbol is tight to the number: `$49`. No space.
- Review counts use thin comma grouping: `12,480 reviews`. Ratings show one decimal (`4.7`), this is the *only* decimal in the system.
- Every efficacy claim carries a source line in `--size-meta` micro-label style, sentence case: `In a 12-week study of 84 women, aged 35 to 60`.
- Units in micro-label spec lines stay lowercase: `500 ml · 30 servings`, never `500 ML · 30 SERVINGS`.
- Percentages in claims are integers: `92% saw firmer skin`. Percentages in *savings* are forbidden, except the first-order offer above.
- **No per-day or per-serving pricing.** `$1.30/day` forces a decimal and breaks the integer rule. Monthly figures only.
- **No countdowns, stock counters, or "sale ends in" timers.** The audience recognises a squeeze, and the brand's whole position is that it is not running one.

### Punctuation
**No em dashes, anywhere.** Not in UI copy, not in marketing, not in email subject lines, not in documentation, not in code comments. Use a period for a hard break, a comma for an aside, or a colon to introduce. En dashes are fine in true numeric ranges, but prefer words in customer-facing copy: `aged 35 to 60`. This is the single most reliable tell that copy was machine-written, and the audience reads more carefully than most.

### No AI-isms
A sentence that could sit on any brand's page belongs on none of ours. The following are banned outright:

**Banned constructions**
| Never | Because |
|---|---|
| "It's not just X, it's Y" | The most overused construction on the internet. |
| "Say goodbye to X" / "Say hello to Y" | Ad copy from 2009. |
| "Unlock", "elevate", "empower", "transform your routine" | Verbs that describe nothing. |
| "Discover the secret to" / "The truth about" | We publish the study. There is no secret. |
| "In today's fast-paced world" | Filler opening. Start at the point. |
| "Whether you're X or Y, we've got you covered" | Addresses nobody. |
| "Game-changer", "revolutionary", "cutting-edge", "next-level" | Claims without a number behind them. |
| "Designed to help support" | Three hedges in one phrase. Say the dose. |
| "Your journey starts here" | Nobody is on a journey. She wants firmer skin. |
| "Let's dive in" / "Here's the thing" | Blog filler. |
| Rule-of-three lists as a reflex ("Firmer, brighter, stronger.") | Fine once. It is a tic when every line does it. |
| Rhetorical question openers ("Ever wonder why?") | Ask a real question or make a statement. |
| "Simply", "just", "effortlessly" | Minimising words. Her time is real. |

**Also banned:** exclamation marks in body copy, emoji anywhere, sentences that open with "Introducing", title case used for emphasis mid-sentence, and any claim carrying a hedge stack ("may help to support").

**The test:** cover the logo. If the sentence would work for any other supplement brand, rewrite it. A SUNNYCELLS line names a mechanism, a dose, a number, or a specific lived detail.

> Slop: *Say goodbye to dull skin and unlock your natural radiance. Our revolutionary formula is designed to help support your skin's journey.*
>
> Ours: *Ceramides first, collagen second. Barrier before building, because a leaky barrier wastes everything you put on top of it.*

### Emoji
**Never.** Not in UI, not in marketing copy, not in email subject lines. Colour and type do the emotional work.

### Microcopy patterns
| Situation | Copy |
|---|---|
| Add to bag | `ADD TO BAG · $49` (middot separator, integer) |
| Subscribe upsell | `Subscribe & save $10` |
| Out of stock | `Back in stock soon` (never "Sold out!") |
| Empty bag | `Nothing here yet.` + `Shop bestsellers` |
| Form error | `We need an email address to send your order.`, states what's needed, never "Invalid input" |
| Shipping line | `Free shipping on every subscription` |
| First-order offer | `50% OFF FIRST ORDER` |
| Loading | `One moment.` |

---

## Visual foundations

### Colour
Black ink on white paper is **~90% of every screen**. Colour is an event.

- **Sun `#FFC61E`**, the brand primary. Highlight blocks, the default product-block colour, the accent CTA.
- **Zest `#FF7A1A` / Sky `#8CB0E8` / Sprout `#79C47E`**, **product-family codes**, not a decorative palette. One hue per family (topical / hair / wellness), applied as a flat block behind product imagery and, optionally, as the add-to-bag fill on that product's card. Never mix two family colours inside one card.
- Neutrals are **warm** (`--ink-60` is `#6B6B60`, a green-grey, not a blue-grey) so they never chill next to the yellow.
- **All four accents take black text only.** Yellow on white and yellow-with-white-text both fail contrast; the system forbids them.
- **`--ink-40` is not a text colour.** At 2.8:1 on white it fails AA even at large sizes. It is for hairline-adjacent furniture only: breadcrumb separators, disabled glyphs, dismiss icons on dark fills. Struck-through compare-at prices use `--ink-60`, which clears AA at 4.8:1. The lightest text colour in the system is `--ink-60`.
- **Nothing but black text on the accents.** Grey on `--sun` measures 3.4:1. Any label, note, or placeholder sitting on a yellow, orange, blue, or green surface takes `--ink`, not a grey.
- Tints (`--sun-tint` etc.) are for quiet background bands and selected states, never for text.
- Max **two** background colours on any one screen: white plus one of `--shell` or an accent block.

### Type
`Outfit` for display, `Figtree` for text and micro-labels. **Two faces, no third.**

- **Display**: `--weight-max` (900) or `--weight-display` (800), ALL CAPS, `--tracking-display` (-0.03em), `--leading-tight` (0.94). Headlines are meant to be *huge*, 92px desktop hero is normal, not loud.
- **Body**: `--size-body` **20px is the floor** and the default. `--size-body-lg` (22px) for lead paragraphs. `--size-meta` (17px) exists only for legal lines, review counts, and study footnotes.
- **Weight floor is 500.** There is no 300 or 400 in this system. Secondary text goes lighter in *colour* (`--ink-60`), never in weight.
- Body line-height is generous: `1.55`. Measure caps at ~62 characters.
- Micro-labels (eyebrows, SKU codes, ingredient specs, study footnotes) are the **text face at `--tracking-mono` (+0.04em), weight 600, sentence case**, never all caps. There is deliberately no monospace or third typeface: a mono with slab spurs reads as a serif beside the geometric sans and breaks the voice. Where digits should align in a spec line, add `font-variant-numeric: tabular-nums` rather than reaching for a mono. All-caps at small sizes reads generic and machine-made; the only all-caps in the system are display headlines, button labels, and `Badge`.

### Corners
Soft, never bubbly. **Buttons 12px. Inputs 10px. Cards 16px. Sheets/modals 20px. Product imagery 12px.** Full pills (`999px`) are reserved for tags, chips, and rating badges only, a pill-shaped button is off-brand.

### Cards
White fill, **1px `--border-hairline`**, 16px radius, no shadow at rest. Structure comes from the hairline and the colour block, not from depth. On hover a product card lifts `-2px` and takes `--shadow-card`. Product cards are built as: **flat colour block (top ~60%) → white info well (bottom) → full-width CTA**. The product photo is a cutout on transparent PNG that overhangs the top of the colour block, that overhang is the brand's signature merchandising move.

### Shadows
Rare and soft, always neutral-black at very low alpha. `--shadow-card` for hover, `--shadow-raised` for menus/dialogs, `--shadow-sheet` for mobile bottom sheets. **Never a coloured or hard shadow.**

### Borders
1px hairline `--ink-20` is the workhorse. 2px `--ink` marks a *selected* state (chosen variant, active subscription option). Focus is a 3px white gap + 3px black ring (`--shadow-focus`) so it survives on both white and coloured surfaces.

### Backgrounds
Flat colour only. **No gradients, no mesh, no noise, no drop-shadowed blobs.** Section rhythm comes from alternating white ↔ `--shell` ↔ a full-bleed accent band. A full-bleed accent band always sets black type on it.

### Imagery
Two kinds:
1. **Product cutouts**. PNG on transparent, hard-lit, placed on a flat accent block.
2. **Portraiture**, real women 35–65, warm daylight, minimal retouching, visible lines and grey hair welcome, neutral wardrobe. Never a stock "clinical white lab coat" shot, never a woman covering her face, never a before/after grid.

No illustrations, no 3D renders, no abstract molecule graphics.

### Motion
Calm and quick. `--duration-fast` (160ms) for hovers, `--duration-base` (240ms) for panels, `--ease-standard`. **No bounce, no spring, no looping attention-getters, no parallax.** Motion confirms; it never performs. Respect `prefers-reduced-motion` by dropping to opacity-only.

### Hover & press
- **Buttons**: hover darkens the fill (`--action-*-press`); press adds `scale(0.985)`. No opacity fades on solid buttons.
- **Cards**: hover lifts `-2px` + `--shadow-card`.
- **Links**: black text, hover adds a 2px underline offset 4px. Never a colour change.
- **Ghost/quiet buttons**: hover fills with `--ink-10`.

### Transparency & blur
Almost never. One exception: the sticky desktop header sits on `rgba(255,255,255,0.92)` + `backdrop-filter: blur(12px)` once the page scrolls. Modal scrims are flat `rgba(13,13,12,0.5)`, not blurred.

### Layout
- Desktop content max `1360px`, `48px` gutters. Mobile gutters `20px`.
- Section gap `112px` desktop / `64px` mobile.
- Product grids: 3-up desktop, 2-up tablet, 1-up mobile with 24px gap.
- Fixed elements: sticky header (desktop + mobile), sticky add-to-bag bar on mobile PDP, bag drawer from the right on desktop / bottom sheet on mobile.
- **Hit targets never below 48px**, `--tap-min` is 48, above the 44 minimum, on purpose.

---

## Iconography

**Lucide**, loaded from CDN (`https://unpkg.com/lucide-static@latest/icons/<name>.svg`), used at **2px stroke**, the standard 1.5px reads too thin for this audience and next to 500-weight type. This is a **flagged substitution**: no brand icon set was provided.

Rules:
- Stroke `2px`, `currentColor`, square cap/join, size 24px (inline with body) or 28px (nav/header).
- Icons are always `--ink`. An icon never carries an accent colour on its own.
- Icons never appear without a label except in the header utility row (search / account / bag), where each carries an `aria-label`.
- **No emoji, ever.** No unicode dingbats used as icons (no `★` for ratings, the star rating is a Lucide `star` SVG).
- No icon font. No custom-drawn SVG illustration.

Working set: `menu`, `search`, `user`, `shopping-bag`, `chevron-down`, `chevron-right`, `x`, `plus`, `minus`, `check`, `star`, `truck`, `repeat`, `shield-check`, `arrow-right`.

---

## Gaps & substitutions

1. **No logo was provided.** Wherever a mark belongs, the system sets the wordmark **SUNNYCELLS** in `Outfit 900`, ALL CAPS, `-0.04em` tracking, black. No mark has been drawn or invented. Send the real logo files and this becomes a one-line swap.
2. **No brand fonts were provided.** Outfit + Figtree are Google Fonts stand-ins matching the "geometric bold, slightly rounded" brief. Send licensed files and swap `tokens/fonts.css`. An earlier draft carried IBM Plex Mono for micro-labels; it was cut because its slab spurs read as a serif against the geometric sans.
3. **No brand icon set.** Lucide at 2px is the stand-in.
4. **Product names, prices, copy, and review counts throughout are placeholders** written to brand voice (`SC-12 Liquid Collagen`, `SC-04 Barrier Cream`, etc.). They obey the integer-price rule but are not real SKUs.
5. **No photography was supplied**. UI kits use flat accent blocks with typographic placeholders where product cutouts and portraits belong, marked in the kit READMEs.

---

## Index

| Path | What it is |
|---|---|
| `styles.css` | Global entry point, imports every token file. Link this one file. |
| `tokens/` | `fonts` · `colors` · `typography` · `spacing` · `radius` · `elevation` · `motion` |
| `guidelines/` | Foundation specimen cards (Type, Colors, Spacing, Brand) |
| `components/_card.js` | Preview-only loader for the specimen cards and UI kits (not part of the shipped system) |
| `components/core/` | `Button` `IconButton` `Badge` `OfferFlag` `Tag` `Card` `Wordmark` |
| `components/forms/` | `Input` `Select` `Checkbox` `RadioOption` `Switch` `QuantityStepper` |
| `components/feedback/` | `Banner` `Dialog` `Toast` |
| `components/navigation/` | `NavLink` `Tabs` `Accordion` `Breadcrumb` |
| `components/commerce/` | `Price` `StarRating` `ProductCard` `SubscriptionBox` |
| `ui_kits/ecommerce_desktop/` | Home, PLP, PDP, bag drawer, 1440px. `data.js` holds the shared placeholder catalogue |
| `ui_kits/ecommerce_mobile/` | Home, PDP, Bag sheet, 390px |
| `SKILL.md` | Agent Skills wrapper so this system can be used in Claude Code |

**Set the File type to "Design System" in the Share menu** so others in your org can use this.
