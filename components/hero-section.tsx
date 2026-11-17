import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-5rem)] scroll-mt-24 items-center justify-center overflow-hidden px-6 py-16"
    >
      <div className="flex w-full max-w-4xl flex-col items-center text-center">
        {/* Orbital Badge + Avatar */}
        <div className="relative flex size-[min(84vw,21rem)] items-center justify-center">
          <span className="sr-only">
            Full stack developer specializing in AI integration.
          </span>

          {/* Curved Typography Ring */}
          <svg
            aria-hidden="true"
            viewBox="0 0 360 360"
            className="pointer-events-none absolute inset-0 size-full overflow-visible select-none"
          >
            <defs>
              <path
                id="hero-top-arc"
                d="M 42 180 A 138 138 0 0 1 318 180"
                fill="none"
              />
              <path
                id="hero-bottom-arc"
                d="M 34 180 A 146 146 0 0 0 326 180"
                fill="none"
              />
            </defs>

            <text
              fill="currentColor"
              className="font-heading text-[20px] font-bold tracking-[0.24em] text-app-text-muted uppercase"
            >
              <textPath
                href="#hero-top-arc"
                startOffset="50%"
                textAnchor="middle"
              >
                • FULL-STACK •
              </textPath>
            </text>

            <text
              fill="currentColor"
              className="font-heading text-[20px] font-bold tracking-[0.22em] text-app-text-muted uppercase"
            >
              <textPath
                href="#hero-bottom-arc"
                startOffset="50%"
                textAnchor="middle"
              >
                • AI INTEGRATION •
              </textPath>
            </text>
          </svg>

          {/* Subtle Ambient Glow Behind Avatar */}
          <div
            aria-hidden="true"
            className="absolute size-[min(56vw,14rem)] rounded-full bg-app-primary-0/30 blur-2xl"
          />

          {/* Avatar with Primary Color Background */}
          <div className="relative size-[min(58vw,14.5rem)] overflow-hidden rounded-full bg-app-primary-0 shadow-[0_0_24px_color-mix(in_srgb,var(--app-primary-color-0)_45%,transparent)] transition-transform duration-500 hover:scale-[1.02]">
            <Image
              src="/profile-avatar.png"
              alt="Stylized illustration of a camera operator with a green geometric head"
              fill
              priority
              sizes="(max-width: 640px) 58vw, 232px"
              className="object-contain"
            />
          </div>
        </div>

        

        
        
      </div>
    </section>
  );
}