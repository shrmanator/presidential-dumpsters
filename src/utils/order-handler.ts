import { orderSchema, BookingType } from "./validation";
import { submitOrder } from "@/actions/orders";
import { DumpsterSize } from "./pricing";
import { ZodError } from "zod";

export interface BookingData {
  bookingType: BookingType;
  contactName: string;
  address: string;
  phone: string;
  email: string;
  notes: string;
}

export const handleOrderSubmission = async (
  booking: BookingData,
  selectedSize: DumpsterSize,
  setErrors: (errors: Record<string, string>) => void
): Promise<{ success: boolean; message: string; showToast: boolean }> => {
  setErrors({});

  try {
    const validatedData = orderSchema.parse(booking);
    const contactName = validatedData.contactName.trim();

    const result = await submitOrder({
      selectedSize,
      bookingType: validatedData.bookingType,
      contactName,
      address: validatedData.address,
      phone: validatedData.phone,
      email: validatedData.email,
      notes: validatedData.notes?.trim() || '',
    });

    return {
      success: result.success,
      message: result.message,
      showToast: true,
    };
  } catch (error) {
    if (error instanceof ZodError) {
      const fieldErrors: Record<string, string> = {};
      error.issues.forEach((issue) => {
        const fieldName = issue.path[0];
        if (typeof fieldName === "string") {
          fieldErrors[fieldName] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return { success: false, message: "", showToast: false };
    } else {
      console.error("Order submission failed:", error);
      return {
        success: false,
        message:
          "Sorry, there was an error submitting your order. Please call (347) 299-0482 directly.",
        showToast: true,
      };
    }
  }
};

const checkRateLimit = (): { allowed: boolean; message?: string } => {
  const now = Date.now();

  // Get rate limiting data from localStorage
  const lastSubmission = parseInt(
    localStorage.getItem("lastOrderSubmission") || "0"
  );
  const submissionCount = parseInt(
    localStorage.getItem("orderSubmissionCount") || "0"
  );
  const timeSinceLastSubmission = now - lastSubmission;

  // Rate limiting: 3 seconds between submissions (relaxed for testing)
  if (timeSinceLastSubmission < 3000) {
    return {
      allowed: false,
      message: "Please wait before submitting another order.",
    };
  }

  // Reset count after 5 minutes
  let newCount = submissionCount;
  if (timeSinceLastSubmission > 300000) {
    newCount = 0;
  }

  // Max 10 submissions per 5-minute window (relaxed for testing)
  if (newCount >= 10) {
    return {
      allowed: false,
      message: "Too many submissions. Please wait 5 minutes.",
    };
  }

  // Update localStorage
  localStorage.setItem("lastOrderSubmission", now.toString());
  localStorage.setItem("orderSubmissionCount", (newCount + 1).toString());

  return { allowed: true };
};

export const handleOrderWithUI = async (
  booking: BookingData,
  selectedSize: DumpsterSize,
  setErrors: (errors: Record<string, string>) => void,
  setIsSubmitting: (loading: boolean) => void,
  setToastMessage: (message: string) => void,
  setToastType: (type: "success" | "error") => void,
  setShowToast: (show: boolean) => void
) => {
  // Check rate limit first
  const rateCheck = checkRateLimit();
  if (!rateCheck.allowed) {
    setToastMessage(rateCheck.message!);
    setToastType("error");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    return;
  }

  setIsSubmitting(true);

  // Allow UI to update immediately
  setTimeout(async () => {
    try {
      const result = await handleOrderSubmission(
        booking,
        selectedSize,
        setErrors
      );

      if (result.showToast) {
        const trimmedName = booking.contactName.trim();
        const personalizedSuccess =
          result.success && trimmedName
            ? `Request received for ${trimmedName}. We'll be in touch soon.`
            : result.message;

        setToastMessage(
          personalizedSuccess ||
            (result.success
              ? "Request sent. We'll be in touch shortly."
              : "Sorry, there was an issue submitting your order.")
        );
        setToastType(result.success ? "success" : "error");
        setShowToast(true);

        setTimeout(() => setShowToast(false), 7000);
      }
    } finally {
      setIsSubmitting(false);
    }
  }, 0);
};
