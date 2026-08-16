# Rescriere pagina Măsuri preventive + 4 pagini noi de subservicii (RO + EN)

Păstrez integral stilul și designul existent: aceleași carduri cu chenar accent, breadcrumbs deasupra H1, hero standardizat (H1 -> paragraf urgență negru, o propoziție per rând -> buton "Sună-mă acum!" -> rating Google -> bullets subservicii -> bloc bio compact), FAQ, JSON-LD, "Servicii conexe". Nicio schimbare de design system.

## 1. Pagina pilon /servicii/masuri-preventive (RO)

Rescriu conținutul cu textul furnizat, structurat în secțiunile existente:

- Hero: H1 "Avocat pentru măsuri preventive în București", paragrafele de urgență, lista situațiilor în care intervin, butonul principal + telefon, rating, bio compact.
- "Ai una dintre aceste probleme?" - 4 blocuri (Reținere 24 ore, Arest preventiv, Control judiciar, Arest la domiciliu), fiecare cu link către subpagina proprie, plus blocul "Nu știi exact ce măsură se discută?".
- "Ce se întâmplă acum?" - cele 6 scenarii, fiecare cu butonul său de apel.
- "Ce fac imediat după ce mă contactezi" (4 pași), "Ce trebuie să-mi spui sau să-mi trimiți", "De ce să mă alegi", "Ce riști dacă nu reacționezi la timp".
- "Ce sunt măsurile preventive", "Care sunt cele 5 măsuri preventive" cu cele 5 subsecțiuni și linkurile către subpagini, "Cum te ajut - metoda mea de lucru" (A-D), "Pași practici în funcție de situația ta".
- FAQ: cele 11 întrebări noi (înlocuiesc cele 9 actuale), sincronizate cu schema FAQPage.
- Final: "Ai nevoie de ajutor acum?", "Contact - evaluare inițială gratuită" cu buton principal "Sună acum" și buton secundar "Trimite solicitarea și actele" -> /contact, "Resurse oficiale" (articolele CPP), "Servicii conexe".

Notă de conținut: elimin fraza meta despre structura site-ului ("Pe acest site am grupat informațiile comerciale în 4 subservicii...") și o transform în formulare orientată către vizitator, iar mențiunea "Nu creez însă o pagină comercială separată" o rescriu ca "Informațiile despre controlul judiciar pe cauțiune sunt tratate în pagina dedicată controlului judiciar". Corectez și dublura din text: "gratuită și confidențială. ală și o primă discuție gratuită."

## 2. Patru pagini noi de subservicii (RO)

Create prin componenta existentă `SubServicePage`, la fel ca paginile de subservicii actuale:

| URL RO | H1 / temă |
|---|---|
| /servicii/retinere-24-ore | Reținere 24 ore - drepturi, asistență avocat, ce urmează |
| /servicii/arest-preventiv | Arest preventiv - propunere, contestație, prelungire, înlocuire |
| /servicii/control-judiciar | Control judiciar (și pe cauțiune) - obligații, contestare, revocare |
| /servicii/arest-la-domiciliu | Arest la domiciliu - contestație, permisiuni, revocare, înlocuire |

Conținutul fiecărei pagini îl construiesc din secțiunile corespunzătoare din textul furnizat (ce este măsura, durata, cum te apăr, contestație/revocare/înlocuire, ce să trimiți, FAQ specific, resurse CPP), cu pilon `masuri-preventive`.

## 3. Versiunile EN

- Rescriu /en/services/preventive-measures ca traducere a noii pagini pilon.
- Creez 4 pagini EN pereche: /en/services/police-custody-24-hours, /en/services/pre-trial-detention, /en/services/judicial-control, /en/services/house-arrest.

## 4. Integrare în site

- `serviceGroups.ts`: cele 4 bullets din caseta "Reținere, arest și măsuri preventive" primesc linkuri (RO + EN), deci apar și în bullets-urile din pagina pilon.
- Rute noi în `routes.tsx` (lazy, ca restul).
- `langPairs.mjs`: 4 perechi RO/EN noi -> intră automat în sitemap.xml cu hreflang și în switch-ul de limbă.
- `relatedServices.ts`: 4 linkuri pilon relevante pentru fiecare pagină nouă; pe pagina de măsuri preventive păstrez cele 4 servicii conexe indicate (urmărire penală, droguri, spălare de bani, criminalitate economică).
- Rulez validarea SEO (title/description/H1 unic, BreadcrumbList + LegalService + FAQPage, fără em dash) și build-ul.

## Detalii tehnice

- Fișiere modificate: `src/pages/services/masuri-preventive.tsx`, `src/pages/en/services/preventive-measures.tsx`, `src/lib/subServices/ro.ts`, `src/lib/subServices/en.ts`, `src/lib/serviceGroups.ts`, `src/lib/relatedServices.ts`, `src/routes.tsx`, `scripts/langPairs.mjs`.
- Fișiere noi: 8 pagini subrutate (4 RO + 4 EN), fiecare un wrapper subțire peste `SubServicePage`, exact ca paginile existente de subservicii.
- Fără dependențe noi, fără modificări de componente UI comune.
