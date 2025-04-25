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

// Προσθήκη υποκατηγοριών υπηρεσιών για εμφάνιση στην πίσω όψη κάθε κάρτας
const services = [
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" aria-hidden="true" />,
    title: "Ηλεκτρολογικές Βλάβες",
    description: "Άμεση διάγνωση και αποκατάσταση ηλεκτρολογικών βλαβών.",
    subservices: [
      "Διάγνωση βλαβών",
      "Αντικατάσταση καλωδίων",
      "Αποκατάσταση ασφαλειών",
      "Ανίχνευση διαρροής ρεύματος",
      "Επισκευή πριζών και διακοπτών",
      "Αποκατάσταση υπερφόρτωσης πίνακα"
    ]
  },
  {
    icon: <Wrench className="w-8 h-8 text-yellow-400" aria-hidden="true" />,
    title: "Πρίζες & Διακόπτες",
    description: "Εγκατάσταση & αντικατάσταση με ασφάλεια και ακρίβεια.",
    subservices: [
      "Τοποθέτηση νέων πριζών",
      "Αντικατάσταση διακοπτών",
      "Εγκατάσταση dimmer",
      "Μετακίνηση πρίζας",
      "Τοποθέτηση πρίζας με USB",
      "Εγκατάσταση διακόπτη αλέ-ρετούρ"
    ]
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-yellow-400" aria-hidden="true" />,
    title: "Συστήματα Ασφαλείας",
    description: "Αισθητήρες, συναγερμοί, κάμερες, smart συστήματα.",
    subservices: [
      "Τοποθέτηση καμερών",
      "Εγκατάσταση συναγερμού",
      "Ρύθμιση smart alarm",
      "Τοποθέτηση μαγνητικών επαφών",
      "Απομακρυσμένος έλεγχος μέσω app",
      "Αντικατάσταση μπαταρίας backup"
    ]
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" aria-hidden="true" />,
    title: "Έξυπνοι Αυτοματισμοί",
    description: "Smart λειτουργίες, αυτοματισμοί κτιρίων, app control.",
    subservices: [
      "Φωτισμός με χρονοπρογραμματισμό",
      "Έλεγχος ρολών",
      "Smart home integration",
      "Έλεγχος με φωνητικές εντολές",
      "Αυτοματισμοί για επαγγελματικούς χώρους",
      "Ρύθμιση smart ρελέ"
    ]
  },
  {
    icon: <Wifi className="w-8 h-8 text-yellow-400" aria-hidden="true" />,
    title: "Δικτυώσεις & Internet",
    description: "Κατασκευή και ρύθμιση δικτύων, ethernet & WiFi.",
    subservices: [
      "Στήσιμο WiFi mesh",
      "Καθορισμός VLAN",
      "Ρύθμιση router",
      "Εγκατάσταση access points",
      "Τοποθέτηση καλωδίωσης ethernet",
      "Δίκτυα για επαγγελματικούς χώρους"
    ]
  },
  {
    icon: <Sun className="w-8 h-8 text-yellow-400" aria-hidden="true" />,
    title: "Φωτιστικά Σώματα",
    description: "Τοποθέτηση φωτισμού εσωτερικών και εξωτερικών χώρων.",
    subservices: [
      "Τοποθέτηση όλων των ειδών φωτιστικών",
      "Εγκατάσταση led ταινίας",
      "Ρύθμιση dimmer",
      "Αντικατάσταση φωτιστικών με LED",
      "Εξωτερικός φωτισμός κήπου/αυλής",
      "Αρχιτεκτονικός φωτισμός"
    ]
  },
  {
    icon: <Tv2 className="w-8 h-8 text-yellow-400" aria-hidden="true" />,
    title: "Κεραίες & Τηλεόραση",
    description: "Τοποθέτηση, ρύθμιση και troubleshooting.",
    subservices: [
      "Ευθυγράμμιση κεραίας",
      "Εγκατάσταση ψηφιακού δέκτη",
      "Ρύθμιση καναλιών",
      "Ενίσχυση σήματος τηλεόρασης",
      "Πέρασμα καλωδίων κεραίας",
      "Τοποθέτηση τηλεόρασης σε τοίχο"
    ]
  },
  {
    icon: <Cpu className="w-8 h-8 text-yellow-400" aria-hidden="true" />,
    title: "Έξυπνα Συστήματα Ελέγχου",
    description: "Ρυθμίσεις και έλεγχος εξοπλισμού από απόσταση.",
    subservices: [
      "Remote monitoring",
      "Cloud integration",
      "Απομακρυσμένη διαχείριση",
      "Έλεγχος κατανάλωσης ρεύματος",
      "Σύνδεση με Google Assistant ή Alexa",
      "Κεντρικός πίνακας αυτοματισμών"
    ]
  }
];


export default function ThessVolt() {
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
        <title>ThessVolt – Ηλεκτρολογικές Υπηρεσίες Θεσσαλονίκη</title>
        <meta
          name="description"
          content="Ηλεκτρολογικές υπηρεσίες στη Θεσσαλονίκη από έμπειρους τεχνίτες. Άμεση εξυπηρέτηση, επαγγελματισμός και ασφάλεια."
        />
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

          {/* Services Section */}
          <section className="py-12 px-6">
            <h2 className="text-3xl font-semibold text-center text-yellow-400 mb-2">
              Οι Ηλεκτρολογικές Υπηρεσίες μας
            </h2>
            <p className="text-md text-gray-200 text-center mb-10">
              Εξειδικευμένες λύσεις για κάθε ανάγκη στο σπίτι ή την επιχείρησή σας
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {services.map((serviceItem, index) => (
                <div key={serviceItem.title} className="perspective h-[300px]">
                  <motion.div
                    onClick={() => toggleCard(index)}
                    animate={{ rotateY: flipped[index] ? 180 : 0 }}
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full h-full preserve-3d cursor-pointer"
                  >
                    {/* Front */}
                    <div className="absolute inset-0 backface-hidden">
                      <Card className="w-full h-full bg-white text-[#033941] shadow-lg">
                        <CardContent className="flex flex-col items-center gap-4 p-6 text-center h-full justify-center">
                          {serviceItem.icon}
                          <h3 className="text-xl font-semibold">{serviceItem.title}</h3>
                          <p className="text-sm text-gray-600">{serviceItem.description}</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Back – λίστα υπο-υπηρεσιών */}
                    <div className="absolute inset-0 rotate-y-180 backface-hidden">
                      <Card className="w-full h-full bg-yellow-400 text-[#033941] shadow-lg overflow-auto">
                        <CardContent className="p-6">
                         
                          <ul className="list-disc list-inside space-y-1 text-sm">
                            {serviceItem.subservices.map((sub, idx) => (
                              <li key={idx}>{sub}</li>
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


          <section className="py-12 text-center">
            <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Περιοχή Εξυπηρέτησης</h2>
            <p className="max-w-2xl mx-auto mb-6 text-lg text-gray-200">
              Καλύπτουμε όλη τη Θεσσαλονίκη και τις γύρω περιοχές
            </p>
          </section>

<section className="py-16 px-6 text-center">
  <h2 className="text-3xl font-semibold text-yellow-400 mb-6">Τιμοκατάλογος</h2>
  <p className="text-lg text-gray-200 max-w-xl mx-auto mb-6">
    Κατεβάστε τον ενδεικτικό μας τιμοκατάλογο με όλες τις υπηρεσίες και τις τιμές μας σε μορφή PDF.
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
  <span className="mx-2">/</span>
  <a href="tel:+306981149233" className="hover:underline">
    698 114 9233
  </a>
</p>

    <p className="flex items-center">
      <Mail className="inline mr-2 text-yellow-400" aria-hidden="true" />
      <a href="mailto:thessvolt@gmail.com" className="hover:underline">
        thessvolt@gmail.com
      </a>
    </p>
  </div>
  <div className="flex justify-center gap-4 mb-6">
    <Button variant="outline" className="border-[#033941] text-[#033941]" asChild>
      <a href="https://wa.me/306982752398" target="_blank" rel="noopener noreferrer">
        WhatsApp
      </a>
    </Button>
   <Button
  variant="outline"
  className="border-[#033941] text-[#033941]"
  asChild
>
  <a href="viber://chat?number=+306982752398" rel="noopener noreferrer">
    Viber
  </a>
</Button>

  </div>

  <div className="mt-4">
    <Button asChild className="bg-[#033941] text-white hover:bg-[#05515e]">
      <a href="https://g.co/kgs/3dbLYwo" target="_blank" rel="noopener noreferrer">
        Δείτε μας στο Google
      </a>
    </Button>
  </div>
</section>





   <section className="bg-[#033941] text-white py-12 px-6 text-center border-t border-white/10">
  <h2 className="text-3xl font-semibold mb-6 text-yellow-400">Κλείστε Ραντεβού</h2>
  <p className="mb-6 text-gray-200">Συμπληρώστε τα στοιχεία σας και πείτε μας πότε σας εξυπηρετεί να σας καλέσουμε.</p>

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
      placeholder="Επιλογή Ημερομηνίας"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      className="p-3 rounded-md text-[#033941] placeholder:text-gray-500 bg-white w-full"
    />

    <input
      type="time"
      placeholder="Επιλογή Ώρας"
      value={time}
      onChange={(e) => setTime(e.target.value)}
      className="p-3 rounded-md text-[#033941] placeholder:text-gray-500 bg-white w-full"
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
    window.open("viber://chat?number=+306982752398", "_blank");
  }}
  className="bg-yellow-400 hover:bg-yellow-300 text-[#033941] font-semibold py-3 px-4 rounded-md shadow-md"
>
  Viber
</button>


      <button
        onClick={() => {
          const subject = "Ραντεβού ThessVolt";
          const body = `Γεια σας! Θα ήθελα να κλείσω ραντεβού.\n\n👤 Όνομα: ${name}\n📞 Τηλέφωνο: ${phone}\n⚡ Υπηρεσία: ${service}\n${
            asap ? "📆 Όσο πιο άμεσα γίνεται" : `📅 Ημερομηνία: ${date}\n⏰ Ώρα: ${time}`
          }`;
          window.open(`mailto:thessvolt@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, "_blank");
        }}
        className="bg-yellow-400 hover:bg-yellow-300 text-[#033941] font-semibold py-3 px-4 rounded-md shadow-md"
      >
        Email
      </button>
    </div>
  </div>
</section>



           <footer className="text-center py-4 text-sm text-gray-300 bg-[#033941]">
            &copy; 2025 ThessVolt.{" "}
            <a
              href="/privacy-policy"
              className="underline hover:text-yellow-400 ml-2"
            >
              Πολιτική Απορρήτου
            </a>
          </footer>
        </div> {/* Κλείνει το .relative.z-10 */}
      </div> {/* Κλείνει το .min-h-screen */}
    </>
  );
}
