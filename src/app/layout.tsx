import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ConsoleCredit } from "@/components/ConsoleCredit";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://presidentialdumpsters.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Presidential Dumpsters - Dumpster Rental Waterbury CT | Same Day Delivery",
  description: "Professional dumpster rental services in Waterbury, Connecticut. 10-yard and 20-yard dumpsters starting at $395. Same/next day delivery. Licensed & insured. Call (475) 441-6727.",
  keywords: "dumpster rental waterbury ct, roll off dumpster rental waterbury, construction dumpster new haven, dumpster rental hartford ct, 10 yard dumpster connecticut, 20 yard dumpster waterbury, same day dumpster delivery ct, weekend dumpster rental, residential dumpster rental waterbury, commercial dumpster rental connecticut, debris removal waterbury ct, construction waste disposal",
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
    url: 'https://presidentialdumpsters.xyz',
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
        url: '/presidential-dumpsters-logo-favicon-min.png',
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
    canonical: 'https://presidentialdumpsters.xyz',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'Waste Management',
  classification: 'Business',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Presidential Dumpsters',
    startupImage: [
      '/presidential-dumpsters-logo-favicon-min.png',
    ],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/presidential-dumpsters-logo-favicon-min.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/presidential-dumpsters-logo-favicon-min.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
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
    'DC.identifier': 'https://presidentialdumpsters.xyz',
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
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://presidentialdumpsters.xyz/#business',
    name: 'Presidential Dumpsters',
    legalName: 'Presidential Management',
    url: 'https://presidentialdumpsters.xyz',
    logo: 'https://presidentialdumpsters.xyz/logo.png',
    image: [
      'https://presidentialdumpsters.xyz/logo.png',
      'https://presidentialdumpsters.xyz/presidential-dumpsters-logo-favicon-min.png'
    ],
    description: 'Professional dumpster rental services in Waterbury, Connecticut. 10-yard and 20-yard dumpsters starting at $395. Same/next day delivery. Licensed & insured.',
    priceRange: '$395-$695',
    telephone: '+1-475-441-6727',
    email: 'info@presidentialdumpsters.xyz',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'PO Box 4141',
      addressLocality: 'Waterbury',
      addressRegion: 'CT',
      postalCode: '06704',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.5581,
      longitude: -73.0515
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Waterbury',
        addressRegion: 'CT',
        addressCountry: 'US'
      },
      {
        '@type': 'City',
        name: 'New Haven',
        addressRegion: 'CT',
        addressCountry: 'US'
      },
      {
        '@type': 'City',
        name: 'Hartford',
        addressRegion: 'CT',
        addressCountry: 'US'
      },
      {
        '@type': 'City',
        name: 'Oakville',
        addressRegion: 'CT',
        addressCountry: 'US'
      },
      {
        '@type': 'City',
        name: 'Wolcott',
        addressRegion: 'CT',
        addressCountry: 'US'
      },
      {
        '@type': 'State',
        name: 'Connecticut',
        addressCountry: 'US'
      }
    ],
    serviceType: 'Dumpster Rental',
    category: 'Waste Management',
    openingHours: [
      'Mo-Th 10:00-17:00',
      'Fr 10:00-12:00'
    ],
    paymentAccepted: ['Cash', 'Credit Card', 'Check'],
    currenciesAccepted: 'USD',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Dumpster Rental Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '10 Yard Dumpster Rental',
            description: 'Perfect for small cleanouts and renovation projects'
          },
          price: '395',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: 395,
            priceCurrency: 'USD',
            unitText: '7-day rental'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '20 Yard Dumpster Rental',
            description: 'Ideal for large projects and construction work'
          },
          price: '695',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: 695,
            priceCurrency: 'USD',
            unitText: '7-day rental'
          }
        }
      ]
    },
    sameAs: [
      'https://facebook.com/presidentialdumpsters',
      'https://twitter.com/presidentialdumpsters'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '127'
    }
  };

  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Presidential" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Microsoft Clarity */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || 'YOUR_PROJECT_ID'}");
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
        <ConsoleCredit />
      </body>
    </html>
  );
}
