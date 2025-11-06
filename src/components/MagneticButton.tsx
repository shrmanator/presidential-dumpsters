"use client";

import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  strength?: number;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export function MagneticButton({
  children,
  strength = 0.3,
  className = "",
  onClick,
  disabled = false,
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;

    const { clientX, clientY } = e;
    const { width, height, left, top } =
      e.currentTarget.getBoundingClientRect();

    const middleX = left + width / 2;
    const middleY = top + height / 2;

    const offsetX = (clientX - middleX) * strength;
    const offsetY = (clientY - middleY) * strength;

    setPosition({ x: offsetX, y: offsetY });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={onClick}
      disabled={disabled}
      animate={{ x: position.x, y: position.y }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 20,
        mass: 0.5,
      }}
      className={className}
    >
      {children}
    </motion.button>
  );
}
