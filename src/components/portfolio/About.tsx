import { GraduationCap, Compass, Rocket } from "lucide-react";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[0.7rem] uppercase tracking-[0.35em] text-primary">About</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl">
            Designing with curiosity, building with intent.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal delay={100} className="glass glass-hover rounded-[2rem] p-8 sm:p-10">
            <p className="text-base leading-relaxed text-muted-foreground">
              I'm Sabaresh — a creative designer and developer shaping interfaces that feel modern,
              tactile and alive. Every project is a chance to experiment: new layouts, new motion
              ideas, new ways to make a screen feel effortless.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              I'm early in my journey and treat that as an advantage. No fixed habits, no recycled
              templates — just constant learning, sharp attention to detail, and real projects built
              end to end.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-glass-border bg-glass p-5">
                <Compass className="size-5 text-primary" />
                <p className="mt-3 font-display text-sm font-semibold">Currently exploring</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  UI/UX craft and modern web development.
                </p>
              </div>
              <div className="rounded-2xl border border-glass-border bg-glass p-5">
                <Rocket className="size-5 text-accent" />
                <p className="mt-3 font-display text-sm font-semibold">Fresher, by choice</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Building experience through self-driven creative projects.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200} className="glass glass-hover rounded-[2rem] p-8 sm:p-10">
            <GraduationCap className="size-6 text-primary" />
            <p className="mt-6 text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
              Education
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold leading-snug">
              B.E. Mechanical Engineering
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Mohammed Sathak A.J. College of Engineering
            </p>
            <div className="mt-8 h-px w-full bg-glass-border" />
            <div className="mt-6 flex items-baseline justify-between">
              <span className="text-sm text-muted-foreground">Expected graduation</span>
              <span className="font-display text-3xl font-bold text-gradient">2029</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
