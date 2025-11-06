"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  href?: string;
}

export function ButtonCSS({
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
    primary: "bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/40 focus:ring-emerald-400/50",
    secondary: "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 shadow-md shadow-white/5 hover:shadow-lg hover:shadow-white/10 focus:ring-white/30",
    ghost: "bg-transparent text-white hover:bg-white/10 focus:ring-white/20",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const baseClasses = `
    inline-flex items-center justify-center gap-2 font-semibold
    rounded-xl transition-all duration-200
    hover:-translate-y-0.5 active:scale-[0.98]
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        {...(href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </button>
  );
}
