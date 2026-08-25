import { ArrowRight } from "lucide-react";
import ritual from "@/assets/ritual-coffee.jpg";
import { Reveal } from "./Reveal";

export function Work() {
  return (
    <section id="work" className="relative px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[0.7rem] uppercase tracking-[0.35em] text-primary">Featured Work</p>
          <h2 className="mt-4 max-w-xl font-display text-4xl font-bold leading-tight sm:text-5xl">
            A project made to be felt.
          </h2>
        </Reveal>

        <Reveal delay={120} className="glass glass-hover group mt-12 overflow-hidden rounded-[2.5rem] p-3 sm:p-4">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={ritual}
              alt="Ritual Coffee website design shown on a laptop and phone"
              loading="lazy"
              width={1600}
              height={1008}
              className="h-full w-full scale-[1.02] object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col gap-6 p-7 sm:p-9 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="text-[0.7rem] uppercase tracking-[0.3em] text-accent">
                Interactive Web Design / UI Design
              </p>
              <h3 className="mt-3 font-display text-3xl font-bold sm:text-4xl">RITUAL COFFEE</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                A modern interactive coffee brand website designed with a premium visual identity
                and engaging web experiences.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-glass-border bg-glass px-6 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary"
            >
              View Project
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
