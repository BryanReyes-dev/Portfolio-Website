import { HeroSection } from "@/components/hero-section";
import {
  AboutSection,
  CertificationsSection,
  ContactSection,
  PortfolioSection,
  ProjectsSection,
  SkillsSection,
} from "@/components/portfolio/sections";

export default function Home() {
  return (
    <main className="relative z-10 flex-1">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  );
}
