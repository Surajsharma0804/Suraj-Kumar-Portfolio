import { useEffect, useRef, useState } from "react";
import { 
  Code, Database, Globe, Server, 
  GitBranch, Terminal, Wrench, Users,
  FileCode, Palette, Lightbulb, Clock, Target, Eye
} from "lucide-react";
import SkillCard from "./SkillCard";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="w-5 h-5" />,
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "JavaScript", icon: <FileCode className="w-4 h-4" />, level: 85 },
      { name: "Python", icon: <Terminal className="w-4 h-4" />, level: 80 },
      { name: "C", icon: <Code className="w-4 h-4" />, level: 75 },
      { name: "C++", icon: <Code className="w-4 h-4" />, level: 70 },
    ],
  },
  {
    title: "Web Technologies",
    icon: <Globe className="w-5 h-5" />,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "HTML5", icon: <Globe className="w-4 h-4" />, level: 90 },
      { name: "CSS3", icon: <Palette className="w-4 h-4" />, level: 88 },
      { name: "SQL", icon: <Database className="w-4 h-4" />, level: 75 },
      { name: "REST APIs", icon: <Server className="w-4 h-4" />, level: 78 },
    ],
  },
  {
    title: "Frameworks & Tools",
    icon: <Wrench className="w-5 h-5" />,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Spring Boot", icon: <Server className="w-4 h-4" />, level: 70 },
      { name: "Kafka", icon: <Database className="w-4 h-4" />, level: 65 },
      { name: "GitHub", icon: <GitBranch className="w-4 h-4" />, level: 85 },
      { name: "VS Code", icon: <Code className="w-4 h-4" />, level: 90 },
    ],
  },
  {
    title: "Soft Skills",
    icon: <Users className="w-5 h-5" />,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Problem Solving", icon: <Lightbulb className="w-4 h-4" />, level: 90 },
      { name: "Teamwork", icon: <Users className="w-4 h-4" />, level: 88 },
      { name: "Time Management", icon: <Clock className="w-4 h-4" />, level: 85 },
      { name: "Attention to Detail", icon: <Eye className="w-4 h-4" />, level: 88 },
    ],
  },
];

const additionalSkills = [
  "MS Word", "MS Excel", "PowerPoint", "Postman", "H2 Database", "API Development", "Adaptability", "React Basics"
];

const TechnicalSkills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
            Technical Skills
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Technologies I Work With
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A growing toolkit of programming languages, frameworks, and technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-glow group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${catIndex * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${category.color} p-0.5`}>
                  <div className="w-full h-full rounded-[10px] bg-card flex items-center justify-center text-foreground">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                    style={{ transitionDelay: `${(catIndex * 100) + (skillIndex * 50) + 200}ms` }}
                  >
                    <SkillCard
                      name={skill.name}
                      icon={skill.icon}
                      level={skill.level}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className={`mt-16 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-sm font-medium text-muted-foreground mb-5">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm font-medium rounded-full bg-secondary/80 text-muted-foreground border border-border/50 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;