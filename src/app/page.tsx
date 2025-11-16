import Image from "next/image";
import Link from "next/link";
import { Truck } from "lucide-react";
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

      {/* Main Content */}
      <main className="relative z-10 mx-auto grid max-w-7xl items-start gap-16 px-6 pb-24 pt-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,540px)] lg:gap-20 lg:pt-32">
        <article className="space-y-12">
          <FadeIn>
            <header className="space-y-8">
              {/* Headline */}
              <h1 className="text-7xl font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-8xl lg:text-[96px]">
                Dumpster rentals in{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                  Waterbury
                </span>
              </h1>

              {/* Subheadline */}
              <p className="max-w-2xl text-xl leading-relaxed text-white/80 md:text-2xl">
                10-yard and 20-yard roll-off dumpsters delivered to{" "}
                <Link
                  href="/oakville"
                  className="text-emerald-400 underline decoration-emerald-400/30 transition-colors hover:decoration-emerald-400"
                >
                  Oakville
                </Link>
                ,{" "}
                <Link
                  href="/wolcott"
                  className="text-emerald-400 underline decoration-emerald-400/30 transition-colors hover:decoration-emerald-400"
                >
                  Wolcott
                </Link>
                ,{" "}
                <Link
                  href="/hartford"
                  className="text-emerald-400 underline decoration-emerald-400/30 transition-colors hover:decoration-emerald-400"
                >
                  Hartford
                </Link>
                ,{" "}
                <Link
                  href="/new-haven"
                  className="text-emerald-400 underline decoration-emerald-400/30 transition-colors hover:decoration-emerald-400"
                >
                  New Haven
                </Link>
                , and surrounding Connecticut towns.
              </p>

              {/* Feature Cards */}
              <div className="grid gap-4 pt-4 sm:grid-cols-2">
                <LiquidGlassCard variant="accent">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-emerald-500/20 p-2">
                      <Truck className="h-5 w-5 text-emerald-300" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Same-day delivery</p>
                      <p className="mt-1 text-sm text-white/70">
                        Local crews ready to deliver fast.
                      </p>
                    </div>
                  </div>
                </LiquidGlassCard>

                <LiquidGlassCard variant="blue">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-blue-500/20 p-2">
                      <svg
                        className="h-5 w-5 text-blue-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white">Licensed & insured</p>
                      <p className="mt-1 text-sm text-white/70">
                        State-licensed with full coverage.
                      </p>
                    </div>
                  </div>
                </LiquidGlassCard>
              </div>
            </header>
          </FadeIn>
        </article>

        <aside aria-label="Booking form">
          <FadeIn delay={0.2} direction="left">
            <BookingFormCard />
          </FadeIn>
        </aside>
      </main>

      <FadeIn delay={0.3}>
        <Footer />
      </FadeIn>
    </div>
  );
}
