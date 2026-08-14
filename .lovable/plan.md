Actualizare pagină /servicii/spalare-de-bani-si-ascundere-de-bunuri

## Obiectiv
Adu pagina `/servicii/spalare-de-bani-si-ascundere-de-bunuri` la același standard SEO și conversie ca pagina `/servicii/masuri-preventive`.

## Modificări propuse

1. **SEO – title și keywords**
   - `useSEO.title`: `Infracțiune spălare de bani | Ascundere de bunuri - avocat Bogdan Lamatic, București`
   - `useSEO.keywords`: `avocat spalare de bani bucuresti, dosar spalare bani, ascundere bunuri, avocat confiscare bunuri`
   

2. **CTA-uri în stilul paginii /masuri-preventive**
   - Creează o componentă locală `CallCta` (buton telefon premium + variantă "Vreau avocat!").
   - Inserează butonul CTA după fiecare secțiune majoră de conținut (intro, ce reprezintă infracțiunea, ascunderea de bunuri vs. alte infracțiuni, măsuri asigurătorii/sechestru/confiscare, pași practici, de ce să mă alegi).
   - Adaugă rândul cu ratingul Google `5,0 ★★★★★ din 27 de recenzii Google` sub primul CTA.
   - Adaugă la final un card de contact cu butoane "Sună acum" și "Trimite email", similar cardului de contact din pagina /masuri-preventive.

3. **Verificare**
   - Rulează build-ul și `scripts/validate-seo.mjs` pentru a te asigura că nu apar erori SEO (title unic, canonical, JSON-LD valid).
   - Verifică vizual preview-ul pe desktop și mobil ca butoanele să nu rupă layout-ul.
