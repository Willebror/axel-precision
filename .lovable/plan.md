

## Optimera bildstorlekar för bättre LCP och sidladdning

Google Lighthouse pekar på att bilderna är för stora — speciellt hero-bilden (1.7 MB). Lösningen är att konvertera till WebP-format och skala ner där det behövs.

### Åtgärder

**1. Konvertera alla bilder till WebP**
- `hero-truck.jpg` (1.7 MB, 1376×768) → WebP, ~80% kvalitet → uppskattningsvis ~150-250 KB
- `service-alignment.jpg` (353 KB, 1024×1536) → WebP + skala ner till 800px bredd → ~50-80 KB
- `team-joakim.jpg` (180 KB, 1024×1434) → WebP + skala ner till 700px bredd → ~40-60 KB
- `team-william.jpg` (184 KB, 1024×1434) → WebP + skala ner till 700px bredd → ~40-60 KB

**2. Uppdatera imports**
Ändra filnamn i importerna i `HeroSection.tsx`, `ServicesSection.tsx` och `TeamSection.tsx` från `.jpg` till `.webp`.

### Effekt
- Total bildstorlek minskar från ~2.5 MB till ~300-450 KB (ca 80% minskning)
- Hero-bilden (LCP-elementet) minskar drastiskt vilket direkt förbättrar Largest Contentful Paint
- WebP stöds av alla moderna webbläsare

### Filer som ändras
- `src/assets/` — 4 nya .webp-filer ersätter .jpg-filerna
- `src/components/HeroSection.tsx` — uppdatera import
- `src/components/ServicesSection.tsx` — uppdatera import
- `src/components/TeamSection.tsx` — uppdatera import

