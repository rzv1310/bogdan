# Conținut suplimentar pe pagina-părinte de malpraxis

## Ce se schimbă

Se adaugă conținut propriu pe pagina-părinte `/servicii/neglijenta-profesionala-si-malpraxis` și corespondentul ei EN `/en/services/professional-negligence-and-malpractice`, astfel încât să fie o pagină SEO reală pentru "avocat malpraxis medical București" fără să concureze cu cele 7 subservicii.

### Structura finală pagină-părinte

```text
H1 Avocat Malpraxis Medical București
→ intro rescris (victimă + medic)
→ CTA "☎ Sună-mă acum - 031 632 01 83"
→ trust strip
→ bio-block
→ breadcrumbs (4 niveluri)
H2 Cum te pot ajuta într-un caz de malpraxis medical
→ paragraf: "Alege mai jos subiectul care te interesează..."
→ cele 7 carduri cu subservicii
H2 Când poate exista malpraxis medical?
→ ~100-120 cuvinte explicând că rezultatul nefavorabil nu înseamnă automat malpraxis
H2 Ce documente sunt importante de la început?
→ ~70-100 cuvinte + CTA "☎ Sună-mă acum - 031 632 01 83"
H2 Întrebări frecvente
→ FAQ existent + o nouă întrebare: "Un rezultat medical nefavorabil înseamnă automat malpraxis?"
H2 Servicii conexe
→ linkuri către alte pagini principale
```

### Modificări concrete

1. **Intro rescris** (RO):
   - "În cazurile de malpraxis, primele zile pot conta decisiv. Documentația medicală, expertizele și primele demersuri pot influența atât obținerea despăgubirilor de către pacient, cât și stabilirea unei eventuale răspunderi penale a medicului. Analizez cazul de la început și stabilesc calea juridică potrivită."
   - Varianta EN este tradusă echivalent.

2. **H2-uri noi**:
   - RO: "Cum te pot ajuta într-un caz de malpraxis medical", "Când poate exista malpraxis medical?", "Ce documente sunt importante de la început?"
   - EN: "How I can help in a medical malpractice case", "When can medical malpractice exist?", "What documents are important from the start?"

3. **CTA suplimentar** în secțiunea de documente, folosind `ServiceHeroCta` sau un buton telefon identic cu cel din hero.

4. **FAQ nou** în vectorul FAQ deja existent pe ambele pagini.

5. **Servicii conexe**:
   - În `src/lib/relatedServices.ts` se înlocuiește pentru `/servicii/neglijenta-profesionala-si-malpraxis` linkul `/servicii/infractiuni-rutiere-cu-victime` cu `/servicii/urmarire-penala` (mai relevant pentru medici chemați la Poliție/Parchet). Modificarea se propagă automat și pe EN prin `routeMap`.

## Fișiere afectate

- `src/pages/services/neglijenta-profesionala-si-malpraxis.tsx`
- `src/pages/en/services/professional-negligence-and-malpractice.tsx`
- `src/lib/relatedServices.ts`

## Verificare

- Build (`bun run build` sau comanda activă din proiect).
- Typecheck (`tsgo` sau `tsc --noEmit`).
- Scriptul de validare SEO (`scripts/validate-seo.mjs`) pentru heading-uri, canonical, hreflang.
