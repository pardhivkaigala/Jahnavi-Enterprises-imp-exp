import { Sprout } from "lucide-react";

const items = [
  "Elephant Foot Yam",
  "Red Onions",
  "Green Chilli",
  "Tomatoes",
  "Okra — Lady Finger",
  "Potatoes",
  "Farm Fresh",
  "Export Quality",
];

export default function Marquee() {
  return (
    <section className="overflow-hidden border-y border-gold/25 bg-pine py-5">
      <div className="animate-marquee flex w-max items-center">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-6 font-display text-xl font-medium italic text-cream/85 md:text-2xl">
              {item}
            </span>
            <Sprout className="h-5 w-5 shrink-0 text-gold" />
          </span>
        ))}
      </div>
    </section>
  );
}
