import { Trophy, Medal, Star, TrendingUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const achievements = [
  {
    title: "District-level Quiz Competition",
    rank: "Rank 7",
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
  return (
    <section id="achievements" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-accent/10 to-transparent rounded-full" />
      
      <div className="container max-w-6xl mx-auto relative">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-strong text-primary text-sm font-semibold mb-6 border border-primary/30 shadow-glow">
              <Trophy className="w-4 h-4" />
              Achievements
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 tracking-tight">
              Recognition & Awards
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Notable achievements and competitions that showcase my dedication and skills.
            </p>
          </div>
        </ScrollReveal>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <ScrollReveal key={achievement.title} delay={index * 150} direction="scale">
              <div className="group relative p-6 rounded-2xl glass-strong border border-border/60 hover:border-primary/50 hover:shadow-glow-lg transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full">
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
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
