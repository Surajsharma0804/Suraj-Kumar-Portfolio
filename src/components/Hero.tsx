import { ArrowDown, Github, Linkedin, Mail, Download, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-gradient-hero">
      {/* Premium Minimalist Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle gradient mesh */}
        <div className="absolute inset-0 bg-gradient-mesh" />
        {/* Single elegant glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      {/* Minimal Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_0%,transparent_100%)] opacity-30" />

      <div className="container relative z-10 max-w-4xl mx-auto text-center pt-20">
        {/* Premium Status Badge */}
        <div className="opacity-0 animate-slide-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-8 hover:bg-primary/15 transition-colors duration-300">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Open to Work & Internship Opportunities
          </span>
        </div>

        {/* Clean, Bold Heading */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-slide-up stagger-1 leading-[1.1] tracking-tight text-foreground">
          Hi, I'm{" "}
          <span className="text-primary">
            Suraj Kumar
          </span>
        </h1>

        {/* Clean Subtitle */}
        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 opacity-0 animate-slide-up stagger-2 font-normal max-w-3xl mx-auto">
          Aspiring Full Stack Developer & AI/ML Enthusiast
        </p>
        
        <p className="text-base md:text-lg text-muted-foreground/80 font-normal mb-12 opacity-0 animate-slide-up stagger-2">
          B.Tech CSE @ Lovely Professional University
        </p>

        {/* Clean Description */}
        <p className="text-base md:text-lg text-muted-foreground/70 max-w-2xl mx-auto mb-12 opacity-0 animate-slide-up stagger-3 leading-relaxed font-normal">
          Passionate about building scalable web applications and exploring AI/ML. 
          Strong foundation in JavaScript, Python, and modern web technologies with hands-on experience from hackathons and industry simulations.
        </p>

        {/* Clean, Professional CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 opacity-0 animate-slide-up stagger-4">
          <Button 
            asChild 
            size="lg" 
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <a href="#projects" className="flex items-center gap-2">
              View My Projects
              <ArrowDown className="w-4 h-4 rotate-[-90deg]" />
            </a>
          </Button>
          
          <Button 
            asChild 
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto border-border hover:bg-secondary/50 px-8 h-12 rounded-lg transition-all duration-300 font-medium"
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
            className="w-full sm:w-auto hover:bg-secondary/50 px-8 h-12 rounded-lg transition-all duration-300 font-medium"
          >
            <a href="#contact" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Get In Touch
            </a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="opacity-0 animate-fade-in stagger-5 mb-8">
          <a href="#about" className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
            <span className="text-xs uppercase tracking-[0.2em] font-medium">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-primary" />
          </a>
        </div>

        {/* Minimal Social Links */}
        <div className="flex items-center justify-center gap-3 opacity-0 animate-fade-in stagger-6">
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
              className="p-3 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary hover:text-primary transition-all duration-300"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
