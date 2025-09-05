"use client";

import React, { useState } from "react";
import {
  Phone,
  Clock,
} from "lucide-react";
import {
  dumpsters,
  DumpsterSize,
} from "@/utils/pricing";
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
    <div className="min-h-screen bg-[#0B1C46] text-white">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#0B1C46] border-b border-green-600">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-green-500">
            Presidential Dumpsters
          </div>
          <a
            href="tel:+1-347-299-0482"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-500"
          >
            <Phone className="w-4 h-4" /> (347) 299-0482
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-12 pb-6 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 text-yellow-300">
            Dumpster Rentals
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Roll‑off dumpsters • 7‑day rental • Same/Next‑day delivery
          </p>

          <div className="flex justify-center mb-10">
            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gray-800 text-sm border border-gray-600">
              <span className={isBusinessOpen() ? 'text-green-400' : 'text-red-400'}>
                {isBusinessOpen() ? 'Open' : 'Closed'}
              </span>
              <Clock className="w-4 h-4 text-gray-400" /> 
              <span className="text-gray-400">Sun–Fri 6AM–6PM</span>
            </span>
          </div>
        </div>

        {/* Quote Card */}
        <div className="mt-12 max-w-xl mx-auto bg-[#11255a] border border-green-600 rounded-2xl p-6 shadow-md">
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-xl font-semibold text-green-400">
              Place Order
            </h2>
            <div className="text-2xl font-bold text-yellow-300">
              ${basePrice}
            </div>
          </div>

          {/* Size selector */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            {(["10", "20"] as const).map((sz) => (
              <button
                type="button"
                key={sz}
                onClick={() => setSelectedSize(sz)}
                className={`p-4 rounded-xl border transition ${
                  selectedSize === sz
                    ? "border-green-500 bg-green-900/30"
                    : "border-gray-600 hover:border-gray-500"
                }`}
              >
                <div className="text-lg font-bold">{dumpsters[sz].name}</div>
                <div className="text-xs text-gray-400">7-day rental</div>
              </button>
            ))}
          </div>

          {/* Booking basics */}
          <div className="grid gap-3 mb-5">
            <div>
              <AddressAutocomplete
                value={booking.address}
                onChange={(address) => setBooking({ ...booking, address })}
                placeholder="Delivery address"
                className={`px-3 py-2 rounded-lg border bg-[#0B1C46] text-white focus:outline-none w-full ${
                  errors.address 
                    ? 'border-red-500 focus:border-red-500' 
                    : 'border-gray-600 focus:border-green-500'
                }`}
              />
              {errors.address && (
                <p className="text-red-400 text-sm mt-1">{errors.address}</p>
              )}
            </div>
            
            <div>
              <input
                type="tel"
                placeholder="Your phone number"
                value={booking.phone}
                onChange={(e) => {
                  const formatted = formatPhoneNumber(e.target.value);
                  setBooking({ ...booking, phone: formatted });
                }}
                autoComplete="tel"
                className={`px-3 py-2 rounded-lg border bg-[#0B1C46] text-white focus:outline-none w-full ${
                  errors.phone 
                    ? 'border-red-500 focus:border-red-500' 
                    : 'border-gray-600 focus:border-green-500'
                }`}
              />
              {errors.phone && (
                <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
            
            <div>
              <input
                type="email"
                placeholder="Your email address"
                value={booking.email}
                onChange={(e) =>
                  setBooking({ ...booking, email: e.target.value })
                }
                autoComplete="email"
                className={`px-3 py-2 rounded-lg border bg-[#0B1C46] text-white focus:outline-none w-full ${
                  errors.email 
                    ? 'border-red-500 focus:border-red-500' 
                    : 'border-gray-600 focus:border-green-500'
                }`}
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Pricing info */}
          <div className="rounded-lg border border-green-600 p-4 bg-[#0B1C46] text-center">
            <div className="text-sm text-gray-400 mb-1">7-day rental</div>
            <div className="text-3xl font-bold text-yellow-300 mb-2">${basePrice}</div>
            <div className="text-xs text-gray-400">
              Includes delivery up to 15 miles
            </div>
          </div>

          <button
            type="button"
            onClick={handleOrder}
            disabled={isSubmitting}
            className={`mt-4 w-full py-3 rounded-xl text-white font-semibold transition-all ${
              isSubmitting 
                ? 'bg-gray-600 cursor-not-allowed' 
                : 'bg-green-600 hover:bg-green-500'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Order Dumpster Now'}
          </button>
no        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 border-t border-green-600 bg-[#0B1C46]">
        <div className="max-w-7xl mx-auto text-center text-gray-300">
          <div className="text-2xl font-bold text-yellow-300 mb-2">
            (347) 299-0482
          </div>
          <div>Presidential Dumpsters • 7-Day Rentals • Licensed & Insured</div>
        </div>
      </footer>
      
      {/* Toast Notification */}
      {showToast && (
        <div className={`fixed top-4 right-4 z-50 max-w-sm w-full bg-white border-l-4 rounded-lg shadow-lg p-4 ${
          toastType === 'success' ? 'border-green-500' : 'border-red-500'
        }`}>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {toastType === 'success' ? (
                <CheckCircleIcon className="h-5 w-5 text-green-400" />
              ) : (
                <XCircleIcon className="h-5 w-5 text-red-400" />
              )}
            </div>
            <div className="ml-3 flex-1">
              <p className={`text-sm font-medium ${
                toastType === 'success' ? 'text-green-800' : 'text-red-800'
              }`}>
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