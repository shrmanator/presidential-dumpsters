import { dumpsters, DumpsterSize } from '@/utils/pricing';

export function handleOrder(
  selectedSize: DumpsterSize, 
  booking: { address: string; phone: string; email: string }
) {
  if (!booking.address || !booking.phone) {
    return { success: false, message: 'Please add delivery address and phone number' };
  }

  const basePrice = dumpsters[selectedSize].base;
  
  alert(
    `Confirmed! ${dumpsters[selectedSize].name} dumpster\n` +
    `Address: ${booking.address}\n` +
    `Base price: $${basePrice}. We'll call ${booking.phone} within 30 minutes to confirm final pricing.`
  );
  
  return { success: true, basePrice };
}