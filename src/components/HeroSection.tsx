import { MapPin, TrendingDown, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import heroImage from "@/assets/hero-truck.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  const benefits = [
    { icon: MapPin, text: t("hero.benefit1") },
    { icon: TrendingDown, text: t("hero.benefit2") },
    { icon: ShieldCheck, text: t("hero.benefit3") },
  ];

  return (
    <section id="start" className="relative min-h-[90vh] md:min-h-screen flex items-center">
      <img
        src={heroImage}
        alt="Lastbil på svensk väg i solnedgång"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 gradient-hero" />

      <div className="container relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-primary font-heading font-semibold text-sm md:text-base tracking-widest uppercase mb-4">
            {t("hero.subtitle")}
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 text-balance">
            {t("hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl">
            {t("hero.desc")}<span className="text-primary font-semibold">{t("hero.descHighlight")}</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button asChild size="lg" className="gradient-cta shadow-cta border-0 text-primary-foreground font-semibold text-base px-8 h-14">
              <a href="#kontakt">{t("hero.cta1")}</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-primary-foreground/40 text-primary-foreground hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300 font-semibold text-base px-8 h-14"
            >
              <a href="#om-oss">{t("hero.cta2")}</a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            {benefits.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 whitespace-nowrap">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-primary-foreground/90">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
