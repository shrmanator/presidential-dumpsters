import { useState, useEffect } from "react";
import { isBusinessOpen } from "@/utils/business-hours";

/**
 * Hook that tracks office hours status and polls every minute.
 * Colocated with components in /components since both NavPhoneButton
 * and Footer need this logic.
 */
export function useOfficeHours() {
  const [officeOpen, setOfficeOpen] = useState(isBusinessOpen());

  useEffect(() => {
    const interval = setInterval(() => {
      setOfficeOpen(isBusinessOpen());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return officeOpen;
}
