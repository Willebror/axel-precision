import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const CONSENT_KEY = "jhs-cookie-consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
      <div className="container max-w-2xl">
        <div className="bg-card border border-border rounded-xl p-5 md:p-6 shadow-lg flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Cookie className="w-6 h-6 text-primary shrink-0 mt-0.5 sm:mt-0" />
          <div className="flex-1 text-sm text-muted-foreground">
            {t("cookie.text")}{" "}
            <Link to="/integritetspolicy" className="text-primary hover:underline font-medium">
              {t("cookie.policy")}
            </Link>.
          </div>
          <Button
            onClick={accept}
            className="gradient-cta shadow-cta border-0 text-primary-foreground font-semibold shrink-0"
          >
            {t("cookie.accept")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
