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
        "group relative p-4 rounded-xl glass-vibrant border border-purple-500/20",
        "hover:border-purple-500/50 hover:shadow-glow-purple hover:scale-105 transition-all duration-500",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-purple-300 group-hover:scale-110 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-500">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-sm text-white truncate">{name}</h4>
            <span className="text-xs font-mono text-purple-300 ml-2 font-bold">{level}%</span>
          </div>
          {/* Glowing progress bar */}
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out relative shadow-glow-purple"
              style={{ 
                width: `${level}%`,
                transitionDelay: `${delay}ms`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
