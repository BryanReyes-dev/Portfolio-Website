

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-background text-foreground">
  <p className="mb-3 font-mono text-sm uppercase tracking-[0.4em] text-app-tertiary-0">
    Bryan Reyes
  </p>

  <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
    <span className="text-app-primary-0 font-sans">home</span>
    <span className="text-app-secondary-1">.</span>
  </h1>

  <p className="mt-4 text-lg">
    <span className="text-app-secondary-0 font-sans">Creative</span>
    {" · "}
    <span className="text-app-tertiary-0 font-display">Technical</span>
    {" · "}
    <span className="text-app-primary-2 font-mono">Innovative</span>
  </p>

  <div className="mt-8 h-1 w-32 rounded-full bg-linear-to-r from-app-primary-0 via-app-secondary-1 to-app-tertiary-0" />
</div>
  );
}
