import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import CtaBanner from "@/components/CtaBanner";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TeamSection />
      <CtaBanner />
      <ContactSection />
      <SiteFooter />
    </div>
  );
};

export default Index;
