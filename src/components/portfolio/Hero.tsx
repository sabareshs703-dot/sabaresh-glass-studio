import { ArrowUpRight, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center px-6 pb-20 pt-32">
      <div className="mx-auto w-full max-w-7xl">
        <div>
          <Reveal>
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
              <Sparkles className="size-3.5 text-primary" />
              Available for work
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-7 font-display text-[clamp(3.5rem,15vw,12rem)] font-extrabold leading-[0.86]">
              <span className="text-foreground">SABA</span>
              <span className="text-foreground">RESH</span>
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-6 font-display text-lg text-foreground/90 sm:text-xl">
              UI/UX Designer &amp; Web Developer
            </p>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
              I'm a creative UI/UX designer and web developer who loves building modern, interactive
              websites.
            </p>
          </Reveal>

          <Reveal delay={380}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_45px_-8px_var(--primary)] active:scale-[0.97]"
              >
                View My Work
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="glass glass-hover inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-foreground"
              >
                Contact Me
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
