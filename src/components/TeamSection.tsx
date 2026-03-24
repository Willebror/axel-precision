import { Phone } from "lucide-react";
import joakimImg from "@/assets/team-joakim.jpg";
import williamImg from "@/assets/team-william.jpg";

const team = [
  {
    name: "Joakim B Hammarstedt",
    title: "Axeltekniker",
    phone: "073-631 46 87",
    image: joakimImg,
  },
  {
    name: "William Wong",
    title: "Axeltekniker",
    phone: "070-842 61 75",
    image: williamImg,
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            Vårt team
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Möt våra tekniker
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Erfarna specialister med passion för precision och kvalitet.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {team.map((member) => (
            <div
              key={member.name}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-foreground text-lg">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-3">
                  {member.title}
                </p>
                <a
                  href={`tel:${member.phone.replace(/[^+\d]/g, "")}`}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {member.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
