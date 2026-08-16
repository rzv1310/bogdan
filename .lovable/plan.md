# Plan: Link contextual către pagina Reținere 24 ore

## Obiectiv
Adaugă un link contextual în pagina „Arest preventiv" către `/servicii/retinere-24-ore`, pentru a ghida utilizatorii care ajung pe pagină în situația în care persoana este încă reținută.

## Loc propus
Secțiunea „Ce se întâmplă la termenul pentru propunerea de arestare preventivă?", în paragraful de după bullets:

```text
"Dacă persoana este reținută, sesizarea judecătorului cu propunerea de arestare preventivă trebuie făcută cu cel puțin 6 ore înainte de expirarea duratei reținerii. În practică, asta înseamnă că apărarea se pregătește în câteva ore."
```

Se va transforma cuvântul „reținută" într-un link către `/servicii/retinere-24-ore`, folosind structura segmentată de text (suportată deja după ultima actualizare).

## Modificări tehnice
1. `src/lib/subServices/ro.ts` — convertește paragraful `paragraphsAfterBullets` din string simplu în array de segmente, unde segmentul `reținută` primește `to: "/servicii/retinere-24-ore"`.
2. Verificare build + SEO validation pentru a confirma că nu apar erori de tip sau de structură.

## Rezultat așteptat
Utilizatorii care citesc despre termenul de propunere a arestării preventive pot da click direct pe „reținută" pentru a afla ce se poate face în primele 24 de ore de reținere.
