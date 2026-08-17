# Fix: fundalul bej nu apare în pagina Calculator

## Cauza

Componenta internă `Card` din pagina calculatorului are `bg-white` scris direct în clasele de bază (linia 67 în `src/pages/CalculatorDespagubiri.tsx`). Clasa `bg-[#faf0e6]` adăugată prin `className` intră în conflict cu `bg-white` și nu câștigă, deci caseta rămâne albă.

## Ce fac

1. Modific `Card` astfel încât fundalul implicit alb să poată fi suprascris: elimin `bg-white` din clasele de bază și îl aplic doar când nu se transmite altă clasă de fundal (folosind utilitarul `cn` / `twMerge` existent în proiect, care rezolvă conflictele de clase Tailwind).
2. Verific că secțiunea principală a calculatorului apare bej (`#faf0e6`), iar toate câmpurile de completat (input-uri number, select-uri, slidere) rămân albe.
3. Aplic identic în versiunea EN: `src/pages/en/compensation-calculator.tsx`.
4. Verific vizual în preview (screenshot) că fundalul bej este redat corect pe desktop și mobil.

## Detalii tehnice

- Fișiere atinse: `src/pages/CalculatorDespagubiri.tsx`, `src/pages/en/compensation-calculator.tsx`.
- Fără modificări de logică de calcul, doar prezentare.
- Restul cardurilor din pagină (rezultate, contact, disclaimer) rămân cu fundalul actual.
