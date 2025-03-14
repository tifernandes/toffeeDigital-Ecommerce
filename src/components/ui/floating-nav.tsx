import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
}

export const FloatingNav = ({ navItems, className }: FloatingNavProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn("flex items-center space-x-6", className)}
    >
      {navItems.map((item) => (
        <motion.a
          key={item.name}
          href={item.link}
          className="group relative px-4 py-2 text-blue-900 transition-colors hover:text-blue-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10 flex items-center space-x-2">
            {item.icon && <span className="text-blue-900">{item.icon}</span>}
            <span className="font-medium">{item.name}</span>
          </span>
          <motion.span
            className="absolute inset-0 z-0 rounded-lg bg-blue-100 opacity-0 transition-opacity group-hover:opacity-100"
            layoutId="nav-hover"
            transition={{
              type: "spring",
              bounce: 0.25,
              duration: 0.5
            }}
          />
        </motion.a>
      ))}
    </motion.div>
  );
}; 