"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";

interface CardHoverProps {
  items: {
    title: string;
    description: string;
    link: string;
    thumbnail: string;
  }[];
  className?: string;
}

export const CardHover = ({ items, className }: CardHoverProps) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", className)}>
      {items.map((item, idx) => (
        <motion.a
          href={item.link}
          key={item.title + idx}
          className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ y: -5 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          <div className="relative h-64 w-full">
            <Image
              src={item.thumbnail}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
          </div>
          <div className="absolute bottom-0 p-6 text-white">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm opacity-90">{item.description}</p>
          </div>
        </motion.a>
      ))}
    </div>
  );
}; 