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
  // ✅ Εδώ σωστά ορίζεται η κατάσταση flip για κάθε κάρτα
  const [flipped, setFlipped] = useState(Array(services.length).fill(false));

const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [service, setService] = useState("");
const [date, setDate] = useState("");
const [time, setTime] = useState("");
const [asap, setAsap] = useState(false);



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
        <title>ThessVolt – Ηλεκτρολόγος Θεσσαλονίκη</title>
        <meta name="description" content="Ηλεκτρολογικές υπηρεσίες στη Θεσσαλονίκη από έμπειρους τεχνίτες. Άμεση εξυπηρέτηση, επαγγελματισμός και ασφάλεια." />
      </Head>

      <div className="min-h-screen text-white bg-[#033941] relative overflow-hidden">
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

          {/* 🛠️ Services Section */}
          <section className="py-12 px-6">
            <h2 className="text-3xl font-semibold text-center text-yellow-400 mb-2">
              Οι Ηλεκτρολογικές Υπηρεσίες μας
            </h2>
            <p className="text-md text-gray-200 text-center mb-10">
              Εξειδικευμένες λύσεις για κάθε ανάγκη στο σπίτι ή την επιχείρησή σας
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div key={service.title} className="perspective h-[300px]">
                  <motion.div
                    onClick={() => toggleCard(index)}
                    animate={{ rotateY: flipped[index] ? 180 : 0 }}
                    whileHover={{ rotateY: 180 }}
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
              ))}
        



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
      <Phone className="inline mr-2 text-yellow-400" aria-hidden="true" />
      <a href="tel:+306982752398" className="hover:underline">
        698 275 2398
      </a>
      {" / "}
      <a href="tel:+306981149233" className="hover:underline">
        698 114 9233
      </a>
    </p>
    <p className="flex items-center">
      <Mail className="inline mr-2 text-yellow-400" aria-hidden="true" />
      <a href="mailto:electricians523@gmail.com" className="hover:underline">
        electricians523@gmail.com
      </a>
    </p>
  </div>
</section>




   <section className="bg-[#033941] text-white py-12 px-6 text-center border-t border-white/10">
  <h2 className="text-3xl font-semibold mb-6 text-yellow-400">Κλείσε Ραντεβού</h2>
  <p className="mb-6 text-gray-200">Συμπλήρωσε τα στοιχεία σου και πες μας πότε σε βολεύει να σε καλέσουμε.</p>

  <div className="max-w-xl mx-auto grid gap-4">
    <input
      type="text"
      placeholder="Ονοματεπώνυμο"
      onChange={(e) => setName(e.target.value)}
      value={name}
      className="p-3 rounded-md text-[#033941] bg-white w-full placeholder:text-gray-500"
    />

    <input
      type="text"
      placeholder="Τηλέφωνο"
      onChange={(e) => setPhone(e.target.value)}
      value={phone}
      className="p-3 rounded-md text-[#033941] bg-white w-full placeholder:text-gray-500"
    />

    <select
      value={service}
      onChange={(e) => setService(e.target.value)}
      className="p-3 rounded-md text-[#033941] bg-white w-full"
    >
      <option value="">Επιλογή Υπηρεσίας</option>
      <option value="Ηλεκτρολογικές Βλάβες">Ηλεκτρολογικές Βλάβες</option>
      <option value="Πρίζες & Διακόπτες">Πρίζες & Διακόπτες</option>
      <option value="Συστήματα Ασφαλείας">Συστήματα Ασφαλείας</option>
      <option value="Έξυπνοι Αυτοματισμοί">Έξυπνοι Αυτοματισμοί</option>
      <option value="Δικτυώσεις & Internet">Δικτυώσεις & Internet</option>
      <option value="Φωτιστικά Σώματα">Φωτιστικά Σώματα</option>
      <option value="Κεραίες & Τηλεόραση">Κεραίες & Τηλεόραση</option>
      <option value="Έξυπνα Συστήματα Ελέγχου">Έξυπνα Συστήματα Ελέγχου</option>
    </select>

    <label className="text-left text-gray-200 flex items-center gap-2">
      <input
        type="checkbox"
        checked={asap}
        onChange={() => setAsap(!asap)}
        className="accent-yellow-400"
      />
      Θέλω όσο πιο άμεσα γίνεται
    </label>

    {!asap && (
      <>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-3 rounded-md text-[#033941] bg-white w-full"
        />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="p-3 rounded-md text-[#033941] bg-white w-full"
        />
      </>
    )}

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
      <button
        onClick={() => {
          const message = `Γεια σας! Θα ήθελα να κλείσω ραντεβού.\n\n👤 Όνομα: ${name}\n📞 Τηλέφωνο: ${phone}\n⚡ Υπηρεσία: ${service}\n${
            asap ? "📆 Όσο πιο άμεσα γίνεται" : `📅 Ημερομηνία: ${date}\n⏰ Ώρα: ${time}`
          }`;
          window.open(`https://wa.me/306982752398?text=${encodeURIComponent(message)}`, "_blank");
        }}
        className="bg-yellow-400 hover:bg-yellow-300 text-[#033941] font-semibold py-3 px-4 rounded-md shadow-md"
      >
        WhatsApp
      </button>

      <button
        onClick={() => {
          const message = `Γεια σας! Θα ήθελα να κλείσω ραντεβού.\n\n👤 Όνομα: ${name}\n📞 Τηλέφωνο: ${phone}\n⚡ Υπηρεσία: ${service}\n${
            asap ? "📆 Όσο πιο άμεσα γίνεται" : `📅 Ημερομηνία: ${date}\n⏰ Ώρα: ${time}`
          }`;
          window.open(`viber://forward?text=${encodeURIComponent(message)}`, "_blank");
        }}
        className="bg-yellow-400 hover:bg-yellow-300 text-[#033941] font-semibold py-3 px-4 rounded-md shadow-md"
      >
        Viber
      </button>

      <button
        onClick={() => {
          const subject = "Κλείσιμο Ραντεβού ThessVolt";
          const body = `Γεια σας! Θα ήθελα να κλείσω ραντεβού.\n\n👤 Όνομα: ${name}\n📞 Τηλέφωνο: ${phone}\n⚡ Υπηρεσία: ${service}\n${
            asap ? "📆 Όσο πιο άμεσα γίνεται" : `📅 Ημερομηνία: ${date}\n⏰ Ώρα: ${time}`
          }`;
          window.open(`mailto:electricians523@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, "_blank");
        }}
        className="bg-yellow-400 hover:bg-yellow-300 text-[#033941] font-semibold py-3 px-4 rounded-md shadow-md"
      >
        Email
      </button>
    </div>
  </div>
</section>






          <footer className="text-center py-4 text-sm text-gray-300 bg-[#033941]">
            &copy; 2025 ThessVolt.
          </footer>
        </div>
      </div>
    </>
  );
}