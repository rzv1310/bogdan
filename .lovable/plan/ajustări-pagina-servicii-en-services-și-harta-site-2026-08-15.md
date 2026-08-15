# Ajustări pagina /servicii (+ /en/services) și Harta Site

## 1. Titlu H1

- RO: „Servicii avocat penal în București” (în loc de „Servicii de avocat penal în București”)
- Meta title și restul metadatelor rămân neschimbate. EN rămâne „Criminal law services in Bucharest”.

## 2. CTA final centrat

Blocul final („Nu știi în ce categorie se încadrează situația ta?”) are deja text centrat, dar butonul stă aliniat la stânga. Se centrează butonul (containerul CTA devine `justify-center`), în RO și EN.

## 3. Casetele de servicii ca în homepage

Se înlocuiește componenta `Card` din grilele de servicii cu `GlowCard` din `@/components/ui/spotlight-card`, folosită cu exact aceleași proprietăți ca în homepage: `customSize borderPx={1} blackBg borderRunner runnerSpeedFactor={2} noShadow` - deci fundal negru, chenar portocaliu subțire și punctul luminos care se plimbă pe chenar.

Conținutul cardului rămâne același (titlu link, descriere, lista de subservicii, link „Vezi toate serviciile”), doar adaptat cromatic pe fundal negru: text `text-hero-foreground`, descriere și subservicii cu opacitate redusă, bulinele și linkul final în accent portocaliu, astfel încât să rămână lizibile și fără culori hardcodate.

Aplicat identic în RO și EN. Blocul „criminalitate economică” rămâne evidențiat ca secțiune, dar fără fundal deschis care ar intra în conflict cu cardurile negre.

## 4. Harta Site

În `src/pages/Sitemap.tsx`, titlul intrării `/servicii` devine „Toate serviciile” (echivalent EN „All services” dacă lista are variantă bilingvă).

## Detalii tehnice

- Fișiere modificate: `src/pages/servicii/index.tsx`, `src/pages/en/services/index.tsx`, `src/pages/Sitemap.tsx`
- Fără em dash (regula existentă validată la build)
- Rulăm build-ul la final pentru 0 erori `validate-seo`
