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
        "group relative p-3 rounded-xl bg-secondary/50 border border-border/30",
        "hover:border-primary/50 hover:bg-secondary transition-all duration-300",
        className
      )}
    >
      <div className="flex items-center gap-2.5">
        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-background/50 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-xs text-foreground truncate">{name}</h4>
          {/* Mini progress bar */}
          <div className="mt-1 h-1 bg-background/50 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
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
