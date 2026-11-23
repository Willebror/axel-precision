import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const articles = [
  {
    name: "Däcknor",
    url: "https://dacknor.se/ratt-installda-axlar-sparar-bade-dack-och-bransle",
  },
  {
    name: "Däckavisen",
    url: "https://www.dackavisen.se/dacknor-breddar-servicen-med-mobil-axelmatning/",
  },
];

const PressSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 border-t border-border/60 bg-background">
      <div className="container">
        <div className="text-center mb-10 md:mb-12">
          <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            {t("press.label")}
          </p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            {t("press.title")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            {t("press.desc")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {articles.map((article) => (
            <a
              key={article.name}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-start gap-3 rounded-lg border border-border/70 bg-card px-5 py-5 transition-colors duration-300 hover:border-primary/50 hover:bg-secondary/70 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
            >
              <div>
                <h3 className="font-heading font-semibold text-foreground">
                  {article.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {t("press.itemDesc")}
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary whitespace-nowrap sm:shrink-0">
                {t("press.read")}
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressSection;
