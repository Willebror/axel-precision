import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="kontakt" className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">Kontakt</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kontakta oss
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Behöver du hjulinställning? Ring, maila eller skicka ett SMS – vi återkommer snabbt.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {/* Joakim */}
          <a
            href="tel:+46736314687"
            className="group flex flex-col items-center text-center p-6 md:p-8 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <p className="font-heading font-semibold text-foreground mb-1">Joakim B Hammarstedt</p>
            <p className="text-primary font-medium text-lg">073-631 46 87</p>
          </a>

          {/* William */}
          <a
            href="tel:+46708426175"
            className="group flex flex-col items-center text-center p-6 md:p-8 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <p className="font-heading font-semibold text-foreground mb-1">William Wong</p>
            <p className="text-primary font-medium text-lg">070-842 61 75</p>
          </a>

          {/* E-post */}
          <a
            href="mailto:info@jhsaxelteknik.se"
            className="group flex flex-col items-center text-center p-6 md:p-8 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <p className="font-heading font-semibold text-foreground mb-1">E-post</p>
            <p className="text-primary font-medium break-all">info@jhsaxelteknik.se</p>
          </a>
        </div>

        <p className="text-sm text-muted-foreground text-center mt-10">
          Vi svarar normalt inom 24 timmar.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
