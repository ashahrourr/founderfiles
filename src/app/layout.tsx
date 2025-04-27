import type { Metadata } from "next";
import "./globals.css";
import SupabaseProvider from '@/components/SupabaseProvider';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "FounderFiles — Daily Tech Founder Stories",
  description: "Discover how top founders went from idea to exit — and where they are now.",
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
