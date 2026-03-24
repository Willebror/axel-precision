

# Redigera hero-bilden på lastbilen

## Problem
Den AI-genererade hero-bilden (`src/assets/hero-truck.jpg`) visar en lastbil där fronten ser ut som bakdelen av en lastbil – den ser inte realistisk ut.

## Lösning
Generera en ny bild med Nano banana pro (högkvalitetsmodellen) med en tydligare prompt som specificerar en realistisk lastbil sedd framifrån/snett framifrån på en svensk väg i solnedgång. Prompten ska betona korrekt frontparti med hytt, vindruta och korrekt proportioner.

## Steg

1. **Generera ny hero-bild** via `google/gemini-3-pro-image-preview` med en prompt som beskriver en realistisk europeisk lastbil (typ Scania/Volvo) på en svensk landsväg i gyllene ljus – sedd snett framifrån med korrekt kabindesign.

2. **QA** – Visuellt verifiera att lastbilen ser korrekt och realistisk ut innan den ersätter den befintliga.

3. **Ersätt** `src/assets/hero-truck.jpg` med den nya bilden.

