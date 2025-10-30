import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { NavPhoneButton } from "@/components/NavPhoneButton";
import { PhoneLink } from "@/components/PhoneLink";
import Footer from "@/components/Footer";

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
    <div className="min-h-screen bg-[#061633] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      
      {/* Navigation */}
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

      <main className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-8">
          <div className="space-y-3">
            <h1 className="text-[2.5rem] font-medium leading-tight tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-white/70">
              Quick answers about our dumpster rental service
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-white/70 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
            <h2 className="text-xl font-semibold mb-3">Still have questions?</h2>
            <p className="text-white/70 mb-6">Give us a call and we&apos;ll walk you through everything.</p>
            <PhoneLink className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 shadow-sm hover:shadow transition-all active:scale-[0.98]">
              <Phone className="h-4 w-4" />
              Call Us Now
            </PhoneLink>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
