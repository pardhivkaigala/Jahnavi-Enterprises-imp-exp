import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const WA_NUMBER = "919949955119"; // +91 99499 55119
const DEFAULT_MSG =
  "Hello Jahnavi Enterprises, I'd like to enquire about your vegetable exports.";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 250);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const link = (msg: string) =>
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

  const quickMessages = [
    "I'd like a quote for Elephant Foot Yam.",
    "I'm interested in Red Onions export.",
    "Please share Green Chilli rates & availability.",
    "I need a mixed vegetable consignment.",
  ];

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 30 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="fixed bottom-6 right-6 z-[70] flex flex-col items-end gap-3"
          >
            {/* Quick chat panel */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="w-[320px] overflow-hidden rounded-3xl border border-forest/10 bg-cream shadow-2xl shadow-forest/25"
                >
                  <div className="relative bg-[#075E54] px-5 py-4 text-cream">
                    <div className="flex items-center gap-3">
                      <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-cream">
                        <svg viewBox="0 0 32 32" className="h-6 w-6 fill-[#25D366]">
                          <path d="M16 3C9 3 3.5 8.5 3.5 15.4c0 2.5.7 4.9 2 7L3 29l6.9-2.2c2 1.1 4.3 1.7 6.6 1.7 6.9 0 12.5-5.5 12.5-12.4C29 8.5 23.4 3 16 3zm0 22.7c-2 0-4-.5-5.7-1.6l-.4-.2-4.1 1.3 1.3-4-.3-.4a10.4 10.4 0 0 1-1.6-5.5c0-5.8 4.8-10.5 10.7-10.5S26.6 9.6 26.6 15.3c0 5.8-4.8 10.4-10.6 10.4zm5.9-7.8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.8.2-.2.3-.9 1-1.1 1.3-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.7-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.7l.5-.6.3-.5.1-.5c0-.2 0-.4-.1-.5l-.8-2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3 4.8 4.2 2.8 1.1 2.8.7 3.3.7.5 0 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3z"/>
                        </svg>
                        <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#075E54] bg-[#25D366]" />
                      </div>
                      <div>
                        <p className="text-sm font-bold">Jahnavi Enterprises</p>
                        <p className="text-[11px] text-cream/75">Typically replies within an hour</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setOpen(false)}
                      aria-label="Close WhatsApp chat"
                      className="absolute right-3 top-3 rounded-full p-1 text-cream/80 transition hover:bg-cream/10 hover:text-cream"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Chat body */}
                  <div className="space-y-3 bg-[#ECE5DD] px-5 py-5">
                    <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-4 py-3 shadow-sm">
                      <p className="text-[11px] font-bold text-[#075E54]">Jahnavi Enterprises</p>
                      <p className="mt-1 text-sm text-forest">
                        👋 Hello! Tap a quick message below or start your own — we'll reply on WhatsApp right away.
                      </p>
                      <p className="mt-1 text-right text-[10px] text-forest/40">now</p>
                    </div>

                    <div className="flex flex-col gap-2 pt-1">
                      {quickMessages.map((m) => (
                        <a
                          key={m}
                          href={link(m)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-[#25D366]/40 bg-white px-4 py-2 text-xs font-medium text-forest transition hover:bg-[#25D366]/10"
                        >
                          {m}
                        </a>
                      ))}
                    </div>
                  </div>

                  <a
                    href={link(DEFAULT_MSG)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] py-3.5 text-sm font-bold text-white transition hover:bg-[#1ebe57]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Start WhatsApp Chat
                  </a>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Floating action button */}
            <motion.button
              onClick={() => setOpen((v) => !v)}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.92 }}
              aria-label="Chat on WhatsApp"
              className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition"
            >
              <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 45, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative"
                  >
                    <X className="h-7 w-7" strokeWidth={2.5} />
                  </motion.span>
                ) : (
                  <motion.svg
                    key="wa"
                    initial={{ rotate: 45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -45, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    viewBox="0 0 32 32"
                    className="relative h-8 w-8 fill-current"
                  >
                    <path d="M16 3C9 3 3.5 8.5 3.5 15.4c0 2.5.7 4.9 2 7L3 29l6.9-2.2c2 1.1 4.3 1.7 6.6 1.7 6.9 0 12.5-5.5 12.5-12.4C29 8.5 23.4 3 16 3zm0 22.7c-2 0-4-.5-5.7-1.6l-.4-.2-4.1 1.3 1.3-4-.3-.4a10.4 10.4 0 0 1-1.6-5.5c0-5.8 4.8-10.5 10.7-10.5S26.6 9.6 26.6 15.3c0 5.8-4.8 10.4-10.6 10.4zm5.9-7.8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.8.2-.2.3-.9 1-1.1 1.3-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.7-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.7l.5-.6.3-.5.1-.5c0-.2 0-.4-.1-.5l-.8-2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3 4.8 4.2 2.8 1.1 2.8.7 3.3.7.5 0 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3z" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
