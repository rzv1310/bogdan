# Rescriere pagină /servicii/arest-la-domiciliu

## Obiectiv
Rescrierea completă a paginii de serviciu „Avocat pentru arest la domiciliu în București" conform noului copy furnizat, păstrând layout-ul, stilul și componentele existente.

## Stare actuală confirmată
- Conținutul RO al paginii se află în `src/lib/subServices/ro.ts`, obiectul `arestLaDomiciliuRo` (liniile 1390-1485).
- Pagina folosește componenta existentă `SubServicePage.tsx`, care suportă deja: secțiuni cu `h2`, subsecțiuni cu `h3`, card-uri cu fundal bej (`cardClassName: "bg-[#faf0e6]"`), paragrafe segmentate cu linkuri interne, callout-uri cu CTA, butoane WhatsApp, recenzie Google inserată după o secțiune (`reviewAfterSection`), FAQ și resurse.
- Mecanismul „Servicii conexe" este automat în `src/lib/relatedServices.ts`: pentru subservicii, returnează pagina-părinte + frații; linkurile contextuale din corp/FAQ sunt excluse automat.
- Hero-ul subserviciilor este standardizat în `SubServicePage.tsx` (headshot + nume + Barou + Legal 500); câmpul `bio` nu mai este randat în hero.

## Ce se face

### 1. Rescriere conținut RO (`src/lib/subServices/ro.ts`)
Înlocuirea obiectului `arestLaDomiciliuRo` cu structura nouă:

```text
Hero
- h1: "Avocat pentru arest la domiciliu în București"
- urgency: 3 rânduri (propunere măsură, impact, analiză rapidă)
- CTA principal: "☎ Sună-mă acum - 031 632 01 83"
- Social proof: "5,0 ★★★★★ din 28 de recenzii Google"
- Bio compact (randat automat de SubServicePage)

Secțiuni (ordinea furnizată):
1. "În ce situație te afli acum?" - 4 subsecțiuni (h3):
   - Procurorul solicită arestarea preventivă
   - Arestul la domiciliu a fost deja dispus
   - Ai nevoie să ieși din domiciliu
   - Ai încălcat sau crezi că ai încălcat măsura
   Fiecare cu text, linkuri contextuale și CTA/buton WhatsApp după caz.

2. "Ce analizez în cazul arestului la domiciliu" - bullets + paragraf final cu trimitere CPP.

3. "Ce trebuie să-mi spui când mă contactezi" - bullets + listă documente + callout "Nu ai toate actele? Sună oricum." cu buton galben.

[Recenzie Google inserată aici, după secțiunea 3]

4. "Ce este arestul la domiciliu?" - definiție + diferențe față de control judiciar și arestare preventivă.

5. "În ce condiții poate fi dispus arestul la domiciliu?" - bullets + lista de împrejurări relevante.

6. "Poate fi dispus arestul la domiciliu în locul arestării preventive?" - explicație + link contextual către /servicii/arest-preventiv.

7. "Ce obligații ai în arest la domiciliu?" - obligații principale.

8. "Poți ieși din casă dacă ești în arest la domiciliu?" - subsecțiuni: Poliție/Parchet/instanță, muncă, școală, mijloace esențiale, alte motive.

9. "Pot merge la medic sau la spital dacă sunt în arest la domiciliu?" - regulă urgențe + planificare.

10. "Cum se obține permisiunea de a părăsi domiciliul?" - cerere + documente.

11. "Poți purta brățară electronică în arest la domiciliu?" - explicație scurtă.

12. "Cum este verificată respectarea arestului la domiciliu?" - supraveghere + intrarea poliției.

13. "Ce se întâmplă dacă încalci arestul la domiciliu?" - subsecțiuni: rea-credință → arestare preventivă; părăsire neautorizată → evadare.

14. "Cum contești arestul la domiciliu?" - art. 204-206 CPP + termene.

15. "Cât durează arestul la domiciliu?" - subsecțiuni: urmărirea penală, cameră preliminară/judecată.

16. "Cum te aperi la o propunere de prelungire a arestului la domiciliu?" - ce se analizează + opțiuni.

17. "Când poate fi revocat arestul la domiciliu?" - subsecțiuni: revocare vs. înlocuire + link către /servicii/control-judiciar.

18. "Se scade arestul la domiciliu din pedeapsă?" - da, zi cu zi.

FAQ (10 întrebări, fără suprapunere cu secțiunile H2 deja existente):
- Pot merge la serviciu?
- Pot merge la medic?
- Pot ieși la cumpărături?
- Pot primi persoane în domiciliu?
- Poliția poate intra în locuință?
- Este obligatorie brățara electronică?
- Ce se întâmplă dacă ies fără permisiune?
- Pot contesta?
- Poate fi înlocuit cu control judiciar?
- Cât poate dura?
- Poate familia contacta avocatul?

Secțiune finală înainte de contact:
- "Ai nevoie de ajutor pentru arestul la domiciliu?" - bullets cu situații + paragraf de încheiere.

Contact:
- Text: "Bogdan Lamatic - avocat drept penal, București / Telefon: 031 632 01 83"
- CTA principal: "☎ Sună acum"
- Buton WhatsApp: "Trimite încheierea pe WhatsApp"
- Callout: "Nu ai toate documentele? Sună oricum."

Resurse:
- Art. 202, 204-206, 218, 219-220, 221, 222, 241-242 CPP, art. 285 Cod penal.
```

### 2. Linkuri contextuale și ancore
- În secțiunea „Procurorul solicită arestarea preventivă": link către `/servicii/arest-preventiv` cu anchor text variat (ex. „Arest preventiv - vezi opțiunile de apărare").
- În secțiunea „Poate fi dispus în locul arestării preventive?": link către `/servicii/arest-preventiv` (ex. „propunerea de arestare preventivă").
- În secțiunea „Când poate fi revocat": link către `/servicii/control-judiciar` (ex. „Control judiciar - obligații, modificare și revocare").
- Aceste linkuri vor fi excluse automat din blocul „Servicii conexe" prin `collectContextualPaths`.

### 3. Recenzie Google
- Inserată după secțiunea „Ce trebuie să-mi spui când mă contactezi" prin `reviewAfterSection`.
- Text personalizat conform copy-ului furnizat.

### 4. Butoane și CTA-uri
- CTA hero: `☎ Sună-mă acum - 031 632 01 83` (fără icon opțional setat corespunzător).
- Butoane galbene pentru „Sună oricum." folosind `variant="warning"` și `calloutCta`.
- Butoane WhatsApp verzi pentru documente folosind `ctaWhatsApp: true` cu label personalizat.

### 5. Verificări post-implementare
- `bun run build` sau echivalentul local.
- `node scripts/validate-seo.mjs` pentru a confirma:
  - heading hierarchy corectă (H1 → H2 → H3);
  - canonical absolut;
  - breadcrumbs 4 niveluri;
  - fără em dash-uri;
  - linkuri interne valide.
- Verificare vizuală rapidă în preview pe mobil și desktop pentru spacing și lățimea butoanelor.

### 6. Versiunea EN (opțional, propusă)
- Actualizarea obiectului `houseArrestEn` din `src/lib/subServices/en.ts` cu traducerea adaptată a noului copy, pentru a menține consistența perechii RO/EN.
- Se va face doar dacă utilizatorul confirmă; altfel, planul se limitează la RO.

## Ce NU se schimbă
- URL-uri, rute sau structura de fișiere.
- Componentele `SubServicePage.tsx`, `ServiceHeroCta.tsx`, `WhatsAppDocsCta.tsx`, `GoogleReviewCard.tsx`.
- Hero-ul standardizat al subserviciilor (headshot + nume + Barou + Legal 500).
- Mecanismul de cookie consent sau GTM.
