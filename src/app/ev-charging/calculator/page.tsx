"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft, Phone, RotateCcw, Calculator } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// ── Types ──────────────────────────────────────────────────────────────────
type Option = { label: string; value: string; cost: number; icon?: string };
type Step = {
  id: string;
  question: string;
  hint?: string;
  options: Option[];
};

// ── Questions & cost model ─────────────────────────────────────────────────
// Base cost: 350€ (labour + basic materials)
// Each answer adds to the total
const BASE_COST = 350;

const steps: Step[] = [
  {
    id: "location",
    question: "Πού θα εγκατασταθεί ο σταθμός;",
    hint: "Ο χώρος επηρεάζει την πολυπλοκότητα καλωδίωσης",
    options: [
      { label: "Γκαράζ / υπόγειο οικίας", value: "garage_home", cost: 0, icon: "🏠" },
      { label: "Εξωτερικός χώρος / αυλή", value: "outdoor_home", cost: 80, icon: "🌿" },
      { label: "Parking πολυκατοικίας", value: "apartment", cost: 150, icon: "🏢" },
      { label: "Επαγγελματικός χώρος", value: "business", cost: 200, icon: "🏭" },
    ],
  },
  {
    id: "charger_type",
    question: "Τι ισχύ φόρτισης χρειάζεστε;",
    hint: "Η ισχύς καθορίζει την ταχύτητα φόρτισης",
    options: [
      { label: "7.4 kW (μονοφασικό)", value: "7kw", cost: 0, icon: "⚡" },
      { label: "11 kW (τριφασικό)", value: "11kw", cost: 120, icon: "⚡⚡" },
      { label: "22 kW (τριφασικό, γρήγορο)", value: "22kw", cost: 280, icon: "⚡⚡⚡" },
      { label: "Δεν είμαι σίγουρος/η", value: "unknown", cost: 0, icon: "❓" },
    ],
  },
  {
    id: "panel_condition",
    question: "Σε ποια κατάσταση είναι ο ηλεκτρολογικός πίνακάς σας;",
    hint: "Παλιοί πίνακες ενδέχεται να χρειαστούν αναβάθμιση",
    options: [
      { label: "Νέος πίνακας (μετά το 2010)", value: "new", cost: 0, icon: "✅" },
      { label: "Παλιός αλλά λειτουργικός", value: "old_ok", cost: 100, icon: "⚠️" },
      { label: "Παλιός / χρειάζεται αναβάθμιση", value: "old_upgrade", cost: 350, icon: "🔧" },
      { label: "Δεν γνωρίζω", value: "unknown", cost: 80, icon: "❓" },
    ],
  },
  {
    id: "distance",
    question: "Πόσο μακριά είναι ο πίνακας από το σημείο εγκατάστασης;",
    hint: "Η απόσταση καθορίζει την ποσότητα καλωδίου",
    options: [
      { label: "0–5 μέτρα", value: "0_5", cost: 0, icon: "📏" },
      { label: "5–15 μέτρα", value: "5_15", cost: 80, icon: "📏" },
      { label: "15–30 μέτρα", value: "15_30", cost: 180, icon: "📏" },
      { label: "Πάνω από 30 μέτρα", value: "30_plus", cost: 300, icon: "📏" },
    ],
  },
  {
    id: "extras",
    question: "Χρειάζεστε κάτι από τα παρακάτω;",
    hint: "Προαιρετικά extras που αυξάνουν τη λειτουργικότητα",
    options: [
      { label: "Μόνο βασική εγκατάσταση", value: "basic", cost: 0, icon: "🔌" },
      { label: "Smart charger με app control", value: "smart", cost: 150, icon: "📱" },
      { label: "Σύνδεση με φωτοβολταϊκό", value: "solar", cost: 200, icon: "☀️" },
      { label: "Smart charger + φωτοβολταϊκό", value: "smart_solar", cost: 320, icon: "🌟" },
    ],
  },
];

// ── Component ──────────────────────────────────────────────────────────────
export default function EVCalculatorPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Option>>({});
  const [done, setDone] = useState(false);

  const step = steps[currentStep];
  const progress = ((currentStep) / steps.length) * 100;

  const totalCost = BASE_COST + Object.values(answers).reduce((sum, a) => sum + a.cost, 0);
  const minCost = Math.round(totalCost * 0.9);
  const maxCost = Math.round(totalCost * 1.15);

  const selectOption = (option: Option) => {
    const newAnswers = { ...answers, [step.id]: option };
    setAnswers(newAnswers);
    if (currentStep < steps.length - 1) {
      setTimeout(() => setCurrentStep((s) => s + 1), 300);
    } else {
      setTimeout(() => setDone(true), 300);
    }
  };

  const goBack = () => {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  };

  const reset = () => {
    setAnswers({});
    setCurrentStep(0);
    setDone(false);
  };

  const whatsappText = encodeURIComponent(
    `Γεια σας! Χρησιμοποίησα τον υπολογιστή κόστους σας.\n\n` +
    Object.entries(answers).map(([, v]) => `• ${v.label}`).join("\n") +
    `\n\nΕκτίμηση: ${minCost}€ – ${maxCost}€\n\nΘα ήθελα να κλείσω ραντεβού για αξιολόγηση.`
  );

  return (
    <div className="min-h-screen bg-[#033941] text-white relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <header className="px-6 py-5 border-b border-white/10">
          <a
            href="tel:+306982752398"
            className="hidden sm:flex fixed top-4 right-4 z-50 bg-yellow-400 text-[#033941] font-bold rounded-full shadow-lg hover:bg-yellow-300 transition-all items-center gap-2 px-5 py-3 animate-breath"
          >
            <Phone className="w-4 h-4" />
            <span>+30 698 275 2398</span>
          </a>

          <div className="flex flex-col items-center gap-2">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Image src="/log_png.png" alt="ThessVolt" width={44} height={44} className="rounded-full ring-2 ring-yellow-400/40" />
              <span className="text-2xl font-bold tracking-widest text-yellow-400">THESSVOLT</span>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2 mt-3 text-xs text-gray-400">
            <Link href="/" className="hover:text-yellow-400 transition-colors">Αρχική</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/ev-charging" className="hover:text-yellow-400 transition-colors">Σταθμοί EV</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-yellow-400">Υπολογιστής Κόστους</span>
          </div>
        </header>

        {/* Page title */}
        <section className="pt-10 pb-6 px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400/15 border border-yellow-400/30 text-yellow-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <Calculator className="w-3.5 h-3.5" />
            Εργαλείο Εκτίμησης
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Υπολογιστής Κόστους <span className="text-yellow-400">EV Charger</span>
          </h1>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Απαντήστε σε {steps.length} ερωτήσεις και λάβετε άμεση εκτίμηση κόστους εγκατάστασης.
          </p>
        </section>

        {/* ── CALCULATOR CARD ── */}
        <section className="px-4 sm:px-6 pb-16">
          <div className="max-w-2xl mx-auto">

            {!done ? (
              <div className="bg-white/[0.05] border border-white/10 rounded-2xl overflow-hidden">
                {/* Progress bar */}
                <div className="h-1 bg-white/10">
                  <div
                    className="h-full bg-yellow-400 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                {/* Step counter */}
                <div className="flex items-center justify-between px-6 pt-5 pb-1">
                  <button
                    onClick={goBack}
                    disabled={currentStep === 0}
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    Πίσω
                  </button>
                  <span className="text-xs text-gray-400">
                    Ερώτηση <span className="text-yellow-400 font-bold">{currentStep + 1}</span> / {steps.length}
                  </span>
                  <button onClick={reset} className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors">
                    <RotateCcw className="w-3 h-3" />
                    Επαναφορά
                  </button>
                </div>

                {/* Question */}
                <div className="px-6 pt-5 pb-6">
                  <h2 className="text-xl font-bold text-white mb-1">{step.question}</h2>
                  {step.hint && (
                    <p className="text-xs text-gray-400 mb-6">{step.hint}</p>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {step.options.map((option) => {
                      const isSelected = answers[step.id]?.value === option.value;
                      return (
                        <button
                          key={option.value}
                          onClick={() => selectOption(option)}
                          className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all ${
                            isSelected
                              ? "border-yellow-400 bg-yellow-400/10 text-white"
                              : "border-white/10 bg-white/[0.03] text-gray-200 hover:border-white/30 hover:bg-white/[0.07]"
                          }`}
                        >
                          <span className="text-2xl flex-shrink-0">{option.icon}</span>
                          <div className="min-w-0">
                            <p className="text-sm font-medium leading-snug">{option.label}</p>
                            {option.cost > 0 && (
                              <p className="text-xs text-yellow-400/70 mt-0.5">+{option.cost}€ εκτιμώμενο κόστος</p>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Running total preview */}
                {Object.keys(answers).length > 0 && (
                  <div className="border-t border-white/10 px-6 py-3 flex items-center justify-between">
                    <span className="text-xs text-gray-400">Εκτίμηση μέχρι τώρα</span>
                    <span className="text-sm font-bold text-yellow-400">
                      ~{BASE_COST + Object.values(answers).reduce((s, a) => s + a.cost, 0)}€
                    </span>
                  </div>
                )}
              </div>
            ) : (
              /* ── RESULTS ── */
              <div className="space-y-4">
                {/* Cost result */}
                <div className="bg-yellow-400 rounded-2xl p-8 text-center text-[#033941]">
                  <p className="text-sm font-bold uppercase tracking-widest opacity-70 mb-2">Εκτίμηση Κόστους Εγκατάστασης</p>
                  <p className="text-5xl font-black mb-1">
                    {minCost}€ – {maxCost}€
                  </p>
                  <p className="text-xs opacity-60 mt-1">
                    * Ενδεικτική τιμή. Η οριστική προσφορά δίνεται μετά από επιτόπια αξιολόγηση.
                  </p>
                </div>

                {/* Summary */}
                <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6">
                  <h3 className="text-sm font-bold text-yellow-400 uppercase tracking-widest mb-4">Σύνοψη Επιλογών</h3>
                  <ul className="space-y-2.5">
                    {steps.map((s) => {
                      const ans = answers[s.id];
                      if (!ans) return null;
                      return (
                        <li key={s.id} className="flex items-center justify-between gap-4">
                          <span className="text-xs text-gray-400">{s.question}</span>
                          <span className="text-xs font-medium text-white text-right flex items-center gap-1.5">
                            {ans.icon} {ans.label}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Cost breakdown */}
                <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6">
                  <h3 className="text-sm font-bold text-yellow-400 uppercase tracking-widest mb-4">Ανάλυση Κόστους</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Βασική εγκατάσταση</span>
                      <span className="text-white font-medium">{BASE_COST}€</span>
                    </div>
                    {Object.values(answers).filter(a => a.cost > 0).map((a) => (
                      <div key={a.value} className="flex justify-between text-sm">
                        <span className="text-gray-400">{a.icon} {a.label}</span>
                        <span className="text-yellow-400 font-medium">+{a.cost}€</span>
                      </div>
                    ))}
                    <div className="border-t border-white/10 pt-2 mt-2 flex justify-between">
                      <span className="text-white font-bold text-sm">Εκτίμηση συνόλου</span>
                      <span className="text-yellow-400 font-black">{minCost}€ – {maxCost}€</span>
                    </div>
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`https://wa.me/306982752398?text=${whatsappText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-[#033941] font-bold px-6 py-4 rounded-xl transition-all text-sm shadow"
                  >
                    <Phone className="w-4 h-4" />
                    Στείλτε μου Προσφορά (WhatsApp)
                  </a>
                  <a
                    href="tel:+306982752398"
                    className="flex items-center justify-center gap-2 border border-white/20 hover:border-yellow-400/50 hover:bg-white/5 text-white font-semibold px-6 py-4 rounded-xl transition-all text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    Καλέστε για Ραντεβού
                  </a>
                </div>

                <button
                  onClick={reset}
                  className="w-full flex items-center justify-center gap-2 text-sm text-gray-400 hover:text-white py-3 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Ξεκινήστε από την αρχή
                </button>

                <p className="text-center text-xs text-gray-500 pb-4">
                  Η εκτίμηση αφορά εγκαταστάσεις στη Θεσσαλονίκη και βασίζεται σε μέσες τιμές αγοράς 2025.
                  Δεν περιλαμβάνει ΦΠΑ 24%. Η οριστική τιμή καθορίζεται μετά από επιτόπια επίσκεψη.
                </p>
              </div>
            )}
          </div>
        </section>

        <footer className="text-center py-5 text-xs text-gray-500 bg-[#022a30] border-t border-white/5">
          &copy; 2025 ThessVolt ·{" "}
          <a href="/privacy-policy" className="underline hover:text-yellow-400">Πολιτική Απορρήτου</a>
          <span className="mx-2">·</span>
          <Link href="/ev-charging" className="hover:text-yellow-400 underline">Σταθμοί EV</Link>
        </footer>
      </div>
    </div>
  );
}
