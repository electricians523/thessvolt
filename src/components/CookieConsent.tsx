"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    cookieconsent: {
      initialise: (config: object) => void;
    };
  }
}

export default function CookieConsent() {
  useEffect(() => {
    const tryInit = () => {
      if (typeof window !== "undefined" && window.cookieconsent?.initialise) {
        window.cookieconsent.initialise({
          palette: {
            popup: {
              background: "#033941",
              text: "#ffffff"
            },
            button: {
              background: "#ffcc00",
              text: "#033941"
            }
          },
          theme: "classic",
          position: "bottom",
          elements: {
            dismiss: '<button aria-label="OK" class="cc-btn cc-dismiss">ΟΚ</button>'
          },
          content: {
            message: "Αυτός ο ιστότοπος χρησιμοποιεί cookies για να διασφαλίσει την καλύτερη εμπειρία.",
            dismiss: "ΟΚ",
            link: "Μάθε περισσότερα",
            href: "/privacy-policy"
          }
        });
      } else {
        setTimeout(tryInit, 500);
      }
    };

    tryInit();
  }, []);

  return null;
}
