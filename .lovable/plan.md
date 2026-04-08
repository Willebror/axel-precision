

## Optimera LCP-bilden med fetchpriority och preload

Google föreslår två saker: att bilden har `fetchpriority="high"` och att den är synlig direkt från HTML (preload). Bra förslag — enkelt att implementera.

### Åtgärder

**1. Lägg till `fetchpriority="high"` på hero-bilden**
I `src/components/HeroSection.tsx`, lägg till attributet på `<img>`-taggen. Detta talar om för webbläsaren att prioritera denna bild framför andra resurser.

**2. Lägg till `<link rel="preload">` i `index.html`**
Eftersom bilden importeras via Vite och får ett hashat filnamn kan vi inte preloada den statiskt i HTML. Dock löser `fetchpriority="high"` + `loading="eager"` (som redan finns) det mesta av problemet.

Alternativt kan vi flytta hero-bilden till `public/`-mappen för att ge den en fast URL och kunna preloada den i HTML.

### Rekommendation
Enklaste och mest effektiva lösningen: lägg till `fetchpriority="high"` på img-taggen. Det ger den största vinsten med minst ändring.

### Filer som ändras
- `src/components/HeroSection.tsx` — lägg till `fetchpriority="high"` på img-taggen

