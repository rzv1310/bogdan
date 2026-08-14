# Creare fișier `llms.txt`

## Obiectiv
Adaugă un fișier `public/llms.txt` care să fie servit static la `/llms.txt` și să ofere asistențelor AI o hartă concisă a site-ului.

## Ce se va face
1. Creează `public/llms.txt` cu structura conformă specificației llmstxt.org:
   - `# Avocat Bogdan Lamatic` (H1)
   - `>` one-line summary
   - paragraf scurt de prezentare
   - secțiuni H2: `Pages`, `Services`, `Legal`, `Optional`
   - fiecare secțiune conține liste de linkuri sub formă `- [Title](/path): description`
2. Include doar rute publice, destinate vizitatorilor neautentificați:
   - homepage RO și EN
   - pagini de contact, despre mine, blog
   - pagini de servicii (RO + EN)
   - calculator despăgubiri
   - pagini legale: termeni, GDPR, politica cookies
   - sitemap
3. Exclude rutele de admin, auth, API, webhooks, platformă sau orice suprafață internă (nu există în acest proiect, dar se verifică lista de rute).
4. Verifică build-ul local pentru a te asigura că fișierul este copiat în `dist/`.

## Conținutul fișierului (previzualizare)

```text
# Avocat Bogdan Lamatic

> Cabinet de avocatură specializat în drept penal în București — apărare rapidă, eficientă și discretă.

Site-ul prezintă serviciile, experiența și modalitățile de contact ale avocatului Bogdan Lamatic. Conține pagini în română și engleză, o secțiune de blog, un calculator de despăgubiri și pagini legale.

## Pages

- [Acasă](/): Pagina principală în română.
- [Home](/en): English homepage.
- [Despre mine](/despre-mine): Prezentarea avocatului Bogdan Lamatic.
- [About me](/en/about): About attorney Bogdan Lamatic.
- [Blog](/blog): Articole și noutăți juridice în română.
- [Blog](/en/blog): Legal articles and updates in English.
- [Contact](/contact): Formular și date de contact în română.
- [Contact](/en/contact): Contact form and details in English.
- [Calculator despăgubiri](/calculator-despagubiri): Instrument de estimare a despăgubirilor.
- [Sitemap](/sitemap.xml): Harta site-ului.

## Services

- [Avocat Drept Penal](/servicii/criminalitate-economica): Criminalitate economică — fraude, delapidare, fals, evaziune fiscală.
- [Economic Crime](/en/services/financial-crime): Financial crime defense.
- [Infracțiuni de corupție](/servicii/infractiuni-de-coruptie-si-fapte-legate-de-exercitarea-functiei-publice): Mită, abuz în serviciu, trafic de influență.
- [Corruption and Public Office Offenses](/en/services/corruption-and-public-office-offenses): Bribery, abuse of office, influence peddling.
- [Investigații privind activele cripto](/servicii/investigatii-privind-activele-cripto): Criptomonede, blockchain, fraude digitale.
- [Crypto Asset Investigations](/en/services/crypto-asset-investigations): Crypto and blockchain-related investigations.
- [Cauze penale privind droguri](/servicii/cauze-penale-privind-droguri): Deținere, trafic, conducere sub influență.
- [Drug Offenses](/en/services/drug-offenses): Drug possession, trafficking, DUI.
- [Spălare de bani și ascundere de bunuri](/servicii/spalare-de-bani-si-ascundere-de-bunuri): Spălarea produselor infracționale.
- [Money Laundering and Asset Concealment](/en/services/money-laundering-and-asset-concealment): Money laundering and asset concealment defense.
- [Neglijență profesională și malpraxis](/servicii/neglijenta-profesionala-si-malpraxis): Malpraxis medical, juridic, tehnic.
- [Professional Negligence and Malpractice](/en/services/professional-negligence-and-malpractice): Professional negligence and malpractice defense.
- [Infracțiuni rutiere cu victime](/servicii/infractiuni-rutiere-cu-victime): Accidente rutiere grave.
- [Road Traffic Offenses](/en/services/road-traffic-offenses): Serious road traffic offenses.
- [Răspundere penală incidente locul de muncă](/servicii/raspundere-penala-incidente-locul-de-munca): Accidente de muncă, securitate.
- [Workplace Criminal Liability](/en/services/workplace-criminal-liability): Criminal liability for workplace incidents.
- [Reprezentarea victimelor în procese penale](/servicii/reprezentarea-victimelor-in-procese-penale): Asistență persoane vătămate.
- [Victim Representation in Criminal Cases](/en/services/victim-representation-in-criminal-cases): Representation of victims in criminal proceedings.

## Legal

- [Termeni și condiții](/termeni-si-conditii): Condiții de utilizare.
- [Terms and Conditions](/en/terms-and-conditions): Terms of use.
- [GDPR](/gdpr): Politica de confidențialitate.
- [GDPR](/en/gdpr): Privacy policy.
- [Politica cookies](/politica-cookies): Informații despre cookie-uri.
- [Cookie Policy](/en/cookie-policy): Cookie policy.

## Optional

- [Sitemap XML](/sitemap.xml): Harta completă a site-ului pentru motoarele de căutare.
```

## Verificare
- Rulează build-ul local și confirmă că `dist/llms.txt` există.
- Accesează `http://localhost:8080/llms.txt` pentru a valida conținutul servit.
