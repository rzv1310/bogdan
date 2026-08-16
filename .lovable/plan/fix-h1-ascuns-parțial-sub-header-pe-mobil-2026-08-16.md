# Fix: H1 ascuns parțial sub header pe mobil

## Problema
Pe mobil headerul este `fixed` (înălțime 64px) și rămâne vizibil pe toate paginile în afară de homepage, dar zona de conținut (`<main>`) nu are spațiu rezervat în partea de sus. Măsurat pe `/servicii/audiere-politie-parchet` la 390px lățime: headerul ocupă 0-64px, iar H1-ul începe la 32px - deci intră sub header.

Pe desktop și tablete (>=768px) headerul e `sticky`, deci acolo nu există problema și nimic nu se schimbă.

## Soluția
În `src/components/layout/Layout.tsx`, adaug spațiu de sus doar pe mobil pentru conținut, cu excepția homepage-ului (unde headerul e ascuns până la scroll de 50px și hero-ul trebuie să rămână lipit de marginea de sus).

- Pe mobil, pentru toate paginile în afară de `/` și `/en`: `pt-16 md:pt-0` pe `<main>`.
- Homepage RO/EN: fără padding (comportament neschimbat).

## Detalii tehnice
- Detectez homepage-ul cu `path === "/" || path === "/en"`.
- Clasa aplicată pe `<main>`: `isHomepage ? "" : "pt-16 md:pt-0"` (64px = exact înălțimea barei `h-16`).
- Verificare: măsor pozițiile headerului și H1-ului la 390px pe o pagină de serviciu, o subservicii, blog, contact, despre-mine și homepage, plus la 1280px pentru a confirma zero regresii.
