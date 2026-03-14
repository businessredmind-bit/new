const stats = [
  { value: "388K+", label: "Followers" },
  { value: "42M+", label: "Organic Views" },
  { value: "+415%", label: "14 Month Return" },
  { value: "$100", label: "Per Month" },
];

const StatsStrip = () => {
  return (
    <section className="border-y border-border py-16">
      <div className="container">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-display text-4xl tracking-tight text-foreground md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-[11px] font-medium tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
