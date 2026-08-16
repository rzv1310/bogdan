# Plan: Update conținut pagină Percheziție domiciliară

## Ce se schimbă

Pe pagina `/servicii/perchezitie-domiciliara` se actualizează două elemente de conținut:

1. **Blocul de urgență (hero text)**
   - Se înlocuiește textul actual:
     > Poliția sau procurorii sunt la ușă cu un mandat de percheziție?  
     > - Citește cu atenție documentele înainte de semnare.  
     > - Nu încerca să împiedici fizic efectuarea percheziției.  
     > - Contactează imediat un avocat!
   - Cu textul nou:
     > Poliția sau procurorii sunt la ușă cu un mandat de percheziție?  
     > - Solicită o legitimație persoanelor care se prezintă la ușa ta.  
     > - Citește cu atenție documentele înainte de semnare.  
     > - Nu încerca să împiedici fizic efectuarea percheziției.

2. **Butonul CTA din secțiunea "Percheziția are loc chiar acum?"**
   - Se schimbă din `Sună-mă acum` în `Și sună-mă imediat - 031 632 01 83`.
   - Fără emoji de telefon.

## Unde se aplică

- `src/lib/subServices/ro.ts` — obiectul `perchezitieDomiciliaraRo`:
  - câmpul `urgency`
  - câmpul `sections[0].cta`

## Cum se aplică

Se editează direct valorile de text din obiectul de date, fără a modifica structura de componente sau stilurile.

## Verificare

- `bun run build` trebuie să treacă fără erori.
- Se verifică vizual în preview că textul și butonul afișează noile valori.