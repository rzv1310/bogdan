# Simplificare secțiune "Ce trebuie să îmi spui sau să îmi trimiți" - Măsuri preventive

## Obiectiv
Restructurarea secțiunii de documente/informații din paginile de măsuri preventive (RO + EN) pentru a fi mai scurtă și mai directă, cu un CTA WhatsApp cu border verde.

## Modificări conținut - pagina RO (`src/pages/services/masuri-preventive.tsx`)
În secțiunea "Ce trebuie să îmi spui sau să îmi trimiți":
- Înlocuiește intro-ul și lista lungă de bullet-uri cu:
  ```
  Spune-mi 3 lucruri:
  unde este persoana · ce s-a întâmplat · când este următorul termen
  ```
- Înlocuiește paragraful despre documente cu:
  ```
  Dacă le ai, trimite:
  ordonanța · încheierea · citația · actele de la Poliție/Parchet
  ```
- Adaugă imediat dedesubt, pe rând separat, în bold:
  ```
  Nu ai toate documentele? Sună oricum.
  ```
- Păstrează butonul WhatsApp dedesubt, dar cu border verde în loc de galben.

## Modificări conținut - pagina EN (`src/pages/en/services/preventive-measures.tsx`)
Aplică echivalentul în engleză:
- "Tell me 3 things: where the person is · what happened · when the next deadline is"
- "If you have them, send: the ordinance · the court ruling · the summons · the Police/Prosecutor documents"
- "Don't have all the documents? Call anyway." - bold
- Buton WhatsApp cu border verde.

## Modificare componentă WhatsApp (`src/components/services/WhatsAppDocsCta.tsx`)
Adaugă suport pentru o variantă cu border verde, fără a afecta celelalte utilizări ale componentei:
- Opțiune A (preferată): adaugă prop opțională `variant?: "default" | "green"` care înlocuiește `border-accent` cu `border-[#25D366]` când e setată pe `green`.
- În paginile de măsuri preventive se va folosi `variant="green"`.

## Verificare
- `bun run build` trebuie să treacă cu 0 erori.
- Validare vizuală în preview pe secțiunea respectivă (RO și EN).
