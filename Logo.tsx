export default function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  const wordColor = variant === "light" ? "text-cream" : "text-forest";
  const subColor = variant === "light" ? "text-goldlight" : "text-gold";

  return (
    <a href="#home" className="group flex shrink-0 items-center gap-3">
      <svg
        width="52"
        height="52"
        viewBox="0 0 64 64"
        fill="none"
        className="transition-transform duration-500 group-hover:rotate-6"
      >
        <circle cx="32" cy="32" r="30" fill="#0e2a1d" stroke="url(#ringGrad)" strokeWidth="2" />
        <circle cx="32" cy="32" r="24.5" stroke="#c9962e" strokeOpacity="0.35" strokeWidth="1" fill="none" />
        <path d="M32 47 C 32 39 32 33 32 27" stroke="#e6bc63" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M32 36 C 25 35 20 30 21 22 C 29 23 32 28 32 36 Z" fill="url(#leafGrad)" />
        <path d="M32 32 C 39 31 44 26 43 18 C 35 19 32 24 32 32 Z" fill="#e6bc63" />
        <path d="M25 48.5 C 27.5 51 36.5 51 39 48.5" stroke="#c9962e" strokeWidth="2" strokeLinecap="round" />
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e6bc63" />
            <stop offset="1" stopColor="#b07f1f" />
          </linearGradient>
          <linearGradient id="leafGrad" x1="21" y1="22" x2="32" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4fae74" />
            <stop offset="1" stopColor="#2c7a4f" />
          </linearGradient>
        </defs>
      </svg>
      <div className="leading-none">
        <div className={`font-display text-xl font-semibold tracking-[0.16em] md:text-2xl ${wordColor}`}>
          JAHNAVI
        </div>
        <div className={`mt-1.5 flex items-center gap-2 text-[10px] font-bold tracking-[0.42em] md:text-[11px] ${subColor}`}>
          <span className="h-px w-4 bg-gold/70" />
          ENTERPRISES
          <span className="h-px w-4 bg-gold/70" />
        </div>
      </div>
    </a>
  );
}
