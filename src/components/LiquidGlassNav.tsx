"use client";

import { useEffect, useState, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface LiquidGlassNavProps {
  children: ReactNode;
}

export function LiquidGlassNav({ children }: LiquidGlassNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Transform scroll position to nav height (shrinks from 80px to 64px)
  const navHeight = useTransform(scrollY, [0, 50], [80, 64]);

  // Transform scroll to padding (shrinks padding)
  const navPadding = useTransform(scrollY, [0, 50], [16, 12]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="sticky top-0 z-50 border-b transition-all duration-300"
      style={{
        height: navHeight,
        borderColor: scrolled
          ? "rgba(255, 255, 255, 0.1)"
          : "rgba(255, 255, 255, 0.05)",
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Layer 1: Backdrop blur */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
        }}
      />

      {/* Layer 2: Vibrancy (subtle color tint) */}
      <div
        className="absolute inset-0 -z-10 transition-opacity duration-300"
        style={{
          background: scrolled
            ? "linear-gradient(to bottom, rgba(6, 22, 51, 0.7), rgba(6, 22, 51, 0.85))"
            : "rgba(6, 22, 51, 0)",
          opacity: scrolled ? 1 : 0,
        }}
      />

      {/* Layer 3: Noise texture for depth */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.02] transition-opacity duration-300"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          opacity: scrolled ? 0.02 : 0,
        }}
      />

      {/* Content */}
      <motion.div
        className="mx-auto flex h-full max-w-7xl items-center px-6"
        style={{ paddingTop: navPadding, paddingBottom: navPadding }}
      >
        {children}
      </motion.div>
    </motion.nav>
  );
}
