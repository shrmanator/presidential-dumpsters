import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Truck } from "lucide-react";
import { NavPhoneButton } from "@/components/NavPhoneButton";
import { BookingFormCard } from "@/components/BookingFormCard";
import { Breadcrumb } from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { ScrollNav } from "@/components/ScrollNav";
import { LiquidGlassCard } from "@/components/LiquidGlassCard";

export const metadata: Metadata = {
  title: "Dumpster Rental New Haven CT | Same Day Delivery | Presidential Dumpsters",
  description: "Professional dumpster rental in New Haven, Connecticut. 10-yard and 20-yard roll-off dumpsters starting at $395. Same-day delivery available. Licensed & insured. Serving downtown New Haven, West End, Parkville, and all New Haven neighborhoods. Call (475) 441-6727.",
  keywords: "dumpster rental new-haven ct, roll off dumpster new-haven, construction dumpster rental new-haven, 10 yard dumpster new-haven, 20 yard dumpster new-haven, same day dumpster delivery new-haven, residential dumpster rental new-haven, commercial dumpster new-haven, waste management new-haven ct, debris removal new-haven, junk removal new-haven, affordable dumpster new-haven",
  alternates: {
    canonical: 'https://presidentialdumpsters.xyz/new-haven',
  },
  openGraph: {
    title: 'Dumpster Rental New Haven CT | Same Day Delivery',
    description: 'Professional dumpster rental in New Haven, CT. 10-yard and 20-yard dumpsters starting at $395. Same-day delivery available.',
    url: 'https://presidentialdumpsters.xyz/new-haven',
    siteName: 'Presidential Dumpsters',
    locale: 'en_US',
    type: 'website',
  },
};

export default function NewHavenPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Dumpster Rental",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Presidential Dumpsters",
      "telephone": "+1-475-441-6727",
      "url": "https://presidentialdumpsters.xyz"
    },
    "areaServed": {
      "@type": "City",
      "name": "New Haven",
      "addressRegion": "CT",
      "addressCountry": "US"
    },
    "offers": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "10 Yard Dumpster Rental New Haven"
        },
        "price": "395",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "20 Yard Dumpster Rental New Haven"
        },
        "price": "695",
        "priceCurrency": "USD"
      }
    ]
  };

  return (
    <div className="min-h-screen text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <ScrollNav>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
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
      </ScrollNav>

      <main className="relative z-10 mx-auto grid max-w-7xl items-start gap-16 px-6 pb-24 pt-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,540px)] lg:gap-20 lg:pt-32">
        <article className="space-y-12">
          <FadeIn>
            <Breadcrumb items={[{ label: "New Haven" }]} />

            <header className="space-y-8">
              {/* Badge */}
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 backdrop-blur-sm">
                <Truck className="h-4 w-4" aria-hidden="true" />
                New Haven, Connecticut
              </span>

              {/* Headline */}
              <h1 className="text-7xl font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-8xl lg:text-[96px]">
                Dumpster rental in{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                  New Haven
                </span>
              </h1>

              {/* Subheadline */}
              <p className="max-w-2xl text-xl leading-relaxed text-white/80 md:text-2xl">
                Professional roll-off dumpster service for New Haven residents and businesses.
                10-yard and 20-yard dumpsters for renovations, construction, and cleanouts.
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
                        Serving all New Haven neighborhoods.
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
            <BookingFormCard addressPlaceholder="123 Main St, New Haven" />
          </FadeIn>
        </aside>
      </main>

      <FadeIn delay={0.3}>
        <Footer />
      </FadeIn>
    </div>
  );
}
