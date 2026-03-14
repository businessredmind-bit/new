const insights = [
  {
    title: "The Macro Case for Bitcoin in a Post-QE World",
    description: "Examining how shifting monetary policy frameworks create structural demand for non-sovereign stores of value.",
    date: "Mar 10, 2026",
  },
  {
    title: "Ethereum's Deflationary Mechanics After Dencun",
    description: "A deep dive into EIP-4844 and its long-term impact on ETH supply dynamics and L2 economics.",
    date: "Mar 7, 2026",
  },
  {
    title: "Stablecoin Regulation: What the EU Framework Means",
    description: "Analyzing MiCA's implications for USDC, USDT, and the broader DeFi lending ecosystem.",
    date: "Mar 3, 2026",
  },
  {
    title: "On-Chain Signals and Market Structure Shifts",
    description: "Reading whale accumulation patterns and exchange flow data to identify regime changes.",
    date: "Feb 28, 2026",
  },
];

const InsightsSection = () => {
  return (
    <section id="insights" className="border-t border-border py-32">
      <div className="container max-w-3xl">
        <div className="text-center">
          <p className="mb-6 text-[11px] font-medium tracking-[0.3em] text-muted-foreground">
            Research
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] text-foreground">
            LATEST INSIGHTS
          </h2>
        </div>

        <div className="mt-16 divide-y divide-border">
          {insights.map((post, i) => (
            <article key={i} className="group py-8">
              <div className="flex items-start justify-between gap-8">
                <div className="flex-1">
                  <h3 className="text-base font-medium text-foreground transition-colors group-hover:text-accent">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm font-light text-muted-foreground">{post.description}</p>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-2">
                  <span className="text-[10px] tracking-[0.15em] text-muted-foreground">{post.date}</span>
                  <span className="text-[10px] tracking-[0.1em] text-accent opacity-0 transition-opacity group-hover:opacity-100">
                    READ →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
