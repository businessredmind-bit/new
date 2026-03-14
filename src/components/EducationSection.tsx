const topics = [
  { title: "Crypto Basics", description: "Foundations of digital assets, wallets, and decentralized networks." },
  { title: "Blockchain Fundamentals", description: "Consensus mechanisms, smart contracts, and distributed ledger architecture." },
  { title: "Risk Management", description: "Position sizing, portfolio allocation, and volatility frameworks." },
  { title: "Market Cycles", description: "Historical patterns, sentiment indicators, and macro regime analysis." },
];

const EducationSection = () => {
  return (
    <section id="learn" className="border-t border-border py-32">
      <div className="container max-w-3xl">
        <div className="text-center">
          <p className="mb-6 text-[11px] font-medium tracking-[0.3em] text-muted-foreground">
            Education
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] text-foreground">
            LEARN
          </h2>
        </div>

        <div className="mt-16 grid gap-px bg-border md:grid-cols-2">
          {topics.map((topic, i) => (
            <a
              key={i}
              href="#"
              className="group bg-background p-8 transition-colors hover:bg-secondary"
            >
              <h3 className="text-base font-medium text-foreground">{topic.title}</h3>
              <p className="mt-2 text-sm font-light text-muted-foreground">{topic.description}</p>
              <span className="mt-4 inline-block text-[10px] tracking-[0.1em] text-accent opacity-0 transition-opacity group-hover:opacity-100">
                EXPLORE →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
