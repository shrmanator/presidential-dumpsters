import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { NavPhoneButton } from "@/components/NavPhoneButton";
import { PhoneLink } from "@/components/PhoneLink";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { ScrollNav } from "@/components/ScrollNav";
import { LiquidGlassCard } from "@/components/LiquidGlassCard";

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
    <div className="min-h-screen text-white">
      <ScrollNav>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="transition-opacity hover:opacity-80">
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

      <main className="relative z-10 mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <FadeIn>
          <div className="space-y-16">
            {/* Header */}
            <div className="space-y-6 text-center">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-[-0.03em]">
                Choose the{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                  Right Size
                </span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Not sure which dumpster you need? Here&apos;s our quick guide.
              </p>
            </div>

            {/* Size Comparison */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* 10-Yard */}
              <LiquidGlassCard variant="accent">
                <div className="space-y-6">
                  <div className="flex items-baseline justify-between">
                    <h2 className="text-3xl font-bold text-white">10-Yard</h2>
                    <span className="text-3xl font-bold text-white">$395</span>
                  </div>
                  
                  <div className="space-y-4 text-white/90">
                    <div>
                      <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wide">Perfect For:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-400 mt-1">•</span>
                          <span>Small bathroom renovations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-400 mt-1">•</span>
                          <span>Basement or attic cleanouts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-400 mt-1">•</span>
                          <span>Single room projects</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-400 mt-1">•</span>
                          <span>Garage cleanouts</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t border-white/20">
                      <p><span className="font-semibold text-white">Capacity:</span> About 4 pickup truck loads</p>
                      <p className="mt-2"><span className="font-semibold text-white">Size:</span> 12&apos; long × 8&apos; wide × 4&apos; high</p>
                    </div>
                  </div>
                </div>
              </LiquidGlassCard>

              {/* 20-Yard */}
              <LiquidGlassCard variant="blue">
                <div className="space-y-6">
                  <div className="flex items-baseline justify-between">
                    <h2 className="text-3xl font-bold text-white">20-Yard</h2>
                    <span className="text-3xl font-bold text-white">$550</span>
                  </div>
                  
                  <div className="space-y-4 text-white/90">
                    <div>
                      <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wide">Perfect For:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-300 mt-1">•</span>
                          <span>Full kitchen renovations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-300 mt-1">•</span>
                          <span>Roof replacements</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-300 mt-1">•</span>
                          <span>New construction projects</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-300 mt-1">•</span>
                          <span>Large demolition jobs</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t border-white/20">
                      <p><span className="font-semibold text-white">Capacity:</span> About 8 pickup truck loads</p>
                      <p className="mt-2"><span className="font-semibold text-white">Size:</span> 22&apos; long × 8&apos; wide × 4&apos; high</p>
                    </div>
                  </div>
                </div>
              </LiquidGlassCard>
            </div>

            {/* CTA Card */}
            <LiquidGlassCard variant="accent">
              <div className="text-center py-6">
                <h2 className="text-2xl font-bold mb-3">Still Not Sure?</h2>
                <p className="text-white/80 mb-6 text-lg max-w-2xl mx-auto">
                  No worries! Give us a call and we&apos;ll help you choose the perfect size for your project.
                </p>
                <PhoneLink className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 font-bold rounded-xl hover:bg-white/90 shadow-lg shadow-white/20 hover:shadow-xl hover:shadow-white/30 transition-all hover:-translate-y-0.5 active:scale-[0.98]">
                  <Phone className="h-5 w-5" />
                  Get Expert Advice
                </PhoneLink>
              </div>
            </LiquidGlassCard>
          </div>
        </FadeIn>
      </main>

      <FadeIn delay={0.2}>
        <Footer />
      </FadeIn>
    </div>
  );
}
