## Visa JH'S-ikonen överallt istället för Lovables

### Orsak
Den publicerade sidan svarar fortfarande med Lovables standardikon på adressen `/favicon.ico`, som webbläsare och Google hämtar automatiskt.

### Åtgärd
1. Lägg era uppladdade ikoner på rätt plats:
   - `favicon-16x16.png`, `favicon-32x32.png` – webbläsarflikar
   - `apple-touch-icon.png` – iPhone-hemskärm
   - `android-chrome-192x192.png`, `android-chrome-512x512.png` – Android och Google
2. Skapa `favicon.ico` (16+32 px) av era ikoner så att Lovables ikon ersätts.
3. Lägg till en liten app-manifestfil med namn och ikoner för Android.
4. Uppdatera sidans huvud med länkar till alla ikoner och ta bort den gamla `favicon.png`.
5. Publicera om sidan.

### Obs
Webbläsare sparar ikoner länge – testa i privat fönster. Google kan ta dagar till veckor att uppdatera ikonen i sökresultaten.
