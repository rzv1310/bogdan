# Rescriere pagină Trafic internațional de droguri (RO + EN)

## Obiectiv
Rescrie complet conținutul paginilor `/servicii/trafic-international-de-droguri/` și `/en/services/international-drug-trafficking/` conform brief-ului primit, păstrând hero-ul și design-ul existent.

## Ce se schimbă

### 1. Date pagină RO (`src/lib/subServices/ro.ts`)
- Actualizează `title`, `description`, `h1`, `keywords`, `breadcrumbLabel`, `serviceName` conform brief-ului SEO.
- Rescrie `urgency` cu textul furnizat.
- Rescrie `bio` în prima persoană, cu referință Legal 500.
- Rescrie toate secțiunile (`sections`) conform structurii din brief, cu H2/H3, bullets, callout-uri și CTA-uri corecte.
- Adaugă linkuri interne contextuale către:
  - `/servicii/grup-infractional-organizat/` (pe textul „grup infracțional organizat")
  - `/servicii/cauze-penale-privind-droguri/` (pe textul „trafic de droguri")
  - `/servicii/detinere-droguri-consum-propriu/` (doar dacă este contextual necesar pentru comparație)
- Plasează testimonialul Robert Boloaja după secțiunea „Ce trebuie să-mi trimiți” folosind câmpurile `reviewAfterSection`, `reviewAuthor`, `reviewText`, `reviewMeta`, `reviewTimestamp`.
- Actualizează `resources` doar cu resursele oficiale furnizate:
  - Legea nr. 143/2000
  - Legea nr. 58/2024
  - Decizia ÎCCJ nr. 15/2017
  - OUG nr. 78/2016
- Setează `contactWhatsApp: true` și `contactWhatsAppLabel: "Trimite actele pe WhatsApp"`.
- Setează `faqTitle` conform brief-ului.
- Rescrie FAQ-urile conform brief-ului.

### 2. Date pagină EN (`src/lib/subServices/en.ts`)
- Aplică aceleași modificări pentru varianta în engleză, cu traducerea corespunzătoare a conținutului, titlurilor, meta-datelor și resurselor.

### 3. Constante legislative noi
- Adaugă în `src/lib/subServices/ro.ts` constantele `L58` (Legea nr. 58/2024) și `ICCJ15` (Decizia ÎCCJ nr. 15/2017).
- Adaugă în `src/lib/subServices/en.ts` constantele `L58_EN` și `ICCJ15_EN` cu URL-urile corespondente.

### 4. Design
- Menține exact două secțiuni cu fundal bej (`cardClassName: "bg-[#faf0e6]"`):
  - „În ce situație te afli acum?” / „What situation are you in now?"
  - „Ce trebuie să-mi trimiți” / „Documents to send me for the first assessment"
- CTA-urile de telefon vor folosi textul exact: `☎ Sună-mă acum - 031 632 01 83` / `☎ Call now - 031 632 01 83`.
- CTA-urile WhatsApp vor folosi textul exact: `Trimite actele pe WhatsApp` / `Send documents on WhatsApp`.

### 5. SEO și breadcrumbs
- `canonical`, `title`, `description`, `breadcrumbLabel` și JSON-LD breadcrumbs rămân conform brief-ului (structura 4 niveluri există deja în `SubServicePage`).

## Verificare
- Rulează build-ul pentru a valida TypeScript și pentru a te asigura că nu există erori de sintaxă.
- Verifică vizual preview-ul pe ambele rute pentru confirmarea conținutului, a testimonialului și a CTA-urilor.
