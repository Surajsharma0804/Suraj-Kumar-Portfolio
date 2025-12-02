import { ArrowDown, Github, Linkedin, Mail, Download, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-primary/5 rounded-full blur-[80px] animate-float" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_30%,transparent_100%)]" />

      <div className="container relative z-10 max-w-4xl mx-auto text-center">
        {/* Greeting Badge */}
        <div className="opacity-0 animate-slide-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm border border-border/50 text-sm text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Open to Work & Internship Opportunities
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-slide-up stagger-1">
          Hi, I'm <span className="text-gradient">Suraj Kumar</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-2 opacity-0 animate-slide-up stagger-2">
          Aspiring Full Stack Developer && AI/ML Enthusiast
        </p>
        
        <p className="text-base md:text-lg text-primary/80 mb-6 opacity-0 animate-slide-up stagger-2">
          B.Tech CSE @ Lovely Professional University
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 opacity-0 animate-slide-up stagger-3 leading-relaxed">
          Passionate about building scalable web applications and exploring AI/ML. 
          Strong foundation in JavaScript, Python, and modern web technologies with hands-on experience from hackathons and industry simulations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 opacity-0 animate-slide-up stagger-4">
          <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg">
            <a href="#projects">View My Projects</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-border hover:border-primary/50 hover:bg-primary/5">
            <a href="/resume.pdf" download="Suraj_Kumar_Resume.pdf">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </a>
          </Button>
          <Button asChild size="lg" variant="ghost" className="w-full sm:w-auto hover:bg-secondary">
            <a href="#contact">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-3 opacity-0 animate-fade-in stagger-5">
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
              className="p-3 rounded-xl bg-secondary/80 border border-border/50 hover:border-primary/50 hover:text-primary hover:scale-110 hover:bg-primary/5 transition-all duration-300"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;