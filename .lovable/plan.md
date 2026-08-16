# Ajustări pagina Arest preventiv

## 1. „Sună oricum.” devine buton

În secțiunea „Ce trebuie să-mi spui când mă suni”, fraza bold „Nu ai toate actele? Sună oricum.” se împarte, la fel ca pe pagina Reținere 24 ore: textul „Nu ai toate actele?” rămâne text, iar „Sună oricum.” devine buton galben cu link `tel:+40316320183`. Butonul WhatsApp existent rămâne.

## 2. Se șterge un buton

Se elimină butonul „Urmează propunerea de arestare - Sună-mă acum” din secțiunea „Ce analizez la o propunere de arestare preventivă”. Restul secțiunii rămâne neschimbat.

## 3. Curățare FAQ (întrebări care au deja H2 dedicat)

Se elimină 3 întrebări acoperite deja de H2-uri:

- „Poate fi dispus control judiciar în locul arestării preventive?” - acoperită de H2 „Când poate fi înlocuit arestul preventiv cu arest la domiciliu sau control judiciar?”
- „Poate fi dispus arest la domiciliu în locul arestării preventive?” - același H2
- „Care este diferența dintre revocare și înlocuire?” - acoperită de H2 „Revocare și înlocuire - două lucruri diferite”

Rămân 6 întrebări: propunerea poate fi respinsă, durata soluționării contestației, familia poate angaja avocatul, prelungirea arestării, când poate fi revocat arestul preventiv, cine poate dispune măsura.

## 4. Canonical - verificat

Canonical-ul acestei pagini este deja corect și nu necesită modificări:

- HTML prerandat: `<link rel="canonical" href="https://avocatpenalbucuresti.ro/servicii/arest-preventiv" />` (absolut, fără slash final)
- Runtime: `useSEO` transformă valoarea în URL absolut pe același format, iar `og:url` primește exact aceeași valoare

Confirm după modificări cu o verificare live a valorii din DOM.

## Detalii tehnice

- `src/lib/subServices/ro.ts`, `arestPreventivRo`: în secțiunea „Ce trebuie să-mi spui când mă suni” se înlocuiește `paragraphsAfterBullets` cu `calloutAfterBullets: "Nu ai toate actele?"` + `calloutAfterBulletsCta: "Sună oricum."` (același mecanism deja folosit pe `retinere24OreRo`, deci fără componente noi); se șterge câmpul `cta` din secțiunea „Ce analizez...”; se scot cele 3 intrări din `faq`.
- Verificare: `npx tsgo --noEmit`, `bun run build` (inclusiv `scripts/validate-seo.mjs`) și un test Playwright pe `/servicii/arest-preventiv` care citește canonical-ul din DOM.
