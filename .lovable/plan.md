# Fix: butoanele din header nu navighează în preview

## Ce am verificat

Am rulat navigarea în browser pe dev server local, la același viewport (910x633):

- Click pe "Contact" -> URL devine `/en/contact`, pagina se randează.
- Click pe "Servicii" -> "Toate serviciile" -> URL devine `/servicii`, H1 "Servicii avocat penal în București".
- Consola din preview nu arată erori de încărcare de chunk-uri (doar warning-uri React despre `forwardRef`).

Deci codul de rutare în sine funcționează. Diferența relevantă între ce merge și ce nu merge:

- RO / EN (merge) = `<Button onClick={navigate(...)}>` -> navigare programatică.
- Servicii / Despre mine / Contact (nu merge) = `<Link>` / `<NavLink>` -> navigare prin click pe `<a>`.

Concluzie probabilă (neconfirmată direct, pentru că preview-ul cere autentificare și nu îl pot deschide din sandbox): în iframe-ul de preview, click-ul pe ancoră este interceptat/anulat, iar ruta rămâne cea afișată. Pe site-ul publicat aceleași linkuri ar trebui să funcționeze normal.

## Ce propun să facem

1. Fac header-ul robust la interceptarea click-ului pe ancore: păstrez `<Link>`/`<NavLink>` cu `href` real (important pentru SEO și crawl), dar adaug un handler de click care face navigarea programatic (`navigate(to)`) și oprește comportamentul implicit. Astfel meniul funcționează identic în preview și în producție.
2. Aplic asta pentru: dropdown-ul "Servicii" (inclusiv "Toate serviciile" și cele 12 linkuri), "Despre mine", "Contact" și logo-ul din stânga.
3. Păstrez neschimbate: RO/EN, comportamentul de ascundere a header-ului pe mobil în homepage, drawer-ul de mobil (acesta deja folosește `navigate`).
4. Verific cu un test în browser: click pe fiecare tip de link din header pe desktop (910px) și pe mobil, confirmând schimbarea URL-ului și randarea H1-ului corect.

Dacă după această schimbare problema persistă exact la fel în preview, atunci cauza este strict în shell-ul de preview (nu în aplicație), iar site-ul publicat rămâne neafectat - îți spun clar asta la final.

## Detalii tehnice

- Fișier modificat: `src/components/layout/Header.tsx`.
- Se adaugă un helper local `goTo(to)` care apelează `event.preventDefault()` + `navigate(to)`, respectând click-urile cu modificatori (Ctrl/Cmd/middle click) pentru a nu strica deschiderea în tab nou.
- Fără modificări de layout, stil sau conținut.
