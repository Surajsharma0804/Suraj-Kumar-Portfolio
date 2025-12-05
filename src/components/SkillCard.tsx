import { cn } from "@/lib/utils";

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  level?: number;
  className?: string;
  delay?: number;
}

const SkillCard = ({ name, icon, level = 85, className, delay = 0 }: SkillCardProps) => {
  return (
    <div
      className={cn(
        "group relative p-3.5 rounded-xl glass border border-border/40",
        "hover:border-primary/60 hover:shadow-glow transition-all duration-300",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1.5">
            <h4 className="font-semibold text-sm text-foreground truncate">{name}</h4>
            <span className="text-xs font-mono text-primary ml-2">{level}%</span>
          </div>
          {/* Enhanced progress bar */}
          <div className="h-1.5 bg-secondary/80 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out relative"
              style={{ 
                width: `${level}%`,
                transitionDelay: `${delay}ms`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
