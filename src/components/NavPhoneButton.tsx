"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { isBusinessOpen } from "@/utils/business-hours";

export function NavPhoneButton() {
  const [officeOpen, setOfficeOpen] = useState(isBusinessOpen());

  useEffect(() => {
    const interval = setInterval(() => {
      setOfficeOpen(isBusinessOpen());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href={officeOpen ? "tel:+1-475-441-6727" : "tel:+1-347-299-0482"}
      className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:border-white/40 hover:bg-white/10"
    >
      <Phone className="h-4 w-4" /> {officeOpen ? "(475) 441-6727 Ext. 1" : "(347) 299-0482"}
    </a>
  );
}
