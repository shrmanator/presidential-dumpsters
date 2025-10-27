"use client";

import Link from "next/link";
import { useOfficeHours } from "./useOfficeHours";

export default function Footer() {
  const officeOpen = useOfficeHours();

  return (
    <footer className="border-t border-white/10 bg-[#061633]/60 py-12 mt-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16">
          <div className="space-y-4">
            <div>
              <p className="text-[15px] font-semibold text-white">Presidential Dumpsters</p>
              <p className="mt-1.5 text-sm text-white/60">PO Box 4141, Waterbury, CT 06704</p>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/sizing-guide" className="text-white/70 hover:text-white transition-all duration-200 hover:underline underline-offset-4">
                Sizing Guide
              </Link>
              <Link href="/faq" className="text-white/70 hover:text-white transition-all duration-200 hover:underline underline-offset-4">
                FAQ
              </Link>
            </div>
            <p className="text-xs text-white/50">Licensed and insured roll-off service</p>
          </div>

          <div className="space-y-4 text-sm md:text-right">
            {officeOpen ? (
              <p className="inline-flex items-center gap-1.5 text-emerald-400 md:justify-end">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                Mon-Thu 10a-5p | Fri 10a-12p
              </p>
            ) : (
              <p className="text-white">Mon-Thu 10a-5p | Fri 10a-12p</p>
            )}
            <div className="space-y-3">
              <p className="text-sm text-white/70">
                Office: <a href="tel:+1-475-441-6727" className="text-white/70 hover:text-emerald-400 transition-all duration-200">(475) 441-6727 Ext. 1</a>
              </p>
              <p className="text-sm text-white/70">
                Cell: <a href="tel:+1-347-299-0482" className="text-white/70 hover:text-emerald-400 transition-all duration-200">(347) 299-0482</a>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-white/40">
            <a
              href="https://dovindustries.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white/70 transition-colors duration-200"
            >
              dovindustries
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
