import Link from "next/link";
import Image from "next/image";
import { Home, Phone, Search } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Presidential Dumpsters",
  description: "The page you're looking for doesn't exist. Find dumpster rental services in Connecticut.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#061633] via-[#0a2d56] to-[#0b3f3c] text-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="mb-8">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Presidential Dumpsters"
              width={300}
              height={108}
              className="h-16 w-auto mx-auto"
              priority
              quality={100}
            />
          </Link>
        </div>

        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white/90">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold">Page Not Found</h2>
          <p className="text-lg text-white/70 max-w-md mx-auto">
            Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 via-emerald-400 to-yellow-400 text-slate-900 font-semibold rounded-xl hover:from-green-600 hover:via-emerald-500 hover:to-yellow-500 transition-all"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <a
            href="tel:+1-475-441-6727"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition-colors"
          >
            <Phone className="h-4 w-4" />
            Call (475) 441-6727
          </a>
        </div>

        <div className="pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold mb-4 flex items-center justify-center gap-2">
            <Search className="h-5 w-5" />
            Popular Pages
          </h3>
          <nav>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-white/80 max-w-lg mx-auto">
              <li>
                <Link href="/" className="hover:text-white underline decoration-white/30 hover:decoration-white/60 transition-colors">
                  → Home
                </Link>
              </li>
              <li>
                <Link href="/hartford" className="hover:text-white underline decoration-white/30 hover:decoration-white/60 transition-colors">
                  → Hartford Dumpster Rental
                </Link>
              </li>
              <li>
                <Link href="/new-haven" className="hover:text-white underline decoration-white/30 hover:decoration-white/60 transition-colors">
                  → New Haven Dumpster Rental
                </Link>
              </li>
              <li>
                <Link href="/sizing-guide" className="hover:text-white underline decoration-white/30 hover:decoration-white/60 transition-colors">
                  → Sizing Guide
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white underline decoration-white/30 hover:decoration-white/60 transition-colors">
                  → FAQ
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
