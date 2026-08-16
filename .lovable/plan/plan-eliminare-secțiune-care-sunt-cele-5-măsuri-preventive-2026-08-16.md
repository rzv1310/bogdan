# Plan: Eliminare secțiune "Care sunt cele 5 măsuri preventive"

## Obiectiv
Elimina secțiunea detaliată "Care sunt cele 5 măsuri preventive" din pagina de servicii "Măsuri preventive", atât în română, cât și în engleză, păstrând restul conținutului intact.

## Ce se va modifica

### 1. Pagina RO: `src/pages/services/masuri-preventive.tsx`
- Se șterge întreg blocul JSX cuprins între comentariul `{/* Cele 5 măsuri preventive */}` și cardul următor (`{/* Metodă de lucru */}`).
- Acest bloc conține cardul cu titlul "Care sunt cele 5 măsuri preventive" și cele 5 subsecțiuni descriptive (Reținerea, Controlul judiciar, Controlul judiciar pe cauțiune, Arestul la domiciliu, Arestarea preventivă).

### 2. Pagina EN: `src/pages/en/services/preventive-measures.tsx`
- Se șterge blocul echivalent `{/* The 5 preventive measures */}`.

### 3. Verificare
- Se rulează build-ul de producție pentru a confirma că nu apar erori de compilare sau de validare SEO.

## Ce NU se modifică
- Secțiunea anterioară "Ce sunt măsurile preventive și în ce scop pot fi luate" rămâne în pagină.
- Restul paginii (hero, CTA, recenzie, FAQ, resurse oficiale, linkuri interne) rămâne neschimbat.
