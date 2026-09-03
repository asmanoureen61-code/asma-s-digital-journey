import { ArrowUpRight } from "lucide-react";
import { Eyebrow, Reveal, SectionShell, SpotlightCard, WordReveal } from "./primitives";

const PROJECTS = [
  { title: "Nova AI Landing", tag: "AI SaaS", desc: "Scroll-driven landing page for an AI writing tool.", tone: "from-electric/30 to-primary/20" },
  { title: "Lumen Studio", tag: "Creative Agency", desc: "Cinematic agency site with motion storytelling.", tone: "from-primary/30 to-accent/20" },
  { title: "Reel Engine", tag: "AI Video", desc: "AI short-form video production system for creators.", tone: "from-accent/30 to-primary/20" },
  { title: "Vibe Commerce", tag: "E-commerce", desc: "Conversion-first storefront with smart recommendations.", tone: "from-primary/25 to-electric/25" },
  { title: "Mentor Bot", tag: "AI Product", desc: "Conversational learning assistant with a custom UI.", tone: "from-electric/25 to-accent/25" },
];

export default function Projects() {
  return (
    <SectionShell id="work">
      <Eyebrow>Selected Work</Eyebrow>
      <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
        <WordReveal text="Projects that blend " />
        <span className="text-gradient">
          <WordReveal text="story, speed and AI." />
        </span>
      </h2>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <Reveal
            key={p.title}
            delay={(i % 2) * 0.08}
            className={i === 0 ? "md:col-span-2" : undefined}
          >
            <SpotlightCard className="h-full p-4">
              <div
                className={`relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${p.tone} ${
                  i === 0 ? "aspect-[16/7]" : "aspect-[16/9]"
                }`}
              >
                <div className="grid-lines absolute inset-0 opacity-40" />
                <div className="absolute inset-x-0 top-0 flex items-center gap-1.5 border-b border-white/10 bg-background/40 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-white/30" />
                  <span className="h-2 w-2 rounded-full bg-white/30" />
                  <span className="h-2 w-2 rounded-full bg-white/30" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold tracking-tight text-white/70 sm:text-3xl">
                    {p.title}
                  </span>
                </div>
              </div>
              <div className="flex items-start justify-between gap-4 px-2 pt-4 pb-2">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.25em] text-primary uppercase">
                    {p.tag}
                  </p>
                  <h3 className="mt-1.5 text-base font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
