# Schimbare număr de telefon în 0745 506 443 (format afișat: +40 745 506 443)

## Ce se schimbă

Numărul vechi `+40 (31) 632 01 83` (și variantele lui) devine peste tot `+40 745 506 443` în afișare și `+40745506443` în linkurile `tel:` și câmpurile schema `telephone`. Linkurile WhatsApp (`wa.me/+40745506443`) folosesc deja noul număr și rămân nemodificate.

## Reguli pentru anchor text

- Textele de tip „Sună acum", „Sună-mă acum", „Vreau avocat", „Call now" etc. rămân neschimbate.
- Se înlocuiește DOAR porțiunea cu numărul de telefon din etichete/CTA-uri/aria-labeluri (ex. „Sună-mă acum - 031 632 01 83" → „Sună-mă acum - +40 745 506 443").

## Înlocuiri literale (în această ordine, pe toate fișierele afectate)

1. `tel:+40316320183` → `tel:+40745506443`
2. `+40 (31) 632 01 83` → `+40 745 506 443`
3. `031 632 01 83` → `+40 745 506 443`
4. `+40316320183` → `+40745506443`  (câmpuri schema `telephone`, rămașe după pasul 1)
5. `(31) 632 01 83` → `+40 745 506 443`  (varianta cu paranteze fără prefix, ex. „Apelează (31) 632 01 83")
6. `0316320183` → `+40 745 506 443`  (format fără spații, în llms.txt și text JSON-LD/FAQ)

Ordinea contează: formatele mai lungi și `tel:` se înlocuiesc primele, ca să nu apară dublări (ex. `+40316320183` conține `0316320183`, deci pasul 4 înainte de pasul 6).

## Implementare

1. Script Node `scripts/replace-phone.mjs` care citește toate fișierele care conțin „632" (~48 fișiere: `src/**/*.tsx`, `src/**/*.ts`, `public/llms.txt`), aplică cele 6 înlocuiri în ordine și scrie înapoi. Se folosește înlocuire literală (string replace), nu regex, pentru a evita caracterele speciale `(`, `)`, `+`.
2. Atenție specială la `src/pages/Index.tsx` — funcția `renderTextWithLinks` (liniile 280-340) conține regex-uri `/0316320183/g` și `/\+40 \(31\) 632 01 83/g` care devin invalide după înlocuirea globală. Se rescrie manual blocul de detecție a telefonului din acea funcție:
   - regex unic `/\+40 745 506 443/g`
   - wrap: `||PHONE||+40 745 506 443||PHONE||`
   - linkul `tel:` interior (deja schimat la pasul 1) rămâne `tel:+40745506443`
   - se elimină `phoneRegex2` (nu mai e nevoie, ambele formate vechi devin același șir)
3. `src/pages/en/Homepage.tsx` nu are funcție de mascare a telefonului, deci textul FAQ „0316320183" devine simplu text „+40 745 506 443" (fără link) — acceptat.
4. Se șterge scriptul `scripts/replace-phone.mjs` după rulare.

## Verificare

- `grep -rn "632" src public/llms.txt` → trebuie să returneze 0 rezultate (excepție: nimic).
- `grep -rn "632" src public/llms.txt` după rulare: 0.
- Build OK în `/tmp/observability/build-errors.log`.
- Verificare vizuală în preview: footer, hero CTA, o pagină de subserviciu, pagina Contact — afișează „+40 745 506 443" și linkul `tel:+40745506443` funcționează.

## Fișiere atinse (principale)

- `src/lib/subServices/ro.ts`, `src/lib/subServices/en.ts` (CTA-uri, text)
- `src/lib/reviews.ts` (text recenzii)
- `src/lib/cta.ts`, `src/lib/docx/malpraxisChecklist.ts`
- `src/components/crypto/PhoneLoader.tsx`, `Footer.tsx`, `MobileConversionBar.tsx`
- `src/components/pdf/AnafCryptoChecklist.tsx`, `MalpraxisChecklistPDF.tsx`
- `src/components/services/ServiceHeroCta.tsx`, `SubServicePage.tsx`
- `src/pages/Index.tsx`, `About.tsx`, `CalculatorDespagubiri.tsx`, `Contact.tsx`, `servicii/index.tsx`, `termeni-si-conditii.tsx`
- `src/pages/en/Homepage.tsx`, `compensation-calculator.tsx`, `contact.tsx`, `terms-and-conditions.tsx`, `services/*`
- `src/pages/services/*` (paginile pilon)
- `public/llms.txt`
