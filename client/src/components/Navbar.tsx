/* leihnah Navbar - Scandinavian Warmth Design
 * Sticky navigation with warm off-white background, forest green logo, koralle CTA
 * Font: DM Sans for brand, Source Sans 3 for nav items
 */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-sand-dark/50">
      <div className="container flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-forest flex items-center justify-center">
            <span className="text-white font-display font-bold text-sm">ln</span>
          </div>
          <span className="font-display font-bold text-xl text-forest tracking-tight">leihnah</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("kategorien")} className="text-sm font-medium text-foreground/70 hover:text-forest transition-colors">
            Kategorien
          </button>
          <button onClick={() => scrollTo("so-gehts")} className="text-sm font-medium text-foreground/70 hover:text-forest transition-colors">
            So geht's
          </button>
          <button onClick={() => scrollTo("vertrauen")} className="text-sm font-medium text-foreground/70 hover:text-forest transition-colors">
            Sicherheit
          </button>
          <button onClick={() => scrollTo("waitlist")} className="text-sm font-medium text-foreground/70 hover:text-forest transition-colors">
            Mitmachen
          </button>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            className="text-sm border-forest/20 text-forest hover:bg-forest/5"
            onClick={() => scrollTo("waitlist")}
          >
            Einloggen
          </Button>
          <Button
            className="text-sm bg-koralle hover:bg-koralle-dark text-white shadow-md shadow-koralle/20"
            onClick={() => scrollTo("waitlist")}
          >
            Jetzt inserieren
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground/70"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü öffnen"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream border-t border-sand-dark/50 overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-3">
              <button onClick={() => scrollTo("kategorien")} className="text-left py-2 text-sm font-medium text-foreground/70 hover:text-forest">
                Kategorien
              </button>
              <button onClick={() => scrollTo("so-gehts")} className="text-left py-2 text-sm font-medium text-foreground/70 hover:text-forest">
                So geht's
              </button>
              <button onClick={() => scrollTo("vertrauen")} className="text-left py-2 text-sm font-medium text-foreground/70 hover:text-forest">
                Sicherheit
              </button>
              <div className="flex gap-2 pt-2">
                <Button
                  variant="outline"
                  className="flex-1 text-sm border-forest/20 text-forest"
                  onClick={() => scrollTo("waitlist")}
                >
                  Einloggen
                </Button>
                <Button
                  className="flex-1 text-sm bg-koralle hover:bg-koralle-dark text-white"
                  onClick={() => scrollTo("waitlist")}
                >
                  Inserieren
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
