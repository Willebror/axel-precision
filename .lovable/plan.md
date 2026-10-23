## Ta bort frågan "Installera appen" på mobilen

### Orsak
När ikonerna lades in skapades också en liten fil som beskriver sidan som en app som går att installera (läget "standalone"). Därför frågar mobilen om man vill installera den.

### Åtgärd
1. Ta bort app-filen (`site.webmanifest`) och länken till den i sidans huvud.
2. Behåll alla era ikoner: fliken i webbläsaren, Google och iPhone-hemskärmen fungerar som förut.
3. Publicera om sidan.

### Obs
Mobiler som redan har sparat sidan kan behöva en stund, eller en omladdning, innan frågan försvinner.
