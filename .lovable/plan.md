

## Flytta hero-bilden åt vänster på surfplatta/telefon

### Problem
Bilden använder `object-cover` med default `object-position: center`, vilket gör att bilen (som troligen är till vänster i bilden) beskärs bort på smala skärmar.

### Lösning
Lägg till responsiv `object-position` på hero-bilden:
- **Mobil/surfplatta**: `object-position: left` så att bilens vänstra del (där lastbilen är) prioriteras
- **Desktop**: Behåll `center` eller justera efter behov

### Ändring
**`src/components/HeroSection.tsx`** — rad 20, uppdatera img-klassen:
```
object-cover object-left md:object-center
```

Detta gör att bilden förskjuts åt vänster på små skärmar så att lastbilen syns, medan den centreras som vanligt på desktop.

