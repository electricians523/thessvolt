"use client";

import Head from "next/head";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  Zap,
  Wrench,
  ShieldCheck,
  Wifi,
  Sun,
  Tv2,
  Cpu,
  MapPin,
  Clock,
  Star,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    icon: <Zap className="w-7 h-7 text-yellow-400" aria-hidden="true" />,
    title: "Ηλεκτρολογικές Βλάβες",
    description: "Άμεση διάγνωση και αποκατάσταση ηλεκτρολογικών βλαβών.",
    subservices: [
      "Διάγνωση βλαβών",
      "Αντικατάσταση καλωδίων",
      "Αποκατάσταση ασφαλειών",
      "Ανίχνευση διαρροής ρεύματος",
      "Επισκευή πριζών και διακοπτών",
      "Αποκατάσταση υπερφόρτωσης πίνακα",
    ],
  },
  {
    icon: <Wrench className="w-7 h-7 text-yellow-400" aria-hidden="true" />,
    title: "Πρίζες & Διακόπτες",
    description: "Εγκατάσταση & αντικατάσταση με ασφάλεια και ακρίβεια.",
    subservices: [
      "Τοποθέτηση νέων πριζών",
      "Αντικατάσταση διακοπτών",
      "Εγκατάσταση dimmer",
      "Μετακίνηση πρίζας",
      "Τοποθέτηση πρίζας με USB",
      "Εγκατάσταση διακόπτη αλέ-ρετούρ",
    ],
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-yellow-400" aria-hidden="true" />,
    title: "Συστήματα Ασφαλείας",
    description: "Αισθητήρες, συναγερμοί, κάμερες, smart συστήματα.",
    subservices: [
      "Τοποθέτηση καμερών",
      "Εγκατάσταση συναγερμού",
      "Ρύθμιση smart alarm",
      "Τοποθέτηση μαγνητικών επαφών",
      "Απομακρυσμένος έλεγχος μέσω app",
      "Αντικατάσταση μπαταρίας backup",
    ],
  },
  {
    icon: <Zap className="w-7 h-7 text-yellow-400" aria-hidden="true" />,
    title: "Έξυπνοι Αυτοματισμοί",
    description: "Smart λειτουργίες, αυτοματισμοί κτιρίων, app control.",
    subservices: [
      "Φωτισμός με χρονοπρογραμματισμό",
      "Έλεγχος ρολών",
      "Smart home integration",
      "Έλεγχος με φωνητικές εντολές",
      "Αυτοματισμοί για επαγγελματικούς χώρους",
      "Ρύθμιση smart ρελέ",
    ],
  },
  {
    icon: <Wifi className="w-7 h-7 text-yellow-400" aria-hidden="true" />,
    title: "Δικτυώσεις & Internet",
    description: "Κατασκευή και ρύθμιση δικτύων, ethernet & WiFi.",
    subservices: [
      "Στήσιμο WiFi mesh",
      "Οπτικές ίνες",
      "Ρύθμιση router",
      "Εγκατάσταση access points",
      "Τοποθέτηση καλωδίωσης ethernet",
      "Δίκτυα για επαγγελματικούς χώρους",
    ],
  },
  {
    icon: <Sun className="w-7 h-7 text-yellow-400" aria-hidden="true" />,
    title: "Φωτιστικά Σώματα",
    description: "Τοποθέτηση φωτισμού εσωτερικών και εξωτερικών χώρων.",
    subservices: [
      "Τοποθέτηση όλων των ειδών φωτιστικών",
      "Εγκατάσταση led ταινίας",
      "Ρύθμιση dimmer",
      "Αντικατάσταση φωτιστικών με LED",
      "Εξωτερικός φωτισμός κήπου/αυλής",
      "Αρχιτεκτονικός φωτισμός",
    ],
  },
  {
    icon: <Tv2 className="w-7 h-7 text-yellow-400" aria-hidden="true" />,
    title: "Κεραίες & Τηλεόραση",
    description: "Τοποθέτηση, ρύθμιση και troubleshooting.",
    subservices: [
      "Ευθυγράμμιση κεραίας",
      "Εγκατάσταση ψηφιακού δέκτη",
      "Ρύθμιση καναλιών",
      "Ενίσχυση σήματος τηλεόρασης",
      "Πέρασμα καλωδίων κεραίας",
      "Τοποθέτηση τηλεόρασης σε τοίχο",
    ],
  },
  {
    icon: <Cpu className="w-7 h-7 text-yellow-400" aria-hidden="true" />,
    title: "Έξυπνα Συστήματα Ελέγχου",
    description: "Ρυθμίσεις και έλεγχος εξοπλισμού από απόσταση.",
    subservices: [
      "Remote monitoring",
      "Cloud integration",
      "Απομακρυσμένη διαχείριση",
      "Έλεγχος κατανάλωσης ρεύματος",
      "Σύνδεση με Google Assistant ή Alexa",
      "Κεντρικός πίνακας αυτοματισμών",
    ],
  },
];

const stats = [
  { value: "500+", label: "Ολοκληρωμένες εργασίες" },
  { value: "24h", label: "Μέγιστος χρόνος απόκρισης" },
  { value: "10+", label: "Χρόνια εμπειρίας" },
  { value: "100%", label: "Πιστοποιημένοι τεχνικοί" },
];

export default function ThessVolt() {
  const [flipped, setFlipped] = useState(Array(services.length).fill(false));
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const toggleCard = (index: number) => {
    setFlipped((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <>
      <Head>
        <title>ThessVolt – Ηλεκτρολογικές Υπηρεσίες Θεσσαλονίκη</title>
        <meta
          name="description"
          content="Αδειούχοι ηλεκτρολόγοι στη Θεσσαλονίκη. Άμεση εξυπηρέτηση σε βλάβες, εγκαταστάσεις, smart home, κάμερες & πιστοποιητικά ΔΕΗ. Καλέστε τώρα!"
        />
      </Head>

      <div className="min-h-screen text-white bg-[#033941] relative overflow-hidden">
        {/* Subtle grid texture overlay */}
        <div
          className="absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="Φόντο με λογότυπο"
            fill
            className="object-contain object-center opacity-[0.07]"
            priority
          />
        </div>

        <div className="relative z-10">
          {/* ── HEADER ── */}
          <header className="px-6 py-5 border-b border-white/10 relative">
            <a
              id="call-button-header"
              href="tel:+306982752398"
              className="hidden sm:flex fixed top-4 right-4 z-50 bg-yellow-400 text-[#033941] font-bold rounded-full shadow-lg hover:bg-yellow-300 transition-all items-center justify-center gap-2 px-5 py-3 animate-breath"
            >
              <Phone className="w-4 h-4" />
              <span>+30 698 275 2398</span>
            </a>

            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex items-center gap-3">
                <Image
                  src="/log_png.png"
                  alt="ThessVolt Λογότυπο"
                  width={52}
                  height={52}
                  className="rounded-full ring-2 ring-yellow-400/40"
                />
                <h1 className="text-3xl sm:text-4xl font-bold tracking-widest text-yellow-400">
                  THESSVOLT
                </h1>
              </div>
              <p className="text-xs text-gray-400 tracking-[0.2em] uppercase">
                Ηλεκτρολογικές Υπηρεσίες · Θεσσαλονίκη
              </p>
              <div className="sm:hidden mt-1">
                <a
                  id="call-button-mobile"
                  href="tel:+306982752398"
                  className="inline-flex items-center gap-2 text-yellow-400 font-semibold text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +30 698 275 2398
                </a>
              </div>
            </div>
          </header>

          {/* ── HERO ── */}
          <section className="py-16 px-6 text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-yellow-400/15 border border-yellow-400/30 text-yellow-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                Αδειούχοι Ηλεκτρολόγοι
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-5">
                Λύσεις για κάθε{" "}
                <span className="text-yellow-400">ηλεκτρολογική</span> ανάγκη
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
                Γρήγορα, πιστοποιημένα και με ασφάλεια.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+306982752398"
                  className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-[#033941] font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all text-base"
                >
                  <Phone className="w-4 h-4" />
                  Καλέστε Τώρα
                </a>
                <a
                  href={`https://wa.me/306982752398?text=${encodeURIComponent("Γεια σας! Θα ήθελα πληροφορίες για τις υπηρεσίες σας.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-yellow-400/50 hover:bg-white/5 text-white font-semibold px-7 py-3.5 rounded-xl transition-all text-base"
                >
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </section>

          {/* ── STATS BAR ── */}
          <section className="mx-4 sm:mx-6 mb-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-white/10">
              {stats.map((stat) => (
                <div key={stat.label} className="py-6 text-center">
                  <p className="text-2xl sm:text-3xl font-bold text-yellow-400">{stat.value}</p>
                  <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── SERVICES ── */}
          <section className="py-12 px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-yellow-400 mb-2">
                Οι Υπηρεσίες μας
              </h2>
              <p className="text-gray-400 text-sm max-w-md mx-auto">
                Αγγίξτε κάθε κάρτα για να δείτε αναλυτικά τι περιλαμβάνει
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {services.map((serviceItem, index) => (
                <div key={serviceItem.title} className="perspective h-[280px]">
                  <motion.div
                    onClick={() => toggleCard(index)}
                    animate={{ rotateY: flipped[index] ? 180 : 0 }}
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="relative w-full h-full preserve-3d cursor-pointer"
                  >
                    {/* Front */}
                    <div className="absolute inset-0 backface-hidden">
                      <Card className="w-full h-full bg-white/[0.07] border border-white/10 hover:border-yellow-400/40 transition-colors text-white shadow-none">
                        <CardContent className="flex flex-col items-center gap-4 p-6 text-center h-full justify-center">
                          <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
                            {serviceItem.icon}
                          </div>
                          <h3 className="text-base font-semibold leading-snug">{serviceItem.title}</h3>
                          <p className="text-xs text-gray-400 leading-relaxed">{serviceItem.description}</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Back */}
                    <div className="absolute inset-0 rotate-y-180 backface-hidden">
                      <Card className="w-full h-full bg-yellow-400 text-[#033941] shadow-none border-0 overflow-auto">
                        <CardContent className="p-5">
                          <p className="font-bold text-sm mb-3">{serviceItem.title}</p>
                          <ul className="space-y-1.5">
                            {serviceItem.subservices.map((sub, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs">
                                <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-[#033941]/40 flex-shrink-0" />
                                {sub}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </section>

          {/* ── ΠΙΣΤΟΠΟΙΗΤΙΚΑ ΔΕΗ ── */}
          <section className="py-10 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <a
                href="/pistopoiitiko-dei"
                className="group flex flex-col sm:flex-row items-center gap-6 bg-white/[0.06] border border-white/10 hover:border-yellow-400/40 rounded-2xl p-7 transition-all"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
                  <span className="text-3xl">📄</span>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-xs text-yellow-400 font-semibold uppercase tracking-widest mb-1">Πιστοποίηση</p>
                  <h3 className="text-xl font-bold text-white mb-1">Έκδοση Πιστοποιητικών ΔΕΗ (ΥΔΕ)</h3>
                  <p className="text-gray-400 text-sm">Νέα σύνδεση, επανασύνδεση, αλλαγή παροχής — αναλαμβάνουμε ολόκληρη τη διαδικασία.</p>
                </div>
                <ArrowRight className="w-5 h-5 text-yellow-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </a>
            </div>
          </section>

          {/* ── EV CHARGING BANNER ── */}
          <section className="py-4 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <a
                href="/ev-charging"
                className="group flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-[#022d33] to-[#044f5a] border border-yellow-400/25 hover:border-yellow-400/50 rounded-2xl p-7 transition-all"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-yellow-400/15 border border-yellow-400/30 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"/>
                    <line x1="23" y1="13" x2="23" y2="11"/>
                    <polyline points="11 6 7 12 13 12 9 18"/>
                  </svg>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <span className="inline-block bg-yellow-400 text-[#033941] text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2">Νέο</span>
                  <h3 className="text-xl font-bold text-white mb-1">Εγκατάσταση Σταθμών Φόρτισης EV</h3>
                  <p className="text-gray-400 text-sm">Wall charger για οικίες & επιχειρήσεις. Πλήρης εγκατάσταση με πιστοποίηση.</p>
                </div>
                <ArrowRight className="w-5 h-5 text-yellow-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </a>
            </div>
          </section>

          {/* ── ΠΕΡΙΟΧΗ ΕΞΥΠΗΡΕΤΗΣΗΣ ── */}
          <section className="py-14 px-4 sm:px-6 text-center">
            <MapPin className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h2 className="text-2xl font-bold text-white mb-2">Περιοχή Εξυπηρέτησης</h2>
            <p className="text-gray-400 max-w-lg mx-auto text-sm">
              Καλύπτουμε <span className="text-white font-medium">όλη τη Θεσσαλονίκη</span> και τις γύρω περιοχές — Καλαμαριά, Συκιές, Εύοσμος, Σταυρούπολη, Πολίχνη, Νεάπολη και αλλού.
            </p>
          </section>

          {/* ── ΤΙΜΟΚΑΤΑΛΟΓΟΣ ── */}
          <section className="py-6 px-4 sm:px-6 text-center">
            <div className="max-w-md mx-auto bg-white/[0.04] border border-white/10 rounded-2xl p-8">
              <span className="text-3xl block mb-4">📋</span>
              <h2 className="text-xl font-bold text-yellow-400 mb-2">Τιμοκατάλογος</h2>
              <p className="text-gray-400 text-sm mb-6">
                Κατεβάστε τον ενδεικτικό μας τιμοκατάλογο σε PDF με όλες τις υπηρεσίες.
              </p>
              <Button
                className="bg-yellow-400 text-[#033941] hover:bg-yellow-300 font-bold w-full rounded-xl"
                asChild
              >
                <a href="/ThessVolt_Timokatalogos.pdf" download target="_blank" rel="noopener noreferrer">
                  Κατεβάστε το PDF
                </a>
              </Button>
            </div>
          </section>

          {/* ── FAQ LINK ── */}
          <section className="py-6 px-4 sm:px-6 text-center">
            <Button
              className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-xl"
              asChild
            >
              <a href="/faq">❓ Συχνές Ερωτήσεις</a>
            </Button>
          </section>

          {/* ── ΕΠΙΚΟΙΝΩΝΙΑ ── */}
          <section className="mx-4 sm:mx-6 my-10 rounded-2xl bg-white text-[#033941] py-12 px-6 text-center">
            <h2 className="text-2xl font-bold mb-1">Επικοινωνήστε μαζί μας</h2>
            <p className="text-gray-500 text-sm mb-8">Είμαστε διαθέσιμοι για κάθε ερώτηση ή ραντεβού</p>
            <div className="flex flex-col items-center gap-3 mb-8">
              <p className="flex items-center gap-2 font-medium">
                <Phone className="w-4 h-4 text-yellow-500" aria-hidden="true" />
                <a href="tel:+306982752398" className="hover:underline">698 275 2398</a>
                <span className="text-gray-300">/</span>
                <a href="tel:+306981149233" className="hover:underline">698 114 9233</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-yellow-500" aria-hidden="true" />
                <a href="mailto:thessvolt@gmail.com" className="hover:underline text-sm">
                  thessvolt@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                Δευτέρα–Σάββατο, 08:00–20:00
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="outline" className="border-[#033941]/20 text-[#033941] hover:bg-[#033941]/5 rounded-xl" asChild>
                <a href="https://wa.me/306982752398" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </Button>
              <Button variant="outline" className="border-[#033941]/20 text-[#033941] hover:bg-[#033941]/5 rounded-xl" asChild>
                <a href="viber://chat?number=+306982752398" rel="noopener noreferrer">Viber</a>
              </Button>
              <Button asChild className="bg-[#033941] text-white hover:bg-[#044f5a] rounded-xl">
                <a href="https://g.co/kgs/3dbLYwo" target="_blank" rel="noopener noreferrer">
                  <Star className="w-4 h-4 mr-2" />
                  Google Reviews
                </a>
              </Button>
            </div>
          </section>

          {/* ── ΡΑΝΤΕΒΟΥ ── */}
          <section className="border-t border-white/10 py-16 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

              {/* Αριστερά — κείμενο */}
              <div className="lg:pt-2">
                <span className="inline-block bg-yellow-400/15 border border-yellow-400/30 text-yellow-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                  Ραντεβού
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                  Κλείστε<br />
                  <span className="text-yellow-400">Ραντεβού</span>
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
                  Συμπληρώστε τα στοιχεία σας και επιλέξτε πότε σας εξυπηρετεί. Θα επικοινωνήσουμε μαζί σας σύντομα.
                </p>
                <div className="space-y-3">
                  {[
                    { icon: "📞", text: "Απάντηση εντός 24 ωρών" },
                    { icon: "📍", text: "Εξυπηρετούμε όλη τη Θεσσαλονίκη" },
                    { icon: "✅", text: "Δωρεάν εκτίμηση εργασίας" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3 text-sm text-gray-300">
                      <span className="text-base">{item.icon}</span>
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Δεξιά — φόρμα */}
              <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-6 sm:p-8">
                <div className="grid gap-3">

                  {/* Όνομα + Τηλέφωνο side by side */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-gray-400 mb-1.5 ml-1">Ονοματεπώνυμο</label>
                      <input
                        type="text"
                        placeholder="π.χ. Γιώργος Π."
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className="p-3 rounded-xl text-[#033941] bg-white w-full placeholder:text-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1.5 ml-1">Τηλέφωνο</label>
                      <input
                        type="tel"
                        placeholder="69X XXX XXXX"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                        className="p-3 rounded-xl text-[#033941] bg-white w-full placeholder:text-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      />
                    </div>
                  </div>

                  {/* Υπηρεσία */}
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5 ml-1">Υπηρεσία</label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="p-3 rounded-xl text-[#033941] bg-white w-full text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    >
                      <option value="">Επιλέξτε υπηρεσία…</option>
                      <option value="Ηλεκτρολογικές Βλάβες">Ηλεκτρολογικές Βλάβες</option>
                      <option value="Πρίζες & Διακόπτες">Πρίζες & Διακόπτες</option>
                      <option value="Συστήματα Ασφαλείας">Συστήματα Ασφαλείας</option>
                      <option value="Έξυπνοι Αυτοματισμοί">Έξυπνοι Αυτοματισμοί</option>
                      <option value="Δικτυώσεις & Internet">Δικτυώσεις & Internet</option>
                      <option value="Φωτιστικά Σώματα">Φωτιστικά Σώματα</option>
                      <option value="Κεραίες & Τηλεόραση">Κεραίες & Τηλεόραση</option>
                      <option value="Έξυπνα Συστήματα Ελέγχου">Έξυπνα Συστήματα Ελέγχου</option>
                      <option value="Πιστοποιητικά ΔΕΗ (ΥΔΕ)">Πιστοποιητικά ΔΕΗ (ΥΔΕ)</option>
                      <option value="Σταθμοί Φόρτισης EV">Σταθμοί Φόρτισης EV</option>
                    </select>
                  </div>

                  {/* Ημερομηνία + Ώρα */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-gray-400 mb-1.5 ml-1">Ημερομηνία</label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="p-3 rounded-xl text-[#033941] bg-white w-full text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1.5 ml-1">Ώρα</label>
                      <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="p-3 rounded-xl text-[#033941] bg-white w-full text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      />
                    </div>
                  </div>

                  {/* Κουμπιά αποστολής */}
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    {[
                      {
                        label: "WhatsApp",
                        action: () => {
                          if (!name || !phone || !service) { alert("Παρακαλώ συμπληρώστε όνομα, τηλέφωνο και υπηρεσία."); return; }
                          const msg = `Γεια σας! Θα ήθελα να κλείσω ραντεβού.\n\n👤 Όνομα: ${name}\n📞 Τηλέφωνο: ${phone}\n⚡ Υπηρεσία: ${service}\n📅 Ημερομηνία: ${date || "–"}\n⏰ Ώρα: ${time || "–"}`;
                          window.open(`https://wa.me/306982752398?text=${encodeURIComponent(msg)}`, "_blank");
                        },
                      },
                      {
                        label: "Viber",
                        action: () => {
                          if (!name || !phone || !service) { alert("Παρακαλώ συμπληρώστε όνομα, τηλέφωνο και υπηρεσία."); return; }
                          window.open("viber://chat?number=+306982752398", "_blank");
                        },
                      },
                      {
                        label: "Email",
                        action: () => {
                          if (!name || !phone || !service) { alert("Παρακαλώ συμπληρώστε όνομα, τηλέφωνο και υπηρεσία."); return; }
                          const subject = "Ραντεβού ThessVolt";
                          const body = `Γεια σας! Θα ήθελα να κλείσω ραντεβού.\n\n👤 Όνομα: ${name}\n📞 Τηλέφωνο: ${phone}\n⚡ Υπηρεσία: ${service}\n📅 Ημερομηνία: ${date || "–"}\n⏰ Ώρα: ${time || "–"}`;
                          window.open(`mailto:thessvolt@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, "_blank");
                        },
                      },
                    ].map(({ label, action }) => (
                      <button
                        key={label}
                        onClick={action}
                        className="bg-yellow-400 hover:bg-yellow-300 active:scale-95 text-[#033941] font-bold py-3 rounded-xl text-sm transition-all shadow"
                      >
                        {label}
                      </button>
                    ))}
                  </div>

                </div>
              </div>

            </div>
          </section>

          {/* ── FOOTER ── */}
          <footer className="text-center py-5 text-xs text-gray-500 bg-[#022a30] border-t border-white/5">
            &copy; 2025 ThessVolt · Ηλεκτρολογικές Υπηρεσίες Θεσσαλονίκη
            <a href="/privacy-policy" className="underline hover:text-yellow-400 ml-3">
              Πολιτική Απορρήτου
            </a>
          </footer>
        </div>
      </div>
    </>
  );
}
