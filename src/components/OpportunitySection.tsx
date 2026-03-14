const sections = [
  {
    label: "The Opportunity",
    title: "MOST OF WHAT YOU'VE SEEN OF CRYPTO IS NOT CRYPTO.",
    body: "You've only seen the layer of noise. Schemes designed to extract money from newcomers. Headlines about overnight collapses. Underneath it, something entirely different is happening.",
  },
  {
    label: "The Infrastructure",
    title: "FINANCE IS RUNNING ON CODE WRITTEN IN THE 1970S.",
    body: "Two days to settle a stock. Markets close at 4 PM. The entire internet advanced around it. Finance was left behind. Crypto is the email moment for finance.",
  },
  {
    label: "AI + Blockchains",
    title: "AI AGENTS NEED A FINANCIAL SYSTEM WITHOUT PERMISSION.",
    body: "The only way autonomous AI can buy, sell, trade, and transact without a bank in the middle is through blockchains. This intersection is one of the most overlooked in technology today.",
  },
];

const OpportunitySection = () => {
  return (
    <section className="py-32">
      <div className="container max-w-3xl">
        {sections.map((section, i) => (
          <div key={i} className="mb-32 text-center last:mb-0">
            <p className="mb-6 text-[11px] font-medium tracking-[0.3em] text-muted-foreground">
              {section.label}
            </p>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[0.95] text-foreground">
              {section.title}
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-sm font-light leading-relaxed text-muted-foreground">
              {section.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OpportunitySection;
