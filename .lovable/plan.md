# Fix: bandă albă rămasă de la header pe mobil la încărcarea homepage

## Problemă
Header-ul este ascuns vizual pe mobil prin `-translate-y-full`, dar rămâne în layout ca element `sticky`, lăsând o bandă albă goală de ~64 px în partea de sus a homepage-ului la încărcare.

## Soluție
Schimbăm comportamentul pe mobil astfel încât header-ul să iasă complet din fluxul documentului când nu este scroll-at, nu doar să fie translatat în sus.

## Modificări

### `src/components/layout/Header.tsx`
- Înlocuim `sticky top-0` cu `fixed top-0 left-0 w-full` pe viewport-uri mobile (`< md`).
- Păstrăm `md:sticky md:top-0` pentru tabletă/desktop, ca să rămână vizibil și să nu acopere conținutul.
- Păstrăm logica existentă `scrolled ? translate-y-0 : -translate-y-full` și `md:translate-y-0`.
- Păstrăm stilurile de fundal, blur și border.

## Rezultat așteptat
- Pe mobil: la încărcare nu mai rămâne banda albă; headerul apare doar după scroll > 50 px.
- Pe tabletă/desktop: headerul rămâne vizibil permanent, fără modificări.
