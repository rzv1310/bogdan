# Două subservicii noi sub „Reprezentarea victimelor în procese penale”

## Pagini create

| URL RO | URL EN | Keyword principal |
| --- | --- | --- |
| /servicii/despagubiri-accident-rutier/ | /en/services/road-accident-compensation/ | avocat despăgubiri accident rutier |
| /servicii/despagubiri-vatamare-corporala/ | /en/services/bodily-injury-compensation/ | avocat despăgubiri vătămare corporală |

Ambele 100% din perspectiva victimei / părții civile.

## Structura fiecărei pagini (șablonul standard de subserviciu)

Breadcrumbs (Acasă > Servicii > Reprezentarea victimelor > pagina, JSON-LD pe 4 niveluri) - H1 24px semi-bold - urgență - CTA telefon „☎ Sună-mă acum - 031 632 01 83” - recenzii Google (28 de recenzii) - bloc bio la persoana I - badge-uri Legal 500 - conținut pe capitole - FAQ (H2 „Întrebări frecvente”, întrebări H3) - Servicii conexe.

Exact două secțiuni bej (`#faf0e6`): selectorul „În ce situație te afli acum?” și un capitol-cheie de conținut. Lista de documente cu buton galben „Sună oricum.” cu link, plus buton verde WhatsApp „Trimite actele pe WhatsApp”.

### Despăgubiri accident rutier
Selector situație: sunt victimă într-un accident, a decedat un membru al familiei, asigurătorul oferă prea puțin, sunt în proces penal ca parte civilă.
Capitole: cine poate cere despăgubiri; daune materiale vs daune morale; constituirea ca parte civilă în dosarul penal; RCA, BAAR și acțiunea directă împotriva asigurătorului; ce documente probează prejudiciul; termene; ce fac dacă asigurătorul refuză sau subevaluează; despăgubiri pentru rude în caz de deces.

### Despăgubiri vătămare corporală
Selector situație: am fost agresat, am suferit vătămare la muncă/în alt context, agresorul e cercetat penal, mi s-a propus împăcarea.
Capitole: vătămare corporală vs lovire (Art. 193-194 CP); expertiza medico-legală și numărul de zile de îngrijiri; cum se calculează daunele morale; cheltuieli de tratament, recuperare și venituri pierdute; acțiune civilă în penal vs proces civil separat; împăcare și tranzacție - avantaje și riscuri; probele necesare.

## Integrare tehnică

- `src/lib/subServices/ro.ts` și `en.ts`: intrările noi de conținut.
- `src/pages/services/*.tsx` și `src/pages/en/services/*.tsx`: 4 componente pe baza `SubServicePage`.
- `src/routes.tsx`: import lazy + rute RO/EN.
- `scripts/routes.mjs`, `scripts/langPairs.mjs`: prerender, sitemap, hreflang.
- `src/lib/relatedServices.ts`: etichete + cluster sub pilonul victimelor (link către pagina-părinte și către pagina-soră prioritar).
- `src/lib/serviceGroups.ts`: cele două bullet-uri din caseta „Victime și despăgubiri” devin linkuri către noile pagini (și sub bio-block pe pagina-pilon).
- `src/pages/Sitemap.tsx`, `src/pages/en/sitemap.tsx`, `public/llms.txt`: înregistrare.
- Linkuri contextuale în text (accident rutier cu victime, calculator despăgubiri, malpraxis, infracțiuni contra persoanei), pentru a reduce duplicarea din Servicii conexe. Fără em dash.
