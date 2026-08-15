# Eliminarea textului „2021-2024” din recunoașterea Legal 500

## Context
Utilizatorul dorește ca textul `2021-2024` să fie eliminat de peste tot unde apare în formularea de recunoaștere Legal 500 (`Next Generation Partner` / `White-Collar Crime`).

## Date confirmate
O căutare în cod (`rg -n "2021-2024" .`) a identificat 27 de apariții în 27 fișiere:

- **RO:**
  - `src/pages/CalculatorDespagubiri.tsx`
  - `src/lib/subServices/en.ts`
  - `src/pages/services/urmarire-penala.tsx`
  - `src/pages/services/spalare-de-bani-si-ascundere-de-bunuri.tsx`
  - `src/pages/services/reprezentarea-victimelor-in-procese-penale.tsx`
  - `src/pages/services/raspundere-penala-incidente-locul-de-munca.tsx`
  - `src/pages/services/neglijenta-profesionala-si-malpraxis.tsx`
  - `src/pages/services/masuri-preventive.tsx`
  - `src/pages/services/investigatii-privind-activele-cripto.tsx`
  - `src/pages/services/criminalitate-economica.tsx`
  - `src/pages/services/infractiuni-rutiere-cu-victime.tsx`
  - `src/pages/services/infractiuni-de-coruptie-si-fapte-legate-de-exercitarea-functiei-publice.tsx`
  - `src/pages/services/infractiuni-contra-persoanei.tsx`
  - `src/pages/services/cauze-penale-privind-droguri.tsx`

- **EN:**
  - `src/pages/en/compensation-calculator.tsx`
  - `src/pages/en/services/workplace-criminal-liability.tsx`
  - `src/pages/en/services/victim-representation-in-criminal-cases.tsx`
  - `src/pages/en/services/drug-offenses.tsx`
  - `src/pages/en/services/money-laundering-and-asset-concealment.tsx`
  - `src/pages/en/services/offenses-against-persons.tsx`
  - `src/pages/en/services/professional-negligence-and-malpractice.tsx`
  - `src/pages/en/services/financial-crime.tsx`
  - `src/pages/en/services/preventive-measures.tsx`
  - `src/pages/en/services/criminal-investigation.tsx`
  - `src/pages/en/services/corruption-and-public-office-offenses.tsx`
  - `src/pages/en/services/road-traffic-offenses.tsx`
  - `src/pages/en/services/crypto-asset-investigations.tsx`

## Modificări propuse
1. În fiecare fișier listat, ștergerea textului `2021-2024` (și a virgulei/spațiului însoțitor, acolo unde este cazul) pentru a păstra propoziția fluentă:
   - RO: `... (White-Collar Crime) 2021-2024 și ...` → `... (White-Collar Crime) și ...`
   - RO (corupție): `... (White-Collar Crime) 2021-2024 și Rising Star în 2020, ...` → `... (White-Collar Crime) și Rising Star în 2020, ...`
   - EN: `... (White-Collar Crime, 2021-2024)` → `... (White-Collar Crime)`
   - EN: `... (White-Collar Crime) 2021-2024 and ...` → `... (White-Collar Crime) and ...`
   - EN (`src/lib/subServices/en.ts`): `... (White-Collar Crime) 2021-2024.` → `... (White-Collar Crime).`
2. Verificare finală cu `rg -n "2021-2024" .` pentru a confirma că nu a rămas nicio apariție.
3. Rulare build (`bun run build`) pentru validare.

## Ce NU se schimbă
- Referințele individuale pe ani din `About.tsx`, `Index.tsx`, `Homepage.tsx` și denumirile fișierelor imagine cu anii 2021–2024 rămân neschimbate.
- Textul `2020-2024` de pe pagina de infracțiuni rutiere nu este modificat, deoarece utilizatorul a cerut doar contextul `2021-2024`.
