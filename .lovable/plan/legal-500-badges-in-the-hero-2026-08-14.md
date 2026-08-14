# Legal 500 badges in the hero

Add the 5 Legal 500 EMEA distinctions (Rising Star 2020, Next Generation Partner 2021–2024) as a small vertical strip to the left of the lawyer's portrait in the homepage hero.

## Layout

Desktop: the current layout stays exactly as it is. The 5 badges are overlaid on top of the portrait, along its left edge, stacked vertically (small, ~56–64px each, chronological order, absolutely positioned inside the existing portrait container so nothing shifts).

```text
[ H1 + quote + CTA ]   [b] [   portrait   ]
                       [b]
                       [b]
                       [b]
                       [b]
```

Mobile: the current layout stays exactly as it is. The 5 badges are overlaid on top of the portrait, along its left edge, stacked vertically, at the same small size as desktop.

## Scope

- Romanian homepage hero (`src/pages/Index.tsx`)
- English homepage hero (`src/pages/en/Homepage.tsx`), same treatment

## Technical notes

- Register the 5 uploaded PNGs as CDN assets via `lovable-assets create` into `src/assets/*.asset.json` and import their URLs — no binaries added to the repo.
- Small shared badge list defined once per page file (array of `{ src, alt }`) and rendered in a loop.
- Alt text descriptive and SEO-friendly, e.g. "Legal 500 EMEA Next Generation Partner 2024 – avocat Bogdan Lamatic"; `loading="lazy"` since they are decorative credentials, keeping the portrait as the priority image.
- No color literals; spacing/radius from existing utility patterns already used in the hero.
