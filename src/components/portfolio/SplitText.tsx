import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Splits text into individual characters and reveals each one with a smooth,
 * staggered mask-reveal animation when the element scrolls into view.
 *
 * Keeps the surrounding element's existing typography intact: this component
 * renders an inline span so it can drop straight into a heading without
 * changing font size, weight, color, letter-spacing or layout.
 */
export function SplitText({
  text,
  className,
  /** Delay before the first character starts animating, in ms. */
  startDelay = 0,
  /** Stagger between each character, in ms. */
  stagger = 60,
  /** Per-character animation duration, in ms. */
  duration = 900,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  startDelay?: number;
  stagger?: number;
  duration?: number;
  as?: "span" | "h1" | "h2" | "p";
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);
  const chars = Array.from(text);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Honor users who prefer reduced motion: reveal immediately.
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as "span";

  return (
    <Comp ref={ref} className={cn("inline-block align-top", className)} aria-label={text}>
      {chars.map((char, i) => (
        <span
          key={`${char}-${i}`}
          aria-hidden="true"
          className="inline-block overflow-hidden align-bottom"
          style={{
            // Avoid layout shift / descender clipping for letters like none here,
            // but keep a touch of padding so masked letters never get clipped.
            paddingBottom: "0.05em",
          }}
        >
          <span
            className="inline-block will-change-transform"
            style={{
              transform: visible ? "translateY(0)" : "translateY(110%)",
              opacity: visible ? 1 : 0,
              transition:
                `transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1), ` +
                `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`,
              transitionDelay: `${startDelay + i * stagger}ms`,
            }}
          >
            {char}
          </span>
        </span>
      ))}
    </Comp>
  );
}
