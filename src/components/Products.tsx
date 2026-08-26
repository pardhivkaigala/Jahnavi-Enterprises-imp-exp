import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const products = [
  {
    name: "Elephant Foot Yam",
    aka: "Suran · Jimikand",
    desc: "Firm, fibre-rich tubers graded for size and freshness — a staple for global ethnic kitchens.",
    img: "/images/elephant-foot-yam.jpg",
    tag: "Signature Crop",
  },
  {
    name: "Red Onions",
    aka: "Nashik Red · Pusa",
    desc: "Deep crimson bulbs with high pungency and long shelf life, machine-graded and mesh-packed.",
    img: "/images/onions.jpg",
    tag: "High Demand",
  },
  {
    name: "Green Chilli",
    aka: "G4 · Teja",
    desc: "Glossy, fiery peppers hand-picked at peak pungency, pre-cooled and packed for long transit.",
    img: "/images/green-chilli.jpg",
    tag: "High Demand",
  },
  {
    name: "Tomatoes",
    aka: "Hybrid · Desi",
    desc: "Firm, vine-ripened tomatoes with rich colour, crated carefully to survive the longest journeys.",
    img: "/images/tomatoes.jpg",
    tag: null,
  },
  {
    name: "Okra",
    aka: "Lady Finger",
    desc: "Tender, low-fibre pods sorted for uniform length and packed in ventilated export cartons.",
    img: "/images/okra.jpg",
    tag: null,
  },
  {
    name: "Potatoes",
    aka: "Kufri · Chipsona",
    desc: "Export-grade table and processing potatoes — cured, graded and bagged in jute or LDP.",
    img: "/images/potatoes.jpg",
    tag: null,
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-sand py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Our Produce"
          title={
            <>
              Vegetables We <span className="font-light italic text-gold">Export.</span>
            </>
          }
          sub="Handpicked from India's finest growing regions, graded to international standards and packed to travel the world."
        />

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl bg-forest shadow-lg shadow-forest/10"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/25 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

              {p.tag && (
                <span className="absolute left-4 top-4 rounded-full bg-gold px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-forest shadow-lg">
                  {p.tag}
                </span>
              )}

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-goldlight">{p.aka}</p>
                <h3 className="mt-2 font-display text-3xl font-medium text-cream">{p.name}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-cream/65 opacity-0 transition-all duration-500 group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0">
                  {p.desc}
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-goldlight transition hover:text-gold"
                >
                  Enquire Now
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-gold/0 transition-all duration-500 group-hover:border-gold/50" />
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-12 text-center text-sm font-medium text-ink/55"
        >
          Looking for another vegetable or a mixed consignment?{" "}
          <a href="#contact" className="font-bold text-gold underline-offset-4 hover:underline">
            Ask our export desk
          </a>{" "}
          — we source on demand.
        </motion.p>
      </div>
    </section>
  );
}
