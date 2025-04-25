"use client";
import CookieConsent from "react-cookie-consent";

export default function CookieConsentBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="ΟΚ"
      style={{ background: "#033941", color: "#ffffff" }}
      buttonStyle={{
        background: "#ffcc00",
        color: "#033941",
        fontWeight: "bold",
        padding: "8px 16px",
        borderRadius: "6px"
      }}
      expires={365}
    >
      Αυτός ο ιστότοπος χρησιμοποιεί cookies για να διασφαλίσει την καλύτερη εμπειρία.{" "}
      <a
        href="/privacy-policy"
        style={{ color: "#ffcc00", textDecoration: "underline", marginLeft: 4 }}
      >
        Μάθε περισσότερα
      </a>
    </CookieConsent>
  );
}
