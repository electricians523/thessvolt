import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import CookieConsentBanner from "@/components/CookieConsentBanner"; // 🆕 Νέο component χωρίς scripts

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
        {/* ✅ Νέο React Cookie Consent Banner */}
        <CookieConsentBanner />

        {/* 🔥 Google Ads Script */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17017784764"
        ></script>
        <script
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
