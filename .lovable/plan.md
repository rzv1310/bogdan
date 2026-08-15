# Fix: pagini albe la navigare (se încarcă doar după refresh)

## Ce am verificat

- Am testat navigarea prin click pe linkuri, într-un browser curat, pe `avocatpenalbucuresti.ro`, pe `bogdan.lovable.app` și pe preview-ul local: toate paginile testate (`/servicii/`, `/servicii/urmarire-penala`, `/contact`) s-au încărcat corect, fără erori JS. Deci problema nu apare pe o sesiune nouă - apare doar în anumite sesiuni de browser.
- Toate paginile în afară de homepage sunt încărcate „lazy" (fiecare pagină e un fișier JS separat, cu nume care conține un hash de versiune).
- `Suspense` are `fallback={null}` și nu există nicio tratare a erorii de încărcare a acestor fișiere.

## Cauza cea mai probabilă (de confirmat prin fix)

Când site-ul e republicat, fișierele JS vechi dispar. Un vizitator care are deja pagina deschisă (sau HTML-ul în cache) cere la click fișierul vechi al paginii de serviciu -> cererea dă 404 -> încărcarea paginii eșuează -> pentru că `fallback` e `null` și nu există error boundary, ecranul rămâne complet alb. Un refresh aduce HTML-ul nou cu fișierele noi, deci pagina merge. Acest scenariu explică exact simptomul: doar paginile lazy (servicii/subservicii), doar uneori, pe desktop și pe mobil, rezolvat de refresh.

## Ce voi implementa

1. **Reîncărcare automată la eroare de chunk** (`src/lib/lazyRoute.ts`): import-urile lazy se vor face printr-un wrapper care, la eșec, mai încearcă o dată, iar dacă tot eșuează face un `location.reload()` o singură dată per sesiune (marcaj în `sessionStorage`, ca să nu se ajungă la buclă de reload). Practic, refresh-ul care acum e manual se face automat și instant.
2. **Error boundary pentru rute** (component nou, folosit în `src/routes.tsx`): dacă totuși randarea eșuează, în loc de ecran alb se afișează un mesaj scurt cu buton „Reîncarcă pagina" - nu mai există niciun caz de pagină complet albă.
3. **Fallback vizibil pentru `Suspense`** în loc de `null`: un schelet simplu (header + zonă de conținut), ca tranziția între pagini să nu arate ca un ecran alb nici pe conexiuni lente.
4. Nicio schimbare de conținut, design, SEO sau prerender: layout-ul, textele, JSON-LD și HTML-ul prerandat rămân identice.

## Verificare

- Build + prerender + validarea SEO rulate la final (trebuie 0 erori).
- Test în browser: navigare prin click pe pagini de servicii și subservicii, plus un test cu chunk-ul blocat artificial (răspuns 404 forțat) ca să confirm că se face reîncărcarea automată în loc de ecran alb.
