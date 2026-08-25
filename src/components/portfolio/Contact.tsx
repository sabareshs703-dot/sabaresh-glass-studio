import { useState, type FormEvent } from "react";
import { Mail, Phone, Linkedin, Github, Instagram, Check } from "lucide-react";
import { Reveal } from "./Reveal";

const details = [
  { icon: Mail, label: "Email", value: "hello@sabaresh.design", href: "mailto:hello@sabaresh.design" },
  { icon: Phone, label: "Phone", value: "+91 90000 00000", href: "tel:+919000000000" },
  { icon: Linkedin, label: "LinkedIn", value: "/in/sabaresh", href: "#" },
  { icon: Github, label: "GitHub", value: "@sabaresh", href: "#" },
  { icon: Instagram, label: "Instagram", value: "@sabaresh.design", href: "#" },
];

function Field({
  id,
  label,
  type = "text",
  textarea,
}: {
  id: string;
  label: string;
  type?: string;
  textarea?: boolean;
}) {
  const base =
    "peer w-full rounded-2xl border border-glass-border bg-glass px-4 pb-3 pt-6 text-sm text-foreground outline-none transition-all duration-300 placeholder-transparent focus:border-primary/60 focus:shadow-[0_0_35px_-14px_var(--primary)]";
  return (
    <div className="relative">
      {textarea ? (
        <textarea id={id} name={id} rows={4} placeholder={label} required className={base} />
      ) : (
        <input id={id} name={id} type={type} placeholder={label} required className={base} />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-2 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[0.65rem] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:text-primary"
      >
        {label}
      </label>
    </div>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
    window.setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[0.7rem] uppercase tracking-[0.35em] text-primary">Contact</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-6xl">
            Let's Create Something <span className="text-gradient">Amazing.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal delay={100} className="glass rounded-[2rem] p-8 sm:p-10">
            <ul className="space-y-5">
              {details.map((d) => (
                <li key={d.label}>
                  <a
                    href={d.href}
                    className="group flex items-center gap-4 rounded-2xl p-2 transition-colors duration-300 hover:bg-glass"
                  >
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-glass-border bg-glass transition-colors duration-300 group-hover:border-primary/50">
                      <d.icon className="size-4 text-primary" />
                    </span>
                    <span>
                      <span className="block text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
                        {d.label}
                      </span>
                      <span className="block text-sm text-foreground">{d.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={180} className="glass rounded-[2rem] p-8 sm:p-10">
            <form onSubmit={onSubmit} className="space-y-5">
              <Field id="name" label="Name" />
              <Field id="email" label="Email" type="email" />
              <Field id="message" label="Message" textarea />
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_45px_-8px_var(--primary)] active:scale-[0.98]"
              >
                {sent ? (
                  <>
                    <Check className="size-4" /> Message Sent
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </Reveal>
        </div>

        <footer className="mt-20 flex flex-col items-center justify-between gap-3 border-t border-glass-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <span className="font-display tracking-[0.3em]">SABARESH</span>
          <span>© {new Date().getFullYear()} — Designed &amp; built with care.</span>
        </footer>
      </div>
    </section>
  );
}
