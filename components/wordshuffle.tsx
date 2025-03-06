"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { GradualSpacing } from "./gradualSpacing";

type WordShuffleProps = {
  words: string[];
  className?: string;
};

const WordShuffle: React.FC<WordShuffleProps> = ({ words, className }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={words[index]}
        animate={{ opacity: 1, y: 0 }}
        className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
        exit={{ opacity: 0, y: 50 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <span className={className}>{words[index]}</span>
      </motion.div>
    </AnimatePresence>
  );
};

export default WordShuffle;
