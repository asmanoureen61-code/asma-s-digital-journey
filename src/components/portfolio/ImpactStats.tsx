import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Reveal, SectionShell } from "./primitives";

const STATS = [
  { value: 50, suffix: "+", label: "Projects Shipped" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 100, suffix: "K+", label: "Content Views" },
  { value: 5, suffix: "x", label: "Faster Delivery" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="text-gradient text-5xl font-extrabold sm:text-7xl">
      {display}
      {suffix}
    </span>
  );
}

export default function ImpactStats() {
  return (
    <SectionShell id="impact">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center sm:text-left">
            <Counter value={s.value} suffix={s.suffix} />
            <p className="mt-3 font-mono text-[11px] tracking-[0.25em] text-muted-foreground uppercase">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
