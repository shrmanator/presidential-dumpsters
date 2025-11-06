import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { NavPhoneButton } from "@/components/NavPhoneButton";
import { PhoneLink } from "@/components/PhoneLink";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { ScrollNav } from "@/components/ScrollNav";

export const metadata: Metadata = {
  title: "Dumpster Sizing Guide | Presidential Dumpsters",
  description: "Choose the right dumpster size for your project. Compare 10-yard and 20-yard dumpsters for Connecticut homes and businesses.",
  keywords: "dumpster size guide, 10 yard dumpster, 20 yard dumpster, dumpster comparison",
  alternates: {
    canonical: 'https://presidentialdumpsters.xyz/sizing-guide',
  },
};

export default function SizingGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#061633] via-[#0A2147] to-[#061633] text-white">
      {/* Navigation */}
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

      <main className="relative z-10 mx-auto max-w-5xl px-6 py-16">
        <FadeIn>
          <div className="space-y-12">
            {/* Header */}
            <div className="space-y-3">
              <h1 className="text-5xl md:text-6xl font-medium leading-tight tracking-tight">
                Choose the Right Size
              </h1>
              <p className="text-lg text-white/70">
                Not sure which dumpster you need? Here&apos;s our quick guide.
              </p>
            </div>

            {/* Size Comparison */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* 10-Yard */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-lg shadow-white/5">
              <div className="flex items-baseline justify-between mb-4">
                <h2 className="text-2xl font-semibold">10-Yard</h2>
                <span className="text-2xl font-semibold text-emerald-400">$395</span>
              </div>
              
              <div className="space-y-4 text-white/70">
                <div>
                  <h3 className="text-sm font-semibold text-emerald-400 mb-2">Perfect For:</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Small bathroom renovations</li>
                    <li>• Basement or attic cleanouts</li>
                    <li>• Single room projects</li>
                    <li>• Garage cleanouts</li>
                    <li>• Small landscaping jobs</li>
                  </ul>
                </div>
                
                <div className="pt-3 border-t border-white/10">
                  <p className="text-sm"><span className="font-medium text-white">Capacity:</span> About 4 pickup truck loads</p>
                  <p className="text-sm mt-1"><span className="font-medium text-white">Size:</span> 12&apos; long × 8&apos; wide × 4&apos; high</p>
                </div>
              </div>
            </div>

            {/* 20-Yard */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 shadow-lg shadow-white/5">
              <div className="flex items-baseline justify-between mb-4">
                <h2 className="text-2xl font-semibold">20-Yard</h2>
                <span className="text-2xl font-semibold text-emerald-400">$550</span>
              </div>
              
              <div className="space-y-4 text-white/70">
                <div>
                  <h3 className="text-sm font-semibold text-emerald-400 mb-2">Perfect For:</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Kitchen renovations</li>
                    <li>• Roofing projects</li>
                    <li>• Large basement cleanouts</li>
                    <li>• Construction debris</li>
                    <li>• Multi-room renovations</li>
                  </ul>
                </div>
                
                <div className="pt-3 border-t border-white/10">
                  <p className="text-sm"><span className="font-medium text-white">Capacity:</span> About 8 pickup truck loads</p>
                  <p className="text-sm mt-1"><span className="font-medium text-white">Size:</span> 22&apos; long × 8&apos; wide × 4&apos; high</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 text-center shadow-lg shadow-white/5">
            <h3 className="text-xl font-semibold mb-3">Still Not Sure?</h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Our team can help you choose the right size based on your specific project.
              We&apos;d rather have you get it right the first time.
            </p>
            <PhoneLink className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/40 hover:ring-2 hover:ring-emerald-400/50 hover:ring-offset-2 hover:ring-offset-[#061633] transition-all active:scale-[0.98]">
              <Phone className="h-4 w-4" />
              Call for Free Sizing Advice
            </PhoneLink>
          </div>
          </div>
        </FadeIn>
      </main>

      <FadeIn delay={0.2}>
        <Footer />
      </FadeIn>
    </div>
  );
}
