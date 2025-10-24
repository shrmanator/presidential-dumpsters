"use client";

import { useState } from "react";
import { Building2, CheckCircleIcon, Home, XCircleIcon } from "lucide-react";
import { dumpsters, DumpsterSize } from "@/utils/pricing";
import { formatPhoneNumber } from "@/utils/validation";
import { handleOrderWithUI, BookingData } from "@/utils/order-handler";
import AddressAutocomplete from "@/components/AddressAutocomplete";

const bookingTypeOptions = [
  { id: "business", label: "For my business", icon: Building2 },
  { id: "residential", label: "For my place", icon: Home },
] as const;

const StepHeading = ({
  step,
  title,
  eyebrow,
  complete = false,
  active = false,
}: {
  step: string;
  title: string;
  eyebrow?: string;
  complete?: boolean;
  active?: boolean;
}) => (
  <div className="flex items-center justify-between gap-3">
    <div className="space-y-1.5">
      <span
        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium transition-all duration-200 ${
          complete ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-500"
        }`}
      >
        <span className="font-semibold">{step}</span>
        {eyebrow && <span className="font-normal opacity-80">{eyebrow}</span>}
      </span>
      <h3 className={`text-[15px] font-semibold tracking-tight transition-all duration-200 ${
        active ? "text-slate-900" : "text-slate-600"
      }`}>{title}</h3>
    </div>
  </div>
);

export function BookingFormCard() {
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

  const basePrice = selectedSize ? dumpsters[selectedSize].base : 0;
  const contactPlaceholder = booking.bookingType === "business" ? "Acme Builders" : "Alex Johnson";
  const phoneDigits = booking.phone.replace(/[^\d]/g, "");
  const isStep1Complete = booking.contactName.trim().length > 0;
  const isStep2Complete = Boolean(selectedSize);
  const isStep3Complete = booking.address.trim().length > 0;
  const isStep4Complete = phoneDigits.length >= 10 && booking.email.trim().length > 0;
  const currentStep = !isStep1Complete ? 1 : !isStep2Complete ? 2 : !isStep3Complete ? 3 : !isStep4Complete ? 4 : 4;
  const ctaLabel = selectedSize ? `Request dumpster • $${basePrice}` : "Request dumpster";

  const clearFieldError = (field: keyof BookingData | "address" | "phone" | "email") => {
    setErrors((prev) => {
      if (!prev[field]) {
        return prev;
      }
      const { [field]: _, ...rest } = prev; // eslint-disable-line @typescript-eslint/no-unused-vars
      return rest;
    });
  };

  const handleBookingTypeChange = (type: BookingData["bookingType"]) => {
    setBooking((prev) => ({
      ...prev,
      bookingType: type,
    }));
    clearFieldError("contactName");
  };

  const handleOrder = () => {
    if (!selectedSize) {
      return;
    }
    handleOrderWithUI(
      booking,
      selectedSize,
      setErrors,
      setIsSubmitting,
      setToastMessage,
      setToastType,
      setShowToast
    );
  };

  return (
    <>
      <section className="rounded-3xl border border-white/10 bg-white/95 p-6 text-slate-900">
        <div className="space-y-8">
          <div
            className={`space-y-4 rounded-2xl border px-5 py-5 transition-all duration-200 ${
              currentStep === 1
                ? "border-emerald-500/60 bg-white shadow-sm shadow-emerald-500/10"
                : isStep1Complete
                ? "border-emerald-400/50 bg-white"
                : "border-slate-200 bg-white/95"
            }`}
          >
            <StepHeading
              step="Step 1"
              eyebrow="Identity"
              title="Who are we dropping to?"
              active={currentStep === 1}
              complete={isStep1Complete}
            />
            <div className="grid gap-2 sm:grid-cols-2">
              {bookingTypeOptions.map((option) => {
                const Icon = option.icon;
                const isActive = booking.bookingType === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => handleBookingTypeChange(option.id)}
                    className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "border-emerald-600 bg-emerald-600 text-white shadow-sm"
                        : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98]"
                    }`}
                  >
                    <Icon className="h-4 w-4" /> {option.label}
                  </button>
                );
              })}
            </div>
            <div className="space-y-2">
              <label htmlFor="contact-name" className="text-sm font-medium text-slate-700">
                {booking.bookingType === "business" ? "Business name" : "Contact name"}
              </label>
              <input
                id="contact-name"
                type="text"
                placeholder={contactPlaceholder}
                required
                value={booking.contactName}
                onChange={(event) => {
                  setBooking((prev) => ({ ...prev, contactName: event.target.value }));
                  clearFieldError("contactName");
                }}
                className={`w-full rounded-xl border px-4 py-3 text-[15px] transition-all duration-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                  errors.contactName
                    ? "border-red-400 bg-red-50/50 focus:border-red-500 focus:bg-white focus:ring-red-500/20"
                    : "border-slate-200 bg-white focus:border-emerald-600 focus:bg-emerald-50/30 focus:ring-emerald-500/20"
                }`}
              />
              {errors.contactName && (
                <p className="text-sm text-red-500">{errors.contactName}</p>
              )}
            </div>
          </div>

          <div
            className={`space-y-4 rounded-2xl border px-5 py-5 transition-all duration-200 ${
              currentStep === 2
                ? "border-emerald-500/60 bg-white shadow-sm shadow-emerald-500/10"
                : isStep2Complete
                ? "border-emerald-400/50 bg-white"
                : "border-slate-200 bg-white/95"
            }`}
          >
            <StepHeading
              step="Step 2"
              eyebrow="Capacity"
              title="Pick a size"
              active={currentStep === 2}
              complete={isStep2Complete}
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {( ["10", "20"] as const).map((size) => {
                const isActive = selectedSize === size;
                return (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`rounded-xl border px-4 py-4 text-left transition-all duration-200 ${
                      isActive
                        ? "border-emerald-600 bg-emerald-600 text-white shadow-sm"
                        : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98]"
                    }`}
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-sm font-semibold">
                        <span>{dumpsters[size].name}</span>
                        <span className="tabular-nums">${dumpsters[size].base}</span>
                      </div>
                      <p className={`text-xs leading-relaxed ${isActive ? "text-white/80" : "text-slate-500"}`}>
                        {size === "10"
                          ? "Tight footprint, weekend clean-outs"
                          : "Roomy for new builds and heavy demos"}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className={`space-y-4 rounded-2xl border px-5 py-5 transition-all duration-200 ${
              currentStep === 3
                ? "border-emerald-500/60 bg-white shadow-sm shadow-emerald-500/10"
                : isStep3Complete
                ? "border-emerald-400/50 bg-white"
                : "border-slate-200 bg-white/95"
            }`}
          >
            <StepHeading
              step="Step 3"
              eyebrow="Address"
              title="Drop-off location"
              active={currentStep === 3}
              complete={isStep3Complete}
            />
            <AddressAutocomplete
              value={booking.address}
              onChange={(address) => {
                setBooking((prev) => ({ ...prev, address }));
                clearFieldError("address");
              }}
              placeholder="123 Main St, Waterbury"
              className={`w-full rounded-xl border px-4 py-3 text-[15px] transition-all duration-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                errors.address
                  ? "border-red-400 bg-red-50/50 focus:border-red-500 focus:bg-white focus:ring-red-500/20"
                  : "border-slate-200 bg-white focus:border-emerald-600 focus:bg-emerald-50/30 focus:ring-emerald-500/20"
              }`}
            />
            {errors.address && <p className="text-sm text-red-500">{errors.address}</p>}
          </div>

          <div
            className={`space-y-4 rounded-2xl border px-5 py-5 transition-all duration-200 ${
              currentStep === 4
                ? "border-emerald-500/60 bg-white shadow-sm shadow-emerald-500/10"
                : isStep4Complete
                ? "border-emerald-400/50 bg-white"
                : "border-slate-200 bg-white/95"
            }`}
          >
            <StepHeading
              step="Step 4"
              eyebrow="Confirm"
              title="Contact details"
              active={currentStep === 4}
              complete={isStep4Complete}
            />
            <p className="text-xs text-slate-500">Rental includes seven days on site.</p>
            <div className="space-y-3">
              <div className="space-y-2">
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  required
                  value={booking.phone}
                  onChange={(event) => {
                    const formatted = formatPhoneNumber(event.target.value);
                    setBooking((prev) => ({ ...prev, phone: formatted }));
                    clearFieldError("phone");
                  }}
                  autoComplete="tel"
                  className={`w-full rounded-xl border px-4 py-3 text-[15px] tabular-nums transition-all duration-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                    errors.phone
                      ? "border-red-400 bg-red-50/50 focus:border-red-500 focus:bg-white focus:ring-red-500/20"
                      : "border-slate-200 bg-white focus:border-emerald-600 focus:bg-emerald-50/30 focus:ring-emerald-500/20"
                  }`}
                />
                  </div>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="you@email.com"
                  required
                  value={booking.email}
                  onChange={(event) => {
                    setBooking((prev) => ({ ...prev, email: event.target.value }));
                    clearFieldError("email");
                  }}
                  autoComplete="email"
                  className={`w-full rounded-xl border px-4 py-3 text-[15px] transition-all duration-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                    errors.email
                      ? "border-red-400 bg-red-50/50 focus:border-red-500 focus:bg-white focus:ring-red-500/20"
                      : "border-slate-200 bg-white focus:border-emerald-600 focus:bg-emerald-50/30 focus:ring-emerald-500/20"
                  }`}
                />
              </div>
              <div>
                <textarea
                  placeholder="Notes (optional)"
                  rows={2}
                  value={booking.notes}
                  onChange={(event) => setBooking((prev) => ({ ...prev, notes: event.target.value }))}
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-[15px] transition-all duration-200 placeholder:text-slate-400 focus:border-emerald-600 focus:bg-emerald-50/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>
            </div>
            {(errors.phone || errors.email) && (
              <div className="space-y-1 text-sm text-red-500">
                {errors.phone && <p>{errors.phone}</p>}
                {errors.email && <p>{errors.email}</p>}
              </div>
            )}
          </div>

          <div className="space-y-3">
            <button
              type="button"
              onClick={handleOrder}
              disabled={isSubmitting}
              className={`w-full rounded-xl px-4 py-3.5 text-[15px] font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:ring-offset-2 focus:ring-offset-white ${
                isSubmitting
                  ? "cursor-not-allowed bg-slate-200 text-slate-500"
                  : "bg-emerald-600 text-white shadow-sm hover:bg-emerald-700 hover:shadow active:scale-[0.98] active:bg-emerald-800"
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-transparent"></div>
                  Scheduling delivery...
                </span>
              ) : (
                ctaLabel
              )}
            </button>
          </div>
        </div>
      </section>

      {showToast && (
        <div
          className={`fixed right-6 top-6 z-50 w-full max-w-sm animate-in slide-in-from-top-2 fade-in duration-300 rounded-2xl border p-4 shadow-lg backdrop-blur ${
            toastType === "success"
              ? "border-emerald-200 bg-white/95 shadow-emerald-500/10"
              : "border-red-200 bg-white/95 shadow-red-500/10"
          }`}
        >
          <div className="flex items-start gap-3 text-slate-900">
            <div className="mt-0.5">
              {toastType === "success" ? (
                <CheckCircleIcon className="h-5 w-5 text-emerald-500" />
              ) : (
                <XCircleIcon className="h-5 w-5 text-red-500" />
              )}
            </div>
            <div className="flex-1 text-sm font-medium leading-relaxed">{toastMessage}</div>
            <button
              type="button"
              onClick={() => setShowToast(false)}
              className="text-slate-400 transition-all duration-200 hover:text-slate-600 active:scale-90"
              aria-label="Dismiss notification"
            >
              <XCircleIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
