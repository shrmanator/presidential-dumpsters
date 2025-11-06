"use client";

import { ReactNode } from "react";

interface LiquidGlassPanelProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "accent" | "blue";
}

/**
 * Premium Liquid Glass panel with multi-layer blur system
 * Mimics Apple's iOS 26 Liquid Glass with progressive blur
 */
export function LiquidGlassPanel({
  children,
  className = "",
  variant = "default",
}: LiquidGlassPanelProps) {
  const variantStyles = {
    default: {
      border: "rgba(255, 255, 255, 0.15)",
      midGradient:
        "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
      nearTint: "rgba(255, 255, 255, 0.08)",
      shine: "rgba(255,255,255,0.4)",
      shadow: `
        0 8px 32px rgba(0, 0, 0, 0.12),
        0 2px 8px rgba(0, 0, 0, 0.08),
        inset 0 1px 0 rgba(255, 255, 255, 0.15),
        inset 0 -1px 0 rgba(0, 0, 0, 0.1)
      `,
    },
    accent: {
      border: "rgba(16, 185, 129, 0.25)",
      midGradient:
        "linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(255,255,255,0.05) 100%)",
      nearTint: "rgba(16, 185, 129, 0.06)",
      shine: "rgba(16,185,129,0.35)",
      shadow: `
        0 8px 32px rgba(16, 185, 129, 0.15),
        0 2px 8px rgba(16, 185, 129, 0.08),
        inset 0 1px 0 rgba(16, 185, 129, 0.2),
        inset 0 -1px 0 rgba(0, 0, 0, 0.1)
      `,
    },
    blue: {
      border: "rgba(10, 33, 71, 0.3)",
      midGradient:
        "linear-gradient(135deg, rgba(10,33,71,0.1) 0%, rgba(6,22,51,0.05) 100%)",
      nearTint: "rgba(10, 33, 71, 0.08)",
      shine: "rgba(10,33,71,0.4)",
      shadow: `
        0 8px 32px rgba(10, 33, 71, 0.15),
        0 2px 8px rgba(10, 33, 71, 0.08),
        inset 0 1px 0 rgba(10, 33, 71, 0.2),
        inset 0 -1px 0 rgba(0, 0, 0, 0.1)
      `,
    },
  };

  const styles = variantStyles[variant];

  return (
    <div className={`relative ${className}`}>
      {/* Layer 1: Far blur (creates depth) */}
      <div
        className="absolute inset-0 -z-30 rounded-3xl"
        style={{
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          opacity: 0.3,
        }}
      />

      {/* Layer 2: Mid blur (main glass effect) */}
      <div
        className="absolute inset-0 -z-20 rounded-3xl"
        style={{
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          background: styles.midGradient,
        }}
      />

      {/* Layer 3: Near blur with tint (vibrancy) */}
      <div
        className="absolute inset-0 -z-10 rounded-3xl"
        style={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          background: styles.nearTint,
        }}
      />

      {/* Main content container */}
      <div
        className="relative rounded-3xl border transition-all duration-300"
        style={{
          borderColor: styles.border,
          boxShadow: styles.shadow,
        }}
      >
        {/* Top shine (light refraction simulation) */}
        <div
          className="absolute top-0 left-4 right-4 h-[2px] rounded-full pointer-events-none"
          style={{
            background: `linear-gradient(90deg, transparent, ${styles.shine} 20%, ${styles.shine} 80%, transparent)`,
            filter: "blur(1px)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 p-6">{children}</div>
      </div>
    </div>
  );
}
