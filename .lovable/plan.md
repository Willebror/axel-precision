## Visa JH'S-ikonen överallt istället för Lovables

### Orsak
Sidan pekar redan på er egen ikon, men den publicerade sidan svarar fortfarande med Lovables standardikon på adressen `/favicon.ico`. Många webbläsare och Google hämtar just den adressen automatiskt, och därför syns Lovables ikon.

### Åtgärd
1. Använd ikonerna du laddar upp. Varje fil sorteras efter storlek och typ:
   - `favicon.ico` (16/32/48 px) – ersätter Lovables ikon
   - `favicon.png` / 32 px och 192 px – webbläsare och Google (multipel av 48 px)
   - `apple-touch-icon.png` (180 px) – iPhone-hemskärm
   - Saknas någon storlek skapas den från din största bild.
2. Uppdatera sidans huvud med länkar till alla ikoner och ta bort gamla filer.
3. Publicera om sidan efteråt.

### Obs
Webbläsare sparar ikoner länge – testa i privat fönster. Google kan ta några dagar till veckor att uppdatera ikonen i sökresultaten.
