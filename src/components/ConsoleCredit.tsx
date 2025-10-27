'use client';

import { useEffect } from 'react';

export function ConsoleCredit() {
  useEffect(() => {
    console.log(
      '%c\n' +
      '     _               _             _              _          _            \n' +
      '  __| |  ___ __   __(_) _ __    __| | _   _  ___ | |_  _ __ (_)  ___  ___ \n' +
      ' / _` | / _ \\\\ \\ / /| || \'_ \\  / _` || | | |/ __|| __|| \'__|| | / _ \\/ __|\n' +
      '| (_| || (_) |\\ V / | || | | || (_| || |_| |\\__ \\| |_ | |   | ||  __/\\__ \\\n' +
      ' \\__,_| \\___/  \\_/  |_||_| |_| \\__,_| \\__,_||___/ \\__||_|   |_| \\___||___/\n' +
      '\n%c dovindustries.com \n',
      'font-family: monospace; color: #fff;',
      'font-family: monospace; color: #888; font-size: 12px;'
    );
  }, []);

  return null;
}
