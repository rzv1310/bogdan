# Completare integrare pagina „Urmărire penală”

Pagina `/servicii/urmarire-penala` există și este completă (conținut, meta, schema, rută, prerender, sitemap.xml, footer). Ce lipsește sunt punctele de intrare interne.

## Ce lipsește acum

1. **Caseta din homepage (secțiunea Servicii)** — lista de casete vine din `translations.ts` (`ro.services`); „Urmărire penală” nu are caseta ei, deci nici link din grila de pe homepage.
2. **Pagina „Harta site”** (`/harta-site`) — nu conține linkul către noul serviciu.
3. **Meta keywords greșite** — nu există keywords per pagină; toate paginile prerendate moștenesc `<meta name="keywords" content="avocat drept penal, avocat penalist, avocat drept penal bucuresti">` din `index.html`, deci și pagina nouă.

Restul e în regulă: meniul din header și footer folosesc lista comună de servicii, care include deja pagina.

## Ce voi face

1. Adaug în `src/lib/translations.ts` (RO) o casetă nouă „Avocat urmărire penală” cu un text scurt de 2-3 rânduri despre apărarea din faza de urmărire penală (audieri, reținere, arestare preventivă, percheziții), plasată prima în lista de servicii, după caseta generală „Avocat Drept Penal”.
2. Actualizez `serviceRoutes` din `src/pages/Index.tsx` ca noua casetă să aibă butonul de acces către `/servicii/urmarire-penala` (și mențin alinierea indexurilor pentru celelalte casete).
3. Adaug în `src/pages/Sitemap.tsx` intrarea „Urmărire Penală - Apărare din Prima Oră” în lista serviciilor RO.
4. Adaug suport pentru `keywords` per pagină (în `useSEO` / `ssr-head` + injecție în prerender) și setez pe `/servicii/urmarire-penala`: `avocat urmărire penală, avocat dosar penal, avocat faza de urmărire penală`. Keywords-ul global din `index.html` rămâne neschimbat pentru celelalte pagini.
5. Rulez build-ul pentru a confirma prerenderul și validarea SEO (0 erori).


## Note tehnice

- Homepage-ul EN nu se modifică: pagina este RO-only (fără corespondent în `routeMap.ts`, marcată `RO_ONLY` în validatorul SEO), deci nu adaug casetă în `en.services`.
- Grila de servicii pe homepage e împărțită în două blocuri (`slice(0,4)` și `slice(4)`) cu un CTA telefonic între ele; inserarea unei casete la început mută o casetă din primul bloc în al doilea — aspect vizual normal, fără schimbări de layout.
