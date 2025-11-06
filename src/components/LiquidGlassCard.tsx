"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface LiquidGlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "accent" | "blue";
}

export function LiquidGlassCard({
  children,
  className = "",
  variant = "default",
}: LiquidGlassCardProps) {
  const variantStyles = {
    default: {
      border: "rgba(255, 255, 255, 0.1)",
      background: "rgba(255, 255, 255, 0.7)",
      shadowBase: "0 4px 30px rgba(0, 0, 0, 0.05)",
      shadowHover: "0 8px 40px rgba(0, 0, 0, 0.08)",
    },
    accent: {
      border: "rgba(16, 185, 129, 0.2)",
      background: "rgba(16, 185, 129, 0.15)",
      shadowBase: "0 4px 30px rgba(16, 185, 129, 0.12)",
      shadowHover: "0 8px 40px rgba(16, 185, 129, 0.18)",
    },
    blue: {
      border: "rgba(10, 33, 71, 0.2)",
      background: "rgba(10, 33, 71, 0.15)",
      shadowBase: "0 4px 30px rgba(10, 33, 71, 0.12)",
      shadowHover: "0 8px 40px rgba(10, 33, 71, 0.18)",
    },
  };

  const styles = variantStyles[variant];

  return (
    <motion.div
      className={`liquid-glass-card ${className}`}
      whileHover={{ y: -2 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
    >
      {/* Layer 1: Main glass container */}
      <motion.div
        className="relative p-4 transition-shadow duration-300"
        style={{
          borderRadius: "16px",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: styles.border,
          backdropFilter: "blur(10px) saturate(180%)",
          WebkitBackdropFilter: "blur(10px) saturate(180%)",
          boxShadow: `${styles.shadowBase}, inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
        }}
        whileHover={{
          boxShadow: `${styles.shadowHover}, inset 0 1px 0 rgba(255, 255, 255, 0.15)`,
        }}
      >
        {/* Layer 2: Gradient overlay for depth */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            borderRadius: "16px",
            background: `linear-gradient(135deg,
              ${styles.background} 0%,
              rgba(255, 255, 255, 0.02) 50%,
              ${styles.background} 100%)`,
          }}
        />

        {/* Layer 3: Top highlight (simulates light refraction) */}
        <div
          className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none"
          style={{
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
          }}
        />

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </motion.div>
    </motion.div>
  );
}
