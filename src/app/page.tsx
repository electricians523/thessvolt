"use client";

import Head from "next/head";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Phone,
  Mail,
  Zap,
  Wrench,
  ShieldCheck,
  Wifi,
  Sun,
  Tv2,
  Lightbulb,
  Cpu
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" aria-hidden="true" />,
    title: "Ηλεκτρολογικές Βλάβες",
    description: "Άμεση διάγνωση και αποκατάσταση ηλεκτρολογικών βλαβών.",
    priceRange: "20–40 €"
  },
  {
    icon: <Wrench className="w-8 h-8 text-yellow-400" aria-hidden="true" />,
    title: "Πρίζες & Διακόπτες",
    description: "Εγκατάσταση & αντικατάσταση με ασφάλεια και ακρίβεια.",
    priceRange: "10–20 €"
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-yellow-400" aria-hidden="true" />,
    title: "Συστήματα Ασφαλείας",
    description: "Αισθητήρες, συναγερμοί, κάμερες, smart συστήματα.",
    priceRange: "50–100 €"
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" aria-hidden="true" />,
    title: "Έξυπνοι Αυτοματισμοί",
    description: "Smart λειτουργίες, αυτοματισμοί κτιρίων, app control.",
    priceRange: "60–120 €"
  },
  {
    icon: <Wifi className="w-8 h-8 text-yellow-400" aria-hidden="true" />,
    title: "Δικτυώσεις & Internet",
    description: "Κατασκευή και ρύθμιση δικτύων, ethernet & WiFi.",
    priceRange: "15–60 €"
  },
  {
    icon: <Sun className="w-8 h-8 text-yellow-400" aria-hidden="true" />,
    title: "Φωτιστικά Σώματα",
    description: "Τοποθέτηση φωτισμού εσωτερικών και εξωτερικών χώρων.",
    priceRange: "15–50 €"
  },
  {
    icon: <Tv2 className="w-8 h-8 text-yellow-400" aria-hidden="true" />,
    title: "Κεραίες & Τηλεόραση",
    description: "Τοποθέτηση, ρύθμιση και troubleshooting.",
    priceRange: "30–70 €"
  },
  {
    icon: <Cpu className="w-8 h-8 text-yellow-400" aria-hidden="true" />,
    title: "Έξυπνα Συστήματα Ελέγχου",
    description: "Ρυθμίσεις και έλεγχος εξοπλισμού από απόσταση.",
    priceRange: "40–90 €"
  }
];


export default function ThessVolt() {
  return (
    <>
      <Head>
        <title>ThessVolt – Ηλεκτρολόγος Θεσσαλονίκη</title>
        <meta name="description" content="Ηλεκτρολογικές υπηρεσίες στη Θεσσαλονίκη από έμπειρους τεχνίτες. Άμεση εξυπηρέτηση, επαγγελματισμός και ασφάλεια." />
      </Head>
      <div
        className="min-h-screen text-white bg-[#033941] relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="Φόντο με λογότυπο"
            fill
            className="object-contain object-center opacity-10"
            priority
          />
        </div>
        <div className="relative z-10">
          <header className="p-6 text-center border-b border-white/10">
            <div className="flex items-center justify-center gap-4">
              <Image
                src="/log_png.png"
                alt="ThessVolt Λογότυπο"
                width={60}
                height={60}
                className="rounded-full"
              />
              <h1 className="text-4xl font-bold tracking-wide text-yellow-400">THESSVOLT</h1>
            </div>
          </header>

    <section className="py-12 px-6">
<h2 className="text-3xl font-semibold text-center text-yellow-400 mb-2">
  Οι Ηλεκτρολογικές Υπηρεσίες μας
</h2>
<p className="text-md text-gray-200 text-center mb-10">
  Εξειδικευμένες λύσεις για κάθε ανάγκη στο σπίτι ή την επιχείρησή σας
</p>




  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
  {services.map((service) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div key={service.title} className="perspective h-[300px]">
      <motion.div
        onClick={() => setFlipped(!flipped)}
        animate={{ rotateY: flipped ? 180 : 0 }}
        whileHover={{ rotateY: 180 }} // εξακολουθεί να ισχύει για desktop
        transition={{ duration: 0.8 }}
        className="relative w-full h-full preserve-3d cursor-pointer"
      >
        {/* Μπροστά */}
        <div className="absolute inset-0 backface-hidden">
          <Card className="w-full h-full bg-white text-[#033941] shadow-lg">
            <CardContent className="flex flex-col items-center gap-4 p-6 text-center h-full justify-center">
              {service.icon}
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </CardContent>
          </Card>
        </div>

        {/* Πίσω */}
        <div className="absolute inset-0 rotate-y-180 backface-hidden">
          <Card className="w-full h-full bg-yellow-400 text-[#033941] shadow-lg flex items-center justify-center">
            <CardContent className="text-center">
              <p className="text-lg font-bold">Ενδεικτική Τιμή</p>
              <p className="text-2xl font-extrabold">{service.priceRange}</p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
})}


  </div>
</section>


          <section className="py-12 text-center">
            <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Περιοχή Εξυπηρέτησης</h2>
            <p className="max-w-2xl mx-auto mb-6 text-lg text-gray-200">
              Καλύπτουμε όλη τη Θεσσαλονίκη και γύρω περιοχές
            </p>
          </section>

<section className="py-16 px-6 text-center">
  <h2 className="text-3xl font-semibold text-yellow-400 mb-6">Τιμοκατάλογος</h2>
  <p className="text-lg text-gray-200 max-w-xl mx-auto mb-6">
    Κατεβάστε τον αναλυτικό μας τιμοκατάλογο με όλες τις υπηρεσίες και τις τιμές μας σε μορφή PDF.
  </p>
  <div className="flex justify-center">
  <Button
    className="bg-yellow-400 text-[#033941] hover:bg-yellow-300 text-base sm:text-lg px-6 py-3 w-full sm:w-auto max-w-xs sm:max-w-none shadow-md"
    asChild
  >
    <a href="/ThessVolt_Timokatalogos.pdf" download target="_blank" rel="noopener noreferrer">
      📄 Κατεβάστε τον Τιμοκατάλογο (PDF)
    </a>
  </Button>
</div>

</section>




          <section className="bg-white text-[#033941] py-12 text-center">
            <h2 className="text-3xl font-semibold mb-6">Επικοινωνία</h2>
            <div className="flex flex-col items-center gap-3 mb-6">
              <p className="flex items-center">
                <Phone className="inline mr-2 text-yellow-400" aria-hidden="true" /> 698 275 2398 / 698 114 9233
              </p>
              <p className="flex items-center">
                <Mail className="inline mr-2 text-yellow-400" aria-hidden="true" /> electricians523@gmail.com
              </p>
            </div>
            <div className="flex justify-center gap-4 mb-6">
              <Button variant="outline" className="border-[#033941] text-[#033941]" asChild>
                <a href="https://wa.me/306982752398" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </Button>
              <Button variant="outline" className="border-[#033941] text-[#033941]" asChild>
                <a href="viber://chat?number=+306982752398" rel="noopener noreferrer">Viber</a>
              </Button>
            </div>
            <Button asChild className="bg-[#033941] text-white hover:bg-[#05515e]">
              <a href="https://g.co/kgs/3dbLYwo" target="_blank" rel="noopener noreferrer">
                Δείτε μας στο Google
              </a>
            </Button>
          </section>

          <footer className="text-center py-4 text-sm text-gray-300 bg-[#033941]">
            &copy; 2025 ThessVolt.
          </footer>
        </div>
      </div>
    </>
  );
}