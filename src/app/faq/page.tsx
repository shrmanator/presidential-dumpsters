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
  title: "FAQ - Dumpster Rental Questions | Presidential Dumpsters",
  description: "Common questions about dumpster rental in Connecticut. Learn about sizes, permits, delivery, pricing, and what you can dispose of.",
  keywords: "dumpster rental faq, dumpster questions, permit requirements, rental period, disposal guidelines",
  alternates: {
    canonical: 'https://presidentialdumpsters.xyz/faq',
  },
};

export default function FAQPage() {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What sizes do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer 10-yard dumpsters ($395) perfect for small cleanouts and 20-yard dumpsters ($550) ideal for larger projects and construction work."
        }
      },
      {
        "@type": "Question",
        "name": "How long can I keep the dumpster?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All rentals include 7 days on-site. Need longer? Just let us know and we can extend your rental period."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve Waterbury, New Haven, Hartford and surrounding Connecticut areas with same-week delivery."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a permit for dumpster rental in Connecticut?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If the dumpster goes on your property, no permit needed. For street placement, you may need a city permit - we can advise you on local requirements."
        }
      },
      {
        "@type": "Question",
        "name": "What can't go in the dumpster?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No hazardous materials, paint, chemicals, tires, or electronics. Standard household and construction debris is fine."
        }
      },
      {
        "@type": "Question",
        "name": "How do I schedule delivery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fill out our quick form on the homepage or call (475) 441-6727. We'll confirm your order and schedule delivery within your timeframe."
        }
      }
    ]
  };

  const faqs = [
    {
      q: "What sizes do you offer?",
      a: "We offer 10-yard dumpsters ($395) perfect for small cleanouts and 20-yard dumpsters ($550) ideal for larger projects and construction work."
    },
    {
      q: "How long can I keep the dumpster?",
      a: "All rentals include 7 days on-site. Need longer? Just let us know and we can extend your rental period."
    },
    {
      q: "What areas do you serve?",
      a: "We serve Waterbury, New Haven, Hartford and surrounding Connecticut areas with same-week delivery."
    },
    {
      q: "Do I need a permit?",
      a: "If the dumpster goes on your property, no permit needed. For street placement, you may need a city permit - we can advise you on local requirements."
    },
    {
      q: "What can't go in the dumpster?",
      a: "No hazardous materials, paint, chemicals, tires, or electronics. Standard household and construction debris is fine."
    },
    {
      q: "How do I schedule delivery?",
      a: "Fill out our quick form on the homepage or call (475) 441-6727. We'll confirm your order and schedule delivery within your timeframe."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#061633] via-[#0A2147] to-[#061633] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      {/* Navigation */}
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

      <main className="relative z-10 mx-auto max-w-4xl px-6 py-24 lg:py-32">
        <FadeIn>
          <div className="space-y-12">
            {/* Header */}
            <div className="space-y-6 text-center">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-[-0.03em]">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                  Questions
                </span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Quick answers about our dumpster rental service in Connecticut
              </p>
            </div>

            {/* FAQ Cards */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <LiquidGlassCard key={index} variant="default">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{faq.q}</h3>
                    <p className="text-white/80 leading-relaxed">{faq.a}</p>
                  </div>
                </LiquidGlassCard>
              ))}
            </div>

            {/* CTA Card */}
            <LiquidGlassCard variant="accent">
              <div className="text-center py-6">
                <h2 className="text-2xl font-bold mb-3">Still have questions?</h2>
                <p className="text-white/80 mb-6 text-lg">
                  Give us a call and we&apos;ll walk you through everything.
                </p>
                <PhoneLink className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 font-bold rounded-xl hover:bg-white/90 shadow-lg shadow-white/20 hover:shadow-xl hover:shadow-white/30 transition-all hover:-translate-y-0.5 active:scale-[0.98]">
                  <Phone className="h-5 w-5" />
                  Call Us Now
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
