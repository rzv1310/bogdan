# Ajustări pagină /servicii/arest-la-domiciliu

## Obiectiv
Corectarea conținutului și a elementelor de conversie pe pagina „Avocat pentru arest la domiciliu în București", conform noilor indicații.

## Stare actuală confirmată
- Conținutul paginii se află în `src/lib/subServices/ro.ts`, obiectul `arestLaDomiciliuRo` (liniile 1390-1911).
- Pagina folosește `SubServicePage.tsx`, care suportă: `cardClassName`, `paragraphsAfterBullets`, `calloutAfterBullets`, `reviewAfterSection`, linkuri contextuale, FAQ.

## Ce se face

### 1. Text hero / urgency
- În `urgency[2]`, înlocuiește:
  - **Din:** „Dacă procurorul solicită o măsură privativă de libertate, dacă ești deja în arest la domiciliu sau dacă vrei înlocuirea măsurii cu control judiciar..."
  - **În:** „Dacă procurorul solicită asta, dacă ești deja în arest la domiciliu sau dacă vrei înlocuirea măsurii cu control judiciar..."

### 2. Secțiunea „Te pot ajuta dacă" — fundal bej
- Adaugă `cardClassName: "bg-[#faf0e6]"` pe secțiunea respectivă.

### 3. Secțiunea „În ce situație te afli acum?"
- În subsecțiunea „Procurorul solicită arestarea preventivă", șterge paragraful/linkul contextual:
  - „Arest preventiv - vezi opțiunile de apărare →"

### 4. Secțiunea „Ce trebuie să-mi spui când mă contactezi"
- Adaugă `cardClassName: "bg-[#faf0e6]"`.
- Transformă `paragraphsAfterBullets` cu lista de documente în 5 `bullets` (după primul paragraf „Dacă le ai, trimite-mi:", care rămâne ca text introductiv).
- Face textul „Dacă le ai, trimite-mi:" bold (de ex. `className: "font-semibold"` sau markup corespunzător).
- În `calloutAfterBullets`, schimbă:
  - **Din:** „Nu ai toate actele? Sună oricum."
  - **În:** „Nu ai toate actele?"
- Butonul de callout rămâne „Sună oricum" (varianta warning/galben).

### 5. Eliminare recenzie Google
- Elimină `reviewAfterSection` din obiectul `arestLaDomiciliuRo`.

### 6. Secțiunea „Poate fi dispus arestul la domiciliu în locul arestării preventive?"
- Șterge linkul contextual și anchortextul:
  - „Vezi și pagina dedicată apărării împotriva propunerii de arestare preventivă."

### 7. FAQ — eliminare duplicate față de H2-uri
- Elimină din FAQ întrebările care au deja secțiune H2 dedicată pe aceeași temă. Rămân doar întrebările complementare, fără suprapunere cu secțiunile existente.

## Ce NU se schimbă
- URL-uri, rute, componente, hero standardizat, structura generală a paginii.
- Butoanele WhatsApp rămân verzi (#1DA851).
- Mecanismul „Servicii conexe" rămâne automat.

## Verificări post-implementare
- `bun run build` sau echivalentul local.
- `node scripts/validate-seo.mjs` pentru heading hierarchy, canonical, breadcrumbs, fără em dash-uri, linkuri interne valide.
