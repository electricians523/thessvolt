"use client";

import { useEffect } from "react";

export default function CookieConsent() {
  useEffect(() => {
    const tryInit = () => {
      const win = window as any;

      if (win.cookieconsent?.initialise) {
        win.cookieconsent.initialise({
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
          theme: "classic", // ή "edgeless", πιο μοντέρνο
          position: "bottom", // "bottom" ή "bottom-right"
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
