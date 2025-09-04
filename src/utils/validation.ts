import { z } from 'zod';

export const formatPhoneNumber = (value: string) => {
  const phoneNumber = value.replace(/[^\d]/g, '');
  const phoneNumberLength = phoneNumber.length;
  
  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
};

export const orderSchema = z.object({
  address: z.string().min(1, 'Delivery address is required'),
  phone: z.string()
    .min(10, 'Phone number must be at least 10 digits')
    .transform(val => val.replace(/[^\d]/g, ''))
    .refine(val => val.length >= 10, 'Phone number must be at least 10 digits'),
  email: z.string().min(1, 'Email address is required').email('Please enter a valid email address'),
});

export type OrderFormData = z.infer<typeof orderSchema>;