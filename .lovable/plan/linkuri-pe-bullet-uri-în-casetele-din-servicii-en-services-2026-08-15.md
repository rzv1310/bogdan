# Linkuri pe bullet-uri în casetele din /servicii (+ /en/services)

## Ce se schimbă

1. Caseta nu mai este clickable în întregime (se elimină linkul pe tot cardul).
2. Fiecare bullet care are pagină proprie de subserviciu devine link, cu săgeată la final.
3. Bullet-urile fără pagină rămân text simplu (bulină, fără săgeată).
4. Textul de la finalul casetei („Vezi toate serviciile de ...”) devine singurul link garantat, către pagina serviciului respectiv.

## Unde există subservicii cu pagini

Doar caseta „Audieri și urmărire penală” are bullet-uri cu pagini existente:

```text
Audiere poliție sau parchet -> /servicii/audiere-politie-parchet
Percheziție domiciliară     -> /servicii/perchezitie-domiciliara
Percheziție informatică     -> /servicii/perchezitie-informatica
Avocat DIICOT               -> /servicii/avocat-diicot
Avocat DNA                  -> /servicii/avocat-dna
```

Echivalent EN în „Questioning and criminal investigation”:

```text
Police or prosecutor questioning -> /en/services/police-prosecutor-questioning
Home search                      -> /en/services/home-search
Computer search                  -> /en/services/computer-search
DIICOT lawyer                    -> /en/services/diicot-lawyer
DNA lawyer                       -> /en/services/dna-lawyer
```

Restul casetelor (criminalitate economică, corupție, spălare de bani, crypto, droguri, rutiere, contra persoanei, malpraxis, accidente de muncă, victime, precum și casetele care sunt ele însele subservicii: percheziție domiciliară, percheziție informatică, DIICOT, DNA, audiere) au bullet-uri fără pagini dedicate, deci acolo linkul rămâne doar pe textul final.

## Detalii tehnice

- `src/lib/serviceGroups.ts`: `subServices: string[]` devine `subServices: { label: string; to?: string }[]`, cu `to` completat doar pentru bullet-urile de mai sus.
- `src/pages/servicii/index.tsx` și `src/pages/en/services/index.tsx`:
  - `GlowCard` fără prop `to` (redevine container non-link).
  - bullet cu `to` -> `<Link>` cu subliniere la hover, în accent, plus `ArrowRight` mic; bullet fără `to` -> text ca acum.
  - textul `card.cta` devine `<Link to={card.to}>` cu săgeată, ca înainte de unificare.
- Se verifică și alte locuri care consumă `subServices` (ex. homepage/teasere) și se adaptează la noul tip.
- Fără em dash; se rulează build-ul pentru validarea SEO.
