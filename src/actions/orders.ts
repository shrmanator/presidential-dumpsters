'use server';

import { Resend } from 'resend';
import { dumpsters, DumpsterSize } from '@/utils/pricing';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitOrder(formData: {
  selectedSize: DumpsterSize;
  address: string;
  phone: string;
  email: string;
}) {
  const { selectedSize, address, phone, email } = formData;
  
  if (!address || !phone) {
    return { success: false, message: 'Please add delivery address and phone number' };
  }

  const basePrice = dumpsters[selectedSize].base;
  
  try {
    await resend.emails.send({
      from: 'Presidential Dumpsters <onboarding@resend.dev>',
      replyTo: email || undefined,
      to: ['office@presidentialmgmt.com'],
      subject: `New Dumpster Order - ${dumpsters[selectedSize].name}`,
      html: `
        <h2>New Dumpster Order</h2>
        <p><strong>Dumpster Size:</strong> ${dumpsters[selectedSize].name}</p>
        <p><strong>Base Price:</strong> $${basePrice}</p>
        <p><strong>Delivery Address:</strong> ${address}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Customer Email:</strong> ${email || 'Not provided'}</p>
        
        <hr>
        <p><small>Order submitted from Presidential Dumpsters website</small></p>
      `,
    });
    
    return { 
      success: true, 
      message: "Order submitted successfully!",
      basePrice 
    };
  } catch (error) {
    console.error('Error sending order email:', error);
    return { 
      success: false, 
      message: 'Failed to send order. Please call (347) 299-0482 directly.' 
    };
  }
}