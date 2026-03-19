/* leihnah Trust Section - Scandinavian Warmth
 * Versicherungsschutz, verifizierte Nutzer, sichere Zahlung
 * Abstract community illustration as background accent
 */
import { motion } from "framer-motion";
import { Shield, UserCheck, CreditCard, Lock, Star, HeartHandshake } from "lucide-react";

const TRUST_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030749412/X9TakWqHqVQ4DVT7t2efLy/trust-community-DGZ2SsJS9J65Mt3cXL8qxh.webp";

const trustFeatures = [
  {
    icon: Shield,
    title: "Versicherungsschutz",
    description: "Jede Ausleihe ist automatisch versichert. Schäden und Diebstahl sind bis zu 25.000 € abgedeckt.",
    color: "bg-forest/8 text-forest",
  },
  {
    icon: UserCheck,
    title: "Verifizierte Nutzer",
    description: "Identitätsprüfung per Ausweis und Telefonnummer. Du weißt immer, mit wem du es zu tun hast.",
    color: "bg-koralle/8 text-koralle",
  },
  {
    icon: CreditCard,
    title: "Sichere Zahlung",
    description: "Bezahlung über die Plattform mit Käuferschutz. Geld wird erst nach erfolgreicher Übergabe freigegeben.",
    color: "bg-blue-500/8 text-blue-600",
  },
  {
    icon: Lock,
    title: "Datenschutz",
    description: "DSGVO-konform, Server in Deutschland. Deine Daten gehören dir — wir verkaufen sie nicht weiter.",
    color: "bg-emerald-500/8 text-emerald-600",
  },
  {
    icon: Star,
    title: "Bewertungssystem",
    description: "Transparente Bewertungen nach jeder Ausleihe. Die Community reguliert sich selbst.",
    color: "bg-amber-500/8 text-amber-600",
  },
  {
    icon: HeartHandshake,
    title: "Nachbarschafts-Garantie",
    description: "Bei Problemen vermittelt unser Support. Faire Lösungen für beide Seiten — innerhalb von 24 Stunden.",
    color: "bg-pink-500/8 text-pink-600",
  },
];

export default function TrustSection() {
  return (
    <section id="vertrauen" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.04] pointer-events-none">
        <img src={TRUST_IMG} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-koralle font-medium text-sm tracking-wide uppercase">Vertrauen & Sicherheit</span>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-foreground tracking-tight leading-tight">
            Sicher leihen.{" "}
            <span className="text-forest">Sorgenfrei verleihen.</span>
          </h2>
          <p className="mt-4 text-warm-gray text-lg leading-relaxed">
            Vertrauen ist die Grundlage jeder Nachbarschaft. Deshalb haben wir mehrere Sicherheitsebenen eingebaut, damit du dich auf das Wesentliche konzentrieren kannst.
          </p>
        </motion.div>

        {/* Trust grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {trustFeatures.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-sand/30 hover:bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-forest/5 border border-transparent hover:border-sand-dark/40"
              >
                <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon size={22} />
                </div>
                <h3 className="font-display font-semibold text-base text-foreground">{feature.title}</h3>
                <p className="mt-2 text-warm-gray text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 bg-forest rounded-2xl p-8 md:p-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "0 €", label: "Schadensfälle unbezahlt", sub: "100% Regulierung" },
              { value: "4.9", label: "Durchschnittsbewertung", sub: "von 5 Sternen" },
              { value: "<2 Min", label: "Inserat erstellen", sub: "Schnell & einfach" },
              { value: "24/7", label: "Support erreichbar", sub: "Deutsch & persönlich" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display font-bold text-2xl md:text-3xl text-white">{stat.value}</p>
                <p className="text-white/70 text-sm mt-1">{stat.label}</p>
                <p className="text-white/50 text-xs mt-0.5">{stat.sub}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
