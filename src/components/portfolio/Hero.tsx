import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDown, Bot, Code2, Film, Palette, Sparkles, Wand2 } from "lucide-react";
import { EASE, WordReveal } from "./primitives";

const TOOLS = [
  { icon: Bot, label: "ChatGPT", pos: "left-[2%] top-[16%]", delay: 0 },
  { icon: Code2, label: "Lovable", pos: "right-[2%] top-[10%]", delay: 0.4 },
  { icon: Film, label: "Runway", pos: "left-[0%] bottom-[20%]", delay: 0.8 },
  { icon: Palette, label: "Midjourney", pos: "right-[0%] bottom-[16%]", delay: 1.2 },
  { icon: Wand2, label: "Cursor", pos: "left-[18%] top-[2%]", delay: 1.6 },
  { icon: Sparkles, label: "Claude", pos: "right-[20%] bottom-[2%]", delay: 2 },
];

const ROLES = ["AI Web Developer", "AI Video Creator", "Vibe Coder", "Digital Creator", "Entrepreneur"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="hero" className="relative min-h-screen px-5 pt-32 pb-20 sm:px-8">
      <motion.div style={{ y, scale, opacity }} className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.7, ease: EASE }}
          className="flex flex-wrap items-center gap-2"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-[11px] tracking-[0.22em] text-muted-foreground uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-primary" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for projects
          </span>
        </motion.div>

        <h1 className="mt-7 text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          <WordReveal text="I Build" />
          <span className="text-gradient">
            <WordReveal text=" Smart Websites" />
          </span>
          <WordReveal text=" & " />
          <span className="text-gradient">
            <WordReveal text="AI Experiences" />
          </span>
          <WordReveal text=" That Make an Impact." />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8, ease: EASE }}
          className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          AI-powered web developer, video creator, and vibe coder transforming ideas into digital
          experiences that engage, inspire, and grow brands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7, duration: 0.8, ease: EASE }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href="#work"
            className="glow-primary rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold transition-colors duration-300 hover:border-primary/50 hover:bg-white/5"
          >
            Start a Project
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.9, duration: 0.8 }}
          className="mt-8 flex flex-wrap gap-2"
        >
          {ROLES.map((r) => (
            <span
              key={r}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-[11px] text-muted-foreground"
            >
              {r}
            </span>
          ))}
        </motion.div>

        {/* Workstation */}
        <div className="relative mt-20 lg:mt-24">
          {TOOLS.map((t) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3 + t.delay * 0.12, duration: 0.7, ease: EASE }}
              className={`animate-float-slow absolute z-10 hidden md:block ${t.pos}`}
              style={{ animationDelay: `${t.delay}s` }}
            >
              <div className="glass flex items-center gap-2.5 rounded-2xl px-4 py-3 transition-transform duration-300 hover:scale-110">
                <t.icon className="h-4 w-4 text-primary" />
                <span className="font-mono text-xs">{t.label}</span>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 18 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 2.9, duration: 1.1, ease: EASE }}
            className="glow-primary relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-card/70 p-3 backdrop-blur-xl"
          >
            <div className="flex items-center gap-1.5 px-2 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-chart-4/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-chart-2/70" />
              <span className="ml-3 font-mono text-[10px] text-muted-foreground">
                asma-noureen.dev — building with AI
              </span>
            </div>
            <div className="grid gap-3 rounded-2xl bg-background/70 p-4 sm:grid-cols-[1.2fr_1fr]">
              <div className="space-y-2 font-mono text-[11px] leading-relaxed">
                <p className="text-electric">const idea = &quot;brand experience&quot;;</p>
                <p className="text-muted-foreground">
                  await ai.<span className="text-accent">generate</span>(idea);
                </p>
                <p className="text-muted-foreground">
                  build(<span className="text-primary">motion</span>, design, code);
                </p>
                <p className="text-foreground">ship() → impact ✦</p>
                <div className="mt-3 space-y-1.5">
                  {[88, 64, 74].map((w, i) => (
                    <motion.div
                      key={i}
                      initial={{ width: 0 }}
                      animate={{ width: `${w}%` }}
                      transition={{ delay: 3.4 + i * 0.15, duration: 1, ease: EASE }}
                      className="h-1.5 rounded-full bg-gradient-to-r from-primary to-accent"
                    />
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                  I Create With
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {["AI", "React", "Motion", "Video", "Design", "Code"].map((c) => (
                    <span
                      key={c}
                      className="rounded-lg border border-white/10 bg-background/60 px-2 py-1.5 text-center font-mono text-[10px]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.6 }}
          className="mt-14 flex flex-col items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase"
        >
          Scroll
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4 text-primary" />
          </motion.span>
        </motion.a>
      </motion.div>
    </section>
  );
}
