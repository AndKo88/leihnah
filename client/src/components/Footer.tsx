/* leihnah Footer - Scandinavian Warmth
 * Warm forest green background, cream text
 */
import { MapPin, Mail, Phone } from "lucide-react";
import { toast } from "sonner";

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-forest text-white/80">
      <div className="container py-14 md:py-18">
        <div className="grid md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">ln</span>
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">leihnah</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Die universelle Leihbörse für Deutschland. Nachhaltig, sicher und von Nachbar zu Nachbar.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-white/50">
              <MapPin size={14} />
              <span>Berlin, Deutschland</span>
            </div>
          </div>

          {/* Plattform */}
          <div>
            <h4 className="font-display font-semibold text-sm text-white mb-4">Plattform</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Kategorien", id: "kategorien" },
                { label: "So geht's", id: "so-gehts" },
                { label: "Sicherheit", id: "vertrauen" },
                { label: "Warteliste", id: "waitlist" },
              ].map(item => (
                <li key={item.id}>
                  <button onClick={() => scrollTo(item.id)} className="text-sm text-white/60 hover:text-white transition-colors">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h4 className="font-display font-semibold text-sm text-white mb-4">Rechtliches</h4>
            <ul className="space-y-2.5">
              {["Impressum", "Datenschutz", "AGB", "Cookie-Einstellungen"].map(item => (
                <li key={item}>
                  <button onClick={() => toast.info("Feature coming soon")} className="text-sm text-white/60 hover:text-white transition-colors">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-display font-semibold text-sm text-white mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Mail size={14} />
                <span>hallo@leihnah.de</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Phone size={14} />
                <span>+49 30 123 456 78</span>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              {["Twitter", "Instagram", "LinkedIn"].map(social => (
                <button
                  key={social}
                  onClick={() => {}}
                  className="w-9 h-9 rounded-lg bg-white/8 hover:bg-white/15 flex items-center justify-center text-white/60 hover:text-white transition-colors text-xs font-medium"
                >
                  {social[0]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/40">
            &copy; 2026 leihnah GmbH. Alle Rechte vorbehalten.
          </p>
          <p className="text-xs text-white/40">
            Made with care in Berlin
          </p>
        </div>
      </div>
    </footer>
  );
}


