const frameworks = [
  {
    num: "01",
    title: "Find What the Market is Missing",
    body: "The best opportunities come from studying what matters before the market agrees with you.",
  },
  {
    num: "02",
    title: "Understand the Value, Not Just the Price",
    body: "Going up doesn't mean worth buying. Going down doesn't mean broken. We study the actual business underneath.",
  },
  {
    num: "03",
    title: "Know When the Thesis is Done",
    body: "Everyone talks about what to buy. Almost nobody talks about when to leave. We publish when every thesis ends.",
  },
];

const FrameworkSection = () => {
  return (
    <section className="border-t border-border py-32">
      <div className="container max-w-3xl text-center">
        <p className="mb-6 text-[11px] font-medium tracking-[0.3em] text-muted-foreground">
          The Framework
        </p>
        <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] text-foreground">
          WE STUDY CRYPTO THE WAY THE BEST FUNDS STUDY EQUITIES.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm font-light leading-relaxed text-muted-foreground">
          Not narratives. Not tips. A way of thinking about where value is being created and when to act on it.
        </p>

        <div className="mt-20 space-y-16 text-left">
          {frameworks.map((item) => (
            <div key={item.num} className="flex gap-6">
              <span className="font-display text-3xl text-muted-foreground/30">{item.num}</span>
              <div>
                <h3 className="text-lg font-medium text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrameworkSection;
