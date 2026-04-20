"use client";

import Head from "next/head";
import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const faqs = [
  // Ηλεκτρολογικές Βλάβες
  { category: "Ηλεκτρολογικές Βλάβες", question: "Πόσο γρήγορα μπορείτε να έρθετε σε περίπτωση βλάβης;", answer: "Ανάλογα με την περιοχή, συνήθως μέσα σε 24 ώρες ή και αυθημερόν για επείγοντα περιστατικά." },
  { category: "Ηλεκτρολογικές Βλάβες", question: "Μπορείτε να αναλάβετε ανακαίνιση ηλεκτρολογικής εγκατάστασης;", answer: "Ναι, αναλαμβάνουμε πλήρεις ανακαινίσεις ηλεκτρολογικών εγκαταστάσεων σε παλιά και νέα κτίρια." },
  { category: "Ηλεκτρολογικές Βλάβες", question: "Αναλαμβάνετε επισκευές μετά από βραχυκυκλώματα;", answer: "Ναι, αναλαμβάνουμε διάγνωση και επισκευή ζημιών που προκλήθηκαν από βραχυκυκλώματα ή υπερφορτώσεις." },
  { category: "Ηλεκτρολογικές Βλάβες", question: "Μπορείτε να εγκαταστήσετε πίνακα ασφαλειών;", answer: "Ναι, αναλαμβάνουμε αντικατάσταση ή αναβάθμιση ηλεκτρολογικών πινάκων για μεγαλύτερη ασφάλεια." },
  // Πρίζες & Διακόπτες
  { category: "Πρίζες & Διακόπτες", question: "Πόσο διαρκεί η εγκατάσταση νέας πρίζας ή διακόπτη;", answer: "Συνήθως ολοκληρώνεται εντός 1 ώρας ανάλογα με την πολυπλοκότητα και την προσβασιμότητα." },
  { category: "Πρίζες & Διακόπτες", question: "Προσφέρετε εγκατάσταση πριζών με USB;", answer: "Ναι, εγκαθιστούμε μοντέρνες πρίζες με ενσωματωμένες θύρες USB για εύκολη φόρτιση συσκευών." },
  { category: "Πρίζες & Διακόπτες", question: "Αναλαμβάνετε αλλαγή διακοπτών σε smart διακόπτες;", answer: "Ναι, αντικαθιστούμε συμβατικούς διακόπτες με έξυπνους διακόπτες για έλεγχο μέσω κινητού ή φωνής." },
  { category: "Πρίζες & Διακόπτες", question: "Μπορείτε να προσθέσετε νέες πρίζες σε υφιστάμενο δίκτυο;", answer: "Ναι, επεκτείνουμε υπάρχουσες εγκαταστάσεις με προσθήκη νέων πριζών όπου χρειάζεται." },
  // Συστήματα Ασφαλείας
  { category: "Συστήματα Ασφαλείας", question: "Προσφέρετε υπηρεσίες για επαγγελματικούς χώρους;", answer: "Ναι, αναλαμβάνουμε καταστήματα, γραφεία και επαγγελματικούς χώρους με ειδικές λύσεις." },
  { category: "Συστήματα Ασφαλείας", question: "Τι είδους συναγερμούς εγκαθιστάτε;", answer: "Εγκαθιστούμε συστήματα συναγερμού Ajax, ασύρματα, αξιόπιστα και με απομακρυσμένο έλεγχο." },
  { category: "Συστήματα Ασφαλείας", question: "Τι δυνατότητες έχουν οι συναγερμοί Ajax;", answer: "Real-time ειδοποιήσεις, απομακρυσμένος έλεγχος μέσω app, σύνδεση με κέντρο λήψης σημάτων και ανθεκτικότητα σε παρεμβολές." },
  { category: "Συστήματα Ασφαλείας", question: "Τι είδους κάμερες ασφαλείας χρησιμοποιείτε;", answer: "Κάμερες Tapo με HD/Full HD ανάλυση, νυχτερινή όραση και απομακρυσμένη πρόσβαση μέσω κινητού." },
  { category: "Συστήματα Ασφαλείας", question: "Μπορώ να μιλήσω από το κινητό μέσω της κάμερας Tapo;", answer: "Ναι, μέσω two-way audio μπορείτε να μιλάτε και να ακούτε από το κινητό σας." },
  // Έξυπνοι Αυτοματισμοί
  { category: "Έξυπνοι Αυτοματισμοί", question: "Κάνετε εγκαταστάσεις smart home;", answer: "Ναι, προσφέρουμε εγκατάσταση αυτοματισμών, smart relay, φωτισμού, ρολών και φωνητικών εντολών." },
  { category: "Έξυπνοι Αυτοματισμοί", question: "Τι είναι τα έξυπνα ρελέ και πώς χρησιμοποιούνται;", answer: "Επιτρέπουν τον απομακρυσμένο έλεγχο φώτων και συσκευών μέσω κινητού ή φωνητικών εντολών." },
  { category: "Έξυπνοι Αυτοματισμοί", question: "Υποστηρίζετε Google Home και Alexa;", answer: "Ναι, τα συστήματα που εγκαθιστούμε είναι πλήρως συμβατά με Google Home και Amazon Alexa." },
  { category: "Έξυπνοι Αυτοματισμοί", question: "Μπορείτε να κάνετε έλεγχο ρολών μέσω εφαρμογής;", answer: "Ναι, εγκαθιστούμε αυτοματισμούς για άνοιγμα/κλείσιμο ρολών μέσω κινητού." },
  // Δικτυώσεις & Internet
  { category: "Δικτυώσεις & Internet", question: "Αναλαμβάνετε τοποθέτηση access points;", answer: "Ναι, τοποθετούμε και ρυθμίζουμε access points για επεκτάσεις WiFi σε οικίες και επαγγελματικούς χώρους." },
  { category: "Δικτυώσεις & Internet", question: "Αναλαμβάνετε καλωδίωση ethernet σε κατοικίες;", answer: "Ναι, εγκαθιστούμε καλωδιώσεις ethernet για σταθερή σύνδεση σε κάθε δωμάτιο." },
  { category: "Δικτυώσεις & Internet", question: "Τοποθετείτε δίκτυα WiFi Mesh;", answer: "Ναι, δημιουργούμε δίκτυα WiFi Mesh για πλήρη κάλυψη μεγάλων χώρων χωρίς απώλειες σήματος." },
  { category: "Δικτυώσεις & Internet", question: "Ρυθμίζετε routers και switches;", answer: "Ναι, αναλαμβάνουμε τη σωστή ρύθμιση και παραμετροποίηση του δικτύου σας." },
  // Φωτιστικά Σώματα
  { category: "Φωτιστικά Σώματα", question: "Μπορείτε να εγκαταστήσετε φωτιστικά εξωτερικού χώρου;", answer: "Ναι, εγκαθιστούμε φωτιστικά κήπου, αυλής και εξωτερικών χώρων με σωστή στεγανότητα και ασφάλεια." },
  { category: "Φωτιστικά Σώματα", question: "Τοποθετείτε led ταινίες και κρυφό φωτισμό;", answer: "Ναι, αναλαμβάνουμε εγκαταστάσεις κρυφού φωτισμού και LED ταινιών." },
  { category: "Φωτιστικά Σώματα", question: "Μπορείτε να αντικαταστήσετε παλιά φωτιστικά με LED;", answer: "Ναι, αντικαθιστούμε παλαιά φωτιστικά με νέες LED λύσεις χαμηλής κατανάλωσης." },
  { category: "Φωτιστικά Σώματα", question: "Τοποθετείτε dimmer διακόπτες;", answer: "Ναι, εγκαθιστούμε dimmer διακόπτες για έλεγχο έντασης φωτισμού." },
  // Κεραίες & Τηλεόραση
  { category: "Κεραίες & Τηλεόραση", question: "Προσφέρετε υπηρεσίες επισκευής κεραίας τηλεόρασης;", answer: "Ναι, πραγματοποιούμε ρύθμιση, ευθυγράμμιση και ενίσχυση σήματος τηλεοπτικών κεραιών." },
  { category: "Κεραίες & Τηλεόραση", question: "Τοποθετείτε τηλεοράσεις σε τοίχο;", answer: "Ναι, αναλαμβάνουμε τοποθέτηση τηλεοράσεων σε βάση τοίχου με σωστή ευθυγράμμιση και καλωδίωση." },
  { category: "Κεραίες & Τηλεόραση", question: "Ρυθμίζετε δορυφορικές κεραίες;", answer: "Ναι, αναλαμβάνουμε ρύθμιση και εγκατάσταση δορυφορικών κεραιών." },
  { category: "Κεραίες & Τηλεόραση", question: "Τοποθετείτε ενισχυτές σήματος τηλεόρασης;", answer: "Ναι, εγκαθιστούμε ενισχυτές για καλύτερη λήψη τηλεοπτικού σήματος." },
  // Πιστοποιητικά ΔΕΗ
  { category: "Πιστοποιητικά ΔΕΗ (ΥΔΕ)", question: "Τι περιλαμβάνει το Πιστοποιητικό ΔΕΗ (ΥΔΕ);", answer: "Περιλαμβάνει έλεγχο εγκατάστασης, διόρθωση ελλείψεων και σύνταξη Υπεύθυνης Δήλωσης Εγκαταστάτη." },
  { category: "Πιστοποιητικά ΔΕΗ (ΥΔΕ)", question: "Πόση διάρκεια έχει το Πιστοποιητικό ΔΕΗ;", answer: "Για κατοικίες ισχύει 10 χρόνια, για επαγγελματικούς χώρους 5 χρόνια και για κοινόχρηστα 2 χρόνια." },
  { category: "Πιστοποιητικά ΔΕΗ (ΥΔΕ)", question: "Πόσο κοστίζει το Πιστοποιητικό ΔΕΗ για κατοικία;", answer: "Το κόστος ξεκινά από 35€ + ΦΠΑ, ανάλογα με μέγεθος και κατάσταση εγκατάστασης." },
  { category: "Πιστοποιητικά ΔΕΗ (ΥΔΕ)", question: "Χρειάζεται ΥΔΕ για αλλαγή ονόματος στον λογαριασμό ΔΕΗ;", answer: "Ναι, για αλλαγές ονόματος, επανασυνδέσεις ή νέες συνδέσεις απαιτείται νέο Πιστοποιητικό ΥΔΕ." },
  // Γενικές
  { category: "Γενικές Ερωτήσεις", question: "Πόσο κοστίζει η επίσκεψη ηλεκτρολόγου;", answer: "Η απλή διάγνωση ξεκινά από 30€, ενώ η συνολική επισκευή εξαρτάται από τη φύση της εργασίας." },
  { category: "Γενικές Ερωτήσεις", question: "Πώς μπορώ να πληρώσω;", answer: "Δεχόμαστε πληρωμές με μετρητά, POS, IRIS payments και τραπεζική κατάθεση." },
  { category: "Γενικές Ερωτήσεις", question: "Πόσο άμεσα μπορώ να κλείσω ραντεβού;", answer: "Συνήθως κανονίζουμε ραντεβού εντός 24-48 ωρών ανάλογα με τη διαθεσιμότητα." },
  { category: "Γενικές Ερωτήσεις", question: "Ποιες περιοχές της Θεσσαλονίκης εξυπηρετείτε;", answer: "Καλύπτουμε όλη τη Θεσσαλονίκη και τις γύρω περιοχές." },
];

const categoryIcons: Record<string, string> = {
  "Ηλεκτρολογικές Βλάβες": "⚡",
  "Πρίζες & Διακόπτες": "🔌",
  "Συστήματα Ασφαλείας": "🛡️",
  "Έξυπνοι Αυτοματισμοί": "🏠",
  "Δικτυώσεις & Internet": "📡",
  "Φωτιστικά Σώματα": "💡",
  "Κεραίες & Τηλεόραση": "📺",
  "Πιστοποιητικά ΔΕΗ (ΥΔΕ)": "📋",
  "Γενικές Ερωτήσεις": "❓",
};

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const groupedFaqs = faqs.reduce((acc, faq) => {
    acc[faq.category] = acc[faq.category] || [];
    acc[faq.category].push(faq);
    return acc;
  }, {} as Record<string, typeof faqs>);

  return (
    <>
      <Head>
        <title>Συχνές Ερωτήσεις – ThessVolt Θεσσαλονίκη</title>
        <meta name="description" content="Απαντήσεις στις πιο συχνές ερωτήσεις για τις ηλεκτρολογικές υπηρεσίες ThessVolt στη Θεσσαλονίκη." />
      </Head>

      <div className="min-h-screen bg-[#033941] text-white">
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
              <Image src="/log_png.png" alt="ThessVolt" width={48} height={48} className="rounded-full ring-2 ring-yellow-400/40" />
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
            <ChevronDown className="w-3 h-3 -rotate-90" />
            <span className="text-yellow-400">Συχνές Ερωτήσεις</span>
          </div>
        </header>

        {/* Hero */}
        <section className="py-12 px-6 text-center">
          <span className="inline-block bg-yellow-400/15 border border-yellow-400/30 text-yellow-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Βοήθεια
          </span>
          <h1 className="text-4xl font-bold text-white mb-3">Συχνές <span className="text-yellow-400">Ερωτήσεις</span></h1>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Βρείτε γρήγορα απαντήσεις για τις υπηρεσίες, τις τιμές και τη διαδικασία εργασίας μας.
          </p>
        </section>

        {/* FAQ Groups */}
        <section className="pb-16 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto space-y-10">
            {Object.entries(groupedFaqs).map(([category, items], groupIdx) => (
              <div key={groupIdx}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{categoryIcons[category] ?? "🔧"}</span>
                  <h2 className="text-lg font-bold text-yellow-400">{category}</h2>
                </div>
                <div className="space-y-2">
                  {items.map((faq, index) => {
                    const key = `${groupIdx}-${index}`;
                    const isOpen = openFaq === key;
                    return (
                      <div
                        key={index}
                        className={`rounded-xl border transition-all ${isOpen ? "border-yellow-400/40 bg-white/[0.07]" : "border-white/10 bg-white/[0.04] hover:border-white/20"}`}
                      >
                        <button
                          onClick={() => setOpenFaq(isOpen ? null : key)}
                          className="w-full flex items-center justify-between p-4 text-left focus:outline-none gap-3"
                        >
                          <span className={`text-sm font-medium leading-snug ${isOpen ? "text-yellow-400" : "text-white"}`}>
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 flex-shrink-0 text-yellow-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4 text-sm text-gray-300 leading-relaxed border-t border-white/10 pt-3">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-12 px-6 text-center bg-[#022a30] border-t border-white/10">
          <p className="text-gray-300 mb-5 text-sm">Δεν βρήκατε αυτό που ψάχνετε;</p>
          <a
            href="tel:+306982752398"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-[#033941] font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all"
          >
            <Phone className="w-4 h-4" />
            Καλέστε μας τώρα
          </a>
        </section>

        <footer className="text-center py-5 text-xs text-gray-500 bg-[#022a30] border-t border-white/5">
          &copy; 2025 ThessVolt ·{" "}
          <a href="/privacy-policy" className="underline hover:text-yellow-400">Πολιτική Απορρήτου</a>
          <span className="mx-2">·</span>
          <Link href="/" className="hover:text-yellow-400 underline">Αρχική</Link>
        </footer>
      </div>
    </>
  );
}
