import Image from "next/image";
import Link from "next/link";
import { NavPhoneButton } from "@/components/NavPhoneButton";
import { BookingFormCard } from "@/components/BookingFormCard";
import Footer from "@/components/Footer";

export default function PresidentialDumpsters() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Vercel style: minimal, border bottom */}
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="transition-opacity hover:opacity-60">
            <Image
              src="/logo.png"
              alt="Presidential Dumpsters"
              width={180}
              height={64}
              className="h-10 w-auto"
              priority
              quality={100}
            />
          </Link>
          <a
            href="tel:+1-475-441-6727"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-black"
          >
            (475) 441-6727
          </a>
        </div>
      </nav>

      <main>
        {/* Hero - Vercel style: centered, massive type, generous spacing */}
        <section className="mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
          <h1 className="text-6xl font-bold tracking-tight text-black md:text-7xl lg:text-8xl">
            Dumpster rentals in Waterbury
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600">
            Same-day delivery. Starting at $395. No hidden fees.
          </p>
        </section>

        {/* Form - Vercel style: clean, centered, high contrast */}
        <section className="mx-auto max-w-2xl px-6 pb-32">
          <div className="rounded-lg border border-gray-200 bg-white p-8">
            <h2 className="mb-6 text-2xl font-bold text-black">
              Request a dumpster
            </h2>
            <BookingFormCard />
          </div>
        </section>

        {/* Features - Vercel style: grid, minimal */}
        <section className="border-t border-gray-200 bg-gray-50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 md:grid-cols-3">
              <div>
                <h3 className="text-lg font-semibold text-black">
                  Same-day delivery
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Local crews standing by. Call before noon for same-day service.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black">
                  Licensed & insured
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  State-licensed with full coverage for your peace of mind.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black">
                  Transparent pricing
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  $395 for 10-yard, $695 for 20-yard. Seven days included.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
