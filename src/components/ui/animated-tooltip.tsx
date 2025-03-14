"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTooltipProps {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
  className?: string;
}

export const AnimatedTooltip = ({ items, className }: AnimatedTooltipProps) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("flex flex-row items-center justify-center gap-4", className)}>
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.div
            className="relative h-16 w-16 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: idx * 0.1 }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full rounded-full object-cover border-2 border-white group-hover:border-blue-500 transition-colors"
            />
          </motion.div>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                className="absolute -top-16 left-1/2 -translate-x-1/2 p-2 bg-white rounded-lg shadow-xl"
              >
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-700">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.designation}</p>
                </div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}; 