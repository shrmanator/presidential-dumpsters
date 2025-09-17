"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, Clock } from "lucide-react";
import { dumpsters, DumpsterSize } from "@/utils/pricing";
import { isBusinessOpen } from "@/utils/business-hours";
import AddressAutocomplete from "@/components/AddressAutocomplete";
import { formatPhoneNumber } from "@/utils/validation";
import { handleOrderWithUI } from "@/utils/order-handler";
import { CheckCircleIcon, XCircleIcon } from "lucide-react";

export default function PresidentialDumpsters() {
  const [selectedSize, setSelectedSize] = useState<DumpsterSize>("20");
  const [booking, setBooking] = useState({ address: "", phone: "", email: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "error">("success");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const basePrice = dumpsters[selectedSize].base;

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
    <div className="min-h-screen bg-gradient-to-br from-[#0B1C46] via-[#1a2951] to-[#0B1C46] text-white">
      {/* Nav */}
      <nav className="relative z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 py-1 flex justify-between items-center">
          <div>
            <Image
              src="/logo.png"
              alt="Presidential Management"
              width={450}
              height={144}
              className="h-24 sm:h-32 lg:h-36 w-auto"
              priority
              quality={100}
            />
          </div>
          <div>
            <a
              href="tel:+1-475-441-6727"
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all shadow-lg font-medium text-sm sm:text-base"
            >
              <Phone className="w-3 h-3 sm:w-4 sm:h-4" /> (475) 441-6727
            </a>
          </div>
        </div>
      </nav>

      {/* Modern Single-Purpose Hero */}
      <section className="min-h-[90vh] flex items-center justify-center px-4 pb-32 relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-2xl mx-auto relative z-10">

          {/* Ultra-minimal header */}
          <div className="text-center mb-16 mt-8">
            <h1 className="text-[3.5rem] md:text-[5rem] font-light leading-[0.9] mb-8 text-white tracking-[-0.02em]">
              Dumpster
              <br />
              <span className="font-bold">rentals</span>
            </h1>

            <p className="text-xl text-white/80 mb-2">7-day rental from ${dumpsters["10"].base}</p>
          </div>

          {/* Glassmorphism form container */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl space-y-8">

            {/* Step 1: Size selection with pricing */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-white">What size do you need?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(["10", "20"] as const).map((sz) => (
                  <button
                    type="button"
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`group relative p-6 text-left rounded-2xl border-2 transition-all duration-200 backdrop-blur-sm ${
                      selectedSize === sz
                        ? "border-green-400 bg-green-400/10 shadow-lg"
                        : "border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-semibold text-white">{dumpsters[sz].name}</div>
                        <div className="text-sm text-white/70 mt-1">{sz === "10" ? "Small cleanouts & renovations" : "Large projects & construction"}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">${dumpsters[sz].base}</div>
                        <div className="text-xs text-white/70">7 days</div>
                      </div>
                    </div>
                    {selectedSize === sz && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 12 12">
                          <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Address */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-white">Where should we deliver it?</h3>
              <AddressAutocomplete
                value={booking.address}
                onChange={(address) => setBooking({ ...booking, address })}
                placeholder="123 Main St, City, State"
                className={`w-full px-4 py-4 text-lg border-2 rounded-xl transition-colors backdrop-blur-sm ${
                  errors.address
                    ? "border-red-400 focus:border-red-300"
                    : "border-white/30 focus:border-green-400"
                } focus:outline-none bg-white/10 text-white placeholder-white/60`}
              />
              {errors.address && (
                <p className="text-red-300 text-sm pl-1">{errors.address}</p>
              )}
            </div>

            {/* Step 3: Contact */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-white">How can we reach you?</h3>
              <div className="space-y-3">
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={booking.phone}
                  onChange={(e) => {
                    const formatted = formatPhoneNumber(e.target.value);
                    setBooking({ ...booking, phone: formatted });
                  }}
                  autoComplete="tel"
                  className={`w-full px-4 py-4 text-lg border-2 rounded-xl transition-colors backdrop-blur-sm ${
                    errors.phone
                      ? "border-red-400 focus:border-red-300"
                      : "border-white/30 focus:border-green-400"
                  } focus:outline-none bg-white/10 text-white placeholder-white/60`}
                />
                <input
                  type="email"
                  placeholder="you@email.com"
                  value={booking.email}
                  onChange={(e) => setBooking({ ...booking, email: e.target.value })}
                  autoComplete="email"
                  className={`w-full px-4 py-4 text-lg border-2 rounded-xl transition-colors backdrop-blur-sm ${
                    errors.email
                      ? "border-red-400 focus:border-red-300"
                      : "border-white/30 focus:border-green-400"
                  } focus:outline-none bg-white/10 text-white placeholder-white/60`}
                />
              </div>
              {(errors.phone || errors.email) && (
                <div className="text-red-300 text-sm pl-1 space-y-1">
                  {errors.phone && <p>{errors.phone}</p>}
                  {errors.email && <p>{errors.email}</p>}
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <button
                type="button"
                onClick={handleOrder}
                disabled={isSubmitting}
                className={`w-full py-5 text-lg font-semibold rounded-xl transition-all duration-200 ${
                  isSubmitting
                    ? "bg-white/20 text-white/50 cursor-not-allowed"
                    : "bg-green-500 text-white hover:bg-green-400 shadow-2xl hover:shadow-green-500/25 active:scale-[0.98] border border-green-400/50"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/60 border-t-transparent rounded-full animate-spin"></div>
                    Scheduling delivery...
                  </span>
                ) : (
                  `Schedule delivery → $${basePrice}`
                )}
              </button>

              <p className="text-center text-sm text-white/60 mt-4">
                Same/next day delivery • No hidden fees • 7-day rental
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 bg-white/5 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

            {/* Hours */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-white">Hours of Operation</h3>
              <div className="space-y-1 text-white/80">
                <p>Monday – Thursday</p>
                <p>10:00 AM – 5:00 PM</p>
                <p className="mt-2">Friday</p>
                <p>10:00 AM – 12:00 PM</p>
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-white">Phone Number</h3>
              <div className="space-y-1">
                <a href="tel:+1-475-441-6727" className="text-white/80 hover:text-green-400 transition-colors text-lg">
                  (475) 441‑6727 Ext. 1
                </a>
                <p className="text-white/60 text-sm">Office</p>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-white">Mailing Address</h3>
              <div className="space-y-1 text-white/80">
                <p>PO Box 4141</p>
                <p>Waterbury, CT 06704</p>
              </div>
            </div>

          </div>

          <div className="pt-8 mt-8 border-t border-white/10 text-center">
            <p className="text-sm text-white/40">
              Dumpster Rentals • Licensed & Insured
            </p>
          </div>
        </div>
      </footer>

      {/* Toast Notification */}
      {showToast && (
        <div
          className={`fixed top-4 right-4 z-50 max-w-sm w-full bg-white border-l-4 rounded-lg shadow-lg p-4 ${
            toastType === "success" ? "border-green-500" : "border-red-500"
          }`}
        >
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {toastType === "success" ? (
                <CheckCircleIcon className="h-5 w-5 text-green-400" />
              ) : (
                <XCircleIcon className="h-5 w-5 text-red-400" />
              )}
            </div>
            <div className="ml-3 flex-1">
              <p
                className={`text-sm font-medium ${
                  toastType === "success" ? "text-green-800" : "text-red-800"
                }`}
              >
                {toastMessage}
              </p>
            </div>
            <div className="ml-4 flex-shrink-0 flex">
              <button
                type="button"
                onClick={() => setShowToast(false)}
                className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-600 focus:outline-none"
                aria-label="Close notification"
                title="Close notification"
              >
                <XCircleIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
