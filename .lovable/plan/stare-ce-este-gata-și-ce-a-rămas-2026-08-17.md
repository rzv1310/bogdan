# Stare: ce este gata și ce a rămas

## Gata (verificat)
- Cele 10 pagini noi (5 RO + 5 EN) există și sunt înregistrate în rute (app + prerender) și în perechile de limbă.
- Conținut complet în `src/lib/subServices/ro.ts` și `en.ts`.
- Bullets cu linkuri în caseta „Infracțiuni de corupție” din pagina Servicii.
- `public/sitemap.xml`, sitemap RO/EN din site, `public/llms.txt` actualizate.
- Linkuri interne automate (părinte + frați) prin `relatedServices.ts`.

## Rămas nefăcut: linkuri directe din pagina-pilon
Pagina-pilon „Infracțiuni de corupție și fapte legate de exercitarea funcției publice” (RO și EN) nu conține niciun link direct către cele 5 subservicii noi. Ele sunt accesibile doar din pagina Servicii, sitemap și „Servicii conexe”. La clusterul Criminalitate economică am pus linkuri explicit în pagina-pilon.

### Ce propun
- În pagina-pilon RO, imediat sub bio-block, un rând compact de linkuri (CTA-uri secundare, ca la subservicii) către: Dare și luare de mită, Trafic de influență, Abuz în serviciu, Neglijență în serviciu, Conflict de interese.
- Același bloc în varianta EN, cu slug-urile `/en/services/...`.
- Fără schimbări de conținut, titletag sau H1.

## Detalii tehnice
- Fișiere: `src/pages/services/infractiuni-de-coruptie-si-fapte-legate-de-exercitarea-functiei-publice.tsx` și echivalentul EN.
- Reutilizez componenta existentă de link (`SubServiceLinkButton`), fără CSS nou.
- Verificare finală prin build cu prerender pentru toate rutele.
