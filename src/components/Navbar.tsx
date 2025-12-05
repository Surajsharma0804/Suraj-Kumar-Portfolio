import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navLinks.map(link => link.href.replace("#", "")).filter(Boolean);
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/85 backdrop-blur-2xl border-b border-border/40 shadow-glow"
          : "bg-transparent"
      )}
    >
      <nav className="w-full px-6 lg:px-12 xl:px-20 h-16 flex items-center justify-between">
        {/* Enhanced Logo - Far Left */}
        <a 
          href="#" 
          className="font-display text-xl font-bold flex items-center gap-2.5 hover:opacity-90 transition-all duration-300 group"
        >
          <span className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center text-primary-foreground text-sm font-bold shadow-glow group-hover:scale-110 transition-transform duration-300">
            S
            <span className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </span>
          <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent tracking-tight">
            Suraj.dev
          </span>
        </a>

        {/* Desktop Navigation - Far Right */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "") || 
                           (link.href === "#" && activeSection === "");
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={cn(
                    "px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 relative",
                    isActive 
                      ? "text-primary-foreground bg-gradient-to-r from-primary to-accent shadow-glow" 
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-lg bg-secondary/50 border border-border/50 text-foreground hover:bg-secondary transition-all"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/30 transition-all duration-300",
          isMobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
        )}
      >
        <ul className="px-6 py-4 space-y-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "") || 
                           (link.href === "#" && activeSection === "");
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block py-2.5 px-4 rounded-lg font-medium transition-all duration-300",
                    isActive 
                      ? "text-primary-foreground bg-primary" 
                      : "text-foreground hover:bg-secondary/50"
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
