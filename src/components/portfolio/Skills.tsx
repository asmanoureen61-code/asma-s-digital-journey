import { motion } from "motion/react";
import { Eyebrow, Reveal, SectionShell, SpotlightCard, WordReveal } from "./primitives";

const SKILLS = [
  { name: "AI Web Development", value: 95 },
  { name: "React & TypeScript", value: 92 },
  { name: "Motion & Animation", value: 90 },
  { name: "AI Video Creation", value: 88 },
  { name: "UI / UX Design", value: 86 },
  { name: "Prompt Engineering", value: 94 },
  { name: "Brand Storytelling", value: 84 },
  { name: "Vibe Coding", value: 97 },
];

export default function Skills() {
  return (
    <SectionShell id="skills">
      <Eyebrow>Skill Galaxy</Eyebrow>
      <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
        <WordReveal text="Capabilities that connect " />
        <WordReveal gradient text="creativity with code." />
      </h2>

      <div className="mt-14 grid gap-4 sm:grid-cols-2">
        {SKILLS.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.05}>
            <SpotlightCard className="p-5">
              <div className="flex items-baseline justify-between">
                <p className="text-sm font-semibold">{s.name}</p>
                <span className="font-mono text-xs text-primary">{s.value}%</span>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="h-full rounded-full bg-gradient-to-r from-electric via-primary to-accent"
                />
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
