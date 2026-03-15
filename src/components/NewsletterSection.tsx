import SubscribeForm from '../SubscribeForm'

const NewsletterSection = () => {
  return (
    <section className="border-t border-border py-32">
      <div className="container max-w-md text-center">
        <h2 className="font-display text-[clamp(2rem,5vw,3rem)] leading-[0.95] text-foreground">
          STAY INFORMED.
        </h2>
        <p className="mt-4 text-sm font-light text-muted-foreground">
          Weekly research notes on markets, macro, and digital assets.
        </p>
        <SubscribeForm />
      </div>
    </section>
  );
};

export default NewsletterSection;
