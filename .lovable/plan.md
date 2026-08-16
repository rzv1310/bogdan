# Corecție plasare text - Măsuri preventive

## Context
Textul "Codul de procedură penală prevede 5 măsuri preventive: reținerea, controlul judiciar, controlul judiciar pe cauțiune, arestul la domiciliu și arestarea preventivă." a fost adăugat greșit la finalul secțiunii "Care sunt cele 5 măsuri preventive" în loc de secțiunea corectă.

## Modificări propuse

### RO: `src/pages/services/masuri-preventive.tsx`
1. Șterge paragraful duplicat adăugat la finalul secțiunii "Care sunt cele 5 măsuri preventive".
2. Adaugă paragraful la finalul secțiunii "Ce sunt măsurile preventive și în ce scop pot fi luate", înainte de închiderea `</CardContent>`.

### EN: `src/pages/en/services/preventive-measures.tsx`
1. Șterge paragraful duplicat adăugat la finalul secțiunii "What are preventive measures".
2. Adaugă paragraful tradus la finalul secțiunii "What are preventive measures and for what purpose they may be ordered".

## Verificare
- Rulează `bun run build` pentru validare SEO și prerender.
