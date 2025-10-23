import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dumpster Sizing Guide & Customer Reviews | Presidential Dumpsters",
  description: "Choose the right dumpster size for your project. Compare 10-yard and 20-yard dumpsters. Read reviews from Connecticut homeowners and contractors.",
  keywords: "dumpster size guide, 10 yard dumpster, 20 yard dumpster, dumpster rental reviews, customer testimonials",
  alternates: {
    canonical: 'https://presidentialdumpsters.xyz/sizing-guide',
  },
};

export default function SizingGuidePage() {
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

      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="space-y-16">
          {/* Sizing Guide */}
          <section className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Choose the Right Size
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Not sure which dumpster size you need? Here&apos;s our quick guide.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">10-Yard Dumpster</h2>
                  <span className="text-2xl font-bold text-emerald-400">$395</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-emerald-400 mb-2">Perfect For:</h3>
                    <ul className="space-y-1 text-white/80">
                      <li>• Small bathroom renovations</li>
                      <li>• Basement or attic cleanouts</li>
                      <li>• Single room projects</li>
                      <li>• Garage cleanouts</li>
                      <li>• Small landscaping jobs</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-emerald-400 mb-2">Capacity:</h3>
                    <p className="text-white/80">Holds about 4 pickup truck loads</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-emerald-400 mb-2">Dimensions:</h3>
                    <p className="text-white/80">12&apos; long × 8&apos; wide × 4&apos; high</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">20-Yard Dumpster</h2>
                  <span className="text-2xl font-bold text-emerald-400">$550</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-emerald-400 mb-2">Perfect For:</h3>
                    <ul className="space-y-1 text-white/80">
                      <li>• Kitchen renovations</li>
                      <li>• Roofing projects</li>
                      <li>• Large basement cleanouts</li>
                      <li>• Construction debris</li>
                      <li>• Multi-room renovations</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-emerald-400 mb-2">Capacity:</h3>
                    <p className="text-white/80">Holds about 8 pickup truck loads</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-emerald-400 mb-2">Dimensions:</h3>
                    <p className="text-white/80">22&apos; long × 8&apos; wide × 4&apos; high</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white/5 rounded-2xl p-8 max-w-4xl mx-auto backdrop-blur-sm border border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-emerald-400">Still Not Sure?</h3>
                <p className="text-white/80 mb-6">
                  Our experienced team can help you choose the right size based on your specific project.
                  We&apos;d rather have you get the right size the first time than deal with the hassle of swapping out dumpsters.
                </p>
                <a
                  href="tel:+1-475-441-6727"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 via-emerald-400 to-yellow-400 text-slate-900 font-semibold rounded-xl hover:from-green-600 hover:via-emerald-500 hover:to-yellow-500 transition-all"
                >
                  <Phone className="h-4 w-4" />
                  Call for Free Sizing Advice
                </a>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
              <p className="text-lg text-white/80">Trusted by homeowners and contractors across Connecticut</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/80 mb-4">&quot;Fast delivery and fair pricing. The crew was professional and placed the dumpster exactly where we needed it for our kitchen renovation.&quot;</p>
                <div className="font-semibold text-white">Sarah M.</div>
                <div className="text-sm text-white/60">Waterbury, CT</div>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/80 mb-4">&quot;Presidential Dumpsters made our office cleanout so easy. Same-day delivery as promised and pickup was right on schedule.&quot;</p>
                <div className="font-semibold text-white">Mike R.</div>
                <div className="text-sm text-white/60">New Haven, CT</div>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/80 mb-4">&quot;Great for our construction project. The 20-yard was perfect size and they were flexible with our timeline. Will definitely use again.&quot;</p>
                <div className="font-semibold text-white">Jennifer L.</div>
                <div className="text-sm text-white/60">Hartford, CT</div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
