import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#033941] text-white">
      {/* Header bar */}
      <header className="px-6 py-5 border-b border-white/10 text-center">
        <Link href="/" className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity">
          <span className="text-2xl font-bold tracking-widest text-yellow-400">THESSVOLT</span>
        </Link>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-14">
        <h1 className="text-3xl font-bold text-yellow-400 mb-2 text-center">Πολιτική Απορρήτου</h1>
        <p className="text-center text-gray-400 text-sm mb-12">Τελευταία ενημέρωση: Απρίλιος 2025</p>

        <div className="space-y-10">
          <section>
            <p className="text-gray-300 leading-relaxed">
              Στην ThessVolt, σεβόμαστε την ιδιωτικότητά σας και δεσμευόμαστε να προστατεύουμε τα προσωπικά σας δεδομένα. Η παρούσα πολιτική περιγράφει πώς συλλέγουμε, χρησιμοποιούμε και διαχειριζόμαστε τις πληροφορίες σας μέσω του ιστότοπού μας.
            </p>
          </section>

          {[
            {
              title: "1. Ποια δεδομένα συλλέγουμε",
              items: [
                "Ονοματεπώνυμο",
                "Αριθμός τηλεφώνου",
                "Διεύθυνση email",
                "Προτιμώμενη ημερομηνία και ώρα ραντεβού",
                "Δεδομένα περιήγησης (μέσω cookies, Google Ads)",
              ],
            },
            {
              title: "2. Πώς χρησιμοποιούνται τα δεδομένα",
              items: [
                "Για να επικοινωνήσουμε μαζί σας σχετικά με αιτήματα και ραντεβού",
                "Για σκοπούς marketing μέσω Google Ads",
                "Για ανάλυση επισκεψιμότητας και βελτίωση των υπηρεσιών μας",
              ],
            },
            {
              title: "5. Τα δικαιώματά σας",
              items: [
                "Δικαίωμα πρόσβασης στα δεδομένα σας",
                "Δικαίωμα διόρθωσης ή διαγραφής",
                "Δικαίωμα ανάκλησης συγκατάθεσης",
              ],
            },
          ].map((section) => (
            <section key={section.title} className="bg-white/[0.04] border border-white/10 rounded-2xl p-6">
              <h2 className="text-base font-bold text-yellow-400 mb-4">{section.title}</h2>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/60 flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section className="bg-white/[0.04] border border-white/10 rounded-2xl p-6">
            <h2 className="text-base font-bold text-yellow-400 mb-3">3. Χρήση Cookies</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Ο ιστότοπός μας χρησιμοποιεί cookies για τη βελτίωση της εμπειρίας περιήγησης και τη συλλογή δεδομένων μέσω τρίτων (π.χ. Google). Κατά την πρώτη σας επίσκεψη, ζητάμε τη συγκατάθεσή σας.
            </p>
          </section>

          <section className="bg-white/[0.04] border border-white/10 rounded-2xl p-6">
            <h2 className="text-base font-bold text-yellow-400 mb-3">4. Ποιοι έχουν πρόσβαση στα δεδομένα</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Τα δεδομένα σας δεν πωλούνται ούτε κοινοποιούνται σε τρίτους, εκτός εάν απαιτείται από υπηρεσίες τρίτων όπως η Google για διαφημίσεις ή analytics.
            </p>
          </section>

          <section className="bg-white/[0.04] border border-white/10 rounded-2xl p-6">
            <h2 className="text-base font-bold text-yellow-400 mb-3">6. Επικοινωνία</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Για οποιαδήποτε ερώτηση σχετικά με την πολιτική απορρήτου ή για άσκηση των δικαιωμάτων σας:
            </p>
            <div className="mt-3 space-y-1 text-sm">
              <p className="text-white"><span className="text-gray-400">Email: </span>
                <a href="mailto:thessvolt@gmail.com" className="underline hover:text-yellow-400">thessvolt@gmail.com</a>
              </p>
              <p className="text-white"><span className="text-gray-400">Τηλέφωνο: </span>
                <a href="tel:+306982752398" className="underline hover:text-yellow-400">698 275 2398</a>
                {" / "}
                <a href="tel:+306981149233" className="underline hover:text-yellow-400">698 114 9233</a>
              </p>
            </div>
          </section>
        </div>

        <div className="text-center mt-12">
          <Link href="/" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 text-sm font-medium transition-colors">
            ← Επιστροφή στην Αρχική
          </Link>
        </div>
      </div>

      <footer className="text-center py-5 text-xs text-gray-500 border-t border-white/5">
        &copy; 2025 ThessVolt · Ηλεκτρολογικές Υπηρεσίες Θεσσαλονίκη
      </footer>
    </div>
  );
}
