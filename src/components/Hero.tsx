export default function Hero() {
  return (
    <section className="min-h-[calc(100svh-160px)] flex flex-col items-center justify-center text-center mb-15">
      <p className="text-sm font-semibold tracking-[0.2em] uppercase text-muted mb-6 animate-fade-up">
        Software Engineer
      </p>
      <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-ink mb-8 animate-fade-up animation-delay-200">
        koki.ishikawa
      </h1>
      <p className="text-xl md:text-2xl font-display text-ink/70 animate-fade-up animation-delay-450">
        仕組みをつくって、課題を解決する。
      </p>
    </section>
  );
}
