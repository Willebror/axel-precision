

## Plan: Aktivera Lovable Cloud och sätt upp e-postutskick för kontaktformuläret

### Vad vi bygger
När någon fyller i kontaktformuläret ska meddelandet skickas som ett e-postmeddelande till **info@jhsaxelteknik.se** med avsändarens namn, företag, telefonnummer och meddelande.

### Steg

1. **Aktivera Lovable Cloud** -- krävs för att kunna skicka e-post och använda edge functions.

2. **Konfigurera e-postdomän** -- sätt upp en avsändardomän (jhsaxelteknik.se) så att e-post skickas från ert eget domännamn. Du kommer behöva lägga till DNS-poster hos din domänleverantör.

3. **Sätt upp e-postinfrastruktur** -- skapar databastabeller, köer och bakgrundsjobb som hanterar e-postutskick med automatiska omförsök.

4. **Skapa e-postmall** -- en snygg HTML-mall i JHS Axeltekniks färger (orange/vit) som innehåller avsändarens namn, företag, telefonnummer och meddelande.

5. **Skapa avregistreringssida** -- krävs för att uppfylla e-postregler.

6. **Uppdatera kontaktformuläret** -- koppla formuläret till edge function som skickar e-post. Formuläret kommer:
   - Validera inmatningen
   - Anropa e-postfunktionen med mottagar-e-post (info@jhsaxelteknik.se), mallnamn och formulärdata
   - Visa bekräftelse till användaren

### Tekniska detaljer

- **Edge function**: `send-transactional-email` -- generisk avsändare som anropas med mallnamn och data
- **E-postmall**: React Email-komponent med JHS-branding (orange primärfärg, Inter/Space Grotesk-fonter)
- **Mottagare**: Hårdkodad till `info@jhsaxelteknik.se` i mallen via `to`-fältet
- **Formulärdata** skickas som `templateData` (namn, företag, telefon, meddelande)
- Supabase-klient behövs i ContactSection för att anropa edge function

