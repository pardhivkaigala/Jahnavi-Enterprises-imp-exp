import { BadgeCheck, Package, Ship, Sprout } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    num: "01",
    icon: Sprout,
    title: "Sourcing",
    desc: "Direct procurement from certified farms across India's best growing regions.",
  },
  {
    num: "02",
    icon: BadgeCheck,
    title: "Grading & QC",
    desc: "Hand-grading, weight checks and quality inspection against export specifications.",
  },
  {
    num: "03",
    icon: Package,
    title: "Packing",
    desc: "Crop-specific export packaging with pre-cooling for maximum shelf life.",
  },
  {
    num: "04",
    icon: Ship,
    title: "Shipping",
    desc: "Sea & air freight with complete documentation, delivered right to your port.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="How We Work"
          title={
            <>
              From Our Farms{" "}
              <span className="font-light italic text-gold">to Your Warehouse.</span>
            </>
          }
          sub="A disciplined four-step export pipeline that keeps quality predictable and deliveries on schedule."
        />

        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* connector line */}
          <div className="absolute left-0 right-0 top-10 hidden border-t-2 border-dashed border-gold/30 lg:block" />
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.12} className="relative">
              <div className="group flex flex-col items-start">
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold/40 bg-cream shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:border-gold group-hover:bg-forest">
                  <s.icon className="h-8 w-8 text-gold transition group-hover:text-goldlight" />
                </div>
                <span className="mt-6 font-display text-5xl font-light italic text-gold/30">{s.num}</span>
                <h3 className="mt-2 font-display text-2xl font-semibold text-forest">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
