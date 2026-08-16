# Navigarea din header în preview: nicio modificare în site

## Ce am verificat

Am rulat navigarea în browser pe dev server, la același viewport (910x633):

- Click pe "Contact" -> URL devine `/en/contact`, pagina se randează.
- Click pe "Servicii" -> "Toate serviciile" -> URL devine `/servicii`, H1 "Servicii avocat penal în București".
- Consola din preview nu arată erori de încărcare de chunk-uri (doar warning-uri React despre `forwardRef`).

Diferența dintre ce merge și ce nu merge în preview:

- RO / EN (merge) = buton cu navigare programatică.
- Servicii / Despre mine / Contact (nu merge) = linkuri `<a>`, al căror click este interceptat de shell-ul de preview.

Concluzie: aplicația și site-ul publicat sunt corecte; comportamentul apare doar în iframe-ul de preview din editor.

## Ce facem

Nimic în codul site-ului. Nu modific `Header.tsx` și nici alt fișier.

## Cum navighezi în timpul lucrului în editor

- Deschide preview-ul în tab nou (butonul de deschidere externă) - acolo linkurile din header funcționează normal.
- Sau spune-mi ruta pe care vrei să o vezi și o deschid direct în preview.
