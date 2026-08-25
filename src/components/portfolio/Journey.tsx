import { Reveal } from "./Reveal";

const areas = [
  { title: "UI/UX Design", note: "Wireframes, hierarchy, usability thinking." },
  { title: "Web Design", note: "Composition, type systems, colour and spacing." },
  { title: "Interactive Websites", note: "Motion, hover states, scroll-driven storytelling." },
  { title: "Responsive Design", note: "Layouts that hold up from mobile to widescreen." },
  { title: "Modern Web Experiences", note: "Current tooling, performance and polish." },
];

export function Journey() {
  return (
    <section className="relative px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[0.7rem] uppercase tracking-[0.35em] text-primary">Creative Journey</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl">
            Areas I'm actively exploring.
          </h2>
        </Reveal>

        <ul className="mt-12 space-y-3">
          {areas.map((a, i) => (
            <Reveal
              as="li"
              key={a.title}
              delay={i * 80}
              className="glass glass-hover group flex flex-col gap-2 rounded-[1.75rem] px-7 py-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-5">
                <span className="font-display text-xs tracking-[0.25em] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-semibold transition-colors duration-300 group-hover:text-primary sm:text-xl">
                  {a.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground sm:text-right">{a.note}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
