# Plan: Extindere pagină Trafic de influență / Influence peddling

## Obiectiv
Adaugă conținut juridic suplimentar în paginile de subserviciu **Trafic de influență** (RO) și **Influence peddling** (EN), pentru a acoperi întrebările comerciale principale: diferența față de înșelăciune, denunțul și nepedepsirea, flagrantul/provocarea, consultanță vs. infracțiune, și soarta banilor.

## Fișiere vizate
- `src/lib/subServices/ro.ts` - secțiunea `traficDeInfluentaRo`
- `src/lib/subServices/en.ts` - secțiunea `influencePeddlingEn`

## Modificări de conținut

### 1. Inserție după secțiunea "Ce documente trebuie să-mi trimiți" / "What documents you should send me"
Se adaugă 4 noi secțiuni `SubServiceSection` imediat după secțiunea cu documente, înainte de secțiunea existentă "Ce este traficul de influență" / "What influence peddling is".

### 2. Structura noilor secțiuni (RO)

**H2: Care este diferența dintre trafic de influență și înșelăciune?**
- `cardClassName: "bg-[#faf0e6]"` (background bej, conform regulii pentru secțiunea de urgență/importanță)
- H3: Ce se întâmplă dacă persoana nu avea în realitate influență
- H3: Promisiunea unei intervenții vs simpla inducere în eroare
- H3: Pot exista ambele acuzații în același dosar?
- Include link contextual către pagina `/servicii/inselaciune-frauda` cu anchor text natural.

**H2: Denunțul și cauza de nepedepsire la cumpărarea de influență**
- H3: Când trebuie făcut denunțul
- H3: Când nu mai poate opera cauza de nepedepsire
- H3: Ce se întâmplă cu banii dați
- Include referință la art. 292 Cod penal și link contextual către `/servicii/dare-luare-de-mita` unde este relevantă comparația cu mită.

**H2: Flagrantul, denunțătorul și provocarea în dosarele de trafic de influență**
- Transformă conceptul existent "Când o discuție nu înseamnă infracțiune" în subiectul:
- H3: Contractul de consultanță nu exclude automat acuzația
- H3: Cum se dovedește activitatea profesională reală
- H3: Când plata are o explicație contractuală legitimă
- Include link contextual către `/servicii/avocat-dna` pentru dosarele DNA.

**H2: Ce se întâmplă cu banii într-un dosar de trafic sau cumpărare de influență?**
- Explică confiscarea, restituirea și măsurile asigurătorii.
- Adaugă resursa legislativă: `https://legislatie.just.ro/Public/DetaliiDocument/304554` în secțiunea `resources` (atât RO cât și EN).

### 3. Structura noilor secțiuni (EN)

Se traduc 1:1 secțiunile de mai sus:
- **H2: What is the difference between influence peddling and fraud?** (bej)
- **H2: The report and the ground for impunity in buying of influence**
- **H2: The sting operation, the reporting person and entrapment in influence peddling files**
- **H2: What happens to the money in an influence peddling or buying of influence file?**

Linkuri interne către:
- `/en/services/fraud-and-deception`
- `/en/services/bribery-giving-and-taking`
- `/en/services/dna-lawyer`

### 4. Ajustări secundare
- Verifică și actualizează secțiunea `resources` pentru a include noul link legislativ (art. 292 + Legea 78/2000 + documentul 304554).
- Asigură-te că toate secțiunile noi respectă tiparul existent: `h2`, opțional `cardClassName`, `paragraphs`/`bullets`/`subsections`.
- Păstrează stilul first-person și tonul direct al avocatului.

## Verificare
- Build local (`bun run build`) fără erori TypeScript.
- Navigare în preview pe `/servicii/trafic-de-influenta` și `/en/services/influence-peddling` pentru a confirma afișarea corectă a noilor secțiuni.
- Verificare heading hierarchy: H2 pentru titlurile de secțiune, H3 pentru subsecțiuni.
