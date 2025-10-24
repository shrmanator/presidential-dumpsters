import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Truck } from "lucide-react";
import { NavPhoneButton } from "@/components/NavPhoneButton";
import { BookingFormCard } from "@/components/BookingFormCard";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dumpster Rental Hartford CT | Same Day Delivery | Presidential Dumpsters",
  description: "Professional dumpster rental in Hartford, Connecticut. 10-yard and 20-yard roll-off dumpsters starting at $395. Same-day delivery available. Licensed & insured. Call (475) 441-6727.",
  keywords: "dumpster rental hartford ct, roll off dumpster hartford, construction dumpster rental hartford, 10 yard dumpster hartford, 20 yard dumpster hartford, same day dumpster delivery hartford, residential dumpster rental hartford, commercial dumpster hartford",
  alternates: {
    canonical: 'https://presidentialdumpsters.xyz/hartford',
  },
};

export default function HartfordPage() {
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
      "name": "Hartford",
      "addressRegion": "CT",
      "addressCountry": "US"
    },
    "offers": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "10 Yard Dumpster Rental Hartford"
        },
        "price": "395",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "20 Yard Dumpster Rental Hartford"
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
              Dumpster Rental in Hartford, CT
            </h1>
            <p className="max-w-xl text-[17px] leading-relaxed text-white/70 md:text-lg">
              Professional roll-off dumpster rental service for Hartford residents and businesses. 10-yard and 20-yard dumpsters for home renovations, construction projects, and commercial cleanouts.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-200/30 bg-emerald-500/10 p-4">
                <p className="text-sm font-semibold text-white">Same-day delivery available</p>
                <p className="mt-1 text-sm text-white/70">Serving all Hartford neighborhoods with fast local delivery.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-sm font-semibold text-white">Licensed & insured</p>
                <p className="mt-1 text-sm text-white/70">State-licensed with full coverage on every haul.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Hartford Dumpster Rental Services</h2>
            <p className="text-white/80">
              We provide reliable dumpster rental services throughout Hartford, CT and surrounding areas. Whether you&apos;re a homeowner tackling a renovation, a contractor managing a construction site, or a business needing regular waste removal, we have the right dumpster size for your project.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <h3 className="font-semibold text-white mb-2">Residential Projects</h3>
                <p className="text-sm text-white/70">Home renovations, basement cleanouts, garage cleanups, landscaping projects</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <h3 className="font-semibold text-white mb-2">Commercial Projects</h3>
                <p className="text-sm text-white/70">Construction sites, office cleanouts, retail renovations, property management</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">Serving Hartford Neighborhoods</h2>
            <p className="text-white/80">
              We deliver dumpsters throughout Hartford including downtown, West End, South End, Parkville, Frog Hollow, and all surrounding neighborhoods. Our local knowledge ensures accurate delivery and pickup scheduling.
            </p>
          </div>
        </section>

        <BookingFormCard addressPlaceholder="123 Main St, Hartford" />
      </main>

      <Footer />
    </div>
  );
}
