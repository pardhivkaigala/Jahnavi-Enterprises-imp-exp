import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Award, FileCheck2, ShieldCheck, Sprout } from "lucide-react";

const stats = [
  { value: "15+", label: "Countries Served" },
  { value: "500+", label: "Containers Shipped" },
  { value: "100%", label: "Quality Checked" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-end overflow-hidden bg-forest">
      <motion.img
        src="/images/hero.jpg"
        alt="Fresh Indian vegetables in export crates"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/55 to-forest/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest/75 via-forest/20 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-44 md:pb-24">
        <motion.div variants={container} initial="hidden" animate="visible" className="max-w-4xl">
          <motion.p
            variants={item}
            className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.45em] text-goldlight md:text-xs"
          >
            <Sprout className="h-4 w-4" />
            Premium Indian Vegetable Export House
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-7 font-display text-5xl leading-[1.02] font-medium text-cream sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Farm-Fresh Vegetables,
            <span className="block font-light italic text-goldlight">Delivered Worldwide.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-7 max-w-xl text-base leading-relaxed text-cream/75 md:text-lg">
            Jahnavi Enterprises exports elephant foot yam, red onions, green chilli and premium Indian
            vegetables to global markets — graded to international standards, packed to travel, and
            delivered on time, every time.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="group inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-sm font-bold text-forest shadow-xl shadow-gold/25 transition hover:-translate-y-0.5 hover:bg-goldlight"
            >
              Explore Our Produce
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://wa.me/919949955119?text=Hello%20Jahnavi%20Enterprises%2C%20I%27d%20like%20to%20enquire%20about%20your%20vegetable%20exports."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border-2 border-[#25D366] bg-[#25D366]/10 px-8 py-4 text-sm font-bold text-cream backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-[#25D366]"
            >
              <svg viewBox="0 0 32 32" className="h-4 w-4 fill-[#25D366] transition group-hover:fill-white">
                <path d="M16 3C9 3 3.5 8.5 3.5 15.4c0 2.5.7 4.9 2 7L3 29l6.9-2.2c2 1.1 4.3 1.7 6.6 1.7 6.9 0 12.5-5.5 12.5-12.4C29 8.5 23.4 3 16 3zm0 22.7c-2 0-4-.5-5.7-1.6l-.4-.2-4.1 1.3 1.3-4-.3-.4a10.4 10.4 0 0 1-1.6-5.5c0-5.8 4.8-10.5 10.7-10.5S26.6 9.6 26.6 15.3c0 5.8-4.8 10.4-10.6 10.4z" />
              </svg>
              WhatsApp Us
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-forest/60 px-5 py-2.5 backdrop-blur"
          >
            <div className="flex -space-x-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d4531e]">
                <Award className="h-4 w-4 text-white" />
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1e7ad4]">
                <ShieldCheck className="h-4 w-4 text-white" />
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold">
                <FileCheck2 className="h-4 w-4 text-forest" />
              </span>
            </div>
            <p className="text-xs font-bold tracking-wide text-cream">
              APEDA · FSSAI · IEC <span className="text-goldlight">Certified Exporter</span>
            </p>
          </motion.div>

          <motion.div variants={item} className="mt-10 grid max-w-2xl grid-cols-3 gap-6 border-t border-cream/15 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-semibold text-goldlight md:text-5xl">{s.value}</div>
                <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.25em] text-cream/60 md:text-xs">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 md:block"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/25 text-cream/70">
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </span>
      </motion.a>
    </section>
  );
}
