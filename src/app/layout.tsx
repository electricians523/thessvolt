import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script"; // 🆕 για Scripts
import CookieConsentBanner from "@/components/CookieConsentBanner"; // ✅ Cookie Consent


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

  {/* OpenGraph Tags για Google/Social */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="ThessVolt – Ηλεκτρολογικές Υπηρεσίες Θεσσαλονίκη" />
  <meta property="og:description" content="Άμεση εξυπηρέτηση και αξιόπιστες ηλεκτρολογικές λύσεις από την ThessVolt στη Θεσσαλονίκη." />
<meta property="og:image" content="https://www.thessvolt.gr/big_logo.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:image" content="https://www.thessvolt.gr/big_logo.png" />

  {/* Twitter Card Tags */}
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="ThessVolt – Ηλεκτρολογικές Υπηρεσίες Θεσσαλονίκη" />
  <meta name="twitter:description" content="Άμεση εξυπηρέτηση και αξιόπιστες ηλεκτρολογικές λύσεις από την ThessVolt στη Θεσσαλονίκη." />
  <meta name="twitter:image" content="https://www.thessvolt.gr/favicon.ico" />
<Script
  id="structured-data"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Electrician",
      "name": "ThessVolt",
      "description": "Άμεση εξυπηρέτηση και αξιόπιστες ηλεκτρολογικές λύσεις από την ThessVolt στη Θεσσαλονίκη.",
      "url": "https://www.thessvolt.gr/",
      "logo": "https://www.thessvolt.gr/favicon.ico",
      "image": "https://www.thessvolt.gr/favicon.ico",
      "telephone": "+30 698 275 2398",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Θεσσαλονίκη",
        "addressCountry": "GR"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Θεσσαλονίκη"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+30 698 275 2398",
        "contactType": "customer service",
        "areaServed": "GR",
        "availableLanguage": "Greek"
      }
    })
  }}
/>

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

  {/* ✅ Tawk.to Live Chat (Αριστερά & Μόνο με κλικ) */}
<Script
  id="tawkto-script"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      var Tawk_API = Tawk_API || {};
      Tawk_API.position = 'left';

      Tawk_API.onLoad = function() {
        Tawk_API.hideWidget();
        Tawk_API.showWidget();
      };

      var Tawk_LoadStart = new Date();
      (function(){
        var s1 = document.createElement("script"),
            s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/680bd73c7161c519104dc90c/1ipn41h42';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1, s0);
      })();
    `
  }}
/>




        {children}
      </body>
    </html>
  );
}
