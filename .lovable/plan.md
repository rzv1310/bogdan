# Restructurare pagina Măsuri preventive (RO + EN)

Aceleași carduri cu chenar accent, aceeași tipografie. Se schimbă ordinea secțiunilor, textele CTA și se adaugă două blocuri noi.

## 1. Structură

- Elimin complet secțiunea „Ce se întâmplă acum?” (cele 6 scenarii). Informația utilă rămâne acoperită de cele 4 subpagini și de „Pași practici”.
- „Ce fac imediat după ce mă contactezi” devine prima secțiune sub hero (înaintea blocului de situații).
- USP nou, imediat sub hero (deasupra „Ce fac imediat…”), ca bloc vizual distinct cu accent: „Mă ocup personal de dosar - nu ești preluat și apoi trimis automat la alt avocat. Mă ocup personal de strategie și de momentele esențiale ale mandatului.” Paragraful echivalent din „De ce să mă alegi” se scurtează ca să nu se repete.
- Card de recenzie Google imediat după „Ce fac imediat după ce mă contactezi”, în stil GBP: avatar rotund cu inițiala, nume „Robert Boloaja”, 5 stele galbene, eticheta „Recenzie Google” cu iconița Google, textul recenziei furnizat. Ratingul 5,0 / 27 din hero rămâne.
- „Ai una dintre aceste probleme?” devine „În ce situație te afli acum?”.
- Blocul „Nu știi exact ce măsură se discută?” se scoate pe fundal bej `#faf0e6`, cu textul: „Nu știi dacă este reținere, control judiciar sau propunere de arestare? Nu trebuie să știi. Spune-mi ce s-a întâmplat.” plus butonul de apel.

## 2. CTA-uri

- CTA principal standardizat: „Sună acum - 031 632 01 83” peste tot în pagină (hero păstrează „Sună-mă acum!”, ca pe restul site-ului). Contextul rămâne în paragraful de deasupra butonului, nu în buton. Se elimină formulările „A fost dispusă reținerea…”, „Vreau să verific…”, „Analizează obligațiile…”, „Verifică acum ce opțiuni ai”, „Vorbește direct cu avocatul…”.
- CTA secundar nou „Trimite actele pe WhatsApp” (`https://wa.me/40745506443`), plasat la finalul secțiunii „Ce trebuie să îmi spui sau să îmi trimiți” și lângă butonul de apel din cardul de contact final.
- În „Care sunt cele 5 măsuri preventive”, cele 5 linkuri către subservicii devin butoane secundare: fundal transparent, border galben (accent), text normal, fără fundal galben. Aceeași tratare pentru linkurile din secțiunea de situații.

## 3. Spațiere

- Distanța între carduri crește de la `mt-8` la `mt-12` (`md:mt-16`).
- Spațierea internă se reduce: `CardHeader`/`CardContent` cu padding vertical mai mic și `space-y-3` -> `space-y-2` pentru paragrafe, `space-y-6` -> `space-y-4` între blocurile de situații.

## 4. Versiunea EN

Aceleași modificări pe `/en/services/preventive-measures`, cu texte în engleză: „Call now - 031 632 01 83”, „Send documents on WhatsApp”, „What is your situation right now?”, blocul bej echivalent, USP-ul și cardul de recenzie (recenzia se afișează în română, cu mențiunea „Google review”).

## Detalii tehnice

- Fișiere modificate: `src/pages/services/masuri-preventive.tsx`, `src/pages/en/services/preventive-measures.tsx`.
- Componente noi reutilizabile: `src/components/services/GoogleReviewCard.tsx`, `src/components/services/WhatsAppDocsCta.tsx`, `src/components/services/SubServiceLinkButton.tsx` (buton outline cu border accent).
- FAQ, JSON-LD (BreadcrumbList, LegalService, FAQPage), `RelatedServices` și `ServiceSubServices` rămân neschimbate. Întrebarea din FAQ despre reprezentarea personală rămâne.
- Fără em dash; verificare finală cu `bun run build` (prerender + validare SEO, 0 erori).
