

## Snyggare språkväljare med jordglob

### Nuläge
Flaggorna visas som en rad emoji-knappar i headern. Fungerar men tar plats och ser enkelt ut.

### Ny design
Ersätt flagg-raden med en **Globe-ikon** (från lucide-react) som öppnar en dropdown-meny med språkalternativen. Varje alternativ visar flagga + språknamn. Aktivt språk markeras med en check.

### Implementation

**1. Omdesigna `LanguageSwitcher.tsx`**
- Använd `DropdownMenu` från shadcn/ui (redan finns i projektet)
- Trigger: `Globe`-ikon (lucide-react) med subtil hover-effekt
- Dropdown-items: flagga + språknamn (t.ex. "🇸🇪 Svenska"), check-markering på aktivt val
- Kompakt och diskret, passar in i headern

**2. Uppdatera `SiteHeader.tsx`**
- Inga strukturella ändringar behövs, `LanguageSwitcher` byts ut på plats
- Tar mindre horisontellt utrymme än nuvarande 5 flaggor i rad

### Tekniska detaljer
- Komponent: `DropdownMenu`, `DropdownMenuTrigger`, `DropdownMenuContent`, `DropdownMenuItem` (redan installerade)
- Ikon: `Globe` från `lucide-react`
- Check-markering: `Check` från `lucide-react`
- Inga nya beroenden

