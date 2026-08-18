# Verificare sitemap.xml, robots.txt și OAI-SearchBot

## Stare actuală

### `public/sitemap.xml`
- 138 de intrări `<url>`.
- 0 URL-uri duplicate.
- Doar homepage-ul (`/`) folosește trailing slash — restul paginilor sunt fără `/` final, consistent cu canonical-urile.
- Sitemap-ul este generat automat din `scripts/routes.mjs` prin `scripts/generate-sitemap.mjs`.

### `public/robots.txt`
- Conține blocuri explicite `Allow: /` pentru: Googlebot, Bingbot, Twitterbot, facebookexternalhit, GPTBot, ChatGPT-User, Google-Extended, PerplexityBot, ClaudeBot, YouBot, Claude-Web.
- Blocul final `User-agent: *` este `Allow: /`.
- **OAI-SearchBot nu este menționat explicit**, dar nici nu este blocat — cade sub `User-agent: * Allow: /`, deci are acces permis.
- Există directiva `Sitemap: https://avocatpenalbucuresti.ro/sitemap.xml`.

## Acțiuni propuse

1. **Adaugă bloc explicit pentru OAI-SearchBot în `public/robots.txt`**
   - Pentru claritate și control direct, adaugă:
     ```
     User-agent: OAI-SearchBot
     Allow: /
     ```
   - Acest lucru confirmă fără ambiguitate că OAI-SearchBot este permis, nu blocat.

2. **Regenerează și revalidează `public/sitemap.xml`**
   - Rulează `bun run generate-sitemap` (sau `bunx tsx scripts/generate-sitemap.mjs`) pentru a confirma că sitemap-ul reflectă lista curentă de rute.
   - Verifică din nou numărul de intrări și absența duplicatelor.

3. **Verificare finală OAI-SearchBot**
   - Confirmă că `robots.txt` returnează `Allow: /` pentru `OAI-SearchBot`.
   - Nu sunt necesare modificări în sitemap pentru acest crawler.

## Rezultat așteptat
- `robots.txt` conține un bloc explicit `User-agent: OAI-SearchBot` cu `Allow: /`.
- `sitemap.xml` rămâne valid: 138 de intrări, fără duplicate, fără URL-uri orfane.
- Site-ul rămâne deschis pentru OAI-SearchBot (nu este blocat).
