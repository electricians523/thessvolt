import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Head from "next/head";
import CookieConsent from "@/components/CookieConsent"; // 👈 Εδώ βάζεις το component

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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css"
          precedence="default"
        />
      </Head>

      {/* ✅ Cookie Consent Script */}
      <Script
        src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js"
        strategy="afterInteractive"
      />
      <CookieConsent />

      {/* 🔥 Google Ads Script */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-17017784764"
        strategy="afterInteractive"
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

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
