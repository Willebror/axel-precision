import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Start", href: "#start" },
  { label: "Tjänster", href: "#tjanster" },
  { label: "Om oss", href: "#om-oss" },
  { label: "Kontakt", href: "#kontakt" },
];

const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-accent/95 backdrop-blur-md border-b border-border/10">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#start" className="flex items-center gap-2">
          <span className="font-heading text-lg md:text-xl font-bold text-accent-foreground">
            JH'S <span className="text-primary">Axelteknik</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-accent-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm" className="gradient-cta shadow-cta border-0 text-primary-foreground font-semibold">
            <a href="#kontakt">
              <Phone className="w-4 h-4 mr-2" />
              Kontakta oss
            </a>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-accent-foreground p-2"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden bg-accent border-t border-border/10 pb-6">
          <div className="container flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-accent-foreground/80 hover:text-primary py-2"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="gradient-cta shadow-cta border-0 text-primary-foreground font-semibold w-full mt-2">
              <a href="#kontakt" onClick={() => setOpen(false)}>
                <Phone className="w-4 h-4 mr-2" />
                Kontakta oss
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
