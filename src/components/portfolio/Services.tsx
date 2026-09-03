import { Bot, Code2, Film, LineChart, Palette, Rocket, Sparkles, Video, Workflow } from "lucide-react";
import { Eyebrow, Reveal, SectionShell, SpotlightCard, WordReveal } from "./primitives";

const SERVICES = [
  { icon: Code2, title: "AI Web Development", desc: "Fast, modern, conversion-focused websites built with AI-assisted engineering.", span: "sm:col-span-2" },
  { icon: Bot, title: "AI Integrations", desc: "Chat, automation and smart features embedded into your product.", span: "" },
  { icon: Film, title: "AI Video Creation", desc: "Cinematic AI-generated video content for brands and creators.", span: "" },
  { icon: Palette, title: "UI / UX Design", desc: "Interfaces with personality — clear, premium, and on-brand.", span: "sm:col-span-2" },
  { icon: Sparkles, title: "Motion Design", desc: "Scroll-driven storytelling and micro-interactions.", span: "" },
  { icon: Workflow, title: "Automation", desc: "Workflows that remove busywork from your business.", span: "" },
  { icon: Video, title: "Content Systems", desc: "Repeatable content engines powered by AI.", span: "" },
  { icon: LineChart, title: "Growth Pages", desc: "Landing pages engineered to convert attention into clients.", span: "" },
  { icon: Rocket, title: "Launch Support", desc: "From idea to live product — shipped and polished.", span: "sm:col-span-2" },
];

export default function Services() {
  return (
    <SectionShell id="services">
      <Eyebrow>What I Do</Eyebrow>
      <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
        <WordReveal text="Services built for brands that want to " />
        <span className="text-gradient">
          <WordReveal text="move faster." />
        </span>
      </h2>

      <div className="mt-14 grid gap-4 sm:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 0.08} className={s.span}>
            <SpotlightCard className="h-full p-6">
              <s.icon className="h-6 w-6 text-primary transition-transform duration-500 group-hover:scale-125" />
              <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
