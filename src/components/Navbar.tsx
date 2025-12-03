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
          ? "bg-background/80 backdrop-blur-xl border-b border-border/30 shadow-lg"
          : "bg-transparent"
      )}
    >
      <nav className="w-full px-6 lg:px-12 xl:px-20 h-16 flex items-center justify-between">
        {/* Logo - Far Left */}
        <a 
          href="#" 
          className="font-display text-xl font-bold flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground text-sm font-bold shadow-lg">
            S
          </span>
          <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
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
                    "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                    isActive 
                      ? "text-primary-foreground bg-primary shadow-md" 
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  {link.label}
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
