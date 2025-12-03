import { Calendar, MapPin, GraduationCap, Target, Brain, Code, Sparkles } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.png";
import ScrollReveal from "./ScrollReveal";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Lovely Professional University, Punjab",
    period: "2024 - Present",
    grade: "Pursuing",
    current: true,
  },
  {
    degree: "Intermediate (12th)",
    institution: "GOVT. Tribhuvan +2 School, Bihar",
    period: "2021 - 2023",
    grade: "70%",
  },
  {
    degree: "Matriculation (10th)",
    institution: "S.T. Severin's High School, Bihar",
    period: "2020 - 2021",
    grade: "67%",
  },
];

const interests = [
  { icon: Code, label: "Full Stack Development" },
  { icon: Brain, label: "AI/ML Enthusiast" },
  { icon: Target, label: "Problem Solver" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 bg-secondary/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.15)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.15)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_40%,transparent_100%)]" />
      
      <div className="container max-w-6xl mx-auto relative">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
              About Me
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Get to Know Me
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Profile & Bio - Left Side */}
          <ScrollReveal direction="left" delay={200} className="lg:col-span-2">
            {/* Profile Card */}
            <div className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 mb-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="w-28 h-28 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-glow">
                    <img src={profileAvatar} alt="Suraj Kumar - Full Stack Developer" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full border-4 border-card flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-1">Suraj Kumar</h3>
                <p className="text-primary font-medium text-sm mb-2">Aspiring Full Stack Developer && AI/ML Enthusiast</p>
                <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Bihar, India</span>
                </div>
              </div>
            </div>

            {/* Career Objective */}
            <div className="p-5 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 mb-6">
              <h4 className="flex items-center gap-2 font-semibold text-foreground mb-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-4 h-4 text-primary" />
                </div>
                Career Objective
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Motivated Computer Science student skilled in software engineering, problem-solving, and full-stack development. 
                Strong foundation in Python, JavaScript, SQL, and C++ with practical experience from hackathons and industry simulations. 
                Seeking opportunities to build real-world applications while exploring AI/ML technologies.
              </p>
            </div>

            {/* Interests */}
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, index) => (
                <div
                  key={interest.label}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card/80 border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <interest.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-foreground font-medium">{interest.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Education Timeline - Right Side */}
          <ScrollReveal direction="right" delay={400} className="lg:col-span-3">
            <div className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50">
              <h4 className="font-semibold text-foreground mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                Educational Journey
              </h4>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[17px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

                <div className="space-y-5">
                  {education.map((item, index) => (
                    <ScrollReveal key={index} delay={500 + index * 150}>
                      <div className="relative pl-12">
                        {/* Timeline dot */}
                        <div className={`absolute left-1.5 top-1.5 w-4 h-4 rounded-full border-2 ${
                          item.current 
                            ? 'bg-primary border-primary animate-pulse' 
                            : 'bg-card border-primary/50'
                        }`} />

                        <div className={`p-4 rounded-xl border transition-all duration-300 group ${
                          item.current 
                            ? 'bg-primary/5 border-primary/30' 
                            : 'bg-secondary/30 border-border/50 hover:border-primary/30'
                        }`}>
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <span className="text-xs text-muted-foreground flex items-center gap-1.5 bg-background/50 px-2 py-0.5 rounded-full">
                              <Calendar className="w-3 h-3" />
                              {item.period}
                            </span>
                            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                              item.current 
                                ? 'bg-primary/20 text-primary' 
                                : 'bg-secondary text-muted-foreground'
                            }`}>
                              {item.grade}
                            </span>
                          </div>
                          <h5 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm md:text-base">
                            {item.degree}
                          </h5>
                          <p className="text-sm text-muted-foreground mt-1">{item.institution}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
