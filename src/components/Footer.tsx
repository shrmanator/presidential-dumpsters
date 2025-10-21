import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#061633]/60 py-12 mt-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16">
          <div className="space-y-4">
            <div>
              <p className="text-base font-semibold text-white">Presidential Dumpsters</p>
              <p className="mt-1 text-sm text-white/60">PO Box 4141, Waterbury, CT 06704</p>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/sizing-guide" className="text-white/70 hover:text-white transition-colors">
                Sizing Guide
              </Link>
              <Link href="/faq" className="text-white/70 hover:text-white transition-colors">
                FAQ
              </Link>
            </div>
            <p className="text-xs text-white/50">Licensed and insured roll-off service</p>
          </div>

          <div className="space-y-3 text-sm md:text-right">
            <p className="text-white/60">Office: Mon-Thu 10a-5p | Fri 10a-12p</p>
            <div className="space-y-2">
              <p className="text-sm text-white/70">
                Office: <a href="tel:+1-475-441-6727" className="text-white hover:text-emerald-400 transition-colors">(475) 441-6727 Ext. 1</a>
              </p>
              <p className="text-sm text-white/70">
                Cell: <a href="tel:+1-347-299-0482" className="text-white hover:text-emerald-400 transition-colors">(347) 299-0482</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
