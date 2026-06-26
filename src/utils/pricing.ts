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

// Connecticut state sales tax, applied automatically at checkout.
export const salesTaxRate = 0.0635;

/** Sales tax owed on a pre-tax amount, rounded to cents. */
export const calculateTax = (preTax: number) =>
  Math.round(preTax * salesTaxRate * 100) / 100;

/** Pre-tax amount plus sales tax, rounded to cents. */
export const calculateTotal = (preTax: number) =>
  Math.round((preTax + calculateTax(preTax)) * 100) / 100;

/** Format a dollar amount as USD currency (e.g. 611.51 -> "$611.51"). */
export const formatUsd = (amount: number) =>
  amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

export { dumpsters };
