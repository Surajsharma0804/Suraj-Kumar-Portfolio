import { ArrowDown, Github, Linkedin, Mail, Download, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-l from-accent/15 to-primary/15 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full animate-float" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black_20%,transparent_100%)]" />

      <div className="container relative z-10 max-w-4xl mx-auto text-center pt-20">
        {/* Greeting Badge */}
        <div className="opacity-0 animate-slide-up">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-secondary/80 to-secondary/60 backdrop-blur-md border border-primary/20 text-sm text-foreground/80 mb-8 shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse shadow-lg shadow-green-500/50" />
            Open to Work & Internship Opportunities
          </span>
        </div>

        {/* Main Heading with Animated Gradient */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-slide-up stagger-1">
          Hi, I'm{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent">
              Suraj Kumar
            </span>
          </span>
        </h1>

        {/* Subtitle with gradient */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-2 opacity-0 animate-slide-up stagger-2">
          Aspiring Full Stack Developer <span className="text-primary/60">&amp;&amp;</span> AI/ML Enthusiast
        </p>
        
        <p className="text-base md:text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-medium mb-8 opacity-0 animate-slide-up stagger-2">
          B.Tech CSE @ Lovely Professional University
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-12 opacity-0 animate-slide-up stagger-3 leading-relaxed">
          Passionate about building scalable web applications and exploring AI/ML. 
          Strong foundation in JavaScript, Python, and modern web technologies with hands-on experience from hackathons and industry simulations.
        </p>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0 animate-slide-up stagger-4">
          <Button 
            asChild 
            size="lg" 
            className="w-full sm:w-auto relative overflow-hidden bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground font-semibold px-8 py-6 text-base rounded-xl shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300 group"
          >
            <a href="#projects">
              <span className="relative z-10">View My Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
          </Button>
          
          <Button 
            asChild 
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto border-2 border-primary/30 bg-secondary/50 backdrop-blur-sm hover:border-primary hover:bg-primary/10 px-8 py-6 text-base rounded-xl transition-all duration-300 hover:scale-105 group"
          >
            <a href="/resume.pdf" download="Suraj_Kumar_Resume.pdf">
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </a>
          </Button>
          
          <Button 
            asChild 
            size="lg" 
            variant="ghost" 
            className="w-full sm:w-auto hover:bg-secondary/80 px-8 py-6 text-base rounded-xl transition-all duration-300 hover:scale-105"
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

        {/* Social Links */}
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
              className="p-4 rounded-2xl bg-secondary/60 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:text-primary hover:scale-110 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
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
