import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Tack! Vi återkommer så snart som möjligt.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

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

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact info */}
          <div className="flex flex-col justify-center gap-8">
            <div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-4">Nå oss direkt</h3>
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
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Vi svarar normalt inom 24 timmar. Ange gärna antal fordon och önskad tidpunkt i meddelandet.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 bg-card p-6 md:p-8 rounded-xl shadow-card">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-foreground mb-1.5 block">Namn</label>
              <Input id="name" name="name" required placeholder="Ditt namn" className="h-12" />
            </div>
            <div>
              <label htmlFor="company" className="text-sm font-medium text-foreground mb-1.5 block">Företag</label>
              <Input id="company" name="company" placeholder="Företagsnamn" className="h-12" />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-medium text-foreground mb-1.5 block">Telefonnummer</label>
              <Input id="phone" name="phone" type="tel" required placeholder="07X-XXX XX XX" className="h-12" />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium text-foreground mb-1.5 block">Meddelande</label>
              <Textarea id="message" name="message" rows={4} placeholder="Beskriv era behov..." />
            </div>
            <Button
              type="submit"
              disabled={sending}
              className="w-full gradient-cta shadow-cta border-0 text-primary-foreground font-semibold h-14 text-base"
            >
              <Send className="w-4 h-4 mr-2" />
              {sending ? "Skickar..." : "Skicka förfrågan"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
