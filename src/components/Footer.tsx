import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container flex flex-col items-center justify-between gap-8 md:flex-row">
        <img src={logo} alt="Logo" className="h-5 w-auto opacity-50" />
        <div className="flex gap-8">
          {["About", "Instagram", "Newsletter", "Disclaimer"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[10px] tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
      <div className="container mt-8 text-center">
        <p className="text-[10px] text-muted-foreground/40">
          © 2026. For informational purposes only. Not financial advice.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
