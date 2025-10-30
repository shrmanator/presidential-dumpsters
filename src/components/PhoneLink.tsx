"use client";

import { useOfficeHours } from "./useOfficeHours";

interface PhoneLinkProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Auto-switching phone link that uses office number during business hours
 * and cell number outside business hours
 */
export function PhoneLink({ children, className = "" }: PhoneLinkProps) {
  const officeOpen = useOfficeHours();
  
  const href = officeOpen ? "tel:+1-475-441-6727" : "tel:+1-347-299-0482";

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
