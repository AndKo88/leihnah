/* leihnah How It Works - Scandinavian Warmth
 * 3 steps: Inserieren → Anfrage erhalten → Geld verdienen
 * Asymmetric layout with numbered steps and connecting lines
 */
import { motion } from "framer-motion";
import { Camera, MessageCircle, Banknote } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Inserieren",
    description: "Fotografiere deinen Gegenstand, lege einen Preis fest und erstelle dein Inserat in unter 2 Minuten. Kostenlos und unverbindlich.",
    icon: Camera,
    accent: "bg-forest",
  },
  {
    number: "02",
    title: "Anfrage erhalten",
    description: "Nachbarn in deiner Umgebung finden dein Angebot und senden dir eine Anfrage. Du entscheidest, an wen du verleihst.",
    icon: MessageCircle,
    accent: "bg-koralle",
  },
  {
    number: "03",
    title: "Geld verdienen",
    description: "Übergib den Gegenstand, erhalte deine Zahlung sicher über die Plattform. Inklusive Versicherungsschutz.",
    icon: Banknote,
    accent: "bg-forest-light",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="so-gehts" className="py-20 md:py-28 bg-sand/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-koralle/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-forest/5 blur-3xl pointer-events-none" />

      <div className="container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-koralle font-medium text-sm tracking-wide uppercase">So geht's</span>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
            In 3 Schritten zum{" "}
            <span className="text-forest">Nebeneinkommen</span>
          </h2>
          <p className="mt-4 text-warm-gray text-lg">
            Ob du verleihst oder mietest — der Prozess ist denkbar einfach.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 md:gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-forest/20 via-koralle/30 to-forest/20" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative text-center"
              >
                {/* Icon circle */}
                <div className="relative mx-auto w-20 h-20 mb-6">
                  <div className={`w-full h-full rounded-2xl ${step.accent} flex items-center justify-center shadow-lg`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center text-xs font-bold text-foreground font-display">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-foreground">{step.title}</h3>
                <p className="mt-3 text-warm-gray text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Dual-sided CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid md:grid-cols-2 gap-5"
        >
          {/* For Vermieter */}
          <div className="bg-white rounded-2xl p-7 border border-sand-dark/30 hover:shadow-lg hover:shadow-forest/5 transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-forest/8 flex items-center justify-center shrink-0">
                <span className="text-xl">💰</span>
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-foreground">Für Vermieter</h4>
                <p className="mt-2 text-warm-gray text-sm leading-relaxed">
                  Verdiene Geld mit Dingen, die ungenutzt herumstehen. Dein Auto steht unter der Woche? Dein Werkzeug liegt im Keller? Mach daraus ein Nebeneinkommen.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Ø 120 €/Monat", "Kostenlos inserieren", "Versichert"].map(tag => (
                    <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-forest/6 text-forest">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* For Mieter */}
          <div className="bg-white rounded-2xl p-7 border border-sand-dark/30 hover:shadow-lg hover:shadow-koralle/5 transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-koralle/8 flex items-center justify-center shrink-0">
                <span className="text-xl">🔑</span>
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-foreground">Für Mieter</h4>
                <p className="mt-2 text-warm-gray text-sm leading-relaxed">
                  Warum kaufen, wenn du leihen kannst? Spare Geld, Platz und Ressourcen. Finde genau das, was du brauchst — direkt in deiner Nachbarschaft.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Bis 90% günstiger", "Sofort verfügbar", "Geprüfte Anbieter"].map(tag => (
                    <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-koralle/6 text-koralle-dark">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
