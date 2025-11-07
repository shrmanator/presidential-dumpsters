import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { NavPhoneButton } from "@/components/NavPhoneButton";
import { BookingFormCard } from "@/components/BookingFormCard";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { LiquidGlassNav } from "@/components/LiquidGlassNav";
import { LiquidGlassCard } from "@/components/LiquidGlassCard";
import { Button } from "@/components/Button";

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

      {/* Hero Section - Single Column, Centered */}
      <main className="relative z-10">
        <section className="mx-auto max-w-5xl px-6 py-32 lg:py-48">
          <FadeIn>
            <div className="space-y-12 text-center">
              {/* Headline */}
              <h1 className="text-7xl font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-8xl lg:text-[96px]">
                Dumpster rentals in{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                  Waterbury
                </span>
              </h1>

              {/* Subheadline - Clean, No Links */}
              <p className="mx-auto max-w-3xl text-xl leading-relaxed text-white/80 md:text-2xl">
                Professional roll-off dumpster service for Connecticut homes
                and businesses. Same-day delivery available.
              </p>

              {/* Primary CTA */}
              <div className="pt-4">
                <Button
                  href="#booking"
                  variant="primary"
                  size="lg"
                  className="group"
                >
                  Book Your Dumpster
                  <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                </Button>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Booking Form Section */}
        <section id="booking" className="mx-auto max-w-2xl px-6 py-24">
          <FadeIn delay={0.1}>
            <BookingFormCard />
          </FadeIn>
        </section>

        {/* Feature Cards Section */}
        <section className="mx-auto max-w-5xl px-6 py-24">
          <FadeIn delay={0.2}>
            <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
              <LiquidGlassCard variant="accent">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-emerald-500/20 p-3">
                    <svg
                      className="h-6 w-6 text-emerald-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2M15 18H9M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14M17 18a2 2 0 1 1-4 0M7 18a2 2 0 1 1-4 0"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">
                      Same-day delivery
                    </p>
                    <p className="mt-1 text-sm text-white/70">
                      Local crews ready to deliver fast.
                    </p>
                  </div>
                </div>
              </LiquidGlassCard>

              <LiquidGlassCard variant="blue">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-blue-500/20 p-3">
                    <svg
                      className="h-6 w-6 text-blue-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">
                      Licensed & insured
                    </p>
                    <p className="mt-1 text-sm text-white/70">
                      State-licensed with full coverage.
                    </p>
                  </div>
                </div>
              </LiquidGlassCard>

              <LiquidGlassCard variant="accent">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-emerald-500/20 p-3">
                    <svg
                      className="h-6 w-6 text-emerald-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">
                      Transparent pricing
                    </p>
                    <p className="mt-1 text-sm text-white/70">
                      Starting at $395 for 10-yard dumpsters.
                    </p>
                  </div>
                </div>
              </LiquidGlassCard>

              <LiquidGlassCard variant="blue">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-blue-500/20 p-3">
                    <svg
                      className="h-6 w-6 text-blue-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">
                      Connecticut coverage
                    </p>
                    <p className="mt-1 text-sm text-white/70">
                      Serving Waterbury, Hartford, New Haven & more.
                    </p>
                  </div>
                </div>
              </LiquidGlassCard>
            </div>
          </FadeIn>
        </section>
      </main>

      <FadeIn delay={0.3}>
        <Footer />
      </FadeIn>
    </div>
  );
}
