"use client";

import { ReactNode } from "react";

interface LiquidGlassPanelProps {
  children: ReactNode;
  className?: string;
}

/**
 * Premium Liquid Glass panel with multi-layer blur system
 * Mimics Apple's iOS 26 Liquid Glass with progressive blur
 */
export function LiquidGlassPanel({
  children,
  className = "",
}: LiquidGlassPanelProps) {
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
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
        }}
      />

      {/* Layer 3: Near blur with tint (vibrancy) */}
      <div
        className="absolute inset-0 -z-10 rounded-3xl"
        style={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          background: "rgba(255, 255, 255, 0.08)",
        }}
      />

      {/* Main content container */}
      <div
        className="relative rounded-3xl border transition-all duration-300"
        style={{
          borderColor: "rgba(255, 255, 255, 0.15)",
          boxShadow: `
            0 8px 32px rgba(0, 0, 0, 0.12),
            0 2px 8px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            inset 0 -1px 0 rgba(0, 0, 0, 0.1)
          `,
        }}
      >
        {/* Top shine (light refraction simulation) */}
        <div
          className="absolute top-0 left-4 right-4 h-[2px] rounded-full pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.4) 20%, rgba(255,255,255,0.4) 80%, transparent)",
            filter: "blur(1px)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 p-6">{children}</div>
      </div>
    </div>
  );
}
