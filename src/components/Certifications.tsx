import { motion } from "framer-motion";
import { Award, BadgeCheck, FileCheck2, ShieldCheck } from "lucide-react";

const certifications = [
  {
    icon: Award,
    short: "APEDA",
    full: "Agricultural & Processed Food Products Export Development Authority",
    desc: "Registered exporter for Indian agricultural & processed food produce.",
    accent: "text-[#d4531e] bg-[#d4531e]/15 border-[#d4531e]/30",
    circle: "bg-[#d4531e]",
  },
  {
    icon: ShieldCheck,
    short: "FSSAI",
    full: "Food Safety and Standards Authority of India",
    desc: "Licensed for food processing, packaging & export compliance.",
    accent: "text-[#1e7ad4] bg-[#1e7ad4]/15 border-[#1e7ad4]/30",
    circle: "bg-[#1e7ad4]",
  },
  {
    icon: FileCheck2,
    short: "IEC",
    full: "Import Export Code — DGFT, Govt. of India",
    desc: "Authorized IEC holder — legally licensed to import & export from India.",
    accent: "text-forest bg-gold/20 border-gold/40",
    circle: "bg-gold",
    circleText: "text-forest",
  },
];

interface Props {
  dark?: boolean;
  compact?: boolean;
}

export function CertificationBadges({ dark = false, compact = false }: Props) {
  if (compact) {
    return (
      <div className="flex flex-wrap items-center gap-3">
        {certifications.map((c) => (
          <span
            key={c.short}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-extrabold tracking-widest ${
              dark ? "bg-cream text-forest border-cream/20" : "bg-forest text-cream border-forest/20"
            }`}
          >
            <c.icon className="h-4 w-4 text-gold" />
            {c.short}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {certifications.map((c, i) => (
        <motion.div
          key={c.short}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          className={`rounded-2xl border p-6 backdrop-blur-sm ${
            dark ? "border-cream/15 bg-pine/70" : "border-forest/10 bg-white shadow-lg shadow-forest/5"
          }`}
        >
          <div className="flex items-center gap-4">
            <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border ${c.accent}`}>
              <c.icon className="h-7 w-7" />
            </span>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.25em] opacity-60">
                Certified Exporter
              </div>
              <div
                className={`font-display text-2xl font-extrabold tracking-wider ${
                  dark ? "text-cream" : "text-forest"
                }`}
              >
                {c.short}
              </div>
            </div>
          </div>
          <p
            className={`mt-4 text-xs font-semibold uppercase tracking-wide opacity-70 ${
              dark ? "text-goldlight" : "text-gold"
            }`}
          >
            {c.full}
          </p>
          <p className={`mt-1.5 text-sm leading-relaxed ${dark ? "text-cream/65" : "text-ink/60"}`}>
            {c.desc}
          </p>
          {c.short === "IEC" && (
            <span className="mt-3 inline-flex rounded-full bg-gold/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold">
              DGFT Licensed
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export function TrustOrb() {
  return (
    <div className="flex items-center gap-3 rounded-full border border-gold/40 bg-forest/90 px-6 py-3 shadow-xl backdrop-blur">
      <div className="flex -space-x-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d4531e]">
          <Award className="h-4 w-4 text-white" />
        </span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1e7ad4]">
          <ShieldCheck className="h-4 w-4 text-white" />
        </span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold">
          <FileCheck2 className="h-4 w-4 text-forest" />
        </span>
      </div>
      <p className="text-xs font-bold tracking-wide text-cream">
        APEDA · FSSAI · IEC
        <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.2em] text-goldlight">
          Certified Exporter
        </span>
      </p>
    </div>
  );
}

export { BadgeCheck };
