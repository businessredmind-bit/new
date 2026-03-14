import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="border-t border-border py-32">
      <div className="container max-w-md text-center">
        <h2 className="font-display text-[clamp(2rem,5vw,3rem)] leading-[0.95] text-foreground">
          STAY INFORMED.
        </h2>
        <p className="mt-4 text-sm font-light text-muted-foreground">
          Weekly research notes on markets, macro, and digital assets.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 flex items-center gap-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 border-b border-border bg-transparent py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
          />
          <button
            type="submit"
            className="text-[11px] font-medium tracking-[0.15em] text-foreground transition-opacity hover:opacity-60"
          >
            SUBSCRIBE →
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
