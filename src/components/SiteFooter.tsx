import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const SiteFooter = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-accent border-t border-border/10 py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-accent-foreground/60">
        <p className="font-heading font-semibold text-accent-foreground">
          JH'S <span className="text-primary">Axelteknik</span>
        </p>
        <div className="flex items-center gap-4">
          <Link to="/integritetspolicy" className="hover:text-primary transition-colors">
            {t("footer.privacy")}
          </Link>
          <span>·</span>
          <p>© {year} JH'S Mobila Axelteknik AB</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com/jhs_mobila_axelteknik"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-accent-foreground/50 hover:text-primary transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://facebook.com/jhsmobilaaxelteknik"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-accent-foreground/50 hover:text-primary transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
