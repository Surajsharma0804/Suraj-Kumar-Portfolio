import { Github, Linkedin, Mail, Heart, Phone, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 px-4 border-t border-border bg-card">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Logo & Back to top */}
          <div className="flex items-center justify-between w-full">
            <a href="#" className="font-display text-xl font-bold text-foreground hover:text-primary transition-colors">
              Suraj.dev
            </a>
            <button
              onClick={scrollToTop}
              className="p-3 rounded-lg bg-secondary border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: "https://github.com/Surajsharma0804", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/surajkumar0804", label: "LinkedIn" },
              { icon: Mail, href: "mailto:surajkumarind08@gmail.com", label: "Email" },
              { icon: Phone, href: "tel:+916299124902", label: "Phone" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                className="p-3 rounded-lg bg-secondary border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            © {currentYear} by Suraj Kumar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;