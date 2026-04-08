

## Optimera kritiska begärandskedjor (Google Lighthouse)

Problemet Google pekar på är att typsnittsladdningen skapar en kedja: HTML → CSS → Google Fonts CSS → .woff2-filer (4 steg). Den största vinsten är att bryta den kedjan.

### Vad som orsakar kedjan

Rad 1 i `src/index.css` laddar Google Fonts via `@import`, vilket innebär att webbläsaren måste:
1. Ladda HTML
2. Ladda JS-bundlen (som inkluderar CSS)
3. Hämta Google Fonts CSS-filen
4. Hämta de faktiska typsnittsfilerna (.woff2)

### Lösning: Preload + flytta till HTML

**1. Flytta Google Fonts från CSS `@import` till `<link>` i `index.html`**

Ta bort `@import`-raden i `src/index.css` och lägg istället till `<link rel="preconnect">` och `<link rel="stylesheet">` direkt i `index.html`. Detta eliminerar ett steg i kedjan eftersom webbläsaren kan börja hämta typsnitten parallellt med JS.

**2. Lägg till `preconnect` för Google Fonts**

Lägg till i `<head>` i `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" />
```

**3. Ta bort `@import` från `src/index.css`**

Ta bort rad 1: `@import url('https://fonts.googleapis.com/css2?...');`

### Effekt

- Kedjan förkortas från 4 steg till 2-3 steg
- `preconnect` sparar DNS + TLS-tid (~100ms)
- Typsnitten börjar laddas parallellt med JS istället för att vänta på CSS

### Filer som ändras
- `index.html` — lägg till preconnect och stylesheet-länk
- `src/index.css` — ta bort `@import`-raden

