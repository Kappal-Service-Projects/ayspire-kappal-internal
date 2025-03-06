"use client";
import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

interface Props {
  text1?: string;
  children?: ReactNode;
  className?: string;
}

const MULTIDIRECTION_SLIDE_VARIANTS = {
  hidden: { opacity: 0, x: "-30vw" },
  visible: { opacity: 1, x: 0 },
  right: { opacity: 0, x: "30vw" },
} as const;

const MultiDirectionSlide: FC<Props> = ({
  text1 = "Build",
  children = undefined,
  className = "",
}) => {
  return (
    <div className="overflow-hidden">
      <motion.h1
        animate="visible"
        className="text-start font-display text-7xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
        initial="hidden"
        transition={{ duration: 1.1 }}
        variants={MULTIDIRECTION_SLIDE_VARIANTS}
      >
        <span className={className}>{text1}&nbsp;</span>
      </motion.h1>

      <motion.h1
        animate="visible"
        className="text-start font-display text-7xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
        initial="right"
        transition={{ duration: 1.1 }}
        variants={MULTIDIRECTION_SLIDE_VARIANTS}
      >
        {children}
      </motion.h1>
    </div>
  );
};

export default MultiDirectionSlide;
