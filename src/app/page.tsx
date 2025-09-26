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

      {/* Testimonials Section */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-slate-600">Trusted by homeowners and contractors across Connecticut</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 mb-4">"Fast delivery and fair pricing. The crew was professional and placed the dumpster exactly where we needed it for our kitchen renovation."</p>
              <div className="font-semibold text-slate-900">Sarah M.</div>
              <div className="text-sm text-slate-500">Waterbury, CT</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 mb-4">"Presidential Dumpsters made our office cleanout so easy. Same-day delivery as promised and pickup was right on schedule."</p>
              <div className="font-semibold text-slate-900">Mike R.</div>
              <div className="text-sm text-slate-500">New Haven, CT</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 mb-4">"Great for our construction project. The 20-yard was perfect size and they were flexible with our timeline. Will definitely use again."</p>
              <div className="font-semibold text-slate-900">Jennifer L.</div>
              <div className="text-sm text-slate-500">Hartford, CT</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sizing Guide Section */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose the Right Size</h2>
            <p className="text-lg text-white/80">Not sure which dumpster size you need? Here's our quick guide.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">10-Yard Dumpster</h3>
                <span className="text-2xl font-bold text-emerald-400">$395</span>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-emerald-400 mb-2">Perfect For:</h4>
                  <ul className="space-y-1 text-white/80">
                    <li>• Small bathroom renovations</li>
                    <li>• Basement or attic cleanouts</li>
                    <li>• Single room projects</li>
                    <li>• Garage cleanouts</li>
                    <li>• Small landscaping jobs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-400 mb-2">Capacity:</h4>
                  <p className="text-white/80">Holds about 4 pickup truck loads</p>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-400 mb-2">Dimensions:</h4>
                  <p className="text-white/80">12' long × 8' wide × 4' high</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">20-Yard Dumpster</h3>
                <span className="text-2xl font-bold text-emerald-400">$550</span>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-emerald-400 mb-2">Perfect For:</h4>
                  <ul className="space-y-1 text-white/80">
                    <li>• Kitchen renovations</li>
                    <li>• Roofing projects</li>
                    <li>• Large basement cleanouts</li>
                    <li>• Construction debris</li>
                    <li>• Multi-room renovations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-400 mb-2">Capacity:</h4>
                  <p className="text-white/80">Holds about 8 pickup truck loads</p>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-400 mb-2">Dimensions:</h4>
                  <p className="text-white/80">22' long × 8' wide × 4' high</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white/5 rounded-2xl p-6 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">Still Not Sure?</h3>
              <p className="text-white/80 mb-4">
                Our experienced team can help you choose the right size based on your specific project.
                We'd rather have you get the right size the first time than deal with the hassle of swapping out dumpsters.
              </p>
              <a
                href="tel:+1-475-441-6727"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call for Free Sizing Advice
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Everything you need to know about our dumpster rental service</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">What sizes do you offer?</h3>
                <p className="text-slate-600">We offer 10-yard dumpsters ($395) perfect for small cleanouts and 20-yard dumpsters ($550) ideal for larger projects and construction work.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">How long can I keep the dumpster?</h3>
                <p className="text-slate-600">All rentals include 7 days on-site. Need longer? Just let us know and we can extend your rental period.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">What areas do you serve?</h3>
                <p className="text-slate-600">We serve Waterbury, New Haven, Hartford and surrounding Connecticut areas with same-week delivery.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Do I need a permit?</h3>
                <p className="text-slate-600">If the dumpster goes on your property, no permit needed. For street placement, you may need a city permit - we can advise you on local requirements.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">What can't go in the dumpster?</h3>
                <p className="text-slate-600">No hazardous materials, paint, chemicals, tires, or electronics. Standard household and construction debris is fine.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">How do I schedule delivery?</h3>
                <p className="text-slate-600">Fill out our quick form above or call (475) 441-6727. We'll confirm your order and schedule delivery within your timeframe.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
