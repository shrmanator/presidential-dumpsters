"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BaseButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

interface ButtonAsButton extends BaseButtonProps {
  href?: never;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

interface ButtonAsLink extends BaseButtonProps {
  href: string;
  onClick?: never;
  disabled?: never;
  type?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
  type = "button",
  className = "",
  href,
}: ButtonProps) {
  const variants = {
    primary: {
      base: "bg-emerald-600 text-white",
      hover: "bg-emerald-700",
      shadow: "shadow-lg shadow-emerald-600/30",
      shadowHover: "shadow-xl shadow-emerald-600/40",
      ring: "ring-emerald-400/50",
    },
    secondary: {
      base: "bg-white/10 text-white backdrop-blur-sm",
      hover: "bg-white/20",
      shadow: "shadow-md shadow-white/5",
      shadowHover: "shadow-lg shadow-white/10",
      ring: "ring-white/30",
    },
    ghost: {
      base: "bg-transparent text-white",
      hover: "bg-white/10",
      shadow: "",
      shadowHover: "",
      ring: "ring-white/20",
    },
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const style = variants[variant];

  const baseClasses = `
    inline-flex items-center justify-center gap-2 font-semibold
    rounded-xl transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent
    disabled:opacity-50 disabled:cursor-not-allowed
    ${style.base}
    ${sizes[size]}
    ${style.shadow}
    ${style.ring}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const motionProps = {
    whileHover: disabled ? {} : {
      y: -2,
      boxShadow: variant === 'ghost' ? undefined : style.shadowHover,
    },
    whileTap: disabled ? {} : { scale: 0.98 },
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 30,
    },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        {...motionProps}
        {...(href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
