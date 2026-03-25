import { useLanguage } from "@/i18n/LanguageContext";
import { languages } from "@/i18n/translations";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          aria-label={lang.label}
          title={lang.label}
          className={`text-lg leading-none p-1 rounded transition-all ${
            language === lang.code
              ? "opacity-100 ring-1 ring-primary/50 bg-primary/10"
              : "opacity-50 hover:opacity-80"
          }`}
        >
          {lang.flag}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
