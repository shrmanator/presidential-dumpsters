"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Calendar } from "lucide-react";
import { NavPhoneButton } from "@/components/NavPhoneButton";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { LiquidGlassNav } from "@/components/LiquidGlassNav";
import { useState } from "react";

export default function PresidentialDumpsters() {
  const [selectedSize, setSelectedSize] = useState<"10" | "20" | null>(null);

  return (
    <div className="min-h-screen text-white">
      {/* Navigation */}
      <LiquidGlassNav>
        <div className="flex w-full items-center justify-between">
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-80"
          >
            <Image
              src="/logo.png"
              alt="Presidential Dumpsters"
              width={200}
              height={72}
              className="h-12 w-auto"
              priority
              quality={100}
            />
          </Link>
          <NavPhoneButton />
        </div>
      </LiquidGlassNav>

      <main className="relative z-10">
        {/* Hero - Extreme Simplicity */}
        <section className="mx-auto max-w-6xl px-6 pb-32 pt-32 lg:pt-48">
          <FadeIn>
            <div className="space-y-16 text-center">
              {/* Headline - Let it breathe */}
              <div className="space-y-8">
                <h1 className="text-7xl font-bold leading-[0.9] tracking-[-0.04em] text-white md:text-8xl lg:text-[140px]">
                  Dumpster rentals
                  <br />
                  in{" "}
                  <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                    Waterbury
                  </span>
                </h1>

                <p className="mx-auto max-w-2xl text-2xl text-white/60 lg:text-3xl">
                  Same-day delivery. No hidden fees.
                </p>
              </div>

              {/* Address Input - Single field */}
              <div className="mx-auto max-w-2xl">
                <div className="relative">
                  <MapPin className="absolute left-6 top-1/2 h-6 w-6 -translate-y-1/2 text-white/40" />
                  <input
                    type="text"
                    placeholder="Where do you need it?"
                    className="w-full rounded-3xl border border-white/10 bg-white/5 py-6 pl-16 pr-6 text-xl text-white placeholder-white/40 backdrop-blur-xl transition-all focus:border-emerald-400/50 focus:bg-white/10 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Pricing - Direct, Clickable */}
        <section className="mx-auto max-w-6xl px-6 pb-32">
          <FadeIn delay={0.1}>
            <div className="grid gap-8 md:grid-cols-2">
              {/* 10-Yard */}
              <button
                onClick={() => setSelectedSize("10")}
                className={`group relative overflow-hidden rounded-3xl border p-12 text-left transition-all hover:scale-[1.02] ${
                  selectedSize === "10"
                    ? "border-emerald-400/50 bg-emerald-500/10"
                    : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                }`}
              >
                <div className="space-y-6">
                  <div className="text-6xl font-bold text-white">$395</div>
                  <div>
                    <div className="text-3xl font-bold text-white">
                      10-Yard Dumpster
                    </div>
                    <div className="mt-2 text-lg text-white/60">
                      Perfect for bathroom remodels, small cleanouts
                    </div>
                  </div>
                  <div className="pt-4 text-sm text-white/40">
                    12&apos; × 8&apos; × 4&apos; • Holds ~4 pickup loads
                  </div>
                </div>
                {selectedSize === "10" && (
                  <div className="absolute right-6 top-6">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500">
                      <svg
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </button>

              {/* 20-Yard */}
              <button
                onClick={() => setSelectedSize("20")}
                className={`group relative overflow-hidden rounded-3xl border p-12 text-left transition-all hover:scale-[1.02] ${
                  selectedSize === "20"
                    ? "border-emerald-400/50 bg-emerald-500/10"
                    : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                }`}
              >
                <div className="space-y-6">
                  <div className="text-6xl font-bold text-white">$695</div>
                  <div>
                    <div className="text-3xl font-bold text-white">
                      20-Yard Dumpster
                    </div>
                    <div className="mt-2 text-lg text-white/60">
                      Ideal for kitchen remodels, roofing, large projects
                    </div>
                  </div>
                  <div className="pt-4 text-sm text-white/40">
                    22&apos; × 8&apos; × 4&apos; • Holds ~8 pickup loads
                  </div>
                </div>
                {selectedSize === "20" && (
                  <div className="absolute right-6 top-6">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500">
                      <svg
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </button>
            </div>
          </FadeIn>
        </section>

        {/* Inline Booking - Only shows when size selected */}
        {selectedSize && (
          <section className="mx-auto max-w-2xl px-6 pb-32">
            <FadeIn delay={0.2}>
              <div className="space-y-8 rounded-3xl border border-emerald-400/30 bg-emerald-500/5 p-12 backdrop-blur-xl">
                <div className="flex items-center gap-3 text-emerald-400">
                  <Calendar className="h-6 w-6" />
                  <span className="text-xl font-semibold">
                    When do you need it?
                  </span>
                </div>

                <div className="space-y-4">
                  <button className="w-full rounded-2xl border border-white/10 bg-white/5 p-6 text-left transition-all hover:border-emerald-400/30 hover:bg-white/10">
                    <div className="text-xl font-semibold text-white">
                      Today
                    </div>
                    <div className="mt-1 text-sm text-white/60">
                      Delivered this afternoon
                    </div>
                  </button>

                  <button className="w-full rounded-2xl border border-white/10 bg-white/5 p-6 text-left transition-all hover:border-emerald-400/30 hover:bg-white/10">
                    <div className="text-xl font-semibold text-white">
                      Tomorrow
                    </div>
                    <div className="mt-1 text-sm text-white/60">
                      Next-day delivery
                    </div>
                  </button>

                  <button className="w-full rounded-2xl border border-white/10 bg-white/5 p-6 text-left transition-all hover:border-emerald-400/30 hover:bg-white/10">
                    <div className="text-xl font-semibold text-white">
                      Pick a date
                    </div>
                    <div className="mt-1 text-sm text-white/60">
                      Choose your delivery day
                    </div>
                  </button>
                </div>

                <div className="border-t border-white/10 pt-8">
                  <a
                    href="tel:+1-475-441-6727"
                    className="flex w-full items-center justify-center gap-3 rounded-2xl bg-white/10 px-8 py-5 text-xl font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                  >
                    <Phone className="h-6 w-6" />
                    Or call (475) 441-6727
                  </a>
                </div>
              </div>
            </FadeIn>
          </section>
        )}

        {/* Simple CTA if nothing selected */}
        {!selectedSize && (
          <section className="mx-auto max-w-2xl px-6 pb-32">
            <FadeIn delay={0.2}>
              <div className="text-center">
                <p className="text-xl text-white/60">
                  Or call us directly at
                </p>
                <a
                  href="tel:+1-475-441-6727"
                  className="mt-4 inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/5 px-10 py-5 text-2xl font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  <Phone className="h-6 w-6" />
                  (475) 441-6727
                </a>
              </div>
            </FadeIn>
          </section>
        )}
      </main>

      <FadeIn delay={0.3}>
        <Footer />
      </FadeIn>
    </div>
  );
}
