"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ShakeInputProps {
  children: ReactNode;
  isError: boolean;
}

export function ShakeInput({ children, isError }: ShakeInputProps) {
  const shakeVariants = {
    shake: {
      x: [-10, 10, -10, 10, -5, 5, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    normal: {
      x: 0,
    },
  };

  return (
    <motion.div
      animate={isError ? "shake" : "normal"}
      variants={shakeVariants}
    >
      {children}
    </motion.div>
  );
}
