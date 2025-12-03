import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "scale";
  delay?: number;
  threshold?: number;
}

const ScrollReveal = ({
  children,
  className,
  direction = "up",
  delay = 0,
  threshold = 0.1,
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  const directionClass = {
    up: "scroll-reveal",
    left: "scroll-reveal-left",
    right: "scroll-reveal-right",
    scale: "scroll-reveal-scale",
  }[direction];

  return (
    <div
      ref={ref}
      className={cn(directionClass, isVisible && "visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
