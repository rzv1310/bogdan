# Bloc bio compact în cele 12 pagini de servicii

## Ce se schimbă

În fiecare pagină pilon de servicii, sub rândul cu recenzii Google, apare exact același bloc ca pe paginile de subservicii:

- headshot rotund (72x72, webp)
- Avocat Bogdan Lamatic
- Baroul București · 18+ ani experiență
- Legal 500 · White-Collar Crime

Se elimină cele două paragrafe lungi de prezentare din zona de sus (cel care începe cu „Sunt Bogdan Lamatic, avocat în Baroul București..." și cel cu „Sunt listat în prezent de Legal 500..."). Restul paginii (H1, paragraful de urgență, CTA, recenzii, bullets subservicii, breadcrumbs, carduri, FAQ, grafice) rămâne neschimbat.

Se aplică identic și pe cele 12 pagini EN, cu textele în engleză („Lawyer Bogdan Lamatic", „Bucharest Bar · 18+ years of experience", „Legal 500 · White-Collar Crime").

## Pagini

RO: urmarire-penala, masuri-preventive, infractiuni-contra-persoanei, criminalitate-economica, infractiuni-de-coruptie-si-fapte-legate-de-exercitarea-functiei-publice, investigatii-privind-activele-cripto, cauze-penale-privind-droguri, spalare-de-bani-si-ascundere-de-bunuri, neglijenta-profesionala-si-malpraxis, infractiuni-rutiere-cu-victime, raspundere-penala-incidente-locul-de-munca, reprezentarea-victimelor-in-procese-penale

EN: echivalentele din `src/pages/en/services/`.

## Detalii tehnice

- Blocul bio din `SubServicePage.tsx` (headshot alternat + 3 rânduri) se extrage într-un component reutilizabil, ex. `src/components/services/LawyerBioBlock.tsx`, cu prop `lang` și `path` (pentru alternarea headshot-ului). `SubServicePage` îl folosește apoi în locul codului inline, ca să existe o singură sursă.
- În fiecare pagină pilon, blocul `<div className="mt-6 space-y-3 ...">` cu paragrafele de prezentare se înlocuiește cu `<LawyerBioBlock ... />`, plasat după rândul de recenzii și după bullets-urile de subservicii unde acestea există.
- Unde paragraful de prezentare conține linkuri interne (ex. `masuri-preventive` -> urmărire penală), linkul nu se pierde: rămâne în conținutul de mai jos al paginii dacă există deja acolo; altfel se păstrează în secțiunea imediat următoare.
- Fără em dash-uri, doar „-".
- Verificare: `npx tsgo --noEmit` plus build cu validarea SEO (0 erori) și inspecția HTML prerenderat pentru câteva rute RO/EN.
