# Extindere pagina "Dare și luare de mită" (RO + EN)

Se adaugă 5 capitole noi, imediat după secțiunea „Ce documente trebuie să-mi trimiți”, în aceeași ordine în care au fost cerute. Restul paginii rămâne neschimbat (hero, bio, recenzii, FAQ, resurse, linkuri interne).

## Ordinea finală a capitolelor

1. În ce situație te afli acum?
2. Ce analizez imediat într-un dosar de mită
3. Ce documente trebuie să-mi trimiți (bej, rămâne)
4. **Ce trebuie să faci dacă ai fost prins în flagrant pentru dare sau luare de mită** (nou)
5. **Denunțul, constrângerea și nepedepsirea la darea de mită** (nou)
6. **Când un cadou, o „atenție” sau un avantaj poate fi considerat mită?** (nou)
7. **Cum sunt analizate interceptările și înregistrările într-un dosar de mită** (nou)
8. **Sechestrul și confiscarea într-un dosar de mită** (nou)
9. Ce înseamnă luarea de mită
10. Ce înseamnă darea de mită
11. Cine poate fi subiect al infracțiunii
12. Ce riști concret într-un dosar de mită (bej, rămâne)
13. Diferența dintre mită și trafic de influență
14. Cum construiesc apărarea

## Conținutul secțiunilor noi

**1. Flagrant** - paragraf de context + 4 subcapitole H3:
- Ce verific la procesul-verbal de flagrant (ora, locul, martorii asistenți, descrierea sumei/foloaselor, concordanța cu autorizarea)
- Ce trebuie verificat înainte de prima declarație (calitatea procesuală, dreptul la avocat, dreptul de a nu declara, riscul declarațiilor date sub presiune)
- Interceptările și înregistrările folosite în flagrant (autorizare, momentul obținerii, corespondența cu transcrierile)
- Rolul denunțătorului și problema provocării (denunț interesat, limita dintre constatare și determinarea faptei)
Include CTA telefon + „Sună oricum.” unde se potrivește tonul urgenței.

**2. Denunț, constrângere, nepedepsire (art. 290)** - 4 H3:
- Când denunțul poate înlătura pedeapsa
- Ce înseamnă că organul de urmărire penală nu fusese încă sesizat
- Ce se întâmplă dacă ai fost constrâns să dai mită
- Când se restituie banii și când se confiscă

**3. Cadou, „atenție” sau avantaj** - explică legătura cu atribuțiile de serviciu, foloasele „care nu se cuvin”, momentul (înainte/după act), valoarea și contextul, plus exemple practice și cazurile în care nu există infracțiune.

**4. Interceptări și înregistrări** - dezvoltate din bullets în capitol propriu: autorizarea, integritatea înregistrării, contextul conversației, transcrierile incomplete, interpretarea expresiilor ambigue.

**5. Sechestru și confiscare** - măsuri asigurătorii, ce bunuri pot fi indisponibilizate, confiscarea specială a sumelor/foloaselor, restituirea, contestarea măsurii.

## Detalii tehnice

- Modificări doar în `src/lib/subServices/ro.ts` (`dareLuareDeMitaRo`) și `src/lib/subServices/en.ts` (`briberyGivingAndTakingEn`); componentele nu se ating.
- Se folosesc structurile existente (`sections`, `subsections`, `bullets`, `callout`, `cta`, `ctaWhatsApp`), deci designul rămâne identic.
- Regula „exact două secțiuni bej” se respectă: noile secțiuni nu primesc `cardClassName`, rămân bej doar „Ce documente trebuie să-mi trimiți” și „Ce riști concret”.
- Fără em dash (doar cratimă), conform regulii de conținut.
- Versiunea EN primește traducerea 1:1 a acelorași capitole și subcapitole, cu numerotarea articolelor păstrată.
