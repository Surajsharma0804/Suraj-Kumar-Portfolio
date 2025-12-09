import { Award, Calendar, Building2, CheckCircle2, Briefcase, GraduationCap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const certifications = [
  {
    category: "Industry Job Simulations",
    icon: <Briefcase className="w-5 h-5" />,
    color: "from-blue-500 to-blue-600",
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
    color: "from-slate-500 to-slate-600",
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
  return (
    <section id="certifications" className="py-24 px-4 bg-background relative">
      <div className="container max-w-6xl mx-auto relative">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              Certifications
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Professional Credentials
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Industry-recognized certifications validating my technical expertise.
            </p>
          </div>
        </ScrollReveal>

        {/* Certifications Grid */}
        <div className="space-y-10">
          {certifications.map((category, catIndex) => (
            <ScrollReveal key={category.category} delay={catIndex * 200}>
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
                  <ScrollReveal key={cert.title} delay={(catIndex * 200) + (index * 80)} direction="scale">
                    <div className="group p-4 rounded-xl glass border border-border hover:border-primary/50 transition-all hover:-translate-y-1 h-full">
                      <div className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
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
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
