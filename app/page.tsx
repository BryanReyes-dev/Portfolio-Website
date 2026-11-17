import { HeroSection } from "@/components/hero-section";
import {
  AboutSection,
  CertificationsSection,
  PortfolioSection,
  ProjectsSection,
  SkillsSection,
} from "@/components/portfolio/sections";

export default function Home() {
  return (
    <main className="relative z-10 flex-1">
      <HeroSection />
      <PortfolioSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      
      
    </main>
  );
}
