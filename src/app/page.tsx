"use client";

import React, { useState } from "react";
import {
  Phone,
  Truck,
  Clock,
  Calculator,
  CheckCircle,
  Home,
  Briefcase,
  Plus,
} from "lucide-react";
import {
  calcPrice,
  dumpsters,
  DumpsterSize,
} from "@/utils/pricing";
import { handleOrder as processOrder } from "@/lib/orders";

export default function PresidentialDumpsters() {
  const [selectedSize, setSelectedSize] = useState<DumpsterSize>("20");
  const [booking, setBooking] = useState({ address: "", phone: "", email: "" });

  const basePrice = dumpsters[selectedSize].base;

  const handleOrder = () => {
    processOrder(selectedSize, 0, booking); // No distance calculation
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

          {/* Open for Business Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 text-white font-bold text-lg shadow-md mb-10">
            <CheckCircle className="w-5 h-5" /> OPEN FOR BUSINESS
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-300">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <Truck className="w-4 h-4" /> Local Drivers Ready
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4" /> Sun–Fri 6AM–6PM
            </span>
          </div>
        </div>

        {/* Quote Card */}
        <div className="mt-12 max-w-xl mx-auto bg-[#11255a] border border-green-600 rounded-2xl p-6 shadow-md">
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-xl font-semibold text-green-400">
              Instant Quote
            </h2>
            <div className="text-2xl font-bold text-yellow-300">
              ${basePrice}
            </div>
          </div>

          {/* Size selector */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            {(["10", "20"] as const).map((sz) => (
              <button
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
            <input
              type="text"
              placeholder="Delivery address"
              value={booking.address}
              onChange={(e) => setBooking({ ...booking, address: e.target.value })}
              autoComplete="address-line1"
              className="px-3 py-2 rounded-lg border border-gray-600 bg-[#0B1C46] text-white focus:border-green-500 focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Your phone number"
              value={booking.phone}
              onChange={(e) =>
                setBooking({ ...booking, phone: e.target.value })
              }
              autoComplete="tel"
              className="px-3 py-2 rounded-lg border border-gray-600 bg-[#0B1C46] text-white focus:border-green-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email for receipt (optional)"
              value={booking.email}
              onChange={(e) =>
                setBooking({ ...booking, email: e.target.value })
              }
              autoComplete="email"
              className="px-3 py-2 rounded-lg border border-gray-600 bg-[#0B1C46] text-white focus:border-green-500 focus:outline-none"
            />
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
            onClick={handleOrder}
            className="mt-4 w-full py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-500"
          >
            Order Dumpster Now
          </button>
        </div>
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
    </div>
  );
}