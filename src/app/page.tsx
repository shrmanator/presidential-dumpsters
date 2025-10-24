import Image from "next/image";
import Link from "next/link";
import { Truck } from "lucide-react";
import { NavPhoneButton } from "@/components/NavPhoneButton";
import { BookingFormCard } from "@/components/BookingFormCard";
import Footer from "@/components/Footer";

export default function PresidentialDumpsters() {
  return (
    <div className="min-h-screen bg-[#061633] text-white">
      <nav className="border-b border-white/10 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
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
          <NavPhoneButton />
        </div>
      </nav>

      <main className="mx-auto grid max-w-6xl items-start gap-12 px-6 pb-20 pt-16 text-white lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:gap-16">
        <section className="space-y-10">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
              <Truck className="h-3.5 w-3.5" /> Presidential Dumpsters
            </span>
            <h1 className="text-[2.75rem] font-medium leading-[1.1] tracking-[-0.025em] text-white md:text-[3.5rem]">
              Dumpster rentals in Waterbury, CT
            </h1>
            <p className="max-w-xl text-[17px] leading-relaxed text-white/70 md:text-lg">
              10-yard and 20-yard roll-off dumpsters serving Waterbury,{" "}
              <Link href="/oakville" className="text-white underline decoration-white/30 hover:decoration-white/60 transition-colors">
                Oakville
              </Link>
              ,{" "}
              <Link href="/wolcott" className="text-white underline decoration-white/30 hover:decoration-white/60 transition-colors">
                Wolcott
              </Link>
              ,{" "}
              <Link href="/hartford" className="text-white underline decoration-white/30 hover:decoration-white/60 transition-colors">
                Hartford
              </Link>
              ,{" "}
              <Link href="/new-haven" className="text-white underline decoration-white/30 hover:decoration-white/60 transition-colors">
                New Haven
              </Link>
              , and surrounding towns.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-200/30 bg-emerald-500/10 p-4">
                <p className="text-sm font-semibold text-white">Same-day delivery available</p>
                <p className="mt-1 text-sm text-white/70">Local crews ready to deliver fast.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-sm font-semibold text-white">Licensed & insured</p>
                <p className="mt-1 text-sm text-white/70">State-licensed with full coverage on every haul.</p>
              </div>
            </div>
          </div>
        </section>

        <BookingFormCard />
      </main>

      <Footer />
    </div>
  );
}
