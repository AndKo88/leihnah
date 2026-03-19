/* leihnah Categories Section - Scandinavian Warmth
 * Staggered card grid with category-specific colors
 * Generated images for top 3, icons for rest
 */
import { motion } from "framer-motion";
import { Car, Wrench, Tent, Monitor, Dumbbell, ShoppingBag, Flower2 } from "lucide-react";

const AUTO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030749412/X9TakWqHqVQ4DVT7t2efLy/category-auto-afr7if6JDLHdr7W54JJN3S.webp";
const WERKZEUG_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030749412/X9TakWqHqVQ4DVT7t2efLy/category-werkzeug-niHtLZsup6Y8jpSMuv7b3V.webp";
const CAMPING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663030749412/X9TakWqHqVQ4DVT7t2efLy/category-camping-QtpuQg5X4pHHL85CUB7yYf.webp";

const categories = [
  {
    name: "Autos & Fahrzeuge",
    desc: "PKW, Transporter, E-Scooter",
    icon: Car,
    image: AUTO_IMG,
    color: "bg-forest/8 text-forest",
    listings: "340+",
    featured: true,
  },
  {
    name: "Camping & Outdoor",
    desc: "Wohnmobile, Zelte, Dachboxen",
    icon: Tent,
    image: CAMPING_IMG,
    color: "bg-koralle/8 text-koralle",
    listings: "280+",
    featured: true,
  },
  {
    name: "Werkzeug & Maschinen",
    desc: "Bohrer, Sägen, Hochdruckreiniger",
    icon: Wrench,
    image: WERKZEUG_IMG,
    color: "bg-amber-500/8 text-amber-700",
    listings: "520+",
    featured: true,
  },
  {
    name: "Elektronik",
    desc: "Kameras, Drohnen, Beamer",
    icon: Monitor,
    color: "bg-blue-500/8 text-blue-700",
    listings: "190+",
    featured: false,
  },
  {
    name: "Sport & Freizeit",
    desc: "Fahrräder, SUPs, Skiausrüstung",
    icon: Dumbbell,
    color: "bg-emerald-500/8 text-emerald-700",
    listings: "410+",
    featured: false,
  },
  {
    name: "Mode & Accessoires",
    desc: "Designertaschen, Anzüge, Schmuck",
    icon: ShoppingBag,
    color: "bg-pink-500/8 text-pink-700",
    listings: "150+",
    featured: false,
  },
  {
    name: "Haushalt & Garten",
    desc: "Rasenmäher, Dampfreiniger, Möbel",
    icon: Flower2,
    color: "bg-lime-500/8 text-lime-700",
    listings: "370+",
    featured: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function CategoriesSection() {
  return (
    <section id="kategorien" className="py-20 md:py-28 bg-white">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-koralle font-medium text-sm tracking-wide uppercase">Kategorien</span>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-foreground tracking-tight leading-tight">
            Alles, was du brauchst.{" "}
            <span className="text-forest">Direkt nebenan.</span>
          </h2>
          <p className="mt-4 text-warm-gray text-lg leading-relaxed">
            Von Fahrzeugen über Werkzeug bis hin zu Designertaschen — auf leihnah findest du alles, was du nicht jeden Tag brauchst, aber manchmal dringend benötigst.
          </p>
        </motion.div>

        {/* Featured categories with images */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid md:grid-cols-3 gap-5"
        >
          {categories.filter(c => c.featured).map((cat) => (
            <motion.div
              key={cat.name}
              variants={itemVariants}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">{cat.name}</h3>
                    <p className="text-white/70 text-sm mt-0.5">{cat.desc}</p>
                  </div>
                  <span className="text-xs font-medium text-white/80 bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full">
                    {cat.listings} Angebote
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other categories as compact cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {categories.filter(c => !c.featured).map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.name}
                variants={itemVariants}
                className="group bg-sand/50 hover:bg-white rounded-xl p-5 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-forest/5 border border-transparent hover:border-sand-dark/50"
              >
                <div className={`w-11 h-11 rounded-xl ${cat.color} flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon size={20} />
                </div>
                <h3 className="font-display font-semibold text-sm text-foreground">{cat.name}</h3>
                <p className="text-warm-gray text-xs mt-1">{cat.desc}</p>
                <span className="text-xs font-medium text-forest/70 mt-2 block">{cat.listings} Angebote</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
