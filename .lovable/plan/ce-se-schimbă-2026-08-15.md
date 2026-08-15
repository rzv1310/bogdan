Plan: Elimină linkul către pagina curentă din blocul „Pagini utile”

## Ce se schimbă

Componenta `ServicesQuickLinks` va detecta automat pagina pe care este afișată și va ascunde linkul care duce chiar la acea pagină.

Exemple:
- Pe `/contact` dispare „Contact - programează o evaluare”.
- Pe `/en/contact` dispare „Contact - book an assessment”.
- Pe `/despre-mine` / `/en/about` dispare linkul „Despre mine / About”.
- Pe `/blog` / `/en/blog` dispare linkul „Blog”.
- Pe `/calculator-despagubiri` dispare „Calculator despăgubiri”.

## Cum se implementează

1. Modific `src/components/ServicesQuickLinks.tsx`:
   - Import `useLocation` din `react-router-dom`.
   - Obțin `pathname` din locație.
   - Normalizez path-ul (elimin slash-ul final, convertește `/en` rădăcină dacă e cazul).
   - Filtrez array-ul `links` astfel încât să exclud linkul cu `to === pathname`.
   - Păstrez prop-urile existente `lang` și `className` și styling-ul actual.

2. Nu e nevoie să modific paginile individuale — componenta va funcționa automat oriunde este folosită.

## Verificare

- Rulez build-ul pentru a mă asigura că nu apar erori.
- Verific vizual în preview pe `/contact`, `/blog`, `/despre-mine` și `/calculator-despagubiri` că linkul propriu nu mai apare.
- Rulez `scripts/validate-seo.mjs` pentru a confirma că nu apar avertismente noi.
