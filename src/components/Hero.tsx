import { ArrowDown, Github, Linkedin, Mail, Download, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-gradient-hero">
      {/* Exciting Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Vibrant gradient mesh */}
        <div className="absolute inset-0 bg-gradient-mesh animate-gradient" />
        
        {/* Multiple floating orbs */}
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-gradient-to-l from-cyan-500/30 to-blue-500/30 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-[80px] animate-pulse-glow" />
        
        {/* Rotating gradient ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 animate-rotate">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full blur-[60px]" />
        </div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.1)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_20%,transparent_100%)]" />

      <div className="container relative z-10 max-w-4xl mx-auto text-center pt-20">
        {/* Exciting Status Badge */}
        <div className="opacity-0 animate-slide-up">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/40 text-sm font-semibold text-white mb-8 hover:scale-105 transition-transform duration-300 shadow-glow-purple">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-purple-400 to-pink-400"></span>
            </span>
            Open to Work & Internship Opportunities
          </span>
        </div>

        {/* Exciting Animated Heading */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-slide-up stagger-1 leading-[1.1] tracking-tight">
          <span className="text-white">Hi, I'm </span>
          <span className="text-gradient animate-gradient bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 inline-block">
            Suraj Kumar
          </span>
        </h1>

        {/* Vibrant Subtitle */}
        <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-4 opacity-0 animate-slide-up stagger-2 font-medium max-w-3xl mx-auto">
          Aspiring <span className="text-gradient-secondary">Full Stack Developer</span> & <span className="text-gradient-secondary">AI/ML Enthusiast</span>
        </p>
        
        <p className="text-base md:text-lg text-white/70 font-normal mb-12 opacity-0 animate-slide-up stagger-2">
          B.Tech CSE @ Lovely Professional University
        </p>

        {/* Exciting Description */}
        <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-12 opacity-0 animate-slide-up stagger-3 leading-relaxed">
          Passionate about building <span className="text-purple-400 font-semibold">scalable web applications</span> and exploring <span className="text-cyan-400 font-semibold">AI/ML</span>. 
          Strong foundation in JavaScript, Python, and modern web technologies with hands-on experience from <span className="text-pink-400">hackathons</span> and <span className="text-pink-400">industry simulations</span>.
        </p>

        {/* Exciting Glowing CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 opacity-0 animate-slide-up stagger-4">
          <Button 
            asChild 
            size="lg" 
            className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold px-10 h-14 rounded-xl shadow-glow-purple hover:shadow-glow-pink hover:scale-105 transition-all duration-500 group"
          >
            <a href="#projects" className="flex items-center gap-2">
              View My Projects
              <ArrowDown className="w-5 h-5 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          
          <Button 
            asChild 
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto glass-vibrant border-2 border-purple-500/50 hover:border-purple-500 hover:bg-purple-500/20 text-white px-10 h-14 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-glow-purple font-semibold group"
          >
            <a href="https://drive.google.com/uc?export=download&id=1GQuRLd02XpAa5lxB0qoyaUb2zRf8xpki" download="Suraj_Kumar_Resume.pdf" className="flex items-center gap-2">
              <Download className="w-5 h-5 group-hover:animate-bounce-slow" />
              Download Resume
            </a>
          </Button>
          
          <Button 
            asChild 
            size="lg" 
            variant="ghost" 
            className="w-full sm:w-auto hover:bg-cyan-500/20 hover:text-cyan-400 text-white px-10 h-14 rounded-xl transition-all duration-500 hover:scale-105 font-semibold"
          >
            <a href="#contact" className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
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

        {/* Glowing Social Links */}
        <div className="flex items-center justify-center gap-4 opacity-0 animate-fade-in stagger-6">
          {[
            { icon: Github, href: "https://github.com/Surajsharma0804", label: "GitHub", color: "purple" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/surajkumar0804", label: "LinkedIn", color: "blue" },
            { icon: Mail, href: "mailto:surajkumarind08@gmail.com", label: "Email", color: "pink" },
            { icon: Phone, href: "tel:+916299124902", label: "Phone", color: "cyan" },
          ].map(({ icon: Icon, href, label, color }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className={`group p-4 rounded-xl glass-vibrant border border-${color}-500/30 hover:border-${color}-500 hover:bg-${color}-500/20 hover:scale-110 hover:shadow-glow-${color} transition-all duration-500`}
            >
              <Icon className="w-6 h-6 text-white group-hover:text-white transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
