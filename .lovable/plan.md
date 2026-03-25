

## Flerspråkig hemsida -- Plan

### Översikt
Lägga till stöd för 5 språk (Svenska, Danska, Finska, Norska, Engelska) med diskreta flagg-ikoner i headern. Svenska är standardspråk.

### Approach
Skapa ett enkelt React Context-baserat i18n-system utan externa bibliotek. Alla texter samlas i en translations-fil per språk.

### Steg

**1. Skapa översättningsfiler och språkkontext**
- Ny fil `src/i18n/translations.ts` med alla texter för alla 5 språk (nav-länkar, hero, tjänster, om oss, team, CTA, kontakt, footer, cookie-banner, integritetspolicy)
- Ny fil `src/i18n/LanguageContext.tsx` med React Context som hanterar aktuellt språk (sparas i `localStorage`)

**2. Skapa flagg-komponent i headern**
- Ny fil `src/components/LanguageSwitcher.tsx` med små flagg-ikoner (SVG emoji-flaggor eller Unicode-flaggor: 🇸🇪 🇩🇰 🇫🇮 🇳🇴 🇬🇧)
- Placeras diskret till höger i headern, före hamburger-menyn på mobil och före nav-länkarna på desktop
- Aktiv flagga markeras visuellt (t.ex. opacity/ring)

**3. Uppdatera alla komponenter att använda översättningar**
Ersätta hårdkodade svenska texter med `useLanguage()`-hook i:
- `SiteHeader` (nav-länkar, CTA-knapp)
- `HeroSection` (rubrik, undertext, knappar, benefits)
- `ServicesSection` (rubrik, beskrivning, features)
- `AboutSection` (rubrik, texter, highlights)
- `TeamSection` (rubrik, undertext, roller)
- `CtaBanner` (rubrik, text, knapp)
- `ContactSection` (rubrik, text, etiketter)
- `SiteFooter` (integritetspolicy-länk)
- `CookieConsent` (cookie-text, knapp)

**4. Wrappa App med LanguageProvider**
- Lägg till `<LanguageProvider>` i `App.tsx`

### Tekniska detaljer
- Språk sparas i `localStorage` med nyckel `jhs-language`
- Standardspråk: `sv`
- Tillgängliga: `sv`, `da`, `fi`, `no`, `en`
- Flaggor renderas som emoji-text (inga extra bild-assets behövs)
- Integritetspolicy-sidan (`Integritetspolicy.tsx`) översätts också

