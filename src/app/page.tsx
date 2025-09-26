"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Building2, CheckCircleIcon, Home, Phone, Truck, XCircleIcon } from "lucide-react";
import { dumpsters, DumpsterSize } from "@/utils/pricing";
import AddressAutocomplete from "@/components/AddressAutocomplete";
import { formatPhoneNumber } from "@/utils/validation";
import { handleOrderWithUI, BookingData } from "@/utils/order-handler";

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
    <div className="space-y-1">
      <span
        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
          active ? "bg-blue-500/20 text-blue-600" : "bg-slate-100 text-slate-500"
        }`}
      >
        <span>{step}</span>
        {eyebrow && <span className="font-normal">{eyebrow}</span>}
      </span>
      <h3 className={`text-base font-semibold transition-colors ${
        active ? "text-slate-900" : "text-slate-700"
      }`}>{title}</h3>
    </div>
    {complete && <CheckCircleIcon className="h-4 w-4 text-emerald-500" />}
  </div>
);

export default function PresidentialDumpsters() {
  const [selectedSize, setSelectedSize] = useState<DumpsterSize>("20");
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

  const basePrice = dumpsters[selectedSize].base;
  const contactPlaceholder = booking.bookingType === "business" ? "Acme Builders" : "Alex Johnson";

    const phoneDigits = booking.phone.replace(/[^\d]/g, "");
  const isStep1Complete = booking.contactName.trim().length > 0;
  const isStep2Complete = Boolean(selectedSize);
  const isStep3Complete = booking.address.trim().length > 0;
  const isStep4Complete = phoneDigits.length >= 10 && booking.email.trim().length > 0;
  const currentStep = !isStep1Complete ? 1 : !isStep2Complete ? 2 : !isStep3Complete ? 3 : !isStep4Complete ? 4 : 4;
  const ctaLabel = `Request dumpster • $${basePrice}`;

  const clearFieldError = (field: keyof BookingData | "address" | "phone" | "email") => {
    setErrors((prev) => {
      if (!prev[field]) {
        return prev;
      }
      const { [field]: _, ...rest } = prev;
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
    <div className="min-h-screen bg-gradient-to-br from-[#061633] via-[#0a2d56] to-[#0b3f3c] text-white">
      <nav className="border-b border-white/10 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Presidential Dumpsters"
              width={200}
              height={72}
              className="h-12 w-auto"
              priority
              quality={100}
            />
          </div>
          <a
            href="tel:+1-475-441-6727"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/10"
          >
            <Phone className="h-4 w-4" /> (475) 441-6727
          </a>
        </div>
      </nav>

      <main className="mx-auto grid max-w-6xl items-start gap-12 px-6 pb-20 pt-16 text-white lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:gap-16">
        <section className="space-y-10">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
              <Truck className="h-3.5 w-3.5" /> Presidential Dumpsters
            </span>
            <h1 className="text-4xl font-light leading-tight tracking-tight text-white md:text-[3.75rem]">
              Schedule a roll-off.
            </h1>
            <p className="max-w-xl text-base text-white/70 md:text-lg">
              Choose a size, drop a pin, and we handle the rest.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-sm font-semibold text-white">Same-week availability</p>
                <p className="mt-1 text-sm text-white/70">Crews across New Haven, Waterbury, and Hartford.</p>
              </div>
              <div className="rounded-2xl border border-emerald-200/30 bg-emerald-500/10 p-4">
                <p className="text-sm font-semibold text-white">Licensed & insured</p>
                <p className="mt-1 text-sm text-white/70">State-licensed crews with full coverage on every haul.</p>
              </div>
            </div>
          </div>

        </section>

        <section className="rounded-3xl border border-white/10 bg-white/95 p-6 text-slate-900 shadow-xl">
          <div className="space-y-8">

            <div
              className={`space-y-4 rounded-2xl border px-5 py-5 transition ${
                currentStep === 1
                  ? "border-blue-500/60 bg-white shadow-lg shadow-blue-500/20"
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
                      className={`flex items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? "border-blue-600 bg-blue-600 text-white shadow-sm shadow-blue-600/30"
                          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
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
                  className={`w-full rounded-xl border px-4 py-3 text-base transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                    errors.contactName
                      ? "border-red-400 focus:ring-red-400/40"
                      : "border-slate-200 focus:border-blue-600"
                  }`}
                />
                {errors.contactName && (
                  <p className="text-sm text-red-500">{errors.contactName}</p>
                )}
              </div>
            </div>

            <div
              className={`space-y-4 rounded-2xl border px-5 py-5 transition ${
                currentStep === 2
                  ? "border-blue-500/60 bg-white shadow-lg shadow-blue-500/20"
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
                      className={`rounded-2xl border px-4 py-4 text-left transition-colors ${
                        isActive
                          ? "border-emerald-500 bg-emerald-500 text-white shadow-sm shadow-emerald-500/30"
                          : "border-slate-200 bg-white hover:border-slate-300"
                      }`}
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-sm font-semibold">
                          <span>{dumpsters[size].name}</span>
                          <span>${dumpsters[size].base}</span>
                        </div>
                        <p className={`text-xs ${isActive ? "text-white/80" : "text-slate-500"}`}>
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
              className={`space-y-4 rounded-2xl border px-5 py-5 transition ${
                currentStep === 3
                  ? "border-blue-500/60 bg-white shadow-lg shadow-blue-500/20"
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
                className={`w-full rounded-xl border px-4 py-3 text-base transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                  errors.address
                    ? "border-red-400 focus:ring-red-400/40"
                    : "border-slate-200 focus:border-blue-600"
                }`}
              />
              {errors.address && <p className="text-sm text-red-500">{errors.address}</p>}
            </div>

            <div
              className={`space-y-4 rounded-2xl border px-5 py-5 transition ${
                currentStep === 4
                  ? "border-blue-500/60 bg-white shadow-lg shadow-blue-500/20"
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
                    className={`w-full rounded-xl border px-4 py-3 text-base transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                      errors.phone
                        ? "border-red-400 focus:ring-red-400/40"
                        : "border-slate-200 focus:border-blue-600"
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
                    className={`w-full rounded-xl border px-4 py-3 text-base transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                      errors.email
                        ? "border-red-400 focus:ring-red-400/40"
                        : "border-slate-200 focus:border-blue-600"
                    }`}
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Notes (optional)"
                    rows={2}
                    value={booking.notes}
                    onChange={(event) => setBooking((prev) => ({ ...prev, notes: event.target.value }))}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-base focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
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
                className={`w-full rounded-2xl px-4 py-4 text-base font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-yellow-400/30 shadow-lg ${
                  isSubmitting
                    ? "cursor-not-allowed bg-slate-200 text-slate-500"
                    : "bg-gradient-to-r from-green-500 via-emerald-400 to-yellow-400 text-slate-900 hover:from-green-600 hover:via-emerald-500 hover:to-yellow-500 hover:shadow-xl hover:shadow-green-500/20 active:scale-[0.98] active:shadow-md"
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
      </main>

      <footer className="border-t border-white/10 bg-[#061633]/60 py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p className="font-medium text-white">Presidential Dumpsters</p>
            <p>PO Box 4141, Waterbury, CT 06704</p>
          </div>
          <div className="space-y-1">
            <p>Office hours: Mon-Thu 10a-5p | Fri 10a-12p</p>
            <a href="tel:+1-475-441-6727" className="hover:text-white">
              (475) 441-6727 Ext. 1
            </a>
          </div>
          <p className="text-xs text-white/50">Licensed and insured roll-off service</p>
        </div>
      </footer>

      {showToast && (
        <div
          className={`fixed right-6 top-6 z-50 w-full max-w-sm rounded-2xl border p-4 shadow-xl transition-opacity backdrop-blur ${
            toastType === "success"
              ? "border-emerald-200 bg-white/95"
              : "border-red-200 bg-white/95"
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
            <div className="flex-1 text-sm font-medium">{toastMessage}</div>
            <button
              type="button"
              onClick={() => setShowToast(false)}
              className="text-slate-400 transition-colors hover:text-slate-600"
              aria-label="Dismiss notification"
            >
              <XCircleIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
