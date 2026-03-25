import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const CtaBanner = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-accent">
      <div className="container text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-accent-foreground mb-4">
          {t("cta.title")}
        </h2>
        <p className="text-accent-foreground/70 text-lg mb-8 max-w-lg mx-auto">
          {t("cta.desc")}
        </p>
        <Button asChild size="lg" className="gradient-cta shadow-cta border-0 text-primary-foreground font-semibold text-base px-10 h-14">
          <a href="#kontakt">
            {t("cta.button")}
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CtaBanner;
