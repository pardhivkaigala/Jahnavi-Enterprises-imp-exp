import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  dark?: boolean;
  align?: "left" | "center";
}

export default function SectionHeading({ eyebrow, title, sub, dark = false, align = "center" }: SectionHeadingProps) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <Reveal className={`flex flex-col ${alignCls}`}>
      <span
        className={`flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.4em] ${
          dark ? "text-goldlight" : "text-gold"
        }`}
      >
        <span className="h-px w-8 bg-gold/70" />
        {eyebrow}
        {align === "center" && <span className="h-px w-8 bg-gold/70" />}
      </span>
      <h2
        className={`mt-5 max-w-3xl font-display text-4xl leading-[1.05] font-medium md:text-6xl ${
          dark ? "text-cream" : "text-forest"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p className={`mt-6 max-w-2xl text-base leading-relaxed md:text-lg ${dark ? "text-cream/65" : "text-ink/65"}`}>
          {sub}
        </p>
      )}
    </Reveal>
  );
}
