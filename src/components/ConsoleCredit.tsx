'use client';

import { useEffect } from 'react';

export function ConsoleCredit() {
  useEffect(() => {
    console.log(
      '%c dovindustries.com ',
      'background: #000; color: #fff; font-size: 14px; padding: 4px 8px; font-family: monospace;'
    );
  }, []);

  return null;
}
