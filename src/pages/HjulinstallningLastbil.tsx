import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import SiteFooter from "@/components/SiteFooter";

const TITLE = "Hjulinställning lastbil – mobilt på plats | JH'S Axelteknik";
const DESC = "Mobil hjulinställning för lastbilar. Vi utför hjul- och axelinställning på plats hos ert åkeri eller verkstad – minskat däckslitage och lägre bränslekostnader.";

const HjulinstallningLastbil = () => {
  useEffect(() => {
    const prevTitle = document.title;
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute("content") ?? "";
    document.title = TITLE;
    meta?.setAttribute("content", DESC);
    return () => {
      document.title = prevTitle;
      meta?.setAttribute("content", prevDesc);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <main className="container max-w-3xl py-16 md:py-24">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" /> Till startsidan
        </Link>
        <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">Tjänst</p>
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-8">Hjulinställning lastbil – vi kommer till er</h1>
        <div className="space-y-8 text-muted-foreground text-lg leading-relaxed">
          <p>
            JH'S Mobila Axelteknik AB erbjuder professionell mobil hjul- och axelinställning för lastbilar, bussar och släp.
            Vi utför hjulinställningen direkt på plats hos ert åkeri, transportföretag eller verkstad – så att lastbilen inte behöver tas ur drift längre än nödvändigt.
          </p>
          <section>
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">Varför hjulinställning på lastbilen är viktig</h2>
            <p className="mb-4">Felaktig hjulinställning på lastbilar och tunga fordon leder till onödigt slitage, högre bränslekostnader och försämrad säkerhet. Korrekt inställning:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>minskar däckslitaget och förlänger däckens livslängd</li>
              <li>sänker bränsleförbrukningen</li>
              <li>förbättrar stabilitet och trafiksäkerhet</li>
              <li>förlänger fordonets livslängd</li>
            </ul>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">Mobil axelinställning – mindre stillestånd</h2>
            <p>Med vår mobila tjänst kommer vi ut till er med utrustningen och utför arbetet snabbt, effektivt och med hög precision. Vi utför arbeten över hela Sverige.</p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-3">Boka hjulinställning för er lastbil</h2>
            <p className="mb-6">Ring någon av våra axeltekniker eller mejla oss.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="gradient-cta shadow-cta border-0 text-primary-foreground font-semibold h-14">
                <a href="tel:+46736314687"><Phone className="w-4 h-4 mr-2" />Joakim +46 73-631 46 87</a>
              </Button>
              <Button asChild size="lg" className="gradient-cta shadow-cta border-0 text-primary-foreground font-semibold h-14">
                <a href="tel:+46708426175"><Phone className="w-4 h-4 mr-2" />William +46 70-842 61 75</a>
              </Button>
            </div>
            <a href="mailto:info@jhsaxelteknik.se" className="inline-flex items-center gap-2 mt-4 text-primary hover:underline">
              <Mail className="w-4 h-4" /> info@jhsaxelteknik.se
            </a>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default HjulinstallningLastbil;
