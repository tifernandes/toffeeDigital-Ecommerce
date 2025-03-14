import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface HoverEffectProps {
  items: {
    title: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}

export const HoverEffect = ({
  items,
  className,
}: HoverEffectProps) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item.link}
          key={item.title}
          className="relative group block p-2 h-12 w-12"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-lg"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <span className="relative z-10 flex items-center justify-center">
            {item.icon}
          </span>
        </a>
      ))}
    </div>
  );
}; 