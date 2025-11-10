"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { NavPhoneButton } from "@/components/NavPhoneButton";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { LiquidGlassNav } from "@/components/LiquidGlassNav";
import { BookingFormCard } from "@/components/BookingFormCard";

export default function PresidentialDumpsters() {
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
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pb-20 pt-32 lg:pt-40">
          <FadeIn>
            <div className="space-y-12 text-center">
              <div className="space-y-6">
                <h1 className="text-7xl font-bold leading-[0.9] tracking-[-0.04em] text-white md:text-8xl lg:text-[120px]">
                  Dumpster rentals
                  <br />
                  in{" "}
                  <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                    Waterbury
                  </span>
                </h1>

                <p className="mx-auto max-w-2xl text-2xl text-white/60 lg:text-3xl">
                  Same-day delivery. Starting at $395.
                </p>
              </div>

              <div className="pt-4">
                <a
                  href="tel:+1-475-441-6727"
                  className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/5 px-10 py-5 text-2xl font-semibold text-white backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10 hover:shadow-lg hover:shadow-white/5"
                >
                  <Phone className="h-6 w-6" />
                  (475) 441-6727
                </a>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Booking Form */}
        <section className="mx-auto max-w-3xl px-6 pb-32">
          <FadeIn delay={0.1}>
            <BookingFormCard />
          </FadeIn>
        </section>
      </main>

      <FadeIn delay={0.2}>
        <Footer />
      </FadeIn>
    </div>
  );
}
