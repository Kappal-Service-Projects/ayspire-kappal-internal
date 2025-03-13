import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface GradualSpacingProps {
  text: React.ReactNode;
}

export const GradualSpacing: React.FC<GradualSpacingProps> = ({ text }) => {
  const gradual = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  // Convert the ReactNode to a string for splitting
  const textString = typeof text === "string" ? text : "";
  const characters = textString.split("");

  return (
    <div className="flex space-x-1 justify-center">
      <AnimatePresence>
        {characters.map((char, i) => (
          <motion.h1
            key={i}
            animate="visible"
            className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
            exit="hidden"
            initial="hidden"
            transition={{ duration: 0.5, delay: i * 0.1 }}
            variants={gradual}
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
};
