import Image from "next/image";

function BackgroundTile({ className = "" }: { className?: string }) {
  return (
    <div className={`relative min-h-0 min-w-0 overflow-hidden ${className}`}>
      <Image
        src="/herobg.jpg"
        alt=""
        fill
        sizes="(min-width: 640px) 50vw, 100vw"
        className="object-cover object-center"
      />
    </div>
  );
}

export function SiteBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* One tile on phones, two side by side on tablets, and a 2-by-2 grid on desktop. */}
      <div className="grid h-full w-full grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-1 lg:grid-cols-2 lg:grid-rows-2">
        <BackgroundTile />
        <BackgroundTile className="hidden sm:block" />
        <BackgroundTile className="hidden lg:block" />
        <BackgroundTile className="hidden lg:block" />
      </div>

      {/* Decorative bottom image overlays the grid while preserving its aspect ratio. */}
      <div
        className="absolute inset-0 z-10 bg-bottom bg-no-repeat"
        style={{
          backgroundImage: "url('/herobg-bottom.png')",
          backgroundSize: "100% auto",
        }}
      />
    </div>
  );
}
