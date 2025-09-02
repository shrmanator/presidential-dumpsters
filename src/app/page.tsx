'use client';

import React, { useState } from 'react';
import { Phone, Truck, Clock, MapPin, Calculator, CheckCircle, Home, Briefcase, Plus } from 'lucide-react';
import { calcPrice, dumpsters, INCLUDED_MILES, PER_MILE_RATE, DumpsterSize } from '@/utils/pricing';
import { handleOrder as processOrder } from '@/lib/orders';

export default function PresidentialDumpsters() {
  const [selectedSize, setSelectedSize] = useState<DumpsterSize>('20');
  const [distanceMi, setDistanceMi] = useState<number>(10);
  const [booking, setBooking] = useState({ zip: '', phone: '', email: '' });
  const [showBreakdown, setShowBreakdown] = useState(false);

  const price = calcPrice(selectedSize, distanceMi);

  const handleOrder = () => {
    processOrder(selectedSize, distanceMi, booking);
  };

  return (
    <div className="min-h-screen bg-[#0B1C46] text-white">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#0B1C46] border-b border-green-600">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-green-500">Presidential Dumpsters</div>
          <a href="tel:1-800-386-7787" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-500">
            <Phone className="w-4 h-4" /> 1-800-DUMPSTR
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-12 pb-6 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 text-yellow-300">Dumpster Rentals</h1>
          <p className="text-lg text-gray-300 mb-6">Roll‑off dumpsters • 7‑day rental • Same/Next‑day delivery</p>

          {/* Open for Business Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 text-white font-bold text-lg shadow-md mb-10">
            <CheckCircle className="w-5 h-5" /> OPEN FOR BUSINESS
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-300">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"/>
              <Truck className="w-4 h-4"/> Local Drivers Ready
            </span>
            <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4"/> Sun–Fri 6AM–6PM</span>
            <span className="inline-flex items-center gap-2"><Home className="w-4 h-4"/> Residential</span>
            <span className="inline-flex items-center gap-2"><Briefcase className="w-4 h-4"/> Commercial</span>
            <span className="inline-flex items-center gap-2"><Plus className="w-4 h-4"/> Loading Available (extra)</span>
          </div>
        </div>

        {/* Quote Card */}
        <div className="mt-12 max-w-xl mx-auto bg-[#11255a] border border-green-600 rounded-2xl p-6 shadow-md">
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-xl font-semibold text-green-400">Instant Quote</h2>
            <div className="text-4xl font-bold text-yellow-300">${price.total.toFixed(0)}</div>
          </div>

          {/* Size selector */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            {(['10','20'] as const).map((sz) => (
              <button
                key={sz}
                onClick={() => setSelectedSize(sz)}
                className={`p-4 rounded-xl border transition ${
                  selectedSize === sz ? 'border-green-500 bg-green-900/30' : 'border-gray-600 hover:border-gray-500'
                }`}
              >
                <div className="text-lg font-bold">{dumpsters[sz].name}</div>
                <div className="text-xs text-gray-400">7-day rental</div>
              </button>
            ))}
          </div>

          {/* Distance */}
          <div className="mb-5">
            <label className="block text-sm text-gray-300 mb-1">Estimated delivery distance (miles)</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min={0}
                step={0.1}
                value={distanceMi}
                onChange={(e) => setDistanceMi(Math.max(0, parseFloat(e.target.value) || 0))}
                className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-[#0B1C46] text-white focus:border-green-500 focus:outline-none"
                placeholder="e.g. 12"
              />
              <span className="text-xs text-gray-400 px-2 py-1 rounded border border-gray-600 bg-[#0B1C46] whitespace-nowrap">
                <MapPin className="w-3 h-3 inline mr-1"/> First {INCLUDED_MILES} mi free
              </span>
            </div>
            {price.distanceFee > 0 && (
              <div className="text-xs text-gray-300 mt-1">{price.extraMiles.toFixed(1)} extra mi × ${PER_MILE_RATE.toFixed(2)} = <strong className="text-yellow-300">${price.distanceFee.toFixed(2)}</strong></div>
            )}
          </div>

          {/* Booking basics */}
          <div className="grid gap-3 mb-5">
            <input
              type="text"
              placeholder="Delivery ZIP code"
              value={booking.zip}
              onChange={(e) => setBooking({ ...booking, zip: e.target.value })}
              className="px-3 py-2 rounded-lg border border-gray-600 bg-[#0B1C46] text-white focus:border-green-500 focus:outline-none"
              maxLength={5}
            />
            <input
              type="tel"
              placeholder="Your phone number"
              value={booking.phone}
              onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
              className="px-3 py-2 rounded-lg border border-gray-600 bg-[#0B1C46] text-white focus:border-green-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email for receipt (optional)"
              value={booking.email}
              onChange={(e) => setBooking({ ...booking, email: e.target.value })}
              className="px-3 py-2 rounded-lg border border-gray-600 bg-[#0B1C46] text-white focus:border-green-500 focus:outline-none"
            />
          </div>

          {/* Total & breakdown */}
          <div className="rounded-lg border border-green-600 p-4 bg-[#0B1C46]">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Total Price</span>
              <span className="text-2xl font-bold text-yellow-300">${price.total.toFixed(2)}</span>
            </div>
            <button
              onClick={() => setShowBreakdown(!showBreakdown)}
              className="mt-2 text-xs underline text-gray-400 hover:text-gray-200 inline-flex items-center gap-1"
            >
              <Calculator className="w-3 h-3"/> {showBreakdown ? 'Hide' : 'Show'} breakdown
            </button>
            {showBreakdown && (
              <div className="text-sm text-gray-300 mt-3 space-y-1">
                <div className="flex justify-between"><span>{dumpsters[selectedSize].name} (7 days)</span><span>${price.base.toFixed(2)}</span></div>
                {price.distanceFee > 0 && (
                  <div className="flex justify-between"><span>Distance ({price.extraMiles.toFixed(1)} mi)</span><span>+${price.distanceFee.toFixed(2)}</span></div>
                )}
                <div className="flex justify-between"><span>Tax</span><span>+${price.tax.toFixed(2)}</span></div>
              </div>
            )}
          </div>

          <button onClick={handleOrder} className="mt-4 w-full py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-500">
            Order Dumpster Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 border-t border-green-600 bg-[#0B1C46]">
        <div className="max-w-7xl mx-auto text-center text-gray-300">
          <div className="text-2xl font-bold text-yellow-300 mb-2">1-800-DUMPSTR</div>
          <div>Presidential Dumpsters • 7-Day Rentals • Licensed & Insured</div>
        </div>
      </footer>
    </div>
  );
}
