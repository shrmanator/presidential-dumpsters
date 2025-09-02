export const BUSINESS_HOURS = {
  days: [0, 1, 2, 3, 4, 5] as const, // Sunday through Friday
  startHour: 6,
  endHour: 18,
} as const;

export function isBusinessOpen(): boolean {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  
  return day >= 0 && day <= 5 && 
         hour >= BUSINESS_HOURS.startHour && 
         hour < BUSINESS_HOURS.endHour;
}