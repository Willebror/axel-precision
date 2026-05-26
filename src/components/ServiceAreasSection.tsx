import { MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const regions: { key: string; cities: string[] }[] = [
  { key: "areas.r1", cities: ["Stockholm", "Södertälje", "Västerås", "Örebro", "Eskilstuna"] },
  { key: "areas.r2", cities: ["Norrköping", "Linköping", "Jönköping", "Gävle"] },
  { key: "areas.r3", cities: ["Göteborg", "Halmstad", "Helsingborg"] },
  { key: "areas.r4", cities: ["Malmö"] },
];

const ServiceAreasSection = () => {
  const { t } = useLanguage();

  return (
    <section id="omraden" className="sr-only">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            {t("areas.label")}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("areas.title")}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t("areas.desc")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {regions.map((r) => (
            <div
              key={r.key}
              className="bg-secondary rounded-xl p-6 border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {t(r.key)}
                </h3>
              </div>
              <ul className="space-y-1.5">
                {r.cities.map((city) => (
                  <li key={city} className="text-sm text-muted-foreground">
                    {t("areas.cityPrefix")} {city}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10 max-w-2xl mx-auto">
          {t("areas.footnote")}
        </p>
      </div>
    </section>
  );
};

export default ServiceAreasSection;