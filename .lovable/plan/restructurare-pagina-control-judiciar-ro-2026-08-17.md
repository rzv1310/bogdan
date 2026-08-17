# Restructurare pagina Control judiciar (RO)

## Ordinea finală a secțiunilor

```text
Hero (H1, urgență, CTA, recenzii, bio, breadcrumbs)
Ce vrei să rezolvi?                                  nou
Ce obligații pot fi impuse prin control judiciar
Ce analizez în cazul controlului judiciar
Ce trebuie să-mi trimiți                             nou
Card recenzie Google                                 nou
Pot pleca din țară sau din localitate?               nou
Cum poți obține modificarea sau revocarea ("ridicarea") controlului judiciar?   nou
Contestarea măsurii și termenele                     rescris ca decision-tree
Ce se întâmplă dacă încalci obligațiile?             nou
Cât durează controlul judiciar și cum se prelungește?  nou
Controlul judiciar pe cauțiune
Întrebări frecvente (FAQ nou, long-tail)
Contact (☎ Sună acum + WhatsApp - trimite ordonanța)
Resurse oficiale
```

## Ce se adaugă în conținut

**Ce vrei să rezolvi?** - 4 bullets-ancoră care duc la secțiunea relevantă din pagină:
plecare din țară/localitate, modificarea unei obligații, revocarea măsurii, contestarea ordonanței.

**Ce trebuie să-mi trimiți** - listă tranzacțională (ordonanța sau încheierea, lista obligațiilor, actul de prelungire dacă există, problema concretă), plus callout "Nu ai toate actele? Trimite documentul pe care îl ai." și buton WhatsApp - Trimite ordonanța.

**Pot pleca din țară sau din localitate?** - limbaj de căutare al utilizatorului; explicație scurtă că trebuie verificată obligația concretă din ordonanță/încheiere, cine a impus-o și dacă există posibilitatea modificării ori încuviințării. Final: îndemn de trimitere a ordonanței + CTA WhatsApp.

**Modificare vs. revocare ("ridicare")** - destinație unică pentru intenția de revocare/ridicare/modificare/eliminare obligații; explică diferența (modificarea păstrează măsura și schimbă obligațiile; revocarea vizează încetarea măsurii când condițiile legale sunt îndeplinite), cu referire la art. 242 CPP. CTA telefonic.

**Contestarea măsurii și termenele** - transformat în mini decision-tree cu două subsecțiuni H3: măsura dispusă de procuror (plângerea prevăzută de art. 213 CPP, termen scurt de 48 de ore) și măsura rezultată din încheierea judecătorului/instanței (calea de atac depinde de etapa procesuală, art. 204-206 CPP).

**Ce se întâmplă dacă încalci obligațiile?** - text scurt: încălcarea cu rea-credință poate duce, în condițiile legii, la înlocuirea cu o măsură mai severă, inclusiv arest la domiciliu sau arestare preventivă. Îndemn de a discuta cu avocatul înainte de următoarea declarație + CTA "Sună-mă acum".

**Cât durează și cum se prelungește?** - 150-250 de cuvinte: durata unei perioade, prelungirea în urmărirea penală, verificarea periodică în procedura de cameră preliminară și judecată, limitele totale în funcție de faza procesuală (art. 215¹ CPP).

**FAQ nou** (înlocuiește cele 5 actuale care dublează H2-urile): plecare din țară, mersul la serviciu, neprezentarea la Poliție, contactul cu martorii sau coinculpații, durata maximă, ridicarea măsurii înainte de finalizarea dosarului, încălcarea accidentală a unei obligații, transformarea în arest la domiciliu.

**Contact** - al doilea CTA devine WhatsApp - Trimite ordonanța / încheierea (în loc de email).

## Linkuri interne contextuale

Conform regulii pentru subservicii: prioritar către pagina-părinte și frați, cu anchor text descriptiv, 2-5 cuvinte, diversificat și nerepetat:
- "o măsură neprivativă de libertate" / "regimul măsurilor preventive" -> /servicii/masuri-preventive
- "înlocuirea cu arest la domiciliu" -> /servicii/arest-la-domiciliu (în secțiunea despre încălcarea obligațiilor)
- "propunerea de arestare preventivă" -> /servicii/arest-preventiv
- "măsura reținerii de 24 de ore" -> /servicii/retinere-24-ore
Secțiunea "Servicii conexe" se generează automat și exclude linkurile deja folosite contextual.

## Detalii tehnice

- Conținutul se editează în `src/lib/subServices/ro.ts` (`controlJudiciarRo`).
- `src/components/services/SubServicePage.tsx` primește două extensii mici, reutilizabile pentru toate subserviciile:
  - `id` opțional pe secțiune (pentru ancore) și suport pentru linkuri de tip hash în `links`, cu scroll lin;
  - `reviewAfterSection` opțional (index) pentru a insera `GoogleReviewCard` între secțiuni, la fel ca pe pagina Măsuri preventive.
- `contactWhatsApp: true` pentru cardul de contact.
- Fără em dash în conținut; validarea SEO la build (H2/H3, canonical) rămâne verde.
- Pagina EN (`/en/services/judicial-control`) rămâne neschimbată în acest pas; o pot alinia ulterior dacă vrei.
