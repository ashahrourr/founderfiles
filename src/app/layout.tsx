import type { Metadata } from "next";
import "./globals.css";
import SupabaseProvider from '@/components/SupabaseProvider';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://founderfiles.dev'),
  title: "FounderFiles — Daily Tech Founder Stories",
  description: "Discover how top founders went from idea to exit — and where they are now.",
  openGraph: {
    title: "FounderFiles — Daily Tech Founder Stories",
    description: "Discover how top founders went from idea to exit — and where they are now.",
    url: 'https://founderfiles.dev',
    siteName: 'FounderFiles',
    images: ['/fallback-image.jpg'],   // Ensure this exists in /public
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "FounderFiles — Daily Tech Founder Stories",
    description: "Discover how top founders went from idea to exit — and where they are now.",
    images: ['/fallback-image.jpg'],
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="...">
        {/* Umami Analytics */}
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="8b751e49-8159-4d8e-9410-4990aca08489"
        />

        <SupabaseProvider>
          {children}
        </SupabaseProvider>
      </body>
    </html>
  );
}
