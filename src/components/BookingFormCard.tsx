"use client";

import { useState } from "react";
import { Building2, CheckCircleIcon, Home, XCircleIcon } from "lucide-react";
import { dumpsters, DumpsterSize } from "@/utils/pricing";
import { formatPhoneNumber, validateContactName, validateAddress, validatePhone, validateEmail } from "@/utils/validation";
import { handleOrderWithUI, BookingData } from "@/utils/order-handler";
import AddressAutocomplete from "@/components/AddressAutocomplete";

const bookingTypeOptions = [
  { id: "business", label: "Business", icon: Building2 },
  { id: "residential", label: "Residential", icon: Home },
] as const;

interface BookingFormCardProps {
  addressPlaceholder?: string;
}

export function BookingFormCard({ addressPlaceholder = "123 Main St, Waterbury" }: BookingFormCardProps = {}) {
  const [selectedSize, setSelectedSize] = useState<DumpsterSize | null>(null);
  const [booking, setBooking] = useState<BookingData>({
    bookingType: "business",
    contactName: "",
    address: "",
    phone: "",
    email: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "error">("success");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [wasAddressSelected, setWasAddressSelected] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const basePrice = selectedSize ? dumpsters[selectedSize].base : 0;
  const contactPlaceholder = booking.bookingType === "business" ? "Acme Builders" : "Alex Johnson";
  const phoneDigits = booking.phone.replace(/[^\d]/g, "");

  const clearFieldError = (field: keyof BookingData | "address" | "phone" | "email" | "size") => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const { [field]: _, ...rest } = prev; // eslint-disable-line @typescript-eslint/no-unused-vars
      return rest;
    });
  };

  const handleBookingTypeChange = (type: BookingData["bookingType"]) => {
    setBooking((prev) => ({ ...prev, bookingType: type }));
    clearFieldError("contactName");
  };

  const resetForm = () => {
    setSelectedSize(null);
    setBooking({
      bookingType: "business",
      contactName: "",
      address: "",
      phone: "",
      email: "",
      notes: "",
    });
    setWasAddressSelected(false);
  };

  const handleSuccessAnimation = () => {
    setSubmitSuccess(true);
    setTimeout(() => {
      resetForm();
      setTimeout(() => setSubmitSuccess(false), 100);
    }, 2000);
  };

  const handleOrder = (event?: React.MouseEvent<HTMLButtonElement>) => {
    const validationErrors: Record<string, string> = {};

    const contactNameError = validateContactName(booking.contactName, booking.bookingType);
    if (contactNameError) validationErrors.contactName = contactNameError;

    if (!selectedSize) validationErrors.size = "Please select a dumpster size";

    const addressError = validateAddress(booking.address, wasAddressSelected);
    if (addressError) validationErrors.address = addressError;

    const phoneError = validatePhone(booking.phone);
    if (phoneError) validationErrors.phone = phoneError;

    const emailError = validateEmail(booking.email);
    if (emailError) validationErrors.email = emailError;

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (!selectedSize) return;

    // Test mode: Shift+Click to simulate success
    if (event?.shiftKey) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        handleSuccessAnimation();
      }, 1500);
      return;
    }

    handleOrderWithUI(
      booking,
      selectedSize,
      setErrors,
      setIsSubmitting,
      (message: string) => {
        setToastMessage(message);
        if (message.toLowerCase().includes('received') || message.toLowerCase().includes('submitted')) {
          handleSuccessAnimation();
        }
      },
      setToastType,
      setShowToast
    );
  };

  return (
    <>
      <div className="space-y-8">
        {/* Step 1: Type */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-black">
            Type
          </label>
          <div className="grid grid-cols-2 gap-3">
            {bookingTypeOptions.map((option) => {
              const Icon = option.icon;
              const isActive = booking.bookingType === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleBookingTypeChange(option.id)}
                  className={`flex items-center justify-center gap-2 rounded-md border px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "border-black bg-black text-white"
                      : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:text-black"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {option.label}
                </button>
              );
            })}
          </div>
          <input
            type="text"
            placeholder={contactPlaceholder}
            value={booking.contactName}
            onChange={(e) => {
              setBooking((prev) => ({ ...prev, contactName: e.target.value }));
              clearFieldError("contactName");
            }}
            className={`w-full rounded-md border px-4 py-2.5 text-sm transition-colors ${
              errors.contactName
                ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                : "border-gray-200 hover:border-gray-300 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
            }`}
          />
          {errors.contactName && (
            <p className="text-sm text-red-600">{errors.contactName}</p>
          )}
        </div>

        {/* Step 2: Size */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-black">
            Size
          </label>
          <div className="grid grid-cols-2 gap-3">
            {(["10", "20"] as const).map((size) => {
              const isActive = selectedSize === size;
              return (
                <button
                  key={size}
                  type="button"
                  onClick={() => {
                    setSelectedSize(size);
                    clearFieldError("size");
                  }}
                  className={`rounded-md border p-4 text-left transition-colors ${
                    isActive
                      ? "border-black bg-black text-white"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm font-semibold">
                        {dumpsters[size].name}
                      </span>
                      <span className="text-lg font-bold">
                        ${dumpsters[size].base}
                      </span>
                    </div>
                    <p className={`text-xs ${isActive ? "text-white/70" : "text-gray-500"}`}>
                      {size === "10"
                        ? "Small projects"
                        : "Large projects"}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
          {errors.size && <p className="text-sm text-red-600">{errors.size}</p>}
        </div>

        {/* Step 3: Address */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-black">
            Delivery address
          </label>
          <AddressAutocomplete
            value={booking.address}
            onChange={(address) => {
              setBooking((prev) => ({ ...prev, address }));
              clearFieldError("address");
            }}
            onSelectionChange={setWasAddressSelected}
            placeholder={addressPlaceholder}
            className={`w-full rounded-md border px-4 py-2.5 text-sm transition-colors ${
              errors.address
                ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                : "border-gray-200 hover:border-gray-300 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
            }`}
          />
          {errors.address && <p className="text-sm text-red-600">{errors.address}</p>}
        </div>

        {/* Step 4: Contact */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-black">
            Contact information
          </label>
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <input
                type="tel"
                placeholder="(555) 123-4567"
                value={booking.phone}
                onChange={(e) => {
                  const formatted = formatPhoneNumber(e.target.value);
                  setBooking((prev) => ({ ...prev, phone: formatted }));
                  clearFieldError("phone");
                }}
                autoComplete="tel"
                className={`w-full rounded-md border px-4 py-2.5 text-sm transition-colors ${
                  errors.phone
                    ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border-gray-200 hover:border-gray-300 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                }`}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
            </div>
            <div>
              <input
                type="email"
                placeholder="you@email.com"
                value={booking.email}
                onChange={(e) => {
                  setBooking((prev) => ({ ...prev, email: e.target.value }));
                  clearFieldError("email");
                }}
                autoComplete="email"
                className={`w-full rounded-md border px-4 py-2.5 text-sm transition-colors ${
                  errors.email
                    ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border-gray-200 hover:border-gray-300 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                }`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>
          </div>
          <textarea
            placeholder="Notes (optional)"
            rows={3}
            value={booking.notes}
            onChange={(e) => setBooking((prev) => ({ ...prev, notes: e.target.value }))}
            className="w-full resize-none rounded-md border border-gray-200 px-4 py-2.5 text-sm transition-colors hover:border-gray-300 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        {/* Submit */}
        <button
          type="button"
          onClick={handleOrder}
          disabled={isSubmitting || submitSuccess}
          className={`w-full rounded-md px-4 py-3 text-sm font-semibold transition-colors ${
            submitSuccess
              ? "cursor-default bg-black text-white"
              : isSubmitting
              ? "cursor-not-allowed bg-gray-200 text-gray-400"
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          {submitSuccess ? (
            <span className="flex items-center justify-center gap-2">
              <CheckCircleIcon className="h-4 w-4" />
              Submitted
            </span>
          ) : isSubmitting ? (
            "Submitting..."
          ) : selectedSize ? (
            `Request dumpster • $${basePrice}`
          ) : (
            "Request dumpster"
          )}
        </button>
      </div>

      {/* Toast */}
      {showToast && (
        <div
          className={`fixed right-6 top-6 z-50 w-full max-w-sm animate-in slide-in-from-top-2 fade-in duration-300 rounded-md border p-4 shadow-lg ${
            toastType === "success"
              ? "border-gray-200 bg-white"
              : "border-red-200 bg-red-50"
          }`}
        >
          <div className="flex items-start gap-3 text-black">
            <div className="mt-0.5">
              {toastType === "success" ? (
                <CheckCircleIcon className="h-5 w-5 text-black" />
              ) : (
                <XCircleIcon className="h-5 w-5 text-red-600" />
              )}
            </div>
            <div className="flex-1 text-sm font-medium">{toastMessage}</div>
            <button
              type="button"
              onClick={() => setShowToast(false)}
              className="text-gray-400 transition-colors hover:text-black"
              aria-label="Dismiss"
            >
              <XCircleIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
