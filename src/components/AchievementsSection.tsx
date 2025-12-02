import { useEffect, useRef, useState } from "react";
import { Trophy, Medal, Star, TrendingUp } from "lucide-react";

const achievements = [
  {
    title: "District-level Quiz Competition",
    rank: "Rank 13",
    participants: "13,000+",
    year: "2019",
    icon: Trophy,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    title: "Hindustan Olympiad",
    rank: "Rank 43",
    participants: "100,000+",
    year: "2020",
    icon: Medal,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Chess Competition",
    rank: "Rank 9",
    participants: "300+",
    year: "2020",
    icon: Star,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
];

const AchievementsSection = () => {
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
    <section id="achievements" ref={sectionRef} className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Achievements
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Recognition & Awards
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Notable achievements and competitions that showcase my dedication and skills.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className={`group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Background decoration */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${achievement.bgColor} rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity`} />
              
              <div className="relative">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${achievement.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <achievement.icon className={`w-7 h-7 ${achievement.color}`} />
                </div>

                {/* Year badge */}
                <span className="absolute top-0 right-0 px-2 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground">
                  {achievement.year}
                </span>

                {/* Content */}
                <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>

                {/* Stats */}
                <div className="flex items-center gap-4">
                  <div>
                    <p className={`text-2xl font-bold ${achievement.color}`}>{achievement.rank}</p>
                    <p className="text-xs text-muted-foreground">Position</p>
                  </div>
                  <div className="h-10 w-px bg-border" />
                  <div>
                    <p className="text-lg font-semibold text-foreground flex items-center gap-1">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      {achievement.participants}
                    </p>
                    <p className="text-xs text-muted-foreground">Participants</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
