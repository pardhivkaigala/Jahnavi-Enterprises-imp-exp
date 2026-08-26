import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Shipping", href: "#shipping" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const WA_LINK =
  "https://wa.me/919949955119?text=" +
  encodeURIComponent("Hello Jahnavi Enterprises, I'd like to enquire about your vegetable exports.");

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top contact bar — slides away on scroll */}
      <div
        className={`overflow-hidden bg-forest transition-all duration-500 ${
          scrolled ? "max-h-0" : "max-h-12"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 text-[11px] font-medium tracking-wide text-cream/75 md:text-xs">
          <a href="mailto:jahnavienterprises11@gmail.com" className="flex items-center gap-2 transition hover:text-goldlight">
            <Mail className="h-3.5 w-3.5 text-gold" />
            jahnavienterprises11@gmail.com
          </a>
          <div className="hidden items-center gap-6 sm:flex">
            <a href="tel:+919949955119" className="flex items-center gap-2 transition hover:text-goldlight">
              <Phone className="h-3.5 w-3.5 text-gold" /> +91 99499 55119
            </a>
            <a href="tel:+918466067788" className="flex items-center gap-2 transition hover:text-goldlight">
              <Phone className="h-3.5 w-3.5 text-gold" /> +91 84660 67788
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] transition hover:text-[#5eea94]"
            >
              <svg viewBox="0 0 32 32" className="h-3.5 w-3.5 fill-current">
                <path d="M16 3C9 3 3.5 8.5 3.5 15.4c0 2.5.7 4.9 2 7L3 29l6.9-2.2c2 1.1 4.3 1.7 6.6 1.7 6.9 0 12.5-5.5 12.5-12.4C29 8.5 23.4 3 16 3zm0 22.7c-2 0-4-.5-5.7-1.6l-.4-.2-4.1 1.3 1.3-4-.3-.4a10.4 10.4 0 0 1-1.6-5.5c0-5.8 4.8-10.5 10.7-10.5S26.6 9.6 26.6 15.3c0 5.8-4.8 10.4-10.6 10.4z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-forest/10 bg-cream/90 shadow-[0_8px_30px_rgba(14,42,29,0.08)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
          <Logo variant={scrolled ? "dark" : "light"} />

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`group relative text-sm font-semibold tracking-wide transition ${
                  scrolled ? "text-forest/80 hover:text-forest" : "text-cream/85 hover:text-cream"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#about"
              className="hidden items-center gap-2 rounded-full border border-gold/40 bg-cream/70 px-4 py-2 text-xs font-bold tracking-wide text-forest backdrop-blur transition hover:-translate-y-0.5 hover:border-gold lg:inline-flex"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-leaf" />
              </span>
              APEDA · FSSAI · IEC Certified
            </a>
            <a
              href="#contact"
              className="hidden rounded-full bg-gold px-6 py-2.5 text-sm font-bold text-forest shadow-lg shadow-gold/25 transition hover:-translate-y-0.5 hover:bg-goldlight md:inline-flex"
            >
              Get a Quote
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition lg:hidden ${
                scrolled ? "border-forest/20 text-forest" : "border-cream/30 text-cream"
              }`}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="dot-grid-light fixed inset-0 z-[60] flex flex-col bg-forest"
          >
            <div className="flex items-center justify-between px-6 py-3.5">
              <Logo variant="light" />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col items-start justify-center gap-2 px-8">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.5 }}
                  className="group flex items-baseline gap-4 py-2"
                >
                  <span className="font-display text-sm text-gold">0{i + 1}</span>
                  <span className="font-display text-4xl font-medium text-cream transition group-hover:text-goldlight">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-2 border-t border-cream/10 px-8 py-6 text-sm text-cream/70"
            >
              <a href="mailto:jahnavienterprises11@gmail.com" className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold" /> jahnavienterprises11@gmail.com
              </a>
              <a href="tel:+919949955119" className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold" /> +91 99499 55119
              </a>
              <a href="tel:+918466067788" className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold" /> +91 84660 67788
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white"
              >
                <svg viewBox="0 0 32 32" className="h-4 w-4 fill-current">
                  <path d="M16 3C9 3 3.5 8.5 3.5 15.4c0 2.5.7 4.9 2 7L3 29l6.9-2.2c2 1.1 4.3 1.7 6.6 1.7 6.9 0 12.5-5.5 12.5-12.4C29 8.5 23.4 3 16 3zm0 22.7c-2 0-4-.5-5.7-1.6l-.4-.2-4.1 1.3 1.3-4-.3-.4a10.4 10.4 0 0 1-1.6-5.5c0-5.8 4.8-10.5 10.7-10.5S26.6 9.6 26.6 15.3c0 5.8-4.8 10.4-10.6 10.4z" />
                </svg>
                Chat on WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
