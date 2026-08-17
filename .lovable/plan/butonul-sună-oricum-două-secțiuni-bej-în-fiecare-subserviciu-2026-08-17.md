# Butonul "Sună oricum" + două secțiuni bej în fiecare subserviciu

## 1. Butonul pe "Sună oricum."

Situația verificată acum:
- 6 subservicii RO și 3 EN au deja fraza ca `calloutAfterBullets` + buton galben (`calloutAfterBulletsCta`) - corect.
- 4 subservicii RO (`fals-si-uz-de-fals`, `bancruta-frauduloasa`, `frauda-informatica`, `fonduri-europene`) și 4 EN echivalente folosesc `calloutAfterSubsections`, care în componentă nu are suport pentru buton - fraza apare doar ca text.
- Paginile pilon `/servicii/masuri-preventive` și `/en/services/preventive-measures` au fraza ca simplu paragraf semibold, fără buton.

De făcut:
- Adaug în `SubServicePage` un câmp `calloutAfterSubsectionsCta`, transmis către callout-ul de după subsecțiuni (același buton galben cu telefon, variantă `warning`, ca în restul paginilor).
- Setez CTA-ul "Sună oricum" / "Call anyway" pe cele 8 subservicii afectate.
- În cele două pagini pilon, transform paragraful în același callout cu buton galben, ca să fie identic peste tot.

## 2. Două secțiuni bej per subserviciu

Regulă aplicată la toate cele 16 subservicii RO + 16 EN: exact două blocuri cu fundal bej `#faf0e6`:
1. Secțiunea de urgență - cea care cere acțiune imediată (ex. "Ce trebuie să-mi spui când mă suni", "Ce fac imediat", "Termenul este scurt").
2. Secțiunea cea mai importantă pentru utilizator - de regulă drepturile lui, riscurile reale sau selectorul "În ce situație ești?".

Situația verificată acum: 9 subservicii RO și 6 EN au 0 sau 1 secțiune bej, iar 3 RO + 1 EN au 3 (una în plus). Deci va fi și adăugare, și eliminare, pentru uniformitate.

Restul secțiunilor rămân pe fundal alb, ca să nu se dilueze accentul. Nu se schimbă textele, doar `cardClassName`-ul secțiunilor alese; RO și EN vor avea aceleași secțiuni marcate.

## Detalii tehnice

- `src/components/services/SubServicePage.tsx`: nou prop opțional `calloutAfterSubsectionsCta`, pasat în `SectionContent` ca `calloutAfterBulletsCta`.
- `src/lib/subServices/ro.ts` și `en.ts`: adăugare CTA pe cele 8 secțiuni, plus normalizarea `cardClassName: "bg-[#faf0e6]"` la exact două secțiuni per pagină.
- `src/pages/services/masuri-preventive.tsx` și `src/pages/en/services/preventive-measures.tsx`: callout cu buton în locul paragrafului.
- Verificare finală: typecheck + build.
