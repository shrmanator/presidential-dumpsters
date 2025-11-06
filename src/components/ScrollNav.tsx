"use client";

import { useEffect, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface ScrollNavProps {
  children: ReactNode;
}

export function ScrollNav({ children }: ScrollNavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="sticky top-0 z-50 border-b border-white/10
        backdrop-blur-sm transition-all duration-300"
      role="navigation"
      aria-label="Main navigation"
      animate={{
        backgroundColor: scrolled
          ? "rgba(6, 22, 51, 0.85)"
          : "rgba(6, 22, 51, 0)",
        boxShadow: scrolled
          ? "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
          : "0 0 0 0 rgba(0, 0, 0, 0)",
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.nav>
  );
}
