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
        "group relative p-4 rounded-lg bg-card border border-border",
        "hover:border-primary/50 transition-all",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-all">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-sm text-foreground truncate">{name}</h4>
            <span className="text-xs font-mono text-primary ml-2 font-bold">{level}%</span>
          </div>
          {/* Progress bar */}
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
              style={{ 
                width: `${level}%`,
                transitionDelay: `${delay}ms`
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
