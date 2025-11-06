"use client";

import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useOfficeHours } from "./useOfficeHours";

export function NavPhoneButton() {
  const officeOpen = useOfficeHours();

  return (
    <motion.a
      href={officeOpen ? "tel:+1-475-441-6727" : "tel:+1-347-299-0482"}
      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-colors duration-200"
      style={{
        borderRadius: "12px",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
      whileHover={{
        y: -2,
        borderColor: "rgba(255, 255, 255, 0.4)",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        boxShadow: "0 4px 20px rgba(255, 255, 255, 0.1)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
    >
      <Phone className="h-4 w-4" /> {officeOpen ? "(475) 441-6727 Ext. 1" : "(347) 299-0482"}
    </motion.a>
  );
}
