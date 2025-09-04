import { orderSchema } from './validation';
import { submitOrder } from '@/actions/orders';
import { DumpsterSize } from './pricing';
import { ZodError } from 'zod';

export interface BookingData {
  address: string;
  phone: string;
  email: string;
}

export const handleOrderSubmission = async (
  booking: BookingData,
  selectedSize: DumpsterSize,
  setErrors: (errors: Record<string, string>) => void
): Promise<{ success: boolean; message: string }> => {
  setErrors({});
  
  try {
    const validatedData = orderSchema.parse(booking);
    
    const result = await submitOrder({
      selectedSize,
      address: validatedData.address,
      phone: validatedData.phone,
      email: validatedData.email || '',
    });
    
    return { success: result.success, message: result.message };
  } catch (error) {
    if (error instanceof ZodError) {
      const fieldErrors: Record<string, string> = {};
      error.issues.forEach((issue) => {
        const fieldName = issue.path[0];
        if (typeof fieldName === 'string') {
          fieldErrors[fieldName] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return { success: false, message: 'Please fix the errors above' };
    } else {
      console.error('Order submission failed:', error);
      return { 
        success: false, 
        message: 'Sorry, there was an error submitting your order. Please call (347) 299-0482 directly.' 
      };
    }
  }
};