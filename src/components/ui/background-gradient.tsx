import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface BackgroundGradientProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
  ...props
}: BackgroundGradientProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!animate) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setPosition({ x, y });
    };

    containerRef.current?.addEventListener("mousemove", handleMouseMove);

    return () => {
      containerRef.current?.removeEventListener("mousemove", handleMouseMove);
    };
  }, [animate]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "relative z-10 group-hover/card:opacity-100",
          className
        )}
      >
        {children}
      </div>
      {animate && (
        <div
          className="absolute inset-0 z-[1] opacity-50 blur-2xl transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(30, 58, 138, 0.2), transparent 50%)`,
          }}
        />
      )}
    </div>
  );
}; 