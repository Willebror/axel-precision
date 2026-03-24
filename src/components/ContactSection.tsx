import { Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="kontakt" className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">Kontakt</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kontakta oss
          </h2>
          <p className="text-muted-foreground text-lg">
            Behöver du hjulinställning? Kontakta oss idag.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <h3 className="font-heading font-semibold text-foreground text-lg mb-6 text-center">Nå oss direkt</h3>
          <div className="space-y-4">
            <a href="tel:+46736314687" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Joakim B Hammarstedt</p>
                <p className="font-medium text-foreground">073-631 46 87</p>
              </div>
            </a>
            <a href="tel:+46708426175" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">William Wong</p>
                <p className="font-medium text-foreground">070-842 61 75</p>
              </div>
            </a>
            <a href="mailto:info@jhsaxelteknik.se" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">E-post</p>
                <p className="font-medium text-foreground">info@jhsaxelteknik.se</p>
              </div>
            </a>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mt-8 text-center">
            Vi svarar normalt inom 24 timmar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
