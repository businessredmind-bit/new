import logo from "@/assets/logo.png";

const Footer = () => {
  const footerLinks = [
    { name: "About", href: "#about" },
    { name: "Instagram", href: "https://www.instagram.com/100xsync/" },
    { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61582196127662" },
    { name: "Disclaimer", href: "#disclaimer" }
  ];

  return (
    <footer className="border-t border-border py-12">
      <div className="container flex flex-col items-center justify-between gap-8 md:flex-row">
        <img src={logo} alt="Logo" className="h-5 w-auto opacity-50" />
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-[10px] tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name.toUpperCase()}
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
