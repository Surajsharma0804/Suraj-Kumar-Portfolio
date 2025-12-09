import { 
  Code, Database, Globe, Server, 
  GitBranch, Terminal, Wrench, Users,
  FileCode, Palette, Lightbulb, Clock, Target, Eye
} from "lucide-react";
import SkillCard from "./SkillCard";
import ScrollReveal from "./ScrollReveal";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="w-5 h-5" />,
    color: "from-blue-500 to-blue-600",
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
    color: "from-blue-600 to-blue-700",
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
    color: "from-slate-500 to-slate-600",
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
    color: "from-gray-500 to-gray-600",
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
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/20">
      <div className="container max-w-6xl mx-auto relative">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              <Code className="w-4 h-4" />
              Technical Skills
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Technologies I <span className="text-primary">Work With</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A growing toolkit of programming languages, frameworks, and technologies.
            </p>
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, catIndex) => (
            <ScrollReveal key={category.title} delay={catIndex * 100}>
              <div className="glass-strong p-6 h-full rounded-xl border border-border hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${category.color} p-0.5`}>
                    <div className="w-full h-full rounded-[10px] bg-card flex items-center justify-center text-foreground">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <SkillCard
                      key={skill.name}
                      name={skill.name}
                      icon={skill.icon}
                      level={skill.level}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Additional Skills */}
        <ScrollReveal delay={500}>
          <div className="mt-16 text-center">
            <p className="text-sm font-medium text-muted-foreground mb-5">Also familiar with</p>
            <div className="flex flex-wrap justify-center gap-3">
              {additionalSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm font-medium rounded-full bg-card text-foreground border border-border hover:border-primary/30 hover:bg-primary/10 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TechnicalSkills;
