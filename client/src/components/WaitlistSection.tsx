/* leihnah Waitlist / Coming Soon Section - Scandinavian Warmth
 * Email signup for early access
 * Warm gradient background, koralle CTA
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { toast } from "sonner";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Bitte gib eine gültige E-Mail-Adresse ein.");
      return;
    }
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      toast.success("Du bist auf der Warteliste! Wir melden uns bald.");
    }, 800);
  };

  return (
    <section id="waitlist" className="py-20 md:py-28 bg-sand/50 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-koralle/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-forest/5 blur-3xl" />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-koralle/8 text-koralle text-sm font-medium mb-6">
            <Sparkles size={14} />
            <span>Coming Soon — Frühling 2026</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight leading-tight">
            Sei von Anfang an{" "}
            <span className="text-forest">dabei</span>
          </h2>

          <p className="mt-5 text-warm-gray text-lg leading-relaxed max-w-lg mx-auto">
            Melde dich jetzt für die Warteliste an und gehöre zu den Ersten, die leihnah nutzen können. Frühbucher erhalten exklusive Vorteile.
          </p>

          {/* Benefits */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {[
              "Keine Gebühren im ersten Jahr",
              "Erste 100 Inserate kostenlos",
              "Exklusiver Beta-Zugang",
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-sm text-foreground/80">
                <div className="w-5 h-5 rounded-full bg-forest/10 flex items-center justify-center">
                  <Check size={12} className="text-forest" />
                </div>
                {benefit}
              </div>
            ))}
          </div>

          {/* Form */}
          {!submitted ? (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="deine@email.de"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 px-5 rounded-xl border border-sand-dark/50 bg-white text-foreground placeholder:text-warm-gray/60 focus:outline-none focus:ring-2 focus:ring-koralle/30 focus:border-koralle/50 text-sm"
              />
              <Button
                type="submit"
                disabled={loading}
                className="h-12 px-7 bg-koralle hover:bg-koralle-dark text-white shadow-lg shadow-koralle/20 rounded-xl text-sm font-medium"
              >
                {loading ? "Wird eingetragen..." : "Auf die Warteliste"}
                {!loading && <ArrowRight size={16} className="ml-2" />}
              </Button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-10 bg-white rounded-2xl p-8 max-w-md mx-auto border border-forest/10"
            >
              <div className="w-14 h-14 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-4">
                <Check size={24} className="text-forest" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground">Du bist dabei!</h3>
              <p className="mt-2 text-warm-gray text-sm">
                Wir haben <strong className="text-foreground">{email}</strong> auf die Warteliste gesetzt. Du erhältst eine E-Mail, sobald leihnah startet.
              </p>
            </motion.div>
          )}

          <p className="mt-5 text-xs text-warm-gray/70">
            Kein Spam. Jederzeit abmeldbar. Wir respektieren deine Privatsphäre.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
