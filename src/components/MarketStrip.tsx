const marketData = [
  { label: "BITCOIN", value: "$87,420", change: "+2.4%" },
  { label: "ETHEREUM", value: "$3,180", change: "+1.8%" },
  { label: "TOTAL MCAP", value: "$3.2T", change: "+1.2%" },
  { label: "FEAR & GREED", value: "68", change: "Greed" },
];

const MarketStrip = () => {
  return (
    <section id="markets" className="border-b border-border py-12">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {marketData.map((item, i) => (
            <div key={i} className="text-center">
              <span className="text-[10px] tracking-[0.25em] text-muted-foreground">{item.label}</span>
              <p className="mt-1 font-display text-2xl text-foreground">{item.value}</p>
              <span className="text-xs text-accent">{item.change}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketStrip;
