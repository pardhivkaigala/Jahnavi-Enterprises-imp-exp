import { FileCheck2, Leaf, ShieldCheck, Truck } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { CertificationBadges } from "./Certifications";

const points = [
  {
    icon: ShieldCheck,
    title: "Export-grade quality control",
    desc: "Every lot is inspected, graded and weight-verified before it leaves our facility.",
  },
  {
    icon: Truck,
    title: "Cold-chain & on-time logistics",
    desc: "Pre-cooling, reefer trucks and confirmed vessel space to protect freshness.",
  },
  {
    icon: FileCheck2,
    title: "Documentation handled end-to-end",
    desc: "Phytosanitary certificates, certificate of origin, invoice and BL — all prepared for you.",
  },
];

export default function About() {
  return (
    <section id="about" className="dot-grid relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="absolute -left-5 -top-5 h-full w-full rounded-3xl border-2 border-gold/40" />
          <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-forest/20">
            <img
              src="/images/farm.jpg"
              alt="Farmer holding freshly harvested vegetables"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent" />
          </div>
          <div className="animate-float-slow absolute -bottom-8 -right-4 max-w-[240px] rounded-2xl border border-gold/30 bg-forest p-5 shadow-2xl md:-right-8">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15">
                <Leaf className="h-5 w-5 text-goldlight" />
              </span>
              <span className="font-display text-lg font-semibold text-cream">100% Farm-Direct</span>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-cream/65">
              No middlemen — full traceability from the field to your port.
            </p>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About Jahnavi Enterprises"
            title={
              <>
                Rooted in Indian Soil,{" "}
                <span className="font-light italic text-gold">Trusted Across the Globe.</span>
              </>
            }
          />
          <Reveal delay={0.15}>
            <p className="mt-6 leading-relaxed text-ink/70">
              Founded with roots deep in India's fertile farmlands, Jahnavi Enterprises is a dedicated
              import–export house specialising in premium fresh vegetables. From pungent red onions and
              fiery G4 green chillies to firm elephant foot yam, we source directly from trusted farmers
              and deliver to global buyers with complete transparency.
            </p>
            <p className="mt-4 leading-relaxed text-ink/70">
              Every consignment is hand-graded, scientifically packed and documentation-ready — so your
              produce arrives exactly as it left the farm: fresh, clean and market-ready.
            </p>
          </Reveal>

          <div className="mt-10 space-y-6">
            {points.map((point, index) => (
              <Reveal key={point.title} delay={0.1 + index * 0.1}>
                <div className="group flex items-start gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest transition group-hover:bg-gold">
                    <point.icon className="h-5 w-5 text-goldlight transition group-hover:text-forest" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-forest">{point.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/60">{point.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.35} className="mt-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-gold">
              Our Certifications & Compliance
            </p>
            <div className="mt-4">
              <CertificationBadges />
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 flex items-center gap-4 border-t border-forest/10 pt-8">
              <span className="font-display text-2xl italic text-gold">Jahnavi Enterprises</span>
              <span className="h-px flex-1 bg-forest/10" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-ink/50">
                Export Division
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
