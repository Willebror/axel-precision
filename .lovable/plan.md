## Visa JH'S-ikonen överallt istället för Lovables

### Orsak
Sidan pekar redan på er egen ikon, men den publicerade sidan svarar fortfarande med Lovables standardikon på adressen `/favicon.ico`. Många webbläsare och Google hämtar just den adressen automatiskt, och därför syns Lovables ikon. Er egen ikon är dessutom liten (50x50), vilket Google inte gillar.

### Åtgärd
1. Skapa en `favicon.ico` av er JH'S-ikon (16, 32, 48 px) så att den ersätter Lovables på `/favicon.ico`.
2. Skapa en skarpare `favicon.png` i 192x192 (Google kräver multipel av 48 px) och en `apple-touch-icon.png` (180x180) för iPhone-hemskärm.
3. Uppdatera sidans huvud med länkar till alla tre ikonerna.
4. Publicera om sidan efteråt.

### Obs
Webbläsare sparar ikoner länge – töm cache eller testa i privat fönster. Google kan ta några dagar till veckor att uppdatera ikonen i sökresultaten.
