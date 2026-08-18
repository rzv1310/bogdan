# 7 subservicii pentru pagina-pilon Malpraxis

## Ce se construiește

7 pagini noi de subservicii sub `/servicii/neglijenta-profesionala-si-malpraxis`, cu textele, title tag, meta description, H1, keywords și linkurile interne exact cum le-ai specificat:

1. `/servicii/despagubiri-malpraxis-medical`
2. `/servicii/raspundere-penala-medic`
3. `/servicii/comisia-de-malpraxis`
4. `/servicii/vatamare-corporala-din-culpa-medicala`
5. `/servicii/ucidere-din-culpa-medicala`
6. `/servicii/plangere-colegiul-medicilor`
7. `/servicii/malpraxis-stomatologic`

Fiecare pagină folosește layoutul standard de subserviciu deja existent pe site: Breadcrumbs (4 niveluri) > H1 > paragraf de urgență > CTA „☎ Sună-mă acum - 031 632 01 83” > proof strip (18+ ani experiență · 5,0 ★★★★★ Google · Mă ocup personal de dosar) > bio-block compact > secțiuni H2 > întrebări frecvente (H2/H3) > servicii conexe la final.

Fără em dash, doar cratimă. Referințele „(Legislație)” devin linkuri externe către legislatie.just.ro / CMR, nu text simplu.

## Oglinda EN

Site-ul are paritate hreflang completă (fiecare pagină RO are corespondent EN). Ca să nu apară pagini orfane și erori la validarea SEO din build, se creează și cele 7 echivalente EN, cu același conținut tradus:

- `/en/services/medical-malpractice-compensation`
- `/en/services/doctor-criminal-liability`
- `/en/services/malpractice-committee`
- `/en/services/medical-negligence-bodily-injury`
- `/en/services/medical-negligence-manslaughter`
- `/en/services/complaint-college-of-physicians`
- `/en/services/dental-malpractice`

## Restructurarea paginii-părinte (anti-canibalizare)

Pe `/servicii/neglijenta-profesionala-si-malpraxis` (RO și EN):

- se scurtează puternic secțiunile „Comisia de malpraxis”, „Când devine penal” și „Ce fac pentru pacient/medic”;
- părintele păstrează doar cadrul general (ce este malpraxisul, latura civilă vs. penală în linii mari) plus un bloc de 7 direcții, fiecare explicată în 2-3 fraze cu link către copil;
- părintele rămâne targetat pe „avocat malpraxis medical București / malpraxis medical”; nu mai dezvoltă intenturile atribuite copiilor.

## Linkuri interne

Se implementează exact schema pe care ai dat-o pentru fiecare pagină (părinte după primul paragraf, legături între copii pe intent, „reprezentarea victimelor în procese penale”, „urmărire penală”, „măsuri preventive” unde ai indicat). Excepție respectată: pe „Malpraxis stomatologic” nu se pune link cu anchor „Plângere Colegiul Medicilor”; se menționează CMSR ca instituție distinctă.

Bullets din caseta „Malpraxis” de pe `/servicii` și din bio-block-ul paginii-părinte devin linkuri active către cele 7 pagini noi.

## Detalii tehnice

- Conținut: obiecte noi `SubServicePageData` în `src/lib/subServices/ro.ts` și `en.ts`; componente subțiri în `src/pages/services/` și `src/pages/en/services/`.
- Rutare: `src/routes.tsx` (lazyRoute + Route), `scripts/langPairs.mjs` (14 mapări noi), `scripts/routes.mjs` (ROUTES + `SUB_SERVICE_ROUTES`).
- Linking: `src/lib/serviceGroups.ts` (subServices cu `to`), `src/lib/relatedServices.ts` (grup malpraxis + etichete).
- Indexare: `src/pages/Sitemap.tsx`, `src/pages/en/sitemap.tsx`, `public/llms.txt`.
- Verificare: build + `scripts/validate-seo.mjs` (canonical, hreflang, title/description) și typecheck.
