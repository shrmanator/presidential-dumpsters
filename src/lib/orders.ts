import { calcPrice, dumpsters, DumpsterSize } from '@/utils/pricing';

export function handleOrder(
  selectedSize: DumpsterSize, 
  distanceMi: number, 
  booking: { zip: string; phone: string; email: string }
) {
  if (!booking.zip || !booking.phone) {
    return { success: false, message: 'Please add a ZIP and phone number' };
  }

  const price = calcPrice(selectedSize, distanceMi);
  
  alert(
    `Confirmed! ${dumpsters[selectedSize].name} dumpster\n` +
    `ZIP: ${booking.zip} | Distance: ${distanceMi} mi\n` +
    `Total: ${price.total.toFixed(2)}. We'll call ${booking.phone} within 30 minutes.`
  );
  
  return { success: true, price };
}