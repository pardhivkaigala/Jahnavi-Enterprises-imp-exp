import { useState, type FormEvent } from "react";
import { CheckCircle2, Clock, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { TrustOrb } from "./Certifications";

const EMAIL = "jahnavienterprises11@gmail.com";
const FORM_ENDPOINT = "https://formsubmit.co/ajax/jahnavienterprises11@gmail.com";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const product = String(data.get("product") || "");
    const message = String(data.get("message") || "");

    if (!name || !email || !product || !message) {
      setErrorMsg("Please fill all required fields.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    const payload = {
      name,
      email,
      phone,
      product,
      message,
      _subject: `🌱 New Export Enquiry — ${product} (from ${name}) | Jahnavi Enterprises`,
      _captcha: "false",
      _template: "table",
      _autoresponse: `Dear ${name},\n\nThank you for contacting Jahnavi Enterprises!\nWe have received your enquiry for ${product} and our export desk will get back to you within 24 hours.\n\nBest regards,\nJahnavi Enterprises\nAPEDA | FSSAI | IEC Certified Exporter\n${EMAIL} | +91 99499 55119`,
    };

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const json = await res.json().catch(() => null);

      if (res.ok && json?.success !== "false") {
        setStatus("success");
        form.reset();
        // Auto-reset success after 8s
        setTimeout(() => setStatus("idle"), 8000);
      } else {
        throw new Error(json?.message || "Failed to send");
      }
    } catch (err) {
      // Fallback to mailto so user never loses data
      console.error("FormSubmit failed, falling back to mailto", err);
      const subject = encodeURIComponent(`Export Enquiry — ${product} (${name})`);
      const body = encodeURIComponent(
        `Hello Jahnavi Enterprises,\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nProduct Interest: ${product}\n\n${message}\n\n— Sent from jahnavienterprises.com`
      );
      // Open mail client as last resort
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      setErrorMsg("Email client opened as backup — your enquiry is also being processed.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="dot-grid-light relative overflow-hidden bg-forest py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          dark
          eyebrow="Get In Touch"
          title={
            <>
              Let's Grow Your Business,{" "}
              <span className="font-light italic text-goldlight">Together.</span>
            </>
          }
          sub="Tell us what you need — volumes, destination port and grades — and our export desk will respond within 24 hours. Every enquiry is mailed directly to jahnavienterprises11@gmail.com."
        />

        <Reveal delay={0.1} className="mt-10 flex justify-center">
          <TrustOrb />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Contact info */}
          <div className="space-y-5 lg:col-span-2">
            <Reveal>
              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-start gap-5 rounded-2xl border border-cream/10 bg-pine/60 p-6 transition hover:-translate-y-1 hover:border-gold/40"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/15 transition group-hover:bg-gold">
                  <Mail className="h-5 w-5 text-goldlight transition group-hover:text-forest" />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-cream/50">Email Us</p>
                  <p className="mt-1.5 break-all font-semibold text-cream group-hover:text-goldlight">{EMAIL}</p>
                  <p className="mt-1 text-[10px] text-cream/40">Enquiries auto-forwarded here</p>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.1}>
              <a
                href="tel:+919949955119"
                className="group flex items-start gap-5 rounded-2xl border border-cream/10 bg-pine/60 p-6 transition hover:-translate-y-1 hover:border-gold/40"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/15 transition group-hover:bg-gold">
                  <Phone className="h-5 w-5 text-goldlight transition group-hover:text-forest" />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-cream/50">Call Us</p>
                  <p className="mt-1.5 font-semibold text-cream group-hover:text-goldlight">+91 99499 55119</p>
                  <p className="text-sm text-cream/60 group-hover:text-goldlight">+91 84660 67788</p>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.15}>
              <a
                href="https://wa.me/919949955119?text=Hello%20Jahnavi%20Enterprises%2C%20I%27d%20like%20to%20enquire%20about%20your%20vegetable%20exports."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-5 rounded-2xl border border-[#25D366]/40 bg-[#25D366]/10 p-6 transition hover:-translate-y-1 hover:border-[#25D366] hover:bg-[#25D366]/20"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/25">
                  <svg viewBox="0 0 32 32" className="h-5 w-5 fill-white">
                    <path d="M16 3C9 3 3.5 8.5 3.5 15.4c0 2.5.7 4.9 2 7L3 29l6.9-2.2c2 1.1 4.3 1.7 6.6 1.7 6.9 0 12.5-5.5 12.5-12.4C29 8.5 23.4 3 16 3zm0 22.7c-2 0-4-.5-5.7-1.6l-.4-.2-4.1 1.3 1.3-4-.3-.4a10.4 10.4 0 0 1-1.6-5.5c0-5.8 4.8-10.5 10.7-10.5S26.6 9.6 26.6 15.3c0 5.8-4.8 10.4-10.6 10.4zm5.9-7.8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.8.2-.2.3-.9 1-1.1 1.3-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.7-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.7l.5-.6.3-.5.1-.5c0-.2 0-.4-.1-.5l-.8-2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3 4.8 4.2 2.8 1.1 2.8.7 3.3.7.5 0 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3z" />
                  </svg>
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#25D366]">WhatsApp</p>
                  <p className="mt-1.5 font-semibold text-cream">Chat with us instantly</p>
                  <p className="text-sm text-cream/60">Get quotes & availability in minutes</p>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex items-start gap-5 rounded-2xl border border-cream/10 bg-pine/60 p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/15">
                  <MapPin className="h-5 w-5 text-goldlight" />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-cream/50">Based In</p>
                  <p className="mt-1.5 font-semibold text-cream">India — Exporting Worldwide</p>
                  <p className="mt-2 flex items-center gap-2 text-xs text-cream/55">
                    <Clock className="h-3.5 w-3.5 text-gold" /> Mon – Sat, 9 AM – 7 PM IST
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-cream/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-cream/70">
                      APEDA
                    </span>
                    <span className="rounded-full bg-cream/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-cream/70">
                      FSSAI
                    </span>
                    <span className="rounded-full bg-gold/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-goldlight">
                      IEC
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.15} className="lg:col-span-3">
            <div className="rounded-3xl border border-cream/10 bg-pine/60 p-7 md:p-10">
              {status === "success" ? (
                <div className="py-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366]/20">
                    <CheckCircle2 className="h-8 w-8 text-[#25D366]" />
                  </div>
                  <h3 className="mt-6 font-display text-3xl font-medium text-cream">Enquiry Sent!</h3>
                  <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-cream/70">
                    Thank you — your details have been mailed to{" "}
                    <span className="font-bold text-goldlight">{EMAIL}</span>. Our export desk will reply
                    within 24 hours.
                  </p>
                  <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                    <a
                      href="https://wa.me/919949955119?text=Hello%20Jahnavi%20Enterprises%2C%20I%20just%20sent%20an%20enquiry%20via%20the%20website."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1ebe57]"
                    >
                      <svg viewBox="0 0 32 32" className="h-4 w-4 fill-current">
                        <path d="M16 3C9 3 3.5 8.5 3.5 15.4c0 2.5.7 4.9 2 7L3 29l6.9-2.2c2 1.1 4.3 1.7 6.6 1.7 6.9 0 12.5-5.5 12.5-12.4C29 8.5 23.4 3 16 3z" />
                      </svg>
                      Continue on WhatsApp
                    </a>
                    <button
                      onClick={() => setStatus("idle")}
                      className="rounded-full border border-cream/20 px-6 py-3 text-sm font-bold text-cream/80 transition hover:border-gold/40 hover:text-cream"
                    >
                      Send Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl font-medium text-cream">Send an Enquiry</h3>
                    <span className="hidden items-center gap-2 rounded-full bg-forest px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-goldlight md:inline-flex">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#25D366]" />
                      Mails to {EMAIL}
                    </span>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-[11px] font-bold uppercase tracking-[0.25em] text-cream/60"
                      >
                        Your Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        placeholder="Mohammed Ali"
                        className="mt-2.5 w-full rounded-xl border border-cream/15 bg-forest/60 px-4 py-3.5 text-sm text-cream placeholder:text-cream/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="text-[11px] font-bold uppercase tracking-[0.25em] text-cream/60"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        className="mt-2.5 w-full rounded-xl border border-cream/15 bg-forest/60 px-4 py-3.5 text-sm text-cream placeholder:text-cream/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="text-[11px] font-bold uppercase tracking-[0.25em] text-cream/60"
                      >
                        Phone / WhatsApp
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+971 50 123 4567"
                        className="mt-2.5 w-full rounded-xl border border-cream/15 bg-forest/60 px-4 py-3.5 text-sm text-cream placeholder:text-cream/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="product"
                        className="text-[11px] font-bold uppercase tracking-[0.25em] text-cream/60"
                      >
                        Product Interest *
                      </label>
                      <select
                        id="product"
                        name="product"
                        required
                        defaultValue=""
                        className="mt-2.5 w-full appearance-none rounded-xl border border-cream/15 bg-forest/60 px-4 py-3.5 text-sm text-cream focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                      >
                        <option value="" disabled>
                          Select a product
                        </option>
                        <option>Elephant Foot Yam</option>
                        <option>Red Onions</option>
                        <option>Green Chilli</option>
                        <option>Tomatoes</option>
                        <option>Okra (Lady Finger)</option>
                        <option>Potatoes</option>
                        <option>Mixed Consignment / Other</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="text-[11px] font-bold uppercase tracking-[0.25em] text-cream/60"
                      >
                        Your Requirement *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        placeholder="Quantity, grade, destination port, packing preference…"
                        className="mt-2.5 w-full resize-none rounded-xl border border-cream/15 bg-forest/60 px-4 py-3.5 text-sm text-cream placeholder:text-cream/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                      />
                    </div>
                  </div>

                  {status === "error" && errorMsg && (
                    <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gold px-8 py-4 text-sm font-bold text-forest shadow-xl shadow-gold/20 transition hover:-translate-y-0.5 hover:bg-goldlight disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending to {EMAIL}…
                      </>
                    ) : (
                      <>
                        Send Enquiry
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>

                  <p className="text-xs leading-relaxed text-cream/45">
                    By clicking Send Enquiry, your details are instantly mailed to{" "}
                    <span className="font-semibold text-goldlight">{EMAIL}</span> via secure form
                    delivery. No data is stored on this website. You’ll also receive a confirmation if
                    you provided an email. For urgent quotes,{" "}
                    <a
                      href="https://wa.me/919949955119"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#5eea94] underline-offset-4 hover:underline"
                    >
                      WhatsApp us
                    </a>{" "}
                    or call{" "}
                    <a href="tel:+919949955119" className="font-semibold text-goldlight">
                      +91 99499 55119
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
