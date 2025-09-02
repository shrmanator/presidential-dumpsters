const TAX_RATE = 0.08;
const INCLUDED_MILES = 15;
const PER_MILE_RATE = 6;

const dumpsters = {
  '10': { base: 450, name: '10‑Yard' },
  '20': { base: 550, name: '20‑Yard' }
} as const;

export type DumpsterSize = keyof typeof dumpsters;

export function calcPrice(selectedSize: DumpsterSize, distanceMi: number) {
  const base = dumpsters[selectedSize].base;
  const extraMiles = Math.max(0, distanceMi - INCLUDED_MILES);
  const distanceFee = extraMiles * PER_MILE_RATE;
  const subtotal = base + distanceFee;
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;
  return { base, distanceFee, subtotal, tax, total, extraMiles };
}

export { dumpsters, INCLUDED_MILES, PER_MILE_RATE };