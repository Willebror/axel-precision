import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Integritetspolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-3xl py-16 md:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Tillbaka till startsidan
        </Link>

        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
          Integritetspolicy
        </h1>

        <div className="prose prose-invert prose-orange max-w-none space-y-8 text-muted-foreground">
          <p className="text-lg">
            JH'S Mobila Axelteknik AB (org.nr ska anges här) värnar om din personliga integritet. 
            Denna integritetspolicy beskriver hur vi samlar in, använder och skyddar dina personuppgifter 
            i enlighet med EU:s dataskyddsförordning (GDPR) och svensk lagstiftning.
          </p>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">1. Personuppgiftsansvarig</h2>
            <p>
              JH'S Mobila Axelteknik AB är personuppgiftsansvarig för behandlingen av dina personuppgifter. 
              Du kan kontakta oss via:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>E-post: <a href="mailto:info@jhsaxelteknik.se" className="text-primary hover:underline">info@jhsaxelteknik.se</a></li>
              <li>Telefon: 073-631 46 87</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">2. Vilka uppgifter vi samlar in</h2>
            <p>Vi samlar in följande personuppgifter när du kontaktar oss:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Namn</li>
              <li>Telefonnummer</li>
              <li>E-postadress</li>
              <li>Företagsnamn (valfritt)</li>
              <li>Meddelande/förfrågan</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">3. Ändamål och rättslig grund</h2>
            <p>Vi behandlar dina personuppgifter för följande ändamål:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-foreground">Hantera förfrågningar och kontakt</strong> – för att kunna 
                svara på dina frågor och tillhandahålla våra tjänster. 
                Rättslig grund: Berättigat intresse (artikel 6.1 f GDPR).
              </li>
              <li>
                <strong className="text-foreground">Fullgöra avtal</strong> – för att utföra avtalade tjänster. 
                Rättslig grund: Fullgörande av avtal (artikel 6.1 b GDPR).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">4. Cookies</h2>
            <p>
              Vår webbplats använder endast nödvändiga cookies för att webbplatsen ska fungera korrekt, 
              samt en cookie för att spara ditt samtycke till denna cookiepolicy. Vi använder inga 
              spårningscookies, analytikcookies eller tredjepartscookies.
            </p>
            <p>Nödvändiga cookies kräver inte samtycke enligt svensk lag och EU:s e-dataskyddsdirektiv.</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">5. Lagringstid</h2>
            <p>
              Vi sparar dina personuppgifter så länge det är nödvändigt för det ändamål de samlades in för, 
              eller så länge vi har en rättslig skyldighet att göra det. Kontaktuppgifter raderas senast 
              12 månader efter senaste kontakt, om inget kundförhållande etablerats.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">6. Delning av uppgifter</h2>
            <p>
              Vi säljer aldrig dina personuppgifter. Vi kan dela uppgifter med:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Tjänsteleverantörer som hjälper oss att driva webbplatsen (t.ex. webbhotell), 
                  under lämpliga dataskyddsavtal.</li>
              <li>Myndigheter om vi är skyldiga enligt lag.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">7. Dina rättigheter</h2>
            <p>Enligt GDPR har du rätt att:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Begära tillgång till dina personuppgifter (registerutdrag)</li>
              <li>Begära rättelse av felaktiga uppgifter</li>
              <li>Begära radering av dina uppgifter</li>
              <li>Begära begränsning av behandlingen</li>
              <li>Invända mot behandling baserad på berättigat intresse</li>
              <li>Begära dataportabilitet</li>
            </ul>
            <p>
              Kontakta oss på <a href="mailto:info@jhsaxelteknik.se" className="text-primary hover:underline">info@jhsaxelteknik.se</a> för 
              att utöva dina rättigheter. Du har även rätt att lämna klagomål till 
              Integritetsskyddsmyndigheten (IMY) på <a href="https://www.imy.se" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.imy.se</a>.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">8. Ändringar</h2>
            <p>
              Vi kan komma att uppdatera denna integritetspolicy. Den senaste versionen finns alltid 
              tillgänglig på denna sida.
            </p>
            <p className="text-sm">Senast uppdaterad: mars 2026</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Integritetspolicy;
