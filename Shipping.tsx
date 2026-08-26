import { Clock, Globe2, Plane, Ship, Snowflake, Thermometer } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const modes = [
  {
    icon: Plane,
    tag: "Air Cargo",
    title: "Fast. Fresh. Flown Worldwide.",
    desc: "Perishable-priority air freight for high-value, time-sensitive consignments — green chilli, elephant foot yam and fresh mixed vegetables reach your destination in 24–72 hours.",
    img: "/images/air-cargo.jpg",
    features: [
      { icon: Clock, label: "24–72 hr transit" },
      { icon: Thermometer, label: "Temperature controlled" },
      { icon: Globe2, label: "Global hub connectivity" },
    ],
    accent: "from-forest/85 via-forest/40 to-transparent",
  },
  {
    icon: Ship,
    tag: "Sea Freight",
    title: "Bulk. Reliable. Cost-Effective.",
    desc: "Full-container-load (FCL) and reefer shipments for onions, potatoes and yam — pre-cooled, dry-vented and sailed on regular routes to the Middle East, Southeast Asia and Europe.",
    img: "/images/logistics.jpg",
    features: [
      { icon: Snowflake, label: "Reefer & dry containers" },
      { icon: Globe2, label: "15+ port destinations" },
      { icon: Clock, label: "Weekly sailings" },
    ],
    accent: "from-forest/85 via-forest/40 to-transparent",
  },
];

export default function Shipping() {
  return (
    <section id="shipping" className="bg-sand py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Air & Sea Logistics"
          title={
            <>
              Two Modes of Shipping,{" "}
              <span className="font-light italic text-gold">One Standard of Freshness.</span>
            </>
          }
          sub="Whether it's overnight air cargo or bulk sea containers, every consignment leaves our facility cold-chain ready and documentation complete."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {modes.map((m, i) => (
            <Reveal key={m.tag} delay={i * 0.12}>
              <article className="group relative h-full overflow-hidden rounded-3xl bg-forest shadow-xl shadow-forest/15">
                <div className="relative aspect-[5/4] overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.tag}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${m.accent}`} />
                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.25em] text-forest shadow-lg">
                    <m.icon className="h-3.5 w-3.5" />
                    {m.tag}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <h3 className="font-display text-3xl font-medium leading-tight text-cream md:text-4xl">
                      {m.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-6 p-6 md:p-8">
                  <p className="leading-relaxed text-cream/70">{m.desc}</p>
                  <div className="grid gap-3 border-t border-cream/10 pt-6 sm:grid-cols-3">
                    {m.features.map((f) => (
                      <div key={f.label} className="flex items-center gap-2.5">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/15">
                          <f.icon className="h-3.5 w-3.5 text-goldlight" />
                        </span>
                        <span className="text-xs font-semibold text-cream/80">{f.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-3xl border-2 border-gold/0 transition-all duration-500 group-hover:border-gold/40" />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-forest/10 bg-cream p-6 md:flex-row md:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest">
                <Plane className="h-5 w-5 text-goldlight" />
              </div>
              <p className="max-w-md text-sm leading-relaxed text-ink/70">
                Need urgent air cargo or a mixed sea + air plan?{" "}
                <span className="font-bold text-forest">Talk to our logistics desk.</span>
              </p>
            </div>
            <a
              href="https://wa.me/919949955119?text=Hello%20Jahnavi%20Enterprises%2C%20I%27d%20like%20to%20discuss%20air%20cargo%20shipping."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#25D366]/25 transition hover:-translate-y-0.5 hover:bg-[#1ebe57]"
            >
              <svg viewBox="0 0 32 32" className="h-4 w-4 fill-current">
                <path d="M16 3C9 3 3.5 8.5 3.5 15.4c0 2.5.7 4.9 2 7L3 29l6.9-2.2c2 1.1 4.3 1.7 6.6 1.7 6.9 0 12.5-5.5 12.5-12.4C29 8.5 23.4 3 16 3zm0 22.7c-2 0-4-.5-5.7-1.6l-.4-.2-4.1 1.3 1.3-4-.3-.4a10.4 10.4 0 0 1-1.6-5.5c0-5.8 4.8-10.5 10.7-10.5S26.6 9.6 26.6 15.3c0 5.8-4.8 10.4-10.6 10.4z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
