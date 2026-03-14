import logo from "@/assets/logo.png";

const navLinks = [
  { label: "INSIGHTS", href: "#insights" },
  { label: "MARKETS", href: "#markets" },
  { label: "LEARN", href: "#learn" },
  { label: "ABOUT", href: "#about" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <img src={logo} alt="Logo" className="h-7 w-auto" />
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] font-medium tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
