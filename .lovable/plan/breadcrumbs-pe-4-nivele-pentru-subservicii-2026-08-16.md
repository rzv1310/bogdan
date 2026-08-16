# Breadcrumbs pe 4 nivele pentru subservicii

## Ce se schimbă

Toate paginile de subservicii (RO + EN, cele 10 existente și orice pagină viitoare) afișează breadcrumb-ul cu pagina-părinte inclusă:

```text
Acasă > Servicii > Măsuri preventive > Reținere 24 ore
Acasă > Servicii > Măsuri preventive > Arest preventiv
Acasă > Servicii > Măsuri preventive > Control judiciar
Acasă > Servicii > Măsuri preventive > Arest la domiciliu
Acasă > Servicii > Urmărire penală > Audiere Poliție/Parchet
Acasă > Servicii > Urmărire penală > Percheziție domiciliară
Acasă > Servicii > Urmărire penală > Percheziție informatică
Acasă > Servicii > Urmărire penală > Avocat DIICOT
Acasă > Servicii > Urmărire penală > Avocat DNA
```

Echivalent pe EN: `Home > Services > Preventive measures > Pre-trial detention`, `Home > Services > Criminal investigation > ...`.

URL-urile rămân neschimbate. Nivelele 1-3 sunt linkuri clickable, ultimul rămâne text.

JSON-LD `BreadcrumbList` primește aceleași 4 poziții, cu URL-uri absolute fără slash final (consecvent cu canonical-urile și sitemap.xml).

## Detalii tehnice

- `src/lib/subServices/ro.ts` / `en.ts`: câmpul `parent` primește o etichetă de breadcrumb capitalizată (ex. „Măsuri preventive”, „Urmărire penală”, „Preventive measures”, „Criminal investigation”), separată de eticheta folosită în proză, astfel încât ambele forme rămân corecte. Se aplică pe `PARENT`, `PARENT_MP`, `PARENT` (EN) și `PARENT_MP_EN`, deci automat pentru toate subserviciile actuale și viitoare care le folosesc.
- `src/components/services/SubServicePage.tsx`: se inserează un `BreadcrumbItem` cu link către `data.parent.to` între „Servicii” și pagina curentă; în schema `BreadcrumbList` pagina-părinte devine `position: 3` iar pagina curentă `position: 4`.
- Tip `SubServicePageData`: `parent` devine `{ to: string; label: string; breadcrumbLabel: string }` (sau echivalent), ca noile pagini să fie obligate să dea eticheta de breadcrumb.
- Verificare finală: build + `scripts/validate-seo.mjs`.
