import { ArrowDown, Github, Linkedin, Mail, Download, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Enhanced Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-gradient-to-r from-primary/25 to-accent/25 rounded-full blur-[180px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-l from-accent/20 to-primary/20 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-primary/8 to-transparent rounded-full animate-float" />
        {/* Additional accent orbs */}
        <div className="absolute top-1/4 right-1/3 w-[400px] h-[400px] bg-gradient-to-br from-accent/15 to-transparent rounded-full blur-[100px] animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Enhanced Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.04)_1.5px,transparent_1.5px),linear-gradient(90deg,hsl(var(--primary)/0.04)_1.5px,transparent_1.5px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_10%,transparent_100%)]" />

      <div className="container relative z-10 max-w-4xl mx-auto text-center pt-20">
        {/* Enhanced Greeting Badge */}
        <div className="opacity-0 animate-slide-up">
          <span className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full glass-strong border border-primary/30 text-sm font-medium text-foreground mb-8 shadow-glow hover:scale-105 transition-transform duration-300">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-green-400 to-emerald-500 shadow-lg shadow-green-500/50"></span>
            </span>
            Open to Work & Internship Opportunities
          </span>
        </div>

        {/* Enhanced Main Heading with Animated Gradient */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 opacity-0 animate-slide-up stagger-1 leading-[1.1] tracking-tight">
          Hi, I'm{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent drop-shadow-2xl">
              Suraj Kumar
            </span>
            {/* Subtle glow effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-shimmer blur-2xl opacity-20 -z-10"></span>
          </span>
        </h1>

        {/* Enhanced Subtitle with gradient */}
        <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 mb-3 opacity-0 animate-slide-up stagger-2 font-medium">
          Aspiring Full Stack Developer <span className="text-primary font-mono">&amp;&amp;</span> AI/ML Enthusiast
        </p>
        
        <p className="text-base md:text-lg lg:text-xl bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent font-semibold mb-8 opacity-0 animate-slide-up stagger-2">
          B.Tech CSE @ Lovely Professional University
        </p>

        {/* Enhanced Description */}
        <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 opacity-0 animate-slide-up stagger-3 leading-relaxed">
          Passionate about building <span className="text-foreground font-semibold">scalable web applications</span> and exploring <span className="text-foreground font-semibold">AI/ML</span>. 
          Strong foundation in JavaScript, Python, and modern web technologies with hands-on experience from <span className="text-primary">hackathons</span> and <span className="text-primary">industry simulations</span>.
        </p>

        {/* Premium CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0 animate-slide-up stagger-4">
          <Button 
            asChild 
            size="lg" 
            className="w-full sm:w-auto relative overflow-hidden bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground font-bold px-10 py-7 text-base rounded-2xl shadow-glow-lg hover:shadow-hover hover:scale-[1.02] transition-all duration-300 group border border-primary/20"
          >
            <a href="#projects">
              <span className="relative z-10 flex items-center gap-2">
                View My Projects
                <ArrowDown className="w-5 h-5 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
          </Button>
          
          <Button 
            asChild 
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto glass-strong border-2 border-primary/40 hover:border-primary hover:bg-primary/10 px-10 py-7 text-base rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-glow group font-semibold"
          >
            <a href="https://drive.google.com/uc?export=download&id=1GQuRLd02XpAa5lxB0qoyaUb2zRf8xpki" download="Suraj_Kumar_Resume.pdf">
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </a>
          </Button>
          
          <Button 
            asChild 
            size="lg" 
            variant="ghost" 
            className="w-full sm:w-auto hover:bg-secondary/80 hover:text-primary px-10 py-7 text-base rounded-2xl transition-all duration-300 hover:scale-[1.02] font-semibold"
          >
            <a href="#contact">
              <Mail className="w-5 h-5 mr-2" />
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

        {/* Enhanced Social Links */}
        <div className="flex items-center justify-center gap-4 opacity-0 animate-fade-in stagger-6">
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
              className="group relative p-4 rounded-2xl glass border border-border/50 hover:border-primary/60 hover:text-primary hover:scale-110 hover:shadow-glow transition-all duration-300"
            >
              <Icon className="w-5 h-5 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
