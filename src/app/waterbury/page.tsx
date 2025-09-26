import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowLeft, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Dumpster Rental Waterbury CT - Presidential Dumpsters | Same Day Delivery",
  description: "Professional dumpster rental in Waterbury, Connecticut. 10-yard and 20-yard roll-off dumpsters from $395. Same-day delivery available. Licensed & insured. Call (475) 441-6727.",
  keywords: "dumpster rental waterbury ct, roll off dumpster waterbury, construction dumpster waterbury, residential dumpster rental waterbury, commercial dumpster waterbury connecticut",
};

export default function WaterburyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#061633] via-[#0a2d56] to-[#0b3f3c] text-white">
      <nav className="border-b border-white/10 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-white/80 hover:text-white">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
            <Image
              src="/logo.png"
              alt="Presidential Dumpsters"
              width={200}
              height={72}
              className="h-12 w-auto"
              priority
              quality={100}
            />
          </div>
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
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Dumpster Rental in <span className="text-emerald-400">Waterbury, CT</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Fast, reliable dumpster rental service in Waterbury and surrounding areas.
              Same-week delivery available with transparent pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 via-emerald-400 to-yellow-400 text-slate-900 font-semibold rounded-2xl hover:from-green-600 hover:via-emerald-500 hover:to-yellow-500 transition-all"
              >
                Get Quote Online
              </Link>
              <a
                href="tel:+1-475-441-6727"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </div>
          </div>

          {/* Service Areas */}
          <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-6">Waterbury Area Coverage</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-emerald-400">Primary Service Areas</h3>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    Downtown Waterbury
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    East End
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    West End
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    North End
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    South End
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-emerald-400">Nearby Communities</h3>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    Oakville
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    Wolcott
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    Middlebury
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    Prospect
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    Naugatuck
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Local Information */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">Waterbury Permits</h3>
              <p className="text-white/80 mb-4">
                For dumpster placement on private property in Waterbury, no permit is typically required.
                Street placement may require a permit from the City of Waterbury.
              </p>
              <p className="text-sm text-white/60">
                We can help guide you through local permit requirements and recommend the best placement for your project.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">Common Projects</h3>
              <ul className="space-y-2 text-white/80">
                <li>• Home renovations and cleanouts</li>
                <li>• Construction and demolition</li>
                <li>• Roofing projects</li>
                <li>• Landscaping and yard waste</li>
                <li>• Office and retail cleanouts</li>
              </ul>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-6 text-center">Waterbury Dumpster Rental Pricing</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">10-Yard Dumpster</h3>
                <div className="text-3xl font-bold text-emerald-400 mb-2">$395</div>
                <p className="text-white/80 mb-4">Perfect for small cleanouts and home projects</p>
                <ul className="text-sm text-white/70 space-y-1">
                  <li>• 7-day rental included</li>
                  <li>• 12×8×4 feet</li>
                  <li>• Up to 4 tons capacity</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">20-Yard Dumpster</h3>
                <div className="text-3xl font-bold text-emerald-400 mb-2">$550</div>
                <p className="text-white/80 mb-4">Ideal for construction and large projects</p>
                <ul className="text-sm text-white/70 space-y-1">
                  <li>• 7-day rental included</li>
                  <li>• 22×8×4 feet</li>
                  <li>• Up to 6 tons capacity</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 bg-[#061633]/60 py-12 mt-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p className="font-medium text-white">Presidential Dumpsters</p>
            <p>Serving Waterbury, CT and surrounding areas</p>
          </div>
          <div className="space-y-1">
            <p>Office hours: Mon-Thu 10a-5p | Fri 10a-12p</p>
            <a href="tel:+1-475-441-6727" className="hover:text-white">
              (475) 441-6727
            </a>
          </div>
          <p className="text-xs text-white/50">Licensed and insured roll-off service</p>
        </div>
      </footer>
    </div>
  );
}