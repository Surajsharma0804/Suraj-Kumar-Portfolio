import { ArrowDown, Github, Linkedin, Mail, Download, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 bg-background">
      {/* Simple subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

      <div className="container relative z-10 max-w-4xl mx-auto text-center pt-20">
        {/* Status Badge */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Open to Work & Internship Opportunities
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-foreground">Hi, I'm </span>
          <span className="text-primary">Suraj Kumar</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium max-w-3xl mx-auto">
          Aspiring <span className="text-primary">Full Stack Developer</span> & <span className="text-primary">AI/ML Enthusiast</span>
        </p>
        
        <p className="text-base md:text-lg text-muted-foreground mb-12">
          B.Tech CSE @ Lovely Professional University
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Passionate about building scalable web applications and exploring AI/ML. 
          Strong foundation in JavaScript, Python, and modern web technologies with hands-on experience from hackathons and industry simulations.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Button 
            asChild 
            size="lg" 
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12 rounded-lg transition-all group"
          >
            <a href="#projects" className="flex items-center gap-2">
              View My Projects
              <ArrowDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          
          <Button 
            asChild 
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto border-2 hover:bg-primary/10 px-8 h-12 rounded-lg transition-all font-semibold group"
          >
            <a href="https://drive.google.com/uc?export=download&id=1GQuRLd02XpAa5lxB0qoyaUb2zRf8xpki" download="Suraj_Kumar_Resume.pdf" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </Button>
          
          <Button 
            asChild 
            size="lg" 
            variant="ghost" 
            className="w-full sm:w-auto hover:bg-primary/10 px-8 h-12 rounded-lg transition-all font-semibold"
          >
            <a href="#contact" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Get In Touch
            </a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="mb-8">
          <a href="#about" className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
            <span className="text-xs uppercase tracking-wider font-medium">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          {[
            { icon: Github, href: "https://github.com/Surajsharma0804", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/surajkumar0804", label: "LinkedIn" },
            { icon: Mail, href: "mailto:surajkumarind08@gmail.com", label: "Email" },
            { icon: Phone, href: "tel:+916299124902", label: "Phone" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="p-3 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all"
            >
              <Icon className="w-5 h-5 text-foreground" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
