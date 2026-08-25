import { PenTool, Layout, User, Zap } from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  {
    no: "01",
    icon: PenTool,
    title: "UI/UX Design",
    desc: "Interfaces built around clarity, hierarchy and how people actually move through a screen.",
  },
  {
    no: "02",
    icon: Layout,
    title: "Website Design",
    desc: "Modern, responsive layouts with considered typography, spacing and visual rhythm.",
  },
  {
    no: "03",
    icon: User,
    title: "Portfolio Website Creation",
    desc: "Personal sites that present work with personality, polish and a distinct point of view.",
  },
  {
    no: "04",
    icon: Zap,
    title: "Landing Page Design",
    desc: "Focused, conversion-minded pages with strong visuals and smooth micro-interactions.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[0.7rem] uppercase tracking-[0.35em] text-primary">Services</p>
          <h2 className="mt-4 max-w-xl font-display text-4xl font-bold leading-tight sm:text-5xl">
            What I can build for you.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal
              key={s.no}
              delay={i * 90}
              className="glass glass-hover group rounded-[2rem] p-8"
            >
              <div className="flex items-start justify-between">
                <div className="inline-flex size-12 items-center justify-center rounded-2xl border border-glass-border bg-glass transition-colors duration-500 group-hover:border-primary/40">
                  <s.icon className="size-5 text-primary" />
                </div>
                <span className="font-display text-sm tracking-[0.2em] text-muted-foreground">
                  {s.no}
                </span>
              </div>
              <h3 className="mt-7 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
