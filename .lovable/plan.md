# Standardizare heading-uri în secțiunile FAQ

## Obiectiv
În toate paginile de servicii și subservicii (RO + EN), existente și viitoare:
- titlul secțiunii de FAQ ("Întrebări frecvente despre..." / "Frequently asked questions about...") să fie `<h2>`;
- fiecare întrebare din interior să fie `<h3>`.

## Stare actuală
Am verificat codebase-ul. Secțiunile FAQ există în toate cele 12 pagini de servicii RO și 12 pagini EN, plus în `SubServicePage.tsx` (toate subserviciile). Întrebările sunt marcate în prezent ca `<strong>`, `<p className="font-medium">` sau `<p className="font-semibold">`, nu ca heading-uri. Titlurile secțiunilor sunt deja `<h2>` (sau `CardTitle` echivalent), deci nu necesită modificare structurală, doar menținerea pattern-ului.

## Ce se va face

### 1. Component reutilizabil `ServiceFaq`
Se creează `src/components/services/ServiceFaq.tsx` cu semnătura:
```text
interface ServiceFaqProps {
  title: string;
  items: { q: string; a: React.ReactNode }[];
}
```
- Titlul va fi randat ca `<h2 className="text-2xl font-semibold ...">`.
- Fiecare întrebare va fi randată ca `<h3 className="text-base font-semibold ...">`.
- Răspunsurile rămân în `<p>` sau fragmente obișnuite.

### 2. Refactorizare `SubServicePage.tsx`
Secțiunea FAQ din componentă va fi înlocuită cu `<ServiceFaq title={...} items={data.faq} />`, astfel încât toate subserviciile (RO și EN) să respecte automat regula.

### 3. Refactorizare pagini de servicii
Se actualizează cele 24 de pagini de servicii (12 RO + 12 EN) pentru a folosi `ServiceFaq` sau, acolo unde structura este inline, se înlocuiesc markup-urile de întrebare cu `<h3>`, păstrând stilul vizual identic. Paginile cu FAQ inline care vor fi ajustate includ:
- `cauze-penale-privind-droguri.tsx` și `en/services/drug-offenses.tsx`
- `investigatii-privind-activele-cripto.tsx` și `en/services/crypto-asset-investigations.tsx`
- `spalare-de-bani-si-ascundere-de-bunuri.tsx` și `en/services/money-laundering-and-asset-concealment.tsx`
- `infractiuni-rutiere-cu-victime.tsx` și `en/services/road-traffic-offenses.tsx`
- `neglijenta-profesionala-si-malpraxis.tsx` și `en/services/professional-negligence-and-malpractice.tsx`
- `reprezentarea-victimelor-in-procese-penale.tsx` și `en/services/victim-representation-in-criminal-cases.tsx`
- `infractiuni-de-coruptie-si-fapte-legate-de-exercitarea-functiei-publice.tsx` și `en/services/corruption-and-public-office-offenses.tsx`
- `urmarire-penala.tsx` și `en/services/criminal-investigation.tsx`
- `masuri-preventive.tsx` și `en/services/preventive-measures.tsx`
- `infractiuni-contra-persoanei.tsx` și `en/services/offenses-against-persons.tsx`

### 4. Regulă de validare SEO
Se extinde `scripts/validate-seo.mjs` pentru a detecta în HTML-ul prerenderizat secțiunile FAQ și a semnala eroare dacă o pagină de servicii conține textul "Întrebări frecvente" / "Frequently asked questions" dar întrebările nu sunt `<h3>`. Aceasta previne regresii pe viitoarele pagini.

### 5. Verificare
După implementare se rulează build-ul și `npm run validate-seo` pentru a confirma că nu apar erori de heading hierarchy sau JSON-LD.

## Rezultat așteptat
Toate paginile de servicii și subservicii vor avea o ierarhie de heading-uri corectă în secțiunea FAQ: `<h1>` pagină → `<h2>` secțiune FAQ → `<h3>` fiecare întrebare. Regula va fi aplicabilă și pentru paginile viitoare prin folosirea componentului `ServiceFaq` și prin validarea automată de build.