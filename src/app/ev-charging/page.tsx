"use client";

import { Button } from "@/components/ui/button";
import { Phone, Mail, ChevronRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Wall Charger για Οικίες",
    description:
      "Εγκατάσταση οικιακού σταθμού φόρτισης (Mode 3 / Type 2) στο γκαράζ ή την αυλή σας. Φορτίστε το αυτοκίνητό σας κατά τη διάρκεια της νύχτας με ασφάλεια.",
    icon: "🏠",
  },
  {
    title: "Σταθμοί για Επιχειρήσεις & Parking",
    description:
      "Εγκατάσταση πολλαπλών σημείων φόρτισης σε εμπορικά κέντρα, ξενοδοχεία, γραφεία και δημόσια πάρκινγκ. Αξιοποιήστε τα ευρωπαϊκά προγράμματα επιδότησης.",
    icon: "🏢",
  },
  {
    title: "Ενίσχυση Ηλεκτρολογικής Εγκατάστασης",
    description:
      "Αξιολόγηση και αναβάθμιση του υπάρχοντος πίνακα ώστε να υποστηρίξει το επιπλέον φορτίο του EV charger, χωρίς κίνδυνο υπερφόρτωσης.",
    icon: "⚡",
  },
  {
    title: "Smart Energy Management",
    description:
      "Σύνδεση με έξυπνα συστήματα διαχείρισης ενέργειας. Προγραμματίστε τη φόρτιση σε ώρες χαμηλού τιμολογίου ή σε συνδυασμό με φωτοβολταϊκό σύστημα.",
    icon: "📱",
  },
  {
    title: "Πιστοποίηση & Άδεια Σύνδεσης",
    description:
      "Αναλαμβάνουμε την πλήρη γραφειοκρατία: έκδοση Υπεύθυνης Δήλωσης Εγκαταστάτη (ΥΔΕ), σύνδεση με ΔΕΔΔΗΕ και όλα τα απαραίτητα έγγραφα.",
    icon: "📋",
  },
  {
    title: "Συμβατότητα με Όλα τα Μοντέλα",
    description:
      "Εγκαθιστούμε chargers συμβατά με Tesla, BMW, VW, Hyundai, Kia, Renault, Nissan και όλα τα σύγχρονα ηλεκτρικά & plug-in hybrid οχήματα.",
    icon: "🚗",
  },
];

const steps = [
  { step: "01", title: "Επικοινωνία & Αξιολόγηση", desc: "Επικοινωνείτε μαζί μας και μας περιγράφετε τις ανάγκες σας. Κλείνουμε ραντεβού για επιτόπια αξιολόγηση." },
  { step: "02", title: "Έλεγχος Εγκατάστασης", desc: "Ο τεχνικός μας επισκέπτεται τον χώρο, αξιολογεί τον πίνακα και προτείνει την καταλληλότερη λύση." },
  { step: "03", title: "Εγκατάσταση", desc: "Τοποθέτηση του σταθμού φόρτισης, καλωδίωση και σύνδεση με τον πίνακα. Συνήθως ολοκληρώνεται σε μία μέρα." },
  { step: "04", title: "Πιστοποίηση & Παράδοση", desc: "Έκδοση ΥΔΕ, ρύθμιση smart λειτουργιών (εάν υπάρχουν) και πλήρης οδηγία χρήσης." },
];

export default function EVChargingPage() {
  return (
    <div className="min-h-screen text-white bg-[#033941] relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 z-0">
        <Image src="/hero-bg.png" alt="Φόντο" fill className="object-contain object-center opacity-[0.07]" priority />
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
              <h1 className="text-3xl font-bold tracking-widest text-yellow-400">THESSVOLT</h1>
            </Link>
            <div className="sm:hidden mt-1">
              <a href="tel:+306982752398" className="inline-flex items-center gap-2 text-yellow-400 font-semibold text-sm">
                <Phone className="w-4 h-4" /> +30 698 275 2398
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-3 text-xs text-gray-400">
            <Link href="/" className="hover:text-yellow-400 transition-colors">Αρχική</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-yellow-400">Σταθμοί Φόρτισης EV</span>
          </div>
        </header>

        {/* Hero */}
        <section className="py-14 px-6 text-center max-w-3xl mx-auto">
          <span className="inline-block bg-yellow-400/15 border border-yellow-400/30 text-yellow-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Νέα Υπηρεσία
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-5 leading-tight">
            Εγκατάσταση Σταθμών Φόρτισης<br />Ηλεκτρικών Αυτοκινήτων
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Η ThessVolt αναλαμβάνει την πλήρη εγκατάσταση σταθμών φόρτισης EV σε οικίες και επιχειρήσεις στη Θεσσαλονίκη. Από την αξιολόγηση έως την πιστοποίηση — όλα σε ένα χέρι.
          </p>
          <a
            href="tel:+306982752398"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-[#033941] font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all"
          >
            <Phone className="w-4 h-4" />
            Καλέστε για Προσφορά
          </a>
        </section>

        {/* Features Grid */}
        <section className="py-10 px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center text-yellow-400 mb-2">Τι Περιλαμβάνει η Υπηρεσία</h2>
          <p className="text-center text-gray-400 text-sm mb-10">Ολοκληρωμένες λύσεις φόρτισης για κάθε ανάγκη</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {features.map((f) => (
              <div key={f.title} className="bg-white/[0.05] border border-white/10 hover:border-yellow-400/30 rounded-2xl p-6 transition-all">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-base font-bold text-yellow-400 mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why EV */}
        <section className="py-12 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto bg-white/[0.04] border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-center text-yellow-400 mb-8">Γιατί να Επιλέξετε Οικιακό Σταθμό Φόρτισης;</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Φόρτιση έως 7x ταχύτερα από κοινή πρίζα",
                "Ασφαλέστερη λύση — αποφυγή υπερθέρμανσης",
                "Εξοικονόμηση με νυχτερινό τιμολόγιο ρεύματος",
                "Αύξηση της αξίας του ακινήτου σας",
                "Συμβατότητα με όλα τα ηλεκτρικά οχήματα",
                "Έλεγχος φόρτισης μέσω smartphone app",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-10 px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-center text-yellow-400 mb-8">Πώς Λειτουργεί</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-5 bg-white/[0.04] border border-white/10 rounded-2xl p-6">
                <span className="text-3xl font-black text-yellow-400/50 leading-none flex-shrink-0">{s.step}</span>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 px-6 text-center bg-yellow-400 mt-6">
          <h2 className="text-2xl font-bold text-[#033941] mb-2">Έτοιμοι για Εγκατάσταση;</h2>
          <p className="text-[#033941]/70 mb-8 max-w-md mx-auto text-sm">
            Επικοινωνήστε μαζί μας σήμερα για δωρεάν αξιολόγηση και προσφορά χωρίς δέσμευση.
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
              href={`https://wa.me/306982752398?text=${encodeURIComponent("Γεια σας! Ενδιαφέρομαι για εγκατάσταση σταθμού φόρτισης EV.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#033941] text-[#033941] hover:bg-[#033941]/10 font-bold px-7 py-3.5 rounded-xl transition-all"
            >
              WhatsApp
            </a>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-white text-[#033941] py-10 text-center">
          <h2 className="text-2xl font-semibold mb-5">Επικοινωνία</h2>
          <div className="flex flex-col items-center gap-3 mb-6">
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-yellow-500" />
              <a href="tel:+306982752398" className="hover:underline font-medium">698 275 2398</a>
              <span className="text-gray-300">/</span>
              <a href="tel:+306981149233" className="hover:underline font-medium">698 114 9233</a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-yellow-500" />
              <a href="mailto:thessvolt@gmail.com" className="hover:underline text-sm">thessvolt@gmail.com</a>
            </p>
          </div>
          <Button asChild className="bg-[#033941] text-white hover:bg-[#05515e] rounded-xl">
            <Link href="/">← Επιστροφή στην Αρχική</Link>
          </Button>
        </section>

        <footer className="text-center py-5 text-xs text-gray-500 bg-[#022a30] border-t border-white/5">
          &copy; 2025 ThessVolt ·{" "}
          <a href="/privacy-policy" className="underline hover:text-yellow-400">Πολιτική Απορρήτου</a>
        </footer>
      </div>
    </div>
  );
}
