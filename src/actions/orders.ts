'use server';

import * as brevo from '@getbrevo/brevo';
import { dumpsters, DumpsterSize } from '@/utils/pricing';
import { BookingType } from '@/utils/validation';
import {
  buildCustomerConfirmationHtml,
  buildInternalOrderHtml,
} from '@/utils/email-templates';

const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY!,
);

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

  const dumpster = dumpsters[selectedSize];
  const basePrice = dumpster.base;
  const trimmedContact = contactName.trim();
  const customerEmail = email.trim();
  const bookingDescriptor = bookingType === 'business' ? 'Business' : 'Residential';
  const emailContext = {
    dumpsterName: dumpster.name,
    basePrice,
    bookingDescriptor,
    contactName: trimmedContact,
    address,
    phone,
    email: customerEmail,
    notes,
  };

  try {
    const sendSmtpEmail = new brevo.SendSmtpEmail();
    sendSmtpEmail.sender = { name: 'Presidential Dumpsters', email: 'contact@digidov.com' };
    sendSmtpEmail.to = [{ email: 'office@presidentialmgmt.com', name: 'Presidential Management' }];
    sendSmtpEmail.subject = `New Dumpster Order - ${dumpster.name}${
      trimmedContact ? ` for ${trimmedContact}` : ''
    }`;
    sendSmtpEmail.htmlContent = buildInternalOrderHtml(emailContext);

    if (customerEmail) {
      sendSmtpEmail.replyTo = { email: customerEmail };
    }

    await apiInstance.sendTransacEmail(sendSmtpEmail);

    if (customerEmail) {
      const confirmationEmail = new brevo.SendSmtpEmail();
      confirmationEmail.sender = { name: 'Presidential Dumpsters', email: 'contact@digidov.com' };
      confirmationEmail.to = [
        { email: customerEmail, name: trimmedContact || 'Presidential Dumpsters customer' },
      ];
      confirmationEmail.subject = 'We received your dumpster request';
      confirmationEmail.replyTo = {
        email: 'office@presidentialmgmt.com',
        name: 'Presidential Management',
      };
      confirmationEmail.htmlContent = buildCustomerConfirmationHtml(emailContext);

      try {
        await apiInstance.sendTransacEmail(confirmationEmail);
      } catch (customerEmailError) {
        console.error('Error sending confirmation email to customer:', customerEmailError);
      }
    }

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

