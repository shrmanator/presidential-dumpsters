import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Presidential Dumpsters - Dumpster Rental Waterbury CT | Same Day Delivery",
  description: "Professional dumpster rental services in Waterbury, Connecticut. 10-yard and 20-yard dumpsters starting at $395. Same/next day delivery. Licensed & insured. Call (475) 441-6727.",
  keywords: "dumpster rental waterbury ct, dumpster rental connecticut, roll off dumpster, construction dumpster, 10 yard dumpster, 20 yard dumpster, same day delivery",
  authors: [{ name: "Presidential Management" }],
  creator: "Presidential Management",
  publisher: "Presidential Management",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://presidentialdumpsters.com',
    siteName: 'Presidential Dumpsters',
    title: 'Presidential Dumpsters - Professional Dumpster Rental Waterbury CT',
    description: 'Professional dumpster rental services in Waterbury, Connecticut. 10-yard and 20-yard dumpsters starting at $395. Same/next day delivery. Licensed & insured.',
    images: [
      {
        url: '/logo.png',
        width: 450,
        height: 144,
        alt: 'Presidential Dumpsters Logo',
      },
      {
        url: '/presidential-dumpsters-logo-favicon.png',
        width: 512,
        height: 512,
        alt: 'Presidential Dumpsters Favicon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Presidential Dumpsters - Professional Dumpster Rental Waterbury CT',
    description: 'Professional dumpster rental services in Waterbury, Connecticut. 10-yard and 20-yard dumpsters starting at $395. Same/next day delivery.',
    images: ['/logo.png'],
    creator: '@presidentialdumpsters',
    site: '@presidentialdumpsters',
  },
  alternates: {
    canonical: 'https://presidentialdumpsters.com',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'Waste Management',
  classification: 'Business',
  other: {
    'geo.region': 'US-CT',
    'geo.placename': 'Waterbury',
    'geo.position': '41.5581;-73.0515',
    'ICBM': '41.5581, -73.0515',
    'DC.title': 'Presidential Dumpsters - Dumpster Rental Waterbury CT',
    'DC.creator': 'Presidential Management',
    'DC.subject': 'Dumpster Rental Services',
    'DC.description': 'Professional dumpster rental services in Waterbury, Connecticut',
    'DC.publisher': 'Presidential Management',
    'DC.contributor': 'Presidential Management',
    'DC.date': new Date().toISOString().split('T')[0],
    'DC.type': 'Service',
    'DC.format': 'text/html',
    'DC.identifier': 'https://presidentialdumpsters.com',
    'DC.language': 'en',
    'DC.coverage': 'Waterbury, Connecticut, USA',
    'DC.rights': 'Copyright Presidential Management',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
