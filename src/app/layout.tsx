import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";
import CookieConsentBanner from "@/components/CookieConsentBanner";

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

        {/* OpenGraph Meta */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="ThessVolt – Ηλεκτρολογικές Υπηρεσίες Θεσσαλονίκη"
        />
        <meta
          property="og:description"
          content="Άμεση εξυπηρέτηση και αξιόπιστες ηλεκτρολογικές λύσεις από την ThessVolt στη Θεσσαλονίκη."
        />
        <meta property="og:url" content="https://www.thessvolt.gr/" />
        <meta
          property="og:image"
          content="https://www.thessvolt.gr/big_logo.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="ThessVolt – Ηλεκτρολογικές Υπηρεσίες και Λύσεις στη Θεσσαλονίκη"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="ThessVolt – Ηλεκτρολογικές Υπηρεσίες Θεσσαλονίκη"
        />
        <meta
          name="twitter:description"
          content="Άμεση εξυπηρέτηση και αξιόπιστες ηλεκτρολογικές λύσεις από την ThessVolt στη Θεσσαλονίκη."
        />
        <meta
          name="twitter:image"
          content="https://www.thessvolt.gr/big_logo.png"
        />
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        {/* Cookie Consent */}
        <CookieConsentBanner />

        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Electrician",
              "@id": "https://www.thessvolt.gr/#electrician",
              name: "ThessVolt",
              description:
                "Άμεση εξυπηρέτηση και αξιόπιστες ηλεκτρολογικές λύσεις από την ThessVolt στη Θεσσαλονίκη.",
              url: "https://www.thessvolt.gr/",
              logo: "https://www.thessvolt.gr/big_logo.png",
              image: "https://www.thessvolt.gr/big_logo.png",
              telephone: "+30 698 275 2398",
              areaServed: {
                "@type": "Place",
                name: "Θεσσαλονίκη",
              },
              availableLanguage: ["Greek"],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "08:00",
                  closes: "21:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "15:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "10:00",
                  closes: "15:00",
                },
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+30 698 275 2398",
                contactType: "customer service",
                areaServed: "GR",
                availableLanguage: "Greek",
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=61575284833732",
                "https://api.whatsapp.com/send/?phone=306982752398&text&type=phone_number&app_absent=0",
                "https://g.co/kgs/b4JNVBm",
              ],
            }),
          }}
        />

        {/* Google Analytics + Google Ads */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KZ3GPZJ6RS"
        />

        <Script
          id="google-tags"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}

              gtag('js', new Date());

              // Google Analytics
              gtag('config', 'G-KZ3GPZJ6RS');

              // Google Ads
              gtag('config', 'AW-17492502073');
            `,
          }}
        />

        {/* Tawk.to Chat */}
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
            `,
          }}
        />

        {children}

      </body>
    </html>
  );
}