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
  description: "Professional dumpster rental in New Haven, Connecticut. 10-yard and 20-yard roll-off dumpsters starting at $395. Same-day delivery available. Licensed & insured. Serving East Rock, Westville, Fair Haven, and all New Haven neighborhoods. Call (475) 441-6727.",
  keywords: "dumpster rental new haven ct, roll off dumpster new haven, construction dumpster rental new haven, 10 yard dumpster new haven, 20 yard dumpster new haven, same day dumpster delivery new haven, residential dumpster rental new haven, commercial dumpster new haven, waste management new haven ct, debris removal new haven, affordable dumpster new haven",
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
    <div className="min-h-screen bg-gradient-to-br from-[#061633] via-[#0A2147] to-[#061633] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ScrollNav>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Presidential Dumpsters"
              width={200}
              height={72}
              className="h-12 w-auto cursor-pointer"
              priority
              quality={100}
            />
          </Link>
          <NavPhoneButton />
        </div>
      </ScrollNav>

      <main className="relative z-10 mx-auto grid max-w-6xl items-start gap-12 px-6 pb-20 pt-16 text-white lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:gap-16">
        <article className="space-y-10">
          <Breadcrumb items={[{ label: "New Haven Dumpster Rental" }]} />
          
          <header className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
              <Truck className="h-3.5 w-3.5" aria-hidden="true" /> Presidential Dumpsters
            </span>
            <h1 className="text-6xl font-medium leading-[1.1] tracking-[-0.025em] text-white md:text-7xl">
              Dumpster Rental in New Haven, CT
            </h1>
            <p className="max-w-xl text-[17px] leading-relaxed text-white/70 md:text-lg">
              Professional roll-off dumpster rental service for New Haven residents and businesses. 10-yard and 20-yard dumpsters for home renovations, construction projects, and commercial cleanouts.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <LiquidGlassCard variant="accent">
                <p className="text-sm font-semibold text-white">Same-day delivery available</p>
                <p className="mt-1 text-sm text-white/70">Serving all New Haven neighborhoods with fast local delivery.</p>
              </LiquidGlassCard>
              <LiquidGlassCard variant="blue">
                <p className="text-sm font-semibold text-white">Licensed & insured</p>
                <p className="mt-1 text-sm text-white/70">State-licensed with full coverage on every haul.</p>
              </LiquidGlassCard>
            </div>
          </header>
        </article>

        <aside aria-label="Booking form">
          <BookingFormCard addressPlaceholder="123 Main St, New Haven" />
        </aside>
      </main>

      <FadeIn delay={0.3}>
      <Footer />
      </FadeIn>
    </div>
  );
}
