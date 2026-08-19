---
name: sunnycells-design
description: Use this skill to generate well-branded interfaces and assets for SUNNYCELLS, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Non-negotiables for SUNNYCELLS

1. **Prices are integers.** `$49`, never `$49.00` or `$49.99`. Savings in dollars, never percentages. Use the `Price` component.
2. **Body text is 20px minimum**; font weight is 500 minimum. The audience is women 35-55+.
3. **Black on white** is the base. Yellow (`--sun`) is the primary accent; orange/blue/green are product-family codes, not decoration.
4. **All four accents take black text.** White on yellow is forbidden.
5. **Buttons are 12px corners, never pills.** Tap targets never below 48px.
6. **Subscriptions only.** No one-time purchase exists. Buy boxes choose a delivery cadence, using `SubscriptionBox`. Cancel terms sit next to the price. No countdowns or scarcity.
7. **Lead with 50% off the first order.** The one standing offer and the one percentage in the brand, on every entry point. Always paired with the ongoing price (`$19 first month, then $39`). Never a countdown or expiry.
8. **No emoji, no gradients, no bounce animation, no "anti-ageing" language.**
