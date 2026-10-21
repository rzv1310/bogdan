## Hartă Google sub formularul de contact

Pe pagina Contact (RO, și EN /en/contact pentru consistență), imediat sub caseta cu formularul și înainte de linkurile rapide către servicii, adaug harta Google furnizată.

- Harta ocupă toată lățimea casetei, colțuri rotunjite, fără bordură, înălțime ~450px pe desktop și ~320px pe mobil (nu iese din ecran).
- Se încarcă doar când utilizatorul ajunge la ea (lazy), ca să nu încetinească pagina.
- Titlul hărții: "Avocat Bogdan Lamatic - Drept Penal București" (fără em dash).

### Detalii tehnice
- `src/pages/Contact.tsx`: după `</Card>` (linia ~410), înainte de `<ServicesQuickLinks />`, un `div` `mt-8 overflow-hidden rounded-lg` cu `<iframe>` (src exact cel dat, `className="w-full h-[320px] md:h-[450px] border-0"`, `loading="lazy"`, `allowFullScreen`, `referrerPolicy="strict-origin-when-cross-origin"`).
- Același bloc în `src/pages/en/contact.tsx`, cu `hl` lăsat RO (embed identic).
