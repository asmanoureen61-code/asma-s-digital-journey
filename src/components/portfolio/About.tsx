import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Eyebrow, Reveal, SectionShell, WordReveal } from "./primitives";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scanY = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <SectionShell id="about">
      <div ref={ref} className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <Eyebrow>Identity Scan</Eyebrow>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            <WordReveal text="A creator who thinks in " />
            <span className="text-gradient">
              <WordReveal text="systems, motion & AI." />
            </span>
          </h2>
          <Reveal delay={0.1} className="mt-6 space-y-4 text-muted-foreground">
            <p>
              I&apos;m Asma Noureen — an AI web developer and digital creator who builds smart,
              cinematic web experiences. I blend design intuition with AI-assisted engineering to
              ship products fast without losing the craft.
            </p>
            <p>
              From concept and copy to code, motion and video, I own the full creative pipeline —
              turning raw ideas into brands people remember.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-7 flex flex-wrap gap-2">
            {["AI-First", "Motion-Driven", "Detail Obsessed", "Fast Shipping", "Brand Thinking"].map(
              (k) => (
                <span
                  key={k}
                  className="rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1.5 font-mono text-[11px] text-foreground"
                >
                  {k}
                </span>
              ),
            )}
          </Reveal>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md">
          <motion.div
            style={{ rotate }}
            className="absolute inset-0 rounded-full border border-dashed border-primary/25"
          />
          <div className="animate-spin-slow absolute inset-8 rounded-full border border-accent/20" />
          <div className="glass absolute inset-16 overflow-hidden rounded-full">
            <div className="grid-lines absolute inset-0 opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gradient font-mono text-5xl font-bold">AN</span>
            </div>
            <motion.div
              style={{ top: scanY }}
              className="absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-primary/40 to-transparent"
            />
          </div>
          {["CODE", "AI", "DESIGN", "VIDEO"].map((label, i) => {
            const angle = (i / 4) * Math.PI * 2;
            return (
              <motion.span
                key={label}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * i, duration: 0.6 }}
                className="glass absolute rounded-full px-3 py-1.5 font-mono text-[10px] tracking-widest"
                style={{
                  left: `${50 + Math.cos(angle) * 47}%`,
                  top: `${50 + Math.sin(angle) * 47}%`,
                  transform: "translate(-50%,-50%)",
                }}
              >
                {label}
              </motion.span>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
