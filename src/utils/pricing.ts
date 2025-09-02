const dumpsters = {
  '10': { base: 450, name: '10‑Yard' },
  '20': { base: 550, name: '20‑Yard' }
} as const;

export type DumpsterSize = keyof typeof dumpsters;

export { dumpsters };