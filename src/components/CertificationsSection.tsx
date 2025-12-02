import { useEffect, useRef, useState } from "react";
import { Award, Calendar, Building2, CheckCircle2, Briefcase, GraduationCap } from "lucide-react";

const certifications = [
  {
    category: "Industry Job Simulations",
    icon: <Briefcase className="w-5 h-5" />,
    color: "from-blue-500 to-cyan-500",
    items: [
      {
        title: "AWS Solutions Architecture",
        issuer: "Amazon Web Services (Forage)",
        date: "June 2025",
        description: "Designed scalable hosting architecture for cloud solutions.",
        highlight: true,
      },
      {
        title: "Software Engineering",
        issuer: "Goldman Sachs (Forage)",
        date: "Jan 2025",
        description: "Worked on security principles and password database analysis.",
      },
      {
        title: "Software Engineering",
        issuer: "JP Morgan Chase (Forage)",
        date: "Jan 2025",
        description: "Kafka, H2 DB, REST API integration, and API Controller tasks.",
      },
    ],
  },
  {
    category: "Technical Certifications",
    icon: <GraduationCap className="w-5 h-5" />,
    color: "from-purple-500 to-pink-500",
    items: [
      { title: "Programming Using C++", issuer: "Infosys Springboard", date: "Aug 2025" },
      { title: "Python (Basic)", issuer: "HackerRank" },
      { title: "Java (Basic)", issuer: "HackerRank" },
      { title: "Front-End Development", issuer: "Meta (Coursera)" },
      { title: "Programming for Everybody", issuer: "University of Michigan" },
      { title: "What is Generative AI", issuer: "LinkedIn Learning" },
      { title: "Introduction to DSA", issuer: "Coding Tantra" },
      { title: "Prompt Engineering", issuer: "IBM Developer Network" },
      { title: "Student Ambassador", issuer: "Microsoft Learn", highlight: true },
    ],
  },
];

const CertificationsSection = () => {
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
    <section id="certifications" ref={sectionRef} className="py-24 px-4 bg-secondary/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="container max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
            <Award className="w-4 h-4" />
            Certifications
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Professional Credentials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Industry-recognized certifications validating my technical expertise.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="space-y-10">
          {certifications.map((category, catIndex) => (
            <div
              key={category.category}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${catIndex * 200}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${category.color} p-0.5`}>
                  <div className="w-full h-full rounded-[10px] bg-card flex items-center justify-center text-foreground">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.category}</h3>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((cert, index) => (
                  <div
                    key={cert.title}
                    className={`group p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/40 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${(catIndex * 200) + (index * 80)}ms` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                        cert.highlight 
                          ? 'bg-primary/20 text-primary' 
                          : 'bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary'
                      }`}>
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors line-clamp-1">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                          <Building2 className="w-3 h-3 flex-shrink-0" />
                          <span className="truncate">{cert.issuer}</span>
                        </p>
                        {cert.date && (
                          <p className="text-xs text-primary/70 flex items-center gap-1 mt-1">
                            <Calendar className="w-3 h-3" />
                            {cert.date}
                          </p>
                        )}
                        {cert.description && (
                          <p className="text-xs text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
                            {cert.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;