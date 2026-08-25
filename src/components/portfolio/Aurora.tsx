export function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div
        className="aurora-blob h-[46rem] w-[46rem] -left-40 -top-52"

        style={{ background: "var(--aurora-1)", animationDelay: "0s" }}
      />
      <div
        className="aurora-blob h-[38rem] w-[38rem] right-[-12rem] top-[18%]"
        style={{ background: "var(--aurora-2)", animationDelay: "-7s" }}
      />
      <div
        className="aurora-blob h-[42rem] w-[42rem] left-[20%] bottom-[-16rem]"
        style={{ background: "var(--aurora-3)", animationDelay: "-14s" }}
      />
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.21 0.015 265 / 5%) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.21 0.015 265 / 5%) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at 50% 0%, black, transparent 75%)",
        }}
      />
    </div>
  );
}
