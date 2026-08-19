# Project instructions

## Writing
- **Never use em dashes.** Not in designs, copy, documentation, code comments, or chat. Use a period for a hard break, a comma for an aside, or a colon to introduce something. En dashes are acceptable in true numeric ranges only, and words are better in customer-facing copy ("aged 35 to 60").
- **Never use AI-isms.** No "it's not just X, it's Y", no "say goodbye to", no "unlock/elevate/empower/transform", no "discover the secret", no "in today's fast-paced world", no "whether you're X or Y", no "game-changer/revolutionary/cutting-edge", no "designed to help support", no "your journey starts here", no "let's dive in", no reflexive rule-of-three lists, no rhetorical-question openers, no "simply/just/effortlessly", no "Introducing", no exclamation marks in body copy. The test: cover the logo. If the sentence would work for any other brand, rewrite it so it names a mechanism, a dose, a number, or a specific lived detail. Full list in `readme.md` under "No AI-isms".

## SUNNYCELLS design system
- **Micro-labels are sentence case in the text face, never all caps and never mono.** Eyebrows, spec lines, SKU codes, and study footnotes use `--font-label` at `--tracking-mono` (+0.04em), weight 600, with normal casing. Units stay lowercase (`500 ml · 30 servings`). The system has two typefaces only: `--font-display` (Outfit) and `--font-text` / `--font-label` (Figtree). No monospace.
- The only all-caps in the system: display headlines, button labels, and `Badge`.
- **Subscriptions only.** No one-time purchase. Buy boxes offer delivery cadence via `SubscriptionBox`. No countdowns or scarcity lines.
- **Lead with 50% off the first order** on every surface, using `OfferFlag`. It is a standing term with no countdown or expiry, the only percentage in the brand, and always shown with the ongoing price (`$19 first month, then $39`). Derive the figure with `firstOrderPrice()`, which rounds down.
- Prices are integers. `$49`, never `$49.00` or `$49.99`. Savings in dollars, never percentages.
- Body text 20px minimum, font weight 500 minimum.
- `--ink-40` is not a text colour on light surfaces (2.8:1). Lightest text on white is `--ink-60`. Only black text on the accent colours.
- Buttons have 12px corners, never pills. Tap targets never below 48px.
- No emoji, no gradients, no bounce animation, no "anti-ageing" language.
