import { motion } from "motion/react";
import { Eyebrow, Reveal, SectionShell, WordReveal } from "./primitives";

const STEPS = [
  { n: "01", title: "Idea", desc: "We define the goal, audience and the feeling to create." },
  { n: "02", title: "AI Draft", desc: "AI accelerates copy, concepts and structure." },
  { n: "03", title: "Design", desc: "A premium visual system built around your brand." },
  { n: "04", title: "Build", desc: "Clean, fast, animated code shipped in days." },
  { n: "05", title: "Impact", desc: "Launch, measure, refine and grow." },
];

export default function WorkflowSection() {
  return (
    <SectionShell id="process">
      <Eyebrow>The Process</Eyebrow>
      <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
        <WordReveal text="From idea to " />
        <span className="text-gradient">
          <WordReveal text="impact." />
        </span>
      </h2>

      <div className="relative mt-14">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-6 right-0 left-0 hidden h-px origin-left bg-gradient-to-r from-electric via-primary to-accent lg:block"
        />
        <div className="grid gap-6 lg:grid-cols-5">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.12} className="relative">
              <span className="glow-primary relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-background font-mono text-xs text-primary">
                {s.n}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
