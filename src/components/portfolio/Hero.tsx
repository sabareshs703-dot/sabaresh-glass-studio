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
            <h1 className="mt-7 font-display text-[clamp(3rem,11vw,8.5rem)] font-extrabold leading-[0.86]">
              <span className="text-outline block">SABA</span>
              <span className="text-gradient block">RESH</span>
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

        <Reveal delay={200} className="relative">
          <div
            className="float-slow relative mx-auto max-w-sm"
            style={{ transform: `translateY(${offset * -0.05}px)` }}
          >
            <div className="glass overflow-hidden rounded-[2.5rem] p-3">
              <img
                src={profile}
                alt="Portrait of Sabaresh, UI/UX designer and web developer"
                width={912}
                height={1104}
                className="h-full w-full rounded-[2rem] object-cover"
              />
            </div>
            <div className="glass absolute -bottom-6 -left-6 rounded-3xl px-5 py-4">
              <p className="font-display text-2xl font-bold text-primary">2029</p>
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                Graduating
              </p>
            </div>
            <div className="glass absolute -right-4 top-8 rounded-3xl px-5 py-4">
              <p className="font-display text-2xl font-bold text-accent">04</p>
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                Services
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
