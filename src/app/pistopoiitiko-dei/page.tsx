"use client";

import Head from "next/head";
import { Button } from "@/components/ui/button";

export default function PistopoiitikoDei() {
  return (
    <>
      <Head>
        <title>Πιστοποιητικά ΔΕΗ (ΥΔΕ) – ThessVolt</title>
        <meta
          name="description"
          content="Έκδοση Υπεύθυνης Δήλωσης Εγκαταστάτη (ΥΔΕ) για Πιστοποιητικά ΔΕΗ στη Θεσσαλονίκη από αδειούχο Ηλεκτρολόγο Μηχανικό."
        />
      </Head>

      <div className="min-h-screen text-white bg-[#033941] relative overflow-hidden px-6 py-12">
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-yellow-400 text-center mb-8">
            Πιστοποιητικά ΔΕΗ (ΥΔΕ)
          </h1>

       <p className="text-lg text-gray-200 text-center mb-12">
  Η ThessVolt διαθέτει όλες τις απαραίτητες άδειες για την έκδοση Υπεύθυνης Δήλωσης Εγκαταστάτη (ΥΔΕ), σύμφωνα με το Π.Δ. 108/2013 και τον Ν. 3982/2011. 
  Με συνέπεια και υπευθυνότητα αναλαμβάνουμε τον πλήρη έλεγχο και την πιστοποίηση ηλεκτρολογικών εγκαταστάσεων κάθε χρήσης.
</p>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#033941]">
  <div className="bg-white rounded-lg shadow-lg p-6">
    <h2 className="text-2xl font-semibold mb-4">Πότε απαιτείται Πιστοποιητικό ΔΕΗ (ΥΔΕ):</h2>
    <ul className="list-disc list-inside space-y-2 text-gray-700">
      <li>Για νέα σύνδεση ρεύματος σε ακίνητο</li>
      <li>Για επανασύνδεση παροχής που έχει διακοπεί</li>
      <li>Για αλλαγή ιδιοκτήτη ή ενοικιαστή στο λογαριασμό</li>
      <li>Για αύξηση ή μείωση της ισχύος παροχής</li>
      <li>Για περιοδικό έλεγχο υφιστάμενης εγκατάστασης (κάθε 2 , 5 ή 10 χρόνια)</li>
    </ul>
  </div>

  <div className="bg-white rounded-lg shadow-lg p-6">
    <h2 className="text-2xl font-semibold mb-4">Η ΥΔΕ που παραδίδουμε περιλαμβάνει:</h2>
    <ul className="list-disc list-inside space-y-2 text-gray-700">
      <li>Έλεγχο και επιθεώρηση της ηλεκτρικής εγκατάστασης βάσει ΕΛΟΤ HD 384</li>
      <li>Καταγραφή και αποκατάσταση τυχόν ελλείψεων ή προβλημάτων</li>
      <li>Σύνταξη και υπογραφή Υπεύθυνης Δήλωσης Εγκαταστάτη</li>
      <li>Έκδοση Πρωτοκόλλου Ελέγχου και Σχεδίου Μονογραμμικού</li>
      <li>Ολοκληρωμένος φάκελος με όλα τα απαιτούμενα έγγραφα για υποβολή στον ΔΕΔΔΗΕ</li>
    </ul>
  </div>
</div>


         <div className="flex justify-center mt-8">
  <Button
    className="bg-yellow-400 text-[#033941] hover:bg-yellow-300 text-lg px-6 py-4 rounded-md font-semibold shadow-md w-full max-w-xs sm:max-w-md"
    asChild
  >
    <a href="tel:+306982752398">
      📞 Καλέστε μας για έκδοση
    </a>
  </Button>
</div>

        </div>
      </div>
    </>
  );
}
