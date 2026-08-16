Optimizare butoane cu text lung pe mobil

## Problema
Butoanele CTA cu text lung (ex: „A fost dispusă reținerea? - Sună-mă acum!”, „☎ Sună-mă acum - 031 632 01 83”) nu sunt optimizate pe ecrane înguste și pot da overflow sau pot fi greu de citit.

## Ce se va face
1. Audit butoane cu text lung
   - Identific toate butoanele CTA din site care depășesc ~25 de caractere (hero, secțiuni servicii, subservicii, contact, homepage, calculator).
   - Listeaz locurile afectate înainte de editare.

2. Ajustări responsive pentru butoanele lungi
   - Pe mobil (< md): font mai mic (`text-sm` sau `text-xs` după caz), padding redus, text wrap permis (`whitespace-normal`), lățime full-width (`w-full`) pentru CTA-urile principale.
   - Pe desktop: păstreaz dimensiunea și aspectul actual.
   - Aplic aceste clase prin componente reutilizabile, nu inline pe fiecare pagină.

3. Componente vizate
   - `src/components/ui/button.tsx`: adaugă opțiune/utilitar pentru text wrap pe mobil.
   - `src/components/services/ServiceHeroCta.tsx`: hero CTA cu număr de telefon.
   - `src/components/services/SubServicePage.tsx`: butoanele din secțiuni și contact.
   - `src/components/services/WhatsAppDocsCta.tsx`: buton WhatsApp cu text lung.
   - Paginile de servicii principale (`src/pages/services/*.tsx`) și homepage (`src/pages/Index.tsx`, `src/pages/en/Homepage.tsx`) care au CTA-uri custom.

4. Verificare
   - Build fără erori.
   - Capturi de ecran pe viewport mobil pentru cele mai lungi butoane.
   - Verificare SEO (heading hierarchy rămâne valid).

## Ce NU se schimbă
- Textul butoanelor rămâne același, doar styling-ul responsive.
- Culorile, variantele și efectele vizuale existente rămân neschimbate.
