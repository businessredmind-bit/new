const HeroSection = () => {
  return (
    <section className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-5xl text-center">
        <p className="mb-8 text-[11px] font-medium tracking-[0.3em] text-muted-foreground">
          INDEPENDENT CRYPTO RESEARCH
        </p>
        <h1 className="font-display text-[clamp(3rem,10vw,8rem)] leading-[0.95] tracking-tight text-foreground">
          UNDERSTANDING CRYPTO, FINANCE & MARKET TRENDS.
        </h1>
        <p className="mx-auto mt-8 max-w-md text-sm font-light leading-relaxed text-muted-foreground">
          Institutional quality analysis on digital assets, macroeconomics, and the largest technological shift in finance since the internet.
        </p>
        <a
          href="#insights"
          className="mt-10 inline-block rounded-full border border-foreground bg-foreground px-8 py-3 text-[11px] font-medium tracking-[0.15em] text-primary-foreground transition-opacity hover:opacity-80"
        >
          EXPLORE INSIGHTS →
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
