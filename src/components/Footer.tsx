"use client";

import Link from "next/link";
import Image from "next/image";
import { useOfficeHours } from "./useOfficeHours";

export default function Footer() {
  const officeOpen = useOfficeHours();

  return (
    <footer className="border-t border-gray-200 bg-white py-12 mt-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16">
          <div className="space-y-4">
            <div>
              <Link href="/" className="text-sm font-semibold text-black transition-colors hover:text-gray-600">
                Presidential Dumpsters
              </Link>
              <p className="mt-1.5 text-sm text-gray-500">PO Box 4141, Waterbury, CT 06704</p>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/sizing-guide" className="text-gray-500 hover:text-black transition-colors">
                Sizing Guide
              </Link>
              <Link href="/faq" className="text-gray-500 hover:text-black transition-colors">
                FAQ
              </Link>
            </div>
            <p className="text-xs text-gray-400">Licensed and insured roll-off service</p>
          </div>

          <div className="space-y-4 text-sm md:text-right">
            <p className={officeOpen ? "text-black font-medium" : "text-gray-500"}>
              Mon-Thu 10a-5p | Fri 10a-12p
            </p>
            <div className="space-y-3">
              <p className="text-sm text-gray-500">
                Office: <a href="tel:+1-475-441-6727" className="text-black hover:text-gray-600 transition-colors">(475) 441-6727 Ext. 1</a>
              </p>
              <p className="text-sm text-gray-500">
                Cell: <a href="tel:+1-347-299-0482" className="text-black hover:text-gray-600 transition-colors">(347) 299-0482</a>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 flex justify-center">
          <a
            href="https://dovindustries.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-black transition-colors"
          >
            <Image
              src="/dovindustries-bear-white-transparent.png"
              alt="dovindustries logo"
              width={20}
              height={20}
              quality={100}
              className="h-5 w-5 opacity-40"
            />
            <span className="text-sm">
              dovindustries
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
