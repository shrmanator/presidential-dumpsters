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

export const metadata: Metadata = {
  title: "Dumpster Rental Wolcott CT | Same Day Delivery | Presidential Dumpsters",
  description: "Professional dumpster rental in Wolcott, Connecticut. 10-yard and 20-yard roll-off dumpsters starting at $395. Same-day delivery available. Licensed & insured. Call (475) 441-6727.",
  keywords: "dumpster rental wolcott ct, roll off dumpster wolcott, construction dumpster rental wolcott, 10 yard dumpster wolcott, 20 yard dumpster wolcott, residential dumpster rental wolcott",
  alternates: {
    canonical: 'https://presidentialdumpsters.xyz/wolcott',
  },
};

export default function WolcottPage() {
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
      "name": "Wolcott",
      "addressRegion": "CT",
      "addressCountry": "US"
    },
    "offers": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "10 Yard Dumpster Rental Wolcott"
        },
        "price": "395",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "20 Yard Dumpster Rental Wolcott"
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
        <FadeIn>
        <section className="space-y-10">
          <Breadcrumb items={[{ label: "Wolcott Dumpster Rental" }]} />
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
              <Truck className="h-3.5 w-3.5" /> Presidential Dumpsters
            </span>
            <h1 className="text-6xl font-medium leading-[1.1] tracking-[-0.025em] text-white md:text-7xl">
              Dumpster Rental in Wolcott, CT
            </h1>
            <p className="max-w-xl text-[17px] leading-relaxed text-white/70 md:text-lg">
              Local dumpster rental service for Wolcott homeowners and contractors. 10-yard and 20-yard roll-off dumpsters for home renovations, cleanouts, and construction projects.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-200/30 bg-emerald-500/10 backdrop-blur-sm p-4 shadow-lg shadow-emerald-500/10">
                <p className="text-sm font-semibold text-white">Same-day delivery available</p>
                <p className="mt-1 text-sm text-white/70">Local Wolcott service with fast delivery.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-sm p-4 shadow-lg shadow-white/5">
                <p className="text-sm font-semibold text-white">Licensed & insured</p>
                <p className="mt-1 text-sm text-white/70">State-licensed with full coverage on every haul.</p>
              </div>
            </div>
          </div>
        </section>
        </FadeIn>

        <FadeIn delay={0.2} direction="left">
        <BookingFormCard addressPlaceholder="123 Main St, Wolcott" />
        </FadeIn>
      </main>

      <FadeIn delay={0.3}>
      <Footer />
      </FadeIn>
    </div>
  );
}
