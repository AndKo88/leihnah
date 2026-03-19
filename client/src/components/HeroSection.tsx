/* leihnah Hero Section - Scandinavian Warmth
 * Asymmetric layout: left text, right hero image
 * Warm off-white bg, forest green headlines, koralle CTA
 * Organic shapes, handwritten accent underline
 */
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030749412/X9TakWqHqVQ4DVT7t2efLy/hero-leihnah-SUBCjzqy9duQkcDsFRnyaS.webp";

export default function HeroSection() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-cream">
      {/* Decorative blob */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-koralle/5 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-forest/5 blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest/8 text-forest text-sm font-medium mb-6"
            >
              <Star size={14} className="fill-koralle text-koralle" />
              <span>Bald verfügbar in deiner Stadt</span>
            </motion.div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] text-foreground tracking-tight">
              Alles leihen.{" "}
              <span className="relative inline-block text-forest">
                Alles verleihen.
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 5.5C40 2 80 3 100 4.5C120 6 160 3.5 198 5" stroke="#E76F51" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
                </svg>
              </span>
            </h1>

            <p className="mt-6 text-lg text-warm-gray leading-relaxed max-w-md">
              Die erste universelle Leihbörse Deutschlands. Verdiene Geld mit Dingen, die du nicht täglich brauchst — oder miete, was du nur einmal benötigst. Von Nachbar zu Nachbar.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="bg-koralle hover:bg-koralle-dark text-white shadow-lg shadow-koralle/25 text-base px-8 h-12 rounded-xl"
                onClick={scrollToWaitlist}
              >
                Jetzt kostenlos inserieren
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-forest/20 text-forest hover:bg-forest/5 text-base px-8 h-12 rounded-xl"
                onClick={() => document.getElementById("kategorien")?.scrollIntoView({ behavior: "smooth" })}
              >
                Entdecken
              </Button>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-9 h-9 rounded-full border-2 border-cream object-cover"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">2.400+ auf der Warteliste</p>
                <p className="text-xs text-warm-gray">Sei dabei beim Launch</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-forest/10">
              <img
                src={HERO_IMG}
                alt="Nachbarn teilen Gegenstände in einem sonnigen Innenhof"
                className="w-full h-auto object-cover aspect-[4/3] lg:aspect-[16/11]"
              />
              {/* Overlay card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg max-w-[260px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-forest/10 flex items-center justify-center shrink-0">
                    <span className="text-lg">🔧</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Bohrmaschine verliehen</p>
                    <p className="text-xs text-warm-gray">+15 € verdient · vor 2 Std.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -top-3 -right-3 md:top-4 md:-right-6 bg-white rounded-2xl p-3 shadow-lg border border-sand-dark/30"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-koralle/10 flex items-center justify-center">
                  <span className="text-sm">🚗</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">+89 €/Tag</p>
                  <p className="text-[10px] text-warm-gray">Auto verleihen</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 60V20C240 40 480 0 720 20C960 40 1200 10 1440 30V60H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
