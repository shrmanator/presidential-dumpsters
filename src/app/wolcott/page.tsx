import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Truck } from "lucide-react";
import { NavPhoneButton } from "@/components/NavPhoneButton";
import { BookingFormCard } from "@/components/BookingFormCard";
import Footer from "@/components/Footer";

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
    <div className="min-h-screen bg-[#061633] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav className="border-b border-white/10 backdrop-blur-sm">
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
      </nav>

      <main className="mx-auto grid max-w-6xl items-start gap-12 px-6 pb-20 pt-16 text-white lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:gap-16">
        <section className="space-y-10">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
              <Truck className="h-3.5 w-3.5" /> Presidential Dumpsters
            </span>
            <h1 className="text-[2.75rem] font-medium leading-[1.1] tracking-[-0.025em] text-white md:text-[3.5rem]">
              Dumpster Rental in Wolcott, CT
            </h1>
            <p className="max-w-xl text-[17px] leading-relaxed text-white/70 md:text-lg">
              Local dumpster rental service for Wolcott homeowners and contractors. 10-yard and 20-yard roll-off dumpsters for home renovations, cleanouts, and construction projects.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-200/30 bg-emerald-500/10 p-4">
                <p className="text-sm font-semibold text-white">Same-day delivery available</p>
                <p className="mt-1 text-sm text-white/70">Local Wolcott service with fast delivery.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-sm font-semibold text-white">Licensed & insured</p>
                <p className="mt-1 text-sm text-white/70">State-licensed with full coverage on every haul.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Wolcott Dumpster Rental Services</h2>
            <p className="text-white/80">
              We provide reliable roll-off dumpster rentals throughout Wolcott, CT. Whether you&apos;re a homeowner tackling a kitchen renovation, a contractor managing a construction site, or working on outdoor projects, we have the right dumpster size for your needs.
            </p>
            <p className="text-white/80">
              Our 10-yard and 20-yard dumpsters are perfect for home projects like bathroom remodels, deck removal, garage cleanouts, and estate cleanups. We also serve outdoor projects including landscaping debris removal, tree removal, shed demolition, and general property cleanup throughout Wolcott.
            </p>
            <p className="text-white/80">
              As a local service, we know Wolcott neighborhoods and can navigate residential streets with ease. Our team provides prompt delivery, helpful guidance on sizing, and reliable pickup scheduling that respects your property. Same-day delivery is available for most Wolcott locations.
            </p>
          </div>
        </section>

        <BookingFormCard addressPlaceholder="123 Main St, Wolcott" />
      </main>

      <Footer />
    </div>
  );
}
