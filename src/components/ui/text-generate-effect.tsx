"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
}

export const TextGenerateEffect: React.FC<TextGenerateEffectProps> = ({
  words,
  className,
}) => {
  const [wordArray, setWordArray] = useState<string[]>([]);

  useEffect(() => {
    setWordArray(words.split(" "));
  }, [words]);

  return (
    <div className={cn("font-bold", className)}>
      {wordArray.map((word, idx) => {
        return (
          <motion.span
            key={word + idx}
            className="inline-block mr-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: idx * 0.2,
              ease: [0.2, 0.65, 0.3, 0.9],
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
}; 