const dumpsters = {
  '10': { base: 475, name: '10‑Yard' },
  '15': { base: 535, name: '15‑Yard' },
  '20': { base: 575, name: '20‑Yard' }
} as const;

export type DumpsterSize = keyof typeof dumpsters;

// Rental terms shared across every dumpster size (per current pricing flyer).
export const tonsIncluded = 2;
export const overagePerTon = 145;
export const includedRentalDays = 7;
export const extraDayRate = 10;

export { dumpsters };
