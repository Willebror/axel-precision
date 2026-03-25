import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  const highlights = [
    t("about.h1"),
    t("about.h2"),
    t("about.h3"),
    t("about.h4"),
  ];

  return (
    <section id="om-oss" className="py-20 md:py-32 bg-secondary">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">{t("about.label")}</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
            {t("about.title")}
          </h2>
          <div className="text-muted-foreground text-lg leading-relaxed mb-10 space-y-4">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3 text-left">
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
