'use server';

import * as brevo from '@getbrevo/brevo';
import { dumpsters, DumpsterSize } from '@/utils/pricing';
import { BookingType } from '@/utils/validation';

const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY!);

export async function submitOrder(formData: {
  selectedSize: DumpsterSize;
  bookingType: BookingType;
  contactName: string;
  address: string;
  phone: string;
  email: string;
  notes: string;
}) {
  const { selectedSize, bookingType, contactName, address, phone, email, notes } = formData;

  if (!address || !phone) {
    return { success: false, message: 'Please add delivery address and phone number' };
  }

  const basePrice = dumpsters[selectedSize].base;
  const trimmedContact = contactName.trim();
  const bookingDescriptor = bookingType === 'business' ? 'Business' : 'Residential';

  try {
    const sendSmtpEmail = new brevo.SendSmtpEmail();
    sendSmtpEmail.sender = { name: 'Presidential Dumpsters', email: 'contact@digidov.com' };
    sendSmtpEmail.to = [{ email: 'office@presidentialmgmt.com', name: 'Presidential Management' }];
    sendSmtpEmail.subject = `New Dumpster Order - ${dumpsters[selectedSize].name}${
      trimmedContact ? ` for ${trimmedContact}` : ''
    }`;
    sendSmtpEmail.htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2 style="color: #333;">New Dumpster Rental Order</h2>

        <div style="background: #f9f9f9; padding: 15px; margin: 15px 0;">
          <p><strong>Dumpster Size:</strong> ${dumpsters[selectedSize].name}</p>
          <p><strong>Base Price:</strong> $${basePrice}</p>
          <p><strong>Booking Type:</strong> ${bookingDescriptor}${
            trimmedContact ? ` - ${trimmedContact}` : ''
          }</p>
          <p><strong>Delivery Address:</strong> ${address}</p>
          <p><strong>Customer Phone:</strong> ${phone}</p>
          <p><strong>Customer Email:</strong> ${email || 'Not provided'}</p>
          ${notes ? `<p><strong>Notes:</strong> ${notes}</p>` : ''}
        </div>

        <hr style="margin: 20px 0;">

        <div style="font-size: 12px; color: #666;">
          <p><strong>Presidential Dumpsters</strong><br>
          Waterbury, Connecticut<br>
          Phone: (347) 299-0482</p>

          <p>This order was submitted through our website contact form.</p>
        </div>
      </div>
    `;

    if (email) {
      sendSmtpEmail.replyTo = { email: email };
    }

    await apiInstance.sendTransacEmail(sendSmtpEmail);

    return {
      success: true,
      message: trimmedContact
        ? `Order submitted for ${trimmedContact}. We will reach out shortly to confirm.`
        : 'Order submitted successfully!',
      basePrice,
    };
  } catch (error) {
    console.error('Error sending order email:', error);
    console.error('Full error details:', JSON.stringify(error, null, 2));
    return {
      success: false,
      message: 'Failed to send order. Please call (347) 299-0482 directly.',
    };
  }
}
