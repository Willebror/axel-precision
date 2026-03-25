import { Gauge, Fuel, Shield, Clock } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import serviceImage from "@/assets/service-alignment.jpg";

const ServicesSection = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Gauge, title: t("services.f1.title"), desc: t("services.f1.desc") },
    { icon: Fuel, title: t("services.f2.title"), desc: t("services.f2.desc") },
    { icon: Shield, title: t("services.f3.title"), desc: t("services.f3.desc") },
    { icon: Clock, title: t("services.f4.title"), desc: t("services.f4.desc") },
  ];

  return (
    <section id="tjanster" className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">{t("services.label")}</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t("services.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {t("services.desc")}
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
