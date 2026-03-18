import { CheckCircle } from "lucide-react";

const highlights = [
  "Specialiserade på tunga fordon",
  "Mobil service – vi kommer till er",
  "Fokus på precision och kvalitet",
  "Minimalt stillestånd för ert företag",
];

const AboutSection = () => {
  return (
    <section id="om-oss" className="py-20 md:py-32 bg-secondary">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">Om oss</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
            Om JH'S Axelteknik
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            JH'S Mobila Axelteknik AB är specialiserade på hjulinställning av tunga fordon ute på fält. Vi hjälper åkerier och transportföretag att minska kostnader och öka säkerheten – utan att fordonen behöver tas ur drift längre än nödvändigt. Med fokus på <span className="text-foreground font-medium">precision i varje moment</span> levererar vi pålitliga resultat där det behövs som mest.
          </p>

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
