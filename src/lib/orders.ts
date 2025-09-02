import { calcPrice, dumpsters, DumpsterSize } from '@/utils/pricing';

export function handleOrder(
  selectedSize: DumpsterSize, 
  distanceMi: number, 
  booking: { address: string; phone: string; email: string }
) {
  if (!booking.address || !booking.phone) {
    return { success: false, message: 'Please add delivery address and phone number' };
  }

  const price = calcPrice(selectedSize, distanceMi);
  
  alert(
    `Confirmed! ${dumpsters[selectedSize].name} dumpster\n` +
    `Address: ${booking.address}\n` +
    `Total: ${price.total.toFixed(2)}. We'll call ${booking.phone} within 30 minutes.`
  );
  
  return { success: true, price };
}