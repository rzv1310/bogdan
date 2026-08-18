# Unificare @id pentru entitatea business

Înlocuire globală a ID-ului vechi de entitate cu un ID canonic pe domeniul propriu.

## Ce se schimbă

Stringul:

```text
https://avocatpenalbucuresti.ro/#legalservice
```

devine:

```text
https://avocatpenalbucuresti.ro/#legalservice
```

Replacement global de string, nu pe proprietăți individuale. Toate cele 9 apariții existente sunt acoperite automat:

- `src/pages/Index.tsx` (4): `LegalService.@id`, `review.itemReviewed.@id`, `Person.worksFor.@id`, referința din `WebSite`/publisher
- `src/pages/en/Homepage.tsx` (4): aceleași poziții pe varianta EN
- `src/pages/About.tsx` (1): `Person.worksFor.@id`

## Ce NU se schimbă

- `"url": "https://avocatpenalbucuresti.ro/"` pe LegalService rămâne intact (url și @id au roluri diferite)
- `https://avocatpenalbucuresti.ro/despre-mine#person` rămâne ID-ul entității Person
- Orice alt `@id` care identifică o entitate diferită (WebPage, BreadcrumbList, WebSite)

## Verificare

1. `rg` în tot repository-ul (`rg "https://avocatpenalbucuresti.ro/#legalservice" .`, cu excluderi pentru `node_modules`, `.git` și `dist` la prima trecere): 0 apariții ale stringului vechi
2. Build complet, apoi `rg` în `dist/`: 0 apariții în cele 138 de pagini prerenderate
3. Confirmare că pe homepage RO și EN nodul `LegalService` are noul `@id`, iar `itemReviewed` / `worksFor` trimit la exact același `@id`
