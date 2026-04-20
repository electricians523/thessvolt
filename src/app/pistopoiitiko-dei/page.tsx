"use client";

import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Phone, ChevronRight, CheckCircle2, Clock, FileText, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const whenNeeded = [
  "Για νέα σύνδεση ρεύματος σε ακίνητο",
  "Για επανασύνδεση παροχής που έχει διακοπεί",
  "Για αλλαγή ιδιοκτήτη ή ενοικιαστή στον λογαριασμό",
  "Για αύξηση ή μείωση της ισχύος παροχής",
  "Για περιοδικό έλεγχο υφιστάμενης εγκατάστασης (κάθε 2, 5 ή 10 χρόνια)",
];

const included = [
  "Έλεγχος & επιθεώρηση εγκατάστασης βάσει ΕΛΟΤ HD 384",
  "Καταγραφή και αποκατάσταση τυχόν ελλείψεων",
  "Σύνταξη και υπογραφή Υπεύθυνης Δήλωσης Εγκαταστάτη",
  "Έκδοση Πρωτοκόλλου Ελέγχου και Σχεδίου Μονογραμμικού",
  "Ολοκληρωμένος φάκελος για υποβολή στον ΔΕΔΔΗΕ",
];

const infoCards = [
  {
    icon: <Clock className="w-6 h-6 text-yellow-400" />,
    title: "Διάρκεια Ισχύος",
    lines: ["Κατοικίες: 10 χρόνια", "Επαγγελματικοί χώροι: 5 χρόνια", "Κοινόχρηστα: 2 χρόνια"],
  },
  {
    icon: <FileText className="w-6 h-6 text-yellow-400" />,
    title: "Κόστος",
    lines: ["Από 35€ + ΦΠΑ", "Ανάλογα με μέγεθος & κατάσταση", "Τιμή κατόπιν αξιολόγησης"],
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-yellow-400" />,
    title: "Νομικό Πλαίσιο",
    lines: ["Π.Δ. 108/2013", "Ν. 3982/2011", "ΕΛΟΤ HD 384"],
  },
];

export default function PistopoiitikoDei() {
  return (
    <>
      <Head>
        <title>Πιστοποιητικά ΔΕΗ (ΥΔΕ) – ThessVolt Θεσσαλονίκη</title>
        <meta
          name="description"
          content="Έκδοση Υπεύθυνης Δήλωσης Εγκαταστάτη (ΥΔΕ) για Πιστοποιητικά ΔΕΗ στη Θεσσαλονίκη. Γρήγορα, αξιόπιστα, από αδειούχους ηλεκτρολόγους."
        />
      </Head>

      <div className="min-h-screen text-white bg-[#033941] relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 z-0">
          <Image src="/hero-bg.png" alt="Φόντο" fill className="object-contain object-center opacity-[0.06]" priority />
        </div>

        <div className="relative z-10">
          {/* Header */}
          <header className="px-6 py-5 border-b border-white/10 relative">
            <a
              href="tel:+306982752398"
              className="hidden sm:flex fixed top-4 right-4 z-50 bg-yellow-400 text-[#033941] font-bold rounded-full shadow-lg hover:bg-yellow-300 transition-all items-center gap-2 px-5 py-3 animate-breath"
            >
              <Phone className="w-4 h-4" />
              <span>+30 698 275 2398</span>
            </a>

            <div className="flex flex-col items-center gap-2">
              <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <Image src="/log_png.png" alt="ThessVolt Λογότυπο" width={48} height={48} className="rounded-full ring-2 ring-yellow-400/40" />
                <span className="text-3xl font-bold tracking-widest text-yellow-400">THESSVOLT</span>
              </Link>
              <div className="sm:hidden">
                <a href="tel:+306982752398" className="inline-flex items-center gap-2 text-yellow-400 font-semibold text-sm mt-1">
                  <Phone className="w-4 h-4" /> +30 698 275 2398
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 mt-3 text-xs text-gray-400">
              <Link href="/" className="hover:text-yellow-400 transition-colors">Αρχική</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-yellow-400">Πιστοποιητικά ΔΕΗ</span>
            </div>
          </header>

          {/* Hero */}
          <section className="py-14 px-6 text-center max-w-3xl mx-auto">
            <span className="inline-block bg-yellow-400/15 border border-yellow-400/30 text-yellow-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              Πιστοποίηση ΔΕΗ
            </span>
            <h1 className="text-4xl font-bold text-white mb-4">
              Πιστοποιητικά <span className="text-yellow-400">ΔΕΗ (ΥΔΕ)</span>
            </h1>
            <p className="text-gray-300 text-base max-w-xl mx-auto mb-8">
              Η ThessVolt διαθέτει όλες τις απαραίτητες άδειες για την έκδοση Υπεύθυνης Δήλωσης Εγκαταστάτη (ΥΔΕ). Αναλαμβάνουμε τον πλήρη έλεγχο και την πιστοποίηση κάθε ηλεκτρολογικής εγκατάστασης.
            </p>
            <a
              href="tel:+306982752398"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-[#033941] font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all"
            >
              <Phone className="w-4 h-4" />
              Καλέστε για Έκδοση
            </a>
          </section>

          {/* Info cards */}
          <section className="px-4 sm:px-6 pb-10">
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
              {infoCards.map((card) => (
                <div key={card.title} className="bg-white/[0.06] border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {card.icon}
                    <h3 className="font-semibold text-white">{card.title}</h3>
                  </div>
                  <ul className="space-y-1">
                    {card.lines.map((line) => (
                      <li key={line} className="text-gray-400 text-sm">{line}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Two columns */}
          <section className="px-4 sm:px-6 pb-14">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-7">
                <h2 className="text-lg font-bold text-yellow-400 mb-5">Πότε απαιτείται ΥΔΕ</h2>
                <ul className="space-y-3">
                  {whenNeeded.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-7">
                <h2 className="text-lg font-bold text-yellow-400 mb-5">Τι περιλαμβάνει η ΥΔΕ</h2>
                <ul className="space-y-3">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-14 px-6 text-center bg-yellow-400">
            <h2 className="text-2xl font-bold text-[#033941] mb-3">Χρειάζεστε Πιστοποιητικό ΔΕΗ;</h2>
            <p className="text-[#033941]/70 mb-7 max-w-md mx-auto text-sm">
              Επικοινωνήστε μαζί μας σήμερα. Αναλαμβάνουμε γρήγορα και χωρίς ταλαιπωρία.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+306982752398"
                className="inline-flex items-center justify-center gap-2 bg-[#033941] hover:bg-[#044f5a] text-white font-bold px-7 py-3.5 rounded-xl transition-all"
              >
                <Phone className="w-4 h-4" />
                698 275 2398
              </a>
              <a
                href={`https://wa.me/306982752398?text=${encodeURIComponent("Γεια σας! Χρειάζομαι Πιστοποιητικό ΔΕΗ (ΥΔΕ).")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#033941] text-[#033941] hover:bg-[#033941]/10 font-bold px-7 py-3.5 rounded-xl transition-all"
              >
                WhatsApp
              </a>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center py-5 text-xs text-gray-500 bg-[#022a30] border-t border-white/5">
            <Button asChild variant="ghost" className="text-gray-400 hover:text-yellow-400 text-xs mb-2">
              <Link href="/">← Επιστροφή στην Αρχική</Link>
            </Button>
            <br />
            &copy; 2025 ThessVolt ·{" "}
            <a href="/privacy-policy" className="underline hover:text-yellow-400">Πολιτική Απορρήτου</a>
          </footer>
        </div>
      </div>
    </>
  );
}
