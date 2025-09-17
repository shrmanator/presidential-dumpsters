export function isBusinessOpen(): boolean {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();

  // Monday-Thursday 10AM-5PM, Friday 10AM-12PM
  if (day >= 1 && day <= 4) {
    return hour >= 10 && hour < 17;
  } else if (day === 5) {
    return hour >= 10 && hour < 12;
  }

  return false;
}