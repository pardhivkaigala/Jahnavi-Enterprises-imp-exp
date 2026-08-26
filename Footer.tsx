import { Award, FileCheck2, Mail, Phone, ShieldCheck } from "lucide-react";
import Logo from "./Logo";

const explore = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const produce = [
  "Elephant Foot Yam",
  "Red Onions",
  "Green Chilli",
  "Tomatoes",
  "Okra — Lady Finger",
  "Potatoes",
];

export default function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo variant="light" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/55">
              Premium Indian vegetables — elephant foot yam, red onions, green chilli and more —
              graded, packed and shipped to the world with pride.
            </p>
            <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.35em] text-gold">
              Import · Export · Global Trade
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-pine px-4 py-2 text-xs font-extrabold tracking-widest text-cream">
                <Award className="h-4 w-4 text-gold" /> APEDA
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-pine px-4 py-2 text-xs font-extrabold tracking-widest text-cream">
                <ShieldCheck className="h-4 w-4 text-gold" /> FSSAI
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs font-extrabold tracking-widest text-goldlight">
                <FileCheck2 className="h-4 w-4 text-gold" /> IEC
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cream/50">
                Certified Exporter
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.35em] text-goldlight">Explore</h4>
            <ul className="mt-6 space-y-3">
              {explore.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-cream/60 transition hover:text-goldlight">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.35em] text-goldlight">Our Produce</h4>
            <ul className="mt-6 space-y-3">
              {produce.map((p) => (
                <li key={p}>
                  <a href="#products" className="text-sm text-cream/60 transition hover:text-goldlight">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-cream/10 pt-8 md:flex-row md:items-center">
          <p className="text-xs text-cream/45">
            © {new Date().getFullYear()} Jahnavi Enterprises. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-xs text-cream/60">
            <a
              href="mailto:jahnavienterprises11@gmail.com"
              className="flex items-center gap-2 transition hover:text-goldlight"
            >
              <Mail className="h-3.5 w-3.5 text-gold" /> jahnavienterprises11@gmail.com
            </a>
            <a href="tel:+919949955119" className="flex items-center gap-2 transition hover:text-goldlight">
              <Phone className="h-3.5 w-3.5 text-gold" /> 99499 55119
            </a>
            <a href="tel:+918466067788" className="flex items-center gap-2 transition hover:text-goldlight">
              <Phone className="h-3.5 w-3.5 text-gold" /> 84660 67788
            </a>
            <a
              href="https://wa.me/919949955119?text=Hello%20Jahnavi%20Enterprises%2C%20I%27d%20like%20to%20enquire%20about%20your%20vegetable%20exports."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#25D366] transition hover:text-[#5eea94]"
            >
              <svg viewBox="0 0 32 32" className="h-3.5 w-3.5 fill-current">
                <path d="M16 3C9 3 3.5 8.5 3.5 15.4c0 2.5.7 4.9 2 7L3 29l6.9-2.2c2 1.1 4.3 1.7 6.6 1.7 6.9 0 12.5-5.5 12.5-12.4C29 8.5 23.4 3 16 3zm0 22.7c-2 0-4-.5-5.7-1.6l-.4-.2-4.1 1.3 1.3-4-.3-.4a10.4 10.4 0 0 1-1.6-5.5c0-5.8 4.8-10.5 10.7-10.5S26.6 9.6 26.6 15.3c0 5.8-4.8 10.4-10.6 10.4z" />
              </svg>
              WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
