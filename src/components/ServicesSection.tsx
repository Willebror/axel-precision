import { Gauge, Fuel, Shield, Clock } from "lucide-react";
import serviceImage from "@/assets/service-alignment.jpg";

const features = [
  { icon: Gauge, title: "Minskat däckslitage", desc: "Korrekt inställning förlänger livslängden på däcken avsevärt." },
  { icon: Fuel, title: "Lägre bränsleförbrukning", desc: "Rätt vinklar minskar rullmotståndet och sparar bränsle." },
  { icon: Shield, title: "Bättre stabilitet & säkerhet", desc: "Förbättrad körstabilitet och minskad risk på vägen." },
  { icon: Clock, title: "Minimalt stillestånd", desc: "Mobil service – vi kommer till er och jobbet görs på plats." },
];

const ServicesSection = () => {
  return (
    <section id="tjanster" className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">Våra tjänster</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Hjulinställning för tunga fordon
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Felaktig hjulinställning på lastbilar och tunga fordon kan leda till onödigt slitage, högre bränslekostnader och försämrad säkerhet. Med vår mobila tjänst utför vi hjulinställning direkt på plats hos er – snabbt, effektivt och med hög precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="rounded-xl overflow-hidden shadow-card">
            <img
              src={serviceImage}
              alt="Tekniker utför hjulinställning på lastbil"
              className="w-full h-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </div>

          <div className="grid gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 p-4 rounded-lg hover:bg-secondary transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
