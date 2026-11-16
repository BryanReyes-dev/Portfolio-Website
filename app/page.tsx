import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <main className="relative z-10 flex-1">
      <HeroSection />
      <section id="about" className="relative z-10 min-h-screen scroll-mt-24">
        {/* About section content will be added here. */}
      </section>
    </main>
  );
}
