import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
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
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "ThessVolt – Ηλεκτρολογικές Υπηρεσίες Θεσσαλονίκη",
    description:
      "Άμεση εξυπηρέτηση και αξιόπιστες ηλεκτρολογικές λύσεις από την ThessVolt στη Θεσσαλονίκη.",
    url: "https://www.thessvolt.gr/",
    images: [
      {
        url: "https://www.thessvolt.gr/big_logo.png",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="el">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NK6VSDQF');
            `,
          }}
        />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NK6VSDQF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Cookie Consent Banner */}
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
              name: "ThessVolt",
              url: "https://www.thessvolt.gr/",
              telephone: "+30 698 275 2398",
              areaServed: "Θεσσαλονίκη",
            }),
          }}
        />

        {/* Tawk.to Chat */}
        <Script
          id="tawkto-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
var Tawk_API=Tawk_API||{},Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/680bd73c7161c519104dc90c/1ipn41h42';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
            `,
          }}
        />

        {children}

      </body>
    </html>
  );
}