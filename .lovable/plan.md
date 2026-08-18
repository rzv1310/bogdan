# Unificare coordonate GPS în schema JSON-LD

Toate schemele trebuie să folosească exclusiv `44.4572663, 26.0635712`. Coordonatele vechi `44.4533, 26.0876` apar în 3 locuri și vor fi înlocuite.

## Modificări

- `src/pages/Index.tsx` (linia ~608): geo din blocul LegalService/LocalBusiness → 44.4572663 / 26.0635712 (valori numerice, nu string)
- `src/pages/en/Homepage.tsx` (linia ~433): idem
- `src/pages/About.tsx` (linia ~122): idem

Coordonatele deja corecte din `Index.tsx` (~391) și `Homepage.tsx` (~216) rămân neschimbate. Restul schemei (adresă, hasMap, cid Google Maps) nu se atinge.

## Verificare

Căutare finală în tot proiectul pentru `44.4533` și `26.0876` - rezultat aşteptat: zero apariţii.
