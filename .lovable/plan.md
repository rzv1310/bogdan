Revenire la dimensiunea anterioară pentru butoanele CTA din hero

## Problema
Optimizarea recentă pentru butoane cu text lung a redus dimensiunea fontului, înălțimea și padding-ul pe mobil. Utilizatorul dorește ca butoanele din hero să revină la dimensiunea anterioară, mai prominentă, fără a afecta restul butoanelor CTA din site.

## Ce se va face
1. Audit butoane din hero
   - Identific toate locurile cu butoane CTA din hero: `ServiceHeroCta.tsx` (pagini de servicii și subservicii) și butonul din hero-ul homepage-ului (`src/pages/Index.tsx`, `src/pages/en/Homepage.tsx`).
   - Confirm starea actuală vs. dimensiunea anterioară din istoricul git.

2. Creez clasă dedicată pentru hero
   - În `src/lib/cta.ts` adaug `HERO_CTA_CLASS` care păstrează efectele vizuale (border dublu, overflow-hidden) și revine la dimensiunea anterioară:
     - pe mobil: buton mai înalt, text mai mare, padding lateral mai generos;
     - pe desktop: dimensiunea anterioară (sau cea actuală, dacă este mai apropiată de cerință).
   - Permit wrap-ul textului (`whitespace-normal`) pentru a gestiona textul lung actual ("☎ Sună-mă acum - 031 632 01 83").

3. Aplic `HERO_CTA_CLASS` în `ServiceHeroCta.tsx`
   - Înlocuiesc `CTA_CLASS` + override-urile actuale cu noua clasă hero.
   - Păstrez `variant="premium"` și `size="lg"`.

4. Verific butonul din homepage hero
   - Dacă butonul homepage folosește `variant="static" size="lg"` și nu a fost afectat de optimizare, nu se schimbă nimic.
   - Dacă este considerat parte din "butoanele din hero" și are nevoie de ajustare, aplic același tratament.

5. Verificare
   - Build fără erori.
   - Capturi de ecran pe mobil (viewport 375-430px) pentru paginile `/servicii/retinere-24-ore` și o pagină de servicii principală, pentru a confirma că butonul hero este vizibil mai mare.
   - Verificare SEO: heading hierarchy rămâne valid.

## Ce NU se schimbă
- Textul butoanelor rămâne același.
- Culorile, variantele și efectele vizuale existente rămân neschimbate.
- Restul butoanelor CTA din site (secțiuni, contact, subservicii) rămân optimizate pentru mobil cu `CTA_CLASS`.
