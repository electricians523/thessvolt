import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script"; // 🆕 Μην ξεχάσεις την εισαγωγή
import CookieConsentBanner from "@/components/CookieConsentBanner"; // ✅

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ThessVolt – Ηλεκτρολογικές Υπηρεσίες Θεσσαλονίκη",
  description:
    "Άμεση εξυπηρέτηση και αξιόπιστες ηλεκτρολογικές λύσεις από την ThessVolt στη Θεσσαλονίκη.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <Head>
        <title>ThessVolt – Ηλεκτρολογικές Υπηρεσίες Θεσσαλονίκη</title>
        <meta
          name="description"
          content="Άμεση εξυπηρέτηση και αξιόπιστες ηλεκτρολογικές λύσεις από την ThessVolt στη Θεσσαλονίκη."
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ✅ Cookie Consent */}
        <CookieConsentBanner />

        {/* ✅ Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KZ3GPZJ6RS"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KZ3GPZJ6RS');
            `,
          }}
        />

        {/* 🔥 Google Ads Script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17017784764"
        />
        <Script
          id="google-ads"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17017784764');
            `,
          }}
        />

        {children}
      </body>
    </html>
  );
}
