'use server';

import * as brevo from '@getbrevo/brevo';
import { dumpsters, DumpsterSize } from '@/utils/pricing';

const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY!);

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
    const sendSmtpEmail = new brevo.SendSmtpEmail();
    sendSmtpEmail.sender = { name: 'Presidential Dumpsters', email: 'dovindustries@gmail.com' };
    sendSmtpEmail.to = [{ email: 'office@presidentialmgmt.com', name: 'Presidential Management' }];
    sendSmtpEmail.subject = `New Dumpster Order - ${dumpsters[selectedSize].name}`;
    sendSmtpEmail.htmlContent = `
      <h2>New Dumpster Order</h2>
      <p><strong>Dumpster Size:</strong> ${dumpsters[selectedSize].name}</p>
      <p><strong>Base Price:</strong> $${basePrice}</p>
      <p><strong>Delivery Address:</strong> ${address}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Customer Email:</strong> ${email || 'Not provided'}</p>
      
      <hr>
      <p><small>Order submitted from Presidential Dumpsters website</small></p>
    `;
    
    if (email) {
      sendSmtpEmail.replyTo = { email: email };
    }

    await apiInstance.sendTransacEmail(sendSmtpEmail);
    
    return { 
      success: true, 
      message: "Order submitted successfully!",
      basePrice 
    };
  } catch (error) {
    console.error('Error sending order email:', error);
    console.error('Full error details:', JSON.stringify(error, null, 2));
    return { 
      success: false, 
      message: 'Failed to send order. Please call (347) 299-0482 directly.' 
    };
  }
}