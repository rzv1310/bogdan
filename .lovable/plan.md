# Hero EN identic cu hero RO

Aliniez hero-ul din homepage-ul EN (`src/pages/en/Homepage.tsx`) la structura hero-ului RO (`src/pages/Index.tsx`): poza avocatului cu strip-ul de badge-uri Legal 500 pe partea imaginii, iar H1, citatul, semnătura și butonul CTA în coloana de text — cu aceleași dimensiuni și spațieri ca pe RO.

## Ce se schimbă (doar EN)

- Coloana cu portretul: aceleași clase ca pe RO (`hidden md:block relative md:max-w-[76.5%] md:ml-auto`), imagine `w-full h-auto rounded-lg shadow-md` — se renunță la `flex justify-center`, `max-w-sm` și `shadow-2xl`, care fac poza mai mică și centrată diferit față de RO.
- H1: aceeași scară tipografică ca pe RO (`text-[28px] md:text-4xl`) în loc de `text-[32px] md:text-5xl`.
- Padding-ul secțiunii: `md:pb-[66px]` ca pe RO, în loc de `md:pb-24`.
- Restul (imaginea mobile după H1 cu badge-urile suprapuse, citatul, semnătura, „18 years by your side!”, butonul „Call now”) rămâne neschimbat — deja este identic cu RO.

## Note tehnice

- Nicio modificare de conținut/text EN, doar clase de layout.
- `Legal500BadgeStrip` rămâne cu poziționarea actuală (identică în ambele fișiere).
- Verificare finală: build + screenshot desktop și mobile pe `/en`, comparat cu `/`.
