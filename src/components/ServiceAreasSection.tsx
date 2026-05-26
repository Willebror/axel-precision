import { MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const cityBlurbs: Record<string, string> = {
  Stockholm: "Spara pengar med mobil hjulinställning i Stockholm – vi kommer direkt till ert åkeri i city, Kungens kurva eller Årsta.",
  Södertälje: "Mobil hjulinställning i Södertälje för Scania-åkerier och tunga transporter runt Morabergs logistikområde.",
  Västerås: "Hjulinställning på plats i Västerås – minskat däckslitage för lastbilar i Hacksta och Hälla industriområde.",
  Örebro: "Axelinställning i Örebro vid logistiknavet Pilängen – mindre stillestånd, mer rullande timmar.",
  Eskilstuna: "Mobil hjulinställning i Eskilstuna för transportföretag i Folkesta och Svista – sparar bränsle på långa rutter.",
  Norrköping: "Hjulinställning i Norrköping nära Händelö hamn – optimerat för containertrafik och tunga ekipage.",
  Linköping: "Axelteknik på plats i Linköping – vi servar åkerier runt Tornby och Mörtlösa industriområde.",
  Jönköping: "Mobil hjulinställning i Jönköping mitt i logistikhjärtat vid Torsvik – sänk däckkostnaderna direkt.",
  Gävle: "Hjulinställning i Gävle nära Tolvfors och hamnen – perfekt för lastbilar som kör Norrlandsrutten.",
  Göteborg: "Mobil hjulinställning i Göteborg vid Hisingen och Arendal – minimera stillestånd för hamntransporter.",
  Halmstad: "Hjulinställning i Halmstad längs E6 – snabb service för åkerier med skandinaviska rutter.",
  Helsingborg: "Axelinställning i Helsingborg nära färjeläget – håll trailers raka inför överfarten till Danmark.",
  Malmö: "Mobil hjulinställning i Malmö vid Norra hamnen och Fosie – optimerat för Öresundstrafik och Europatransporter.",
  Borås: "Hjulinställning i Borås för textil- och e-handelslogistik runt Viared – mindre slitage på långa leveranser.",
  Trollhättan: "Mobil hjulinställning i Trollhättan – vi servar industri- och åkeriverksamheter längs Götaälvdalen.",
  Uddevalla: "Axelinställning i Uddevalla nära hamnen – håll fordonsflottan i toppform för västkustens transporter.",
  Varberg: "Hjulinställning i Varberg längs E6 – ideal stopppunkt för åkerier mellan Göteborg och Malmö.",
  Enköping: "Mobil hjulinställning i Enköping vid E18 – snabb service för transportörer i Mälardalen.",
  Uppsala: "Hjulinställning i Uppsala för åkerier runt Librobäck och Fyrislund – förlängd däcklivslängd garanterad.",
  Nyköping: "Axelinställning i Nyköping nära Skavsta – effektiv service för flyg- och godstransporter.",
  Katrineholm: "Mobil hjulinställning i Katrineholm – centralt i logistikkorset mellan Stockholm, Göteborg och Malmö.",
  Värnamo: "Hjulinställning i Värnamo längs E4 – stor knutpunkt för möbel- och transportindustrin i Småland.",
  Växjö: "Mobil hjulinställning i Växjö – vi servar åkerier i Nylanda och Helgevärma industriområden.",
  Ljungby: "Axelinställning i Ljungby vid E4-korset – sparar bränsle för transporter mellan Stockholm och Malmö.",
  Kalmar: "Hjulinställning i Kalmar nära Ölandsbron – optimerad service för östkustens tunga fordonsflottor.",
};

const regions: { key?: string; title?: string; cities: string[] }[] = [
  { key: "areas.r1", cities: ["Stockholm", "Södertälje", "Västerås", "Örebro", "Eskilstuna"] },
  { key: "areas.r2", cities: ["Norrköping", "Linköping", "Jönköping", "Gävle"] },
  { key: "areas.r3", cities: ["Göteborg", "Halmstad", "Helsingborg"] },
  { key: "areas.r4", cities: ["Malmö"] },
  { title: "Västkusten", cities: ["Borås", "Trollhättan", "Uddevalla", "Varberg"] },
  { title: "Mälardalen", cities: ["Enköping", "Uppsala", "Nyköping", "Katrineholm"] },
  { title: "Småland/transport", cities: ["Värnamo", "Växjö", "Ljungby"] },
  { title: "Öst", cities: ["Kalmar"] },
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
              key={r.key ?? r.title}
              className="bg-secondary rounded-xl p-6 border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {r.key ? t(r.key) : r.title}
                </h3>
              </div>
              <ul className="space-y-1.5">
                {r.cities.map((city) => (
                  <li key={city} className="text-sm text-muted-foreground">
                    {t("areas.cityPrefix")} {city}
                    {cityBlurbs[city] && (
                      <span className="block text-xs">{cityBlurbs[city]}</span>
                    )}
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