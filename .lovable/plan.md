

## SEO-optimering utan att ändra synligt innehåll

Sidan har redan grundläggande SEO (title, meta description, JSON-LD, canonical). Här är vad vi kan förbättra utan att påverka det visuella innehållet:

### 1. Skapa sitemap.xml
En `public/sitemap.xml` som listar alla sidor (`/` och `/integritetspolicy`) med `lastmod`-datum. Detta hjälper Google indexera sidan snabbare.

### 2. Uppdatera robots.txt med sitemap-referens
Lägg till `Sitemap: https://jhsaxelteknik.se/sitemap.xml` i robots.txt.

### 3. Bredda meta-keywords
Lägg till fler sökord: `hjulinställning buss`, `hjulinställning släp`, `hjulinställning trailer`, `axelinställning tunga fordon`, `mobil hjulbalansering lastbil`, `hjulinställning Sverige`.

### 4. Utöka JSON-LD (strukturerad data)
Lägg till mer information i befintligt LocalBusiness-schema:
- `telephone`, `email`, `address` (om tillgängligt)
- Lägg till ett separat `Service`-schema som listar fordonstyperna (lastbil, buss, släp, trailer)
- `sameAs`-länkar till Instagram och Facebook

### 5. Lägg till hreflang-taggar
Eftersom sidan stöder flera språk, lägg till `<link rel="alternate" hreflang="sv" href="..." />` etc. i `<head>`. Detta signalerar till Google vilka språkversioner som finns.

### 6. Förbättra alt-texter på bilder
Uppdatera alt-attributen till mer nyckelordstäta beskrivningar, t.ex. `"Mobil hjulinställning lastbil – JH'S Axelteknik"` — detta syns inte för besökare men hjälper bildsök.

### 7. Lägg till Open Graph-bild
Lägg till `og:image` och `og:url` meta-taggar för bättre delningar på sociala medier (indirekt SEO-signal).

### Tekniska detaljer
- **Filer som ändras**: `index.html`, `public/robots.txt`, `src/components/HeroSection.tsx` (alt-text), `src/components/ServicesSection.tsx` (alt-text)
- **Nya filer**: `public/sitemap.xml`
- **Inget synligt innehåll ändras** — alla ändringar sker i meta-taggar, strukturerad data, alt-texter och konfigurationsfiler

