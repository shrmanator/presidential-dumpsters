export function isBusinessOpen(): boolean {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  
  // Sunday-Friday, 6AM-6PM
  return day >= 0 && day <= 5 && hour >= 6 && hour < 18;
}