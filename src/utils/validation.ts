
import { z } from 'zod';

export type BookingType = 'residential' | 'business';

export const formatPhoneNumber = (value: string) => {
  const phoneNumber = value.replace(/[^\d]/g, '');
  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
};

const bookingTypeEnum = z.enum(['residential', 'business']);

export const orderSchema = z
  .object({
    bookingType: bookingTypeEnum,
    contactName: z.string().transform((value) => value.trim()),
    address: z
      .string()
      .min(15, 'Please enter a complete delivery address')
      .refine(
        (addr) => addr.split(',').length >= 2,
        'Please select a full address from the dropdown'
      ),
    phone: z
      .string()
      .min(10, 'Phone number must be at least 10 digits')
      .transform((val) => val.replace(/[^\d]/g, ''))
      .refine((val) => val.length >= 10, 'Phone number must be at least 10 digits'),
    email: z
      .string()
      .min(1, 'Email address is required')
      .email('Please enter a valid email address'),
    notes: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (!data.contactName) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['contactName'],
        message:
          data.bookingType === 'business'
            ? 'Business name is required'
            : 'Contact name is required',
      });
      return;
    }

    if (data.contactName.length > 80) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['contactName'],
        message: 'Please keep it under 80 characters',
      });
    }
  });

export type OrderFormData = z.infer<typeof orderSchema>;

// Client-side validation functions for immediate UX feedback
export const validateContactName = (name: string, bookingType: BookingType): string | null => {
  if (!name.trim()) {
    return bookingType === 'business' ? 'Business name is required' : 'Contact name is required';
  }
  return null;
};

export const validateAddress = (address: string, wasSelected: boolean): string | null => {
  if (!wasSelected || address.split(',').length < 2 || address.length < 15) {
    return 'Please select a full address from the dropdown';
  }
  return null;
};

export const validatePhone = (phone: string): string | null => {
  const digits = phone.replace(/[^\d]/g, '');
  if (digits.length < 10) {
    return 'Phone number must be at least 10 digits';
  }
  return null;
};

export const validateEmail = (email: string): string | null => {
  if (!email.trim()) {
    return 'Email address is required';
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'Please enter a valid email address';
  }
  return null;
};
