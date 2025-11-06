"use client";

import { ReactNode } from "react";

interface LiquidGlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "accent";
}

export function LiquidGlassCard({
  children,
  className = "",
  variant = "default",
}: LiquidGlassCardProps) {
  const variantStyles = {
    default: {
      border: "rgba(255, 255, 255, 0.1)",
      background: "rgba(255, 255, 255, 0.05)",
      shadowColor: "rgba(255, 255, 255, 0.05)",
    },
    accent: {
      border: "rgba(16, 185, 129, 0.3)",
      background: "rgba(16, 185, 129, 0.1)",
      shadowColor: "rgba(16, 185, 129, 0.1)",
    },
  };

  const styles = variantStyles[variant];

  return (
    <div className={`liquid-glass-card ${className}`}>
      {/* Layer 1: Main glass container */}
      <div
        className="relative rounded-2xl p-4 transition-all duration-300
          hover:scale-[1.01]"
        style={{
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: styles.border,
          backdropFilter: "blur(12px) saturate(180%)",
          WebkitBackdropFilter: "blur(12px) saturate(180%)",
          boxShadow: `0 8px 32px ${styles.shadowColor},
                      inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
        }}
      >
        {/* Layer 2: Gradient overlay for depth */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
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
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
          }}
        />

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}
