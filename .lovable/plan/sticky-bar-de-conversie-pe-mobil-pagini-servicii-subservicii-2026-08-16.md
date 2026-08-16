# Sticky bar de conversie pe mobil (pagini servicii + subservicii)

## Ce se schimbă

Pe mobil, în toate paginile de servicii (`/servicii/...`) și subservicii - existente și viitoare - butonul rotund floating WhatsApp dispare și este înlocuit de o bară fixă jos, permanentă, care apare după scroll:

```text
┌───────────────────────────────┬─────────┐
│   ☎ Sună acum                 │ WhatsApp│
│        (~68% lățime)          │  (~32%) │
└───────────────────────────────┴─────────┘
```

- Stânga: „☎ Sună acum” - buton principal galben (accent), link `tel:+40316320183`, ~68% din lățime.
- Dreapta: „WhatsApp” - buton verde WhatsApp (#25D366) cu iconiță, link `wa.me/+40745506443`, restul lățimii.
- Apare doar pe mobil (`md:hidden`), doar după ~50px scroll, rămâne fixă în partea de jos.
- Pe restul site-ului (homepage etc.) rămâne butonul floating WhatsApp actual, nemodificat.
- Se respectă consimțământul cookie exact ca acum (bara se afișează după acceptare, la fel ca butonul actual) și nu se suprapune cu bannerul de cookies.
- Se adaugă spațiu suplimentar jos în paginile de servicii ca bara să nu acopere conținutul/footerul.

## Detalii tehnice

- Componentă nouă `src/components/layout/MobileConversionBar.tsx`: `fixed bottom-0 inset-x-0 z-[60] flex md:hidden`, cele două link-uri cu `basis-[68%]` / `basis-[32%]`, safe-area padding (`pb-[env(safe-area-inset-bottom)]`), listener de scroll pentru afișare după 50px, gating pe `useCookieConsent`.
- În `src/components/layout/Layout.tsx`: pe baza `useLocation().pathname` se decide ce se randează:
  - `pathname` începe cu `/servicii` sau `/en/services` → `MobileConversionBar`
  - altfel → `WhatsAppButton` existent
  Astfel regula se aplică automat oricărei pagini viitoare de serviciu/subserviciu, fără modificări per pagină.
- Texte: RO „Sună acum” / „WhatsApp”; EN „Call now” / „WhatsApp” (detectat din prefixul `/en`).
- Verificare finală: build + o captură pe mobil (375px) pe `/servicii/masuri-preventive` și pe o pagină de subserviciu.
