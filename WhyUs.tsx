import { FileCheck2, PackageCheck, Snowflake } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

import { Plane } from "lucide-react";

const features = [
  {
    icon: PackageCheck,
    title: "Export-Grade Packaging",
    desc: "Ventilated cartons, mesh bags and jute packs tuned to each crop's journey.",
  },
  {
    icon: Snowflake,
    title: "Cold-Chain Ready",
    desc: "Pre-cooling and reefer logistics that lock in freshness until discharge.",
  },
  {
    icon: Plane,
    title: "Air & Sea Cargo",
    desc: "Fast air freight for perishables + bulk sea containers for volume orders.",
  },
  {
    icon: FileCheck2,
    title: "Documentation Sorted",
    desc: "Phyto, certificate of origin, invoice & BL — prepared end-to-end.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="dot-grid-light relative overflow-hidden bg-forest py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20">
        {/* Content */}
        <div className="order-2 lg:order-1">
          <SectionHeading
            dark
            align="left"
            eyebrow="Why Jahnavi Enterprises"
            title={
              <>
                Export Excellence,{" "}
                <span className="font-light italic text-goldlight">From Field to Port.</span>
              </>
            }
            sub="Importers choose us because we treat every container like it carries our own name — because it does."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={0.1 + i * 0.08}>
                <div className="group rounded-2xl border border-cream/10 bg-pine/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/40">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 transition group-hover:bg-gold">
                    <f.icon className="h-5 w-5 text-goldlight transition group-hover:text-forest" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-cream">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/60">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Image */}
        <Reveal className="relative order-1 lg:order-2">
          <div className="absolute -right-5 -top-5 h-full w-full rounded-3xl border-2 border-gold/40" />
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/images/logistics.jpg"
              alt="Cargo ship with export containers at golden hour"
              className="aspect-[4/5] w-full object-cover lg:aspect-[5/6]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent" />
          </div>
          <div className="animate-float-slow absolute -bottom-8 left-4 max-w-[280px] rounded-2xl border border-gold/30 bg-cream p-5 shadow-2xl md:-left-8">
            <div className="font-display text-3xl font-semibold text-forest">
              15<span className="text-gold">+</span>
            </div>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-forest/60">
              Export Destinations
            </p>
            <p className="mt-3 text-xs leading-relaxed text-ink/60">
              UAE · Saudi Arabia · Qatar · Kuwait · Malaysia · Singapore · UK · Netherlands & more
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
