# Rafinare pagină-părinte malpraxis (RO + EN)

## Ce se schimbă

Se rafinează pagina-părinte `/servicii/neglijenta-profesionala-si-malpraxis` și corespondentul EN `/en/services/professional-negligence-and-malpractice` pentru:
- texte negre în cardurile celor 7 subservicii;
- butoane „Vezi pagina” / „See the page” cu background bej;
- texte negre în ultimele două secțiuni H2;
- înlocuirea CTA-ului telefonic de la final cu butonul WhatsApp „Trimite-mi actele pe WhatsApp”;
- adăugarea unui bloc de text nou sub H2-ul „Cum te pot ajuta într-un caz de malpraxis medical”, urmat de buton de call, spațiu 30px și fraza de ghidare.

## Modificări concrete

### 1. Cardurile celor 7 subservicii

- Schimbă clasa paragrafului descriptiv din `text-muted-foreground` în `text-foreground`.
- Butonul rămâne `variant="outline"`, dar primește clase suplimentare pentru background bej (`bg-[#faf0e6]`) și text negru, fără să piardă starea de hover.

### 2. Ultimele două secțiuni H2

- Secțiunile „Când poate exista malpraxis medical?” și „Ce documente sunt importante de la început?” trec la `text-foreground` pe toate paragrafele.

### 3. CTA final

- Înlocuiește butonul telefonic de la finalul secțiunii „Ce documente sunt importante de la început?” cu componenta `WhatsAppDocsCta` (variantă green, text default RO/EN).
- Elimină importul `HERO_CTA_CLASS` dacă nu mai este folosit în altă parte pe pagină.

### 4. Bloc nou sub H2 „Cum te pot ajuta...”

- Adaugă sub H2 un bloc cu 3 paragrafe (text furnizat de utilizator).
- După text, inserează buton de call (`ServiceHeroCta` sau buton telefonic direct).
- Adaugă un separator de 30px (`mt-[30px]` sau `mt-8` aproximativ echivalent).
- Afișează fraza „Alege mai jos subiectul care te interesează, vei găsi detalii, întrebări frecvente și acțiunea concretă pentru cazul tău.” sub separator.
- Cardurile celor 7 subservicii rămân imediat după acest bloc.

### 5. Sincronizare EN

- Aplică aceleași ajustări de stil și structură pe pagina EN.
- Textele traduse echivalent pentru noul bloc sub H2:
  - „Not sure if what happened is actually malpractice, what evidence you need or what procedure to start?"
  - „You may have suffered damage and want compensation, lost a close person, or, as a doctor, have already received a summons or notice."
  - „I analyse the case and tell you concretely what options you have, what is worth doing and what should be avoided from the start. Depending on the situation, compensation, a complaint to the Malpractice Committee or professional body, or defence in a criminal case may be needed."
- Fraza de ghidare: „Choose below the topic you are interested in; you will find details, frequently asked questions and the concrete action for your case."

## Fișiere afectate

- `src/pages/services/neglijenta-profesionala-si-malpraxis.tsx`
- `src/pages/en/services/professional-negligence-and-malpractice.tsx`
- `src/components/services/WhatsAppDocsCta.tsx` (doar dacă e necesară o ajustare de dimensiune/stil; altfel nu se modifică)

## Verificare

- Build (`bun run build` sau comanda activă).
- Typecheck (`tsgo` sau `tsc --noEmit`).
- Scriptul de validare SEO (`scripts/validate-seo.mjs`) pentru heading-uri și canonical.
- Verificare vizuală în preview: texte negre în carduri, butoane bej, CTA WhatsApp verde la final, bloc nou sub primul H2.
