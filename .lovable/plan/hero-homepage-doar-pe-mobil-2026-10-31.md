## Hero homepage - doar pe mobil

1. Rândul "5,0 ★★★★★ din 31 de recenzii Google" se mută imediat sub titlul mare (H1), deasupra pozei. Pe mobil dispare de sub buton; pe calculator rămâne unde e.
2. Se elimină propoziția "Încrederea reciprocă salvează!" din citat (doar pe mobil). Ghilimelele de deschidere „ trec pe primul rând rămas ("Îți ascult povestea.").
3. Deasupra butonului "Sună-mă acum" apare textul alb: "Ești citat, cercetat sau reținut?"
4. Sub buton apare: "Consultație telefonică gratuită".

Nimic altceva nu se schimbă (calculator, pagina în engleză, restul site-ului).

### Detalii tehnice
- Doar `src/pages/Index.tsx`: bloc rating duplicat `md:hidden` după H1, cel existent devine `hidden md:flex`; în ramura mobilă a citatului se omite `parts[0]` și se prefixează „ la `parts[1]`; două `<p className="md:hidden ...">` în jurul butonului, afișate doar pentru `lang === "ro"`.
