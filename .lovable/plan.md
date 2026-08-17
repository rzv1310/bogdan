# Plan: WhatsApp CTA button color

## Goal
Set the default background color of the WhatsApp document CTA button to `#1DA851`, and keep the hover color identical (`#1DA851`) so there is no hover transition.

## Change
In `src/components/services/WhatsAppDocsCta.tsx`, update the green variant class string from:

```
border border-[#1DA851] bg-[#25D366] text-white hover:bg-[#1DA851]
```

to:

```
border border-[#1DA851] bg-[#1DA851] text-white hover:bg-[#1DA851]
```

## Verification
- Run the build to ensure no TypeScript/Tailwind errors.
- Visually confirm the button renders solid `#1DA851` both at rest and on hover.
