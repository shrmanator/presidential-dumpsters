import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FAQ - Dumpster Rental Questions | Presidential Dumpsters",
  description: "Common questions about dumpster rental in Connecticut. Learn about sizes, permits, delivery, pricing, and what you can dispose of.",
  keywords: "dumpster rental faq, dumpster questions, permit requirements, rental period, disposal guidelines",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#061633] via-[#0a2d56] to-[#0b3f3c] text-white">
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
          <a
            href="tel:+1-475-441-6727"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/10"
          >
            <Phone className="h-4 w-4" /> (475) 441-6727
          </a>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Everything you need to know about our dumpster rental service
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-6">
              <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">What sizes do you offer?</h3>
                <p className="text-white/80">We offer 10-yard dumpsters ($395) perfect for small cleanouts and 20-yard dumpsters ($550) ideal for larger projects and construction work.</p>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">How long can I keep the dumpster?</h3>
                <p className="text-white/80">All rentals include 7 days on-site. Need longer? Just let us know and we can extend your rental period.</p>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">What areas do you serve?</h3>
                <p className="text-white/80">We serve Waterbury, New Haven, Hartford and surrounding Connecticut areas with same-week delivery.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">Do I need a permit?</h3>
                <p className="text-white/80">If the dumpster goes on your property, no permit needed. For street placement, you may need a city permit - we can advise you on local requirements.</p>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">What can&apos;t go in the dumpster?</h3>
                <p className="text-white/80">No hazardous materials, paint, chemicals, tires, or electronics. Standard household and construction debris is fine.</p>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">How do I schedule delivery?</h3>
                <p className="text-white/80">Fill out our quick form on the homepage or call (475) 441-6727. We&apos;ll confirm your order and schedule delivery within your timeframe.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
              <p className="text-white/80 mb-6">Our team is here to help. Give us a call and we&apos;ll walk you through everything.</p>
              <a
                href="tel:+1-475-441-6727"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 via-emerald-400 to-yellow-400 text-slate-900 font-semibold rounded-xl hover:from-green-600 hover:via-emerald-500 hover:to-yellow-500 transition-all"
              >
                <Phone className="h-4 w-4" />
                Call (475) 441-6727
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
