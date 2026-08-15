# Homepage: secțiune „Cum te pot ajuta” - teaser servicii

## Obiectiv
Înlocuim pe homepage blocul actual „Servicii | Arii de practică” (13 carduri lungi, CTA telefon, PulseBeams, portret) cu un teaser compact: titlu nou, 8 carduri scurte și un CTA central către pagina de servicii.

## Ce se schimbă

### 1. Conținut traduceri (`src/lib/translations.ts`)
- `servicesTitle` devine:
  - RO: `Cum te pot ajuta`
  - EN: `How I can help`
- Se înlocuiește array-ul `services` cu 8 intrări scurte, fiecare având `title`, `body` (maxim 1-2 rânduri) și `to`:
  1. Urgențe penale / Urgent criminal matters
  2. Criminalitate economică / Economic crime
  3. Droguri și DIICOT / Drugs and DIICOT
  4. Corupție / Corruption
  5. Spălare de bani / Money laundering
  6. Infracțiuni rutiere / Road traffic offenses
  7. Crypto / Crypto
  8. Victime și despăgubiri / Victims and compensation
- Descrierile din homepage vor fi diferite de cele din `src/lib/serviceGroups.ts` (pagina `/servicii/`), deci nu vor fi copii 1:1.
- Linkurile `to` vor duce către paginile de servicii existente (ex. Urgențe penale → `/servicii/urmarire-penala`, respectiv `/en/services/criminal-investigation`).

### 2. Secțiunea homepage RO (`src/pages/Index.tsx`)
- Se înlocuiește markup-ul actual al secțiunii „Services” (liniile ~997-1071) cu:
  - `<h2>{t.servicesTitle}</h2>`
  - grid 8 carduri cu `GlowCard customSize borderPx={1} blackBg borderRunner runnerSpeedFactor={2} noShadow className="w-full"`
  - fiecare card: titlu ca link, descriere scurtă, iconiță săgeată
  - CTA central: buton/link text `Vezi toate serviciile →` către `/servicii/`
- Se elimină din această secțiune: lista exhaustivă de 13 servicii, CTA telefon din mijloc, animația PulseBeams și imaginea portretului de la final.

### 3. Secțiunea homepage EN (`src/pages/en/Homepage.tsx`)
- Același refactor ca la RO, cu textele și rutele din `translations.en`.
- CTA central: `See all services →` către `/en/services`.

### 4. Design și constrângeri
- Se păstrează designul actual al cardurilor: fundal negru, chenar portocaliu subțire, punctul luminos pe chenar.
- Grid propus: 2 coloane pe mobil, 4 coloane pe desktop (`grid-cols-2 md:grid-cols-4`).
- Fără em dash în conținut nou (regula existentă `mem://style/no-em-dash`).

## Fișiere modificate
- `src/lib/translations.ts`
- `src/pages/Index.tsx`
- `src/pages/en/Homepage.tsx`

## Validare
- Build local fără erori.
- `npm run validate-seo` (sau scriptul echivalent) fără erori.
- Verificare vizuală în preview pentru RO și EN.
