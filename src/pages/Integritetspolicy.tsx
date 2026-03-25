import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Integritetspolicy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-3xl py-16 md:py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("privacy.back")}
        </Link>

        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
          {t("privacy.title")}
        </h1>

        <div className="prose prose-invert prose-orange max-w-none space-y-8 text-muted-foreground">
          <p className="text-lg">{t("privacy.intro")}</p>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">{t("privacy.s1.title")}</h2>
            <p>{t("privacy.s1.p1")}</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>{t("privacy.s1.email")}<a href="mailto:info@jhsaxelteknik.se" className="text-primary hover:underline">info@jhsaxelteknik.se</a></li>
              <li>{t("privacy.s1.phone")}</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">{t("privacy.s2.title")}</h2>
            <p>{t("privacy.s2.p1")}</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>{t("privacy.s2.l1")}</li>
              <li>{t("privacy.s2.l2")}</li>
              <li>{t("privacy.s2.l3")}</li>
              <li>{t("privacy.s2.l4")}</li>
              <li>{t("privacy.s2.l5")}</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">{t("privacy.s3.title")}</h2>
            <p>{t("privacy.s3.p1")}</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-foreground">{t("privacy.s3.l1.title")}</strong>
                {t("privacy.s3.l1.desc")}
              </li>
              <li>
                <strong className="text-foreground">{t("privacy.s3.l2.title")}</strong>
                {t("privacy.s3.l2.desc")}
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">{t("privacy.s4.title")}</h2>
            <p>{t("privacy.s4.p1")}</p>
            <p>{t("privacy.s4.p2")}</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">{t("privacy.s5.title")}</h2>
            <p>{t("privacy.s5.p1")}</p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">{t("privacy.s6.title")}</h2>
            <p>{t("privacy.s6.p1")}</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>{t("privacy.s6.l1")}</li>
              <li>{t("privacy.s6.l2")}</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">{t("privacy.s7.title")}</h2>
            <p>{t("privacy.s7.p1")}</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>{t("privacy.s7.l1")}</li>
              <li>{t("privacy.s7.l2")}</li>
              <li>{t("privacy.s7.l3")}</li>
              <li>{t("privacy.s7.l4")}</li>
              <li>{t("privacy.s7.l5")}</li>
              <li>{t("privacy.s7.l6")}</li>
            </ul>
            <p>
              {t("privacy.s7.p2.pre")}
              <a href="mailto:info@jhsaxelteknik.se" className="text-primary hover:underline">info@jhsaxelteknik.se</a>
              {t("privacy.s7.p2.mid")}
              <a href="https://www.imy.se" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.imy.se</a>.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground">{t("privacy.s8.title")}</h2>
            <p>{t("privacy.s8.p1")}</p>
            <p className="text-sm">{t("privacy.s8.date")}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Integritetspolicy;
