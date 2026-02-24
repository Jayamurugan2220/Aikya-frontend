import { Linkedin, Instagram, Youtube, Twitter } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Leadership", href: "#leadership" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Linkedin, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Youtube, href: "#" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card px-6 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <span className="font-heading text-xl font-bold text-gradient-gold">AIKYA BUILDS FUTURE</span>
          <p className="mt-3 font-body text-sm text-muted-foreground">
            Building India's future with AI, innovation, and relentless execution. Your vision, our venture studio.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-foreground">Quick Links</h4>
          <ul className="mt-3 space-y-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-foreground">Follow Us</h4>
          <div className="mt-3 flex gap-3">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-border pt-6 text-center">
        <p className="font-body text-xs text-muted-foreground">
          © 2026 Aikya Builds Future. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
