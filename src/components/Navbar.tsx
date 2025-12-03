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
      
      // Update active section based on scroll position
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
          ? "bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-2xl"
          : "bg-transparent"
      )}
    >
      <nav className="container max-w-7xl mx-auto px-6 lg:px-8 h-18 flex items-center justify-between py-4">
        {/* Logo - Left Corner */}
        <a 
          href="#" 
          className="font-display text-2xl font-bold text-gradient hover:scale-105 transition-all duration-300 flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
            S
          </span>
          <span className="hidden sm:inline">Suraj.dev</span>
        </a>

        {/* Desktop Navigation - Right Side */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "") || 
                           (link.href === "#" && activeSection === "");
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 relative",
                    isActive 
                      ? "text-primary-foreground bg-gradient-primary shadow-lg" 
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
          className="lg:hidden p-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 transition-all duration-300 shadow-2xl",
          isMobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
        )}
      >
        <ul className="container px-6 py-6 space-y-1">
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.href.replace("#", "") || 
                           (link.href === "#" && activeSection === "");
            return (
              <li key={link.label} style={{ animationDelay: `${index * 50}ms` }}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block py-3 px-4 rounded-xl font-medium transition-all duration-300",
                    isActive 
                      ? "text-primary-foreground bg-gradient-primary" 
                      : "text-foreground hover:text-primary hover:bg-secondary/50"
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
