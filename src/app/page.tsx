import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Truck, Shield, DollarSign, MapPin, Clock, CheckCircle } from "lucide-react";
import { NavPhoneButton } from "@/components/NavPhoneButton";
import { BookingFormCard } from "@/components/BookingFormCard";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { LiquidGlassNav } from "@/components/LiquidGlassNav";
import { LiquidGlassCard } from "@/components/LiquidGlassCard";

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
        {/* Hero Section - Asymmetric with Overlapping Form */}
        <section className="relative overflow-hidden pb-48 pt-20 lg:pb-64 lg:pt-32">
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="grid gap-12 lg:grid-cols-[1fr_500px] lg:gap-16">
              {/* Left: Hero Content */}
              <FadeIn>
                <div className="space-y-8 lg:pt-12">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 backdrop-blur-sm">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                    <span className="text-sm font-medium text-emerald-300">
                      Available now in Connecticut
                    </span>
                  </div>

                  <h1 className="text-7xl font-bold leading-[0.95] tracking-[-0.04em] text-white md:text-8xl lg:text-[120px]">
                    Dumpster
                    <br />
                    rentals in{" "}
                    <span className="relative inline-block">
                      <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                        Waterbury
                      </span>
                      <svg
                        className="absolute -bottom-2 left-0 w-full"
                        height="8"
                        viewBox="0 0 300 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 5.5C50 2.5 100 1 150 3.5C200 6 250 4 299 5.5"
                          stroke="url(#gradient)"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0" y1="0" x2="300" y2="0">
                            <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                            <stop offset="50%" stopColor="#10b981" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                  </h1>

                  <p className="max-w-xl text-xl leading-relaxed text-white/70 md:text-2xl">
                    Same-day dumpster delivery for Connecticut homes and businesses.
                    No hidden fees. No hassle.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <a
                      href="#booking"
                      className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all hover:shadow-xl hover:shadow-emerald-500/40 hover:-translate-y-0.5"
                    >
                      Get started
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                    <a
                      href="tel:+1-475-441-6727"
                      className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
                    >
                      (475) 441-6727
                    </a>
                  </div>
                </div>
              </FadeIn>

              {/* Right: Floating Booking Form */}
              <FadeIn delay={0.1} direction="left">
                <div className="lg:absolute lg:right-6 lg:top-16 lg:w-[500px]">
                  <div className="transform transition-transform hover:scale-[1.02]">
                    <BookingFormCard />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Bento Grid Features - Asymmetric Layout */}
        <section className="relative px-6 pb-32">
          <div className="mx-auto max-w-[1400px]">
            <FadeIn delay={0.2}>
              {/* CSS Grid with irregular sizing */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                {/* Large Feature - Spans 2 columns */}
                <LiquidGlassCard variant="accent" className="lg:col-span-2 lg:row-span-2">
                  <div className="flex h-full flex-col justify-between space-y-6 p-8">
                    <div className="rounded-2xl bg-emerald-500/20 p-4 w-fit">
                      <Truck className="h-10 w-10 text-emerald-300" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold text-white">
                        Same-day delivery
                      </h3>
                      <p className="text-lg text-white/70 leading-relaxed">
                        Local crews standing by. Call before noon and get your dumpster
                        delivered the same day. No waiting, no delays.
                      </p>
                      <div className="flex items-center gap-2 text-emerald-400">
                        <Clock className="h-5 w-5" />
                        <span className="font-semibold">Available today</span>
                      </div>
                    </div>
                  </div>
                </LiquidGlassCard>

                {/* Small Cards - Stack vertically */}
                <LiquidGlassCard variant="blue" className="lg:col-span-1">
                  <div className="space-y-4 p-6">
                    <div className="rounded-xl bg-blue-500/20 p-3 w-fit">
                      <Shield className="h-6 w-6 text-blue-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Licensed & insured
                      </h3>
                      <p className="mt-2 text-sm text-white/70">
                        State-licensed with full coverage
                      </p>
                    </div>
                  </div>
                </LiquidGlassCard>

                <LiquidGlassCard variant="accent" className="lg:col-span-1">
                  <div className="space-y-4 p-6">
                    <div className="rounded-xl bg-emerald-500/20 p-3 w-fit">
                      <DollarSign className="h-6 w-6 text-emerald-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        From $395
                      </h3>
                      <p className="mt-2 text-sm text-white/70">
                        Transparent pricing, no hidden fees
                      </p>
                    </div>
                  </div>
                </LiquidGlassCard>

                {/* Medium Cards */}
                <LiquidGlassCard variant="blue" className="lg:col-span-1">
                  <div className="space-y-4 p-6">
                    <div className="rounded-xl bg-blue-500/20 p-3 w-fit">
                      <MapPin className="h-6 w-6 text-blue-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Connecticut-wide
                      </h3>
                      <p className="mt-2 text-sm text-white/70">
                        Waterbury, Hartford, New Haven & more
                      </p>
                    </div>
                  </div>
                </LiquidGlassCard>

                <LiquidGlassCard variant="accent" className="lg:col-span-1">
                  <div className="space-y-4 p-6">
                    <div className="rounded-xl bg-emerald-500/20 p-3 w-fit">
                      <CheckCircle className="h-6 w-6 text-emerald-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Simple process
                      </h3>
                      <p className="mt-2 text-sm text-white/70">
                        Book online, we deliver, you fill it
                      </p>
                    </div>
                  </div>
                </LiquidGlassCard>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Social Proof Section - Full Bleed */}
        <section className="relative border-t border-white/5 bg-white/[0.02] py-20">
          <div className="mx-auto max-w-[1400px] px-6">
            <FadeIn delay={0.3}>
              <div className="grid gap-12 md:grid-cols-3">
                <div className="space-y-2 text-center">
                  <div className="text-5xl font-bold text-white">500+</div>
                  <div className="text-white/60">Dumpsters delivered</div>
                </div>
                <div className="space-y-2 text-center">
                  <div className="text-5xl font-bold text-white">4.8★</div>
                  <div className="text-white/60">Average rating</div>
                </div>
                <div className="space-y-2 text-center">
                  <div className="text-5xl font-bold text-white">Same day</div>
                  <div className="text-white/60">Delivery available</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <FadeIn delay={0.4}>
        <Footer />
      </FadeIn>
    </div>
  );
}
