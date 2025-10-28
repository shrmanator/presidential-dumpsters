interface OrderEmailContext {
  dumpsterName: string;
  basePrice: number;
  bookingDescriptor: string;
  contactName: string;
  address: string;
  phone: string;
  email: string;
  notes: string;
}

export const buildInternalOrderHtml = (context: OrderEmailContext) => {
  const {
    dumpsterName,
    basePrice,
    bookingDescriptor,
    contactName,
    address,
    phone,
    email,
    notes,
  } = context;

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px;">
      <h2 style="color: #333;">New Dumpster Rental Order</h2>

      <div style="background: #f9f9f9; padding: 15px; margin: 15px 0;">
        <p><strong>Dumpster Size:</strong> ${dumpsterName}</p>
        <p><strong>Base Price:</strong> $${basePrice}</p>
        <p><strong>Booking Type:</strong> ${bookingDescriptor}${
    contactName ? ` - ${contactName}` : ""
  }</p>
        <p><strong>Delivery Address:</strong> ${address}</p>
        <p><strong>Customer Phone:</strong> ${phone}</p>
        <p><strong>Customer Email:</strong> ${email || "Not provided"}</p>
        ${notes ? `<p><strong>Notes:</strong> ${notes}</p>` : ""}
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
};

export const buildCustomerConfirmationHtml = (context: OrderEmailContext) => {
  const {
    dumpsterName,
    basePrice,
    bookingDescriptor,
    contactName,
    address,
    phone,
    notes,
  } = context;

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px;">
      <h2 style="color: #333;">Thanks for reaching out!</h2>
      <p>We received your request for a ${dumpsterName} dumpster. Our team will reach out shortly to confirm delivery details.</p>
      <div style="background: #f9f9f9; padding: 15px; margin: 15px 0;">
        <p><strong>Booking type:</strong> ${bookingDescriptor}${
    contactName ? ` - ${contactName}` : ""
  }</p>
        <p><strong>Delivery address:</strong> ${address}</p>
        <p><strong>Base price:</strong> $${basePrice}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${notes ? `<p><strong>Notes you shared:</strong> ${notes}</p>` : ""}
      </div>
      <p style="margin-top: 20px;">If you need to adjust your delivery window, add special drop instructions, or request a same-day swap, call us at <strong>(347) 299-0482</strong>.</p>
      <p style="margin-top: 20px;">We look forward to working with you,<br>Presidential Dumpsters</p>
    </div>
  `;
};
