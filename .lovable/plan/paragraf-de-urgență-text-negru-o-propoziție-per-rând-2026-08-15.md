# Paragraf de urgență: text negru, o propoziție per rând

## Ce se schimbă

Pe toate paginile de servicii (RO și EN), primul paragraf de sub H1 (cel cu mesajul de urgență, „primele ore contează cel mai mult...”):

- textul devine negru (culoarea principală de text), în loc de gri
- fiecare propoziție apare pe rând nou

Restul paragrafelor, butoanele, recenziile, bio-ul, Legal 500, breadcrumbs și tot conținutul de mai jos rămân exact cum sunt.

Exemplu (pagina Urmărire penală):

```text
În urmărirea penală, primele ore contează cel mai mult.
Ce declari, ce semnezi și cum reacționezi în primele 24 de ore pot decide dacă dosarul se închide rapid sau se transformă într-un proces lung.
Nu aștepta prima înfățișare în instanță ca să ceri ajutor - un avocat de urmărire penală te apără chiar de la audiere, percheziție sau reținere.
```

## Detalii tehnice

- În fiecare pagină de servicii, containerul paragrafului de urgență trece de la `text-muted-foreground` la `text-foreground` (token semantic, fără culori hardcodate).
- Propozițiile se separă în elemente de bloc distincte (câte un `<span className="block">` sau linii separate în același paragraf), păstrând `<strong>` pe prima propoziție.
- Fișiere atinse: cele 12 pagini din `src/pages/services/*` și cele 13 din `src/pages/en/services/*` (fără `index.tsx` din hub-uri).
- Nu se modifică `useSEO`, JSON-LD, chart-urile sau alte secțiuni.
- Verificare finală: build + validarea SEO existentă.
