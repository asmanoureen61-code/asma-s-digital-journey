import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Bot,
  Download,
  Heart,
  Snowflake,
  Sparkle,
  StickyNote,
  Wand2,
} from "lucide-react";
import { EASE, WordReveal } from "./primitives";

const TOOLS = [
  { icon: Heart, label: "Lovable", pos: "left-[-2%] top-[22%]", tint: "from-primary/40 to-accent/40", delay: 0.2 },
  { icon: Wand2, label: "Cursor", pos: "left-[26%] top-[2%]", tint: "from-white/20 to-white/5", delay: 0.5 },
  { icon: Bot, label: "ChatGPT", pos: "right-[6%] top-[6%]", tint: "from-electric/40 to-primary/30", delay: 0.8 },
  { icon: Sparkle, label: "Gemini", pos: "right-[-3%] top-[38%]", tint: "from-electric/40 to-accent/30", delay: 1.1 },
  { icon: Snowflake, label: "Perplexity", pos: "left-[2%] bottom-[24%]", tint: "from-electric/40 to-primary/20", delay: 1.4 },
  { icon: StickyNote, label: "Notion", pos: "right-[4%] bottom-[22%]", tint: "from-white/20 to-white/5", delay: 1.3 },
];

const CODE_LINES = [
  { w: "70%", c: "bg-accent/70" },
  { w: "45%", c: "bg-primary/70" },
  { w: "85%", c: "bg-electric/60" },
  { w: "55%", c: "bg-white/25" },
  { w: "75%", c: "bg-accent/50" },
  { w: "38%", c: "bg-primary/60" },
  { w: "62%", c: "bg-white/20" },
  { w: "48%", c: "bg-electric/50" },
  { w: "80%", c: "bg-accent/40" },
  { w: "35%", c: "bg-white/20" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section ref={ref} id="hero" className="relative min-h-screen px-5 pt-32 pb-20 sm:px-8">
      <motion.div
        style={{ y, opacity }}
        className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-10"
      >
        {/* LEFT */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.7, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 font-mono text-[11px] tracking-[0.22em] text-foreground/90 uppercase"
          >
            <Sparkle className="h-3.5 w-3.5 text-accent" />
            AI Web Developer &amp; Creator
          </motion.span>

          <h1 className="mt-7 text-4xl leading-[1.08] font-extrabold tracking-tight sm:text-5xl lg:text-[3.4rem]">
            <WordReveal text="I Build Smart Websites" />
            <br />
            <WordReveal text="& AI Experiences" />
            <br />
            <WordReveal gradient text="That Make an Impact." />
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
              className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.1em] bg-accent align-middle"
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8, ease: EASE }}
            className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            AI-powered web developer, video creator, and vibe coder transforming ideas into digital
            experiences that engage, inspire, and grow brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.7, duration: 0.8, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="glow-primary group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-105"
            >
              View My Work
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold transition-colors duration-300 hover:border-primary/50 hover:bg-white/5"
            >
              Download CV
              <Download className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        {/* RIGHT — workstation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.4, duration: 1, ease: EASE }}
          className="relative mx-auto aspect-square w-full max-w-[560px]"
        >
          {/* glow */}
          <div
            className="pointer-events-none absolute inset-[8%] rounded-full"
            style={{
              background:
                "radial-gradient(circle at 50% 60%, color-mix(in oklab, var(--primary) 32%, transparent), transparent 65%)",
            }}
          />
          {/* orbital rings */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 26 + i * 10, repeat: Infinity, ease: "linear" }}
              className="absolute rounded-[50%] border"
              style={{
                inset: `${16 + i * 6}%`,
                top: `${34 + i * 6}%`,
                bottom: `${4 + i * 3}%`,
                borderColor:
                  i === 1
                    ? "color-mix(in oklab, var(--accent) 45%, transparent)"
                    : "color-mix(in oklab, var(--primary) 40%, transparent)",
                transform: "rotateX(72deg)",
              }}
            />
          ))}

          {/* laptop */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[24%] left-1/2 w-[68%] -translate-x-1/2"
          >
            <div className="glow-primary rounded-t-xl border border-white/15 bg-card/90 p-2 backdrop-blur-xl">
              <div className="flex items-center gap-1.5 pb-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
                <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                <span className="h-1.5 w-1.5 rounded-full bg-electric/70" />
              </div>
              <div className="grid grid-cols-[1.1fr_1fr] gap-2 rounded-md bg-background/90 p-2">
                <div className="space-y-1.5">
                  {CODE_LINES.map((l, i) => (
                    <motion.div
                      key={i}
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: l.w, opacity: 1 }}
                      transition={{ delay: 3 + i * 0.12, duration: 0.5, ease: EASE }}
                      className={`h-1 rounded-full ${l.c}`}
                    />
                  ))}
                </div>
                <div className="space-y-2">
                  <div
                    className="h-16 rounded-md border border-white/10"
                    style={{
                      background:
                        "linear-gradient(160deg, color-mix(in oklab, var(--primary) 45%, transparent), color-mix(in oklab, var(--accent) 30%, transparent))",
                    }}
                  />
                  <div className="h-2 w-3/4 rounded-full bg-white/15" />
                  <div className="h-5 w-2/3 rounded-md bg-gradient-to-r from-primary to-accent" />
                </div>
              </div>
            </div>
            {/* base */}
            <div className="mx-[-9%] h-3 rounded-b-[14px] border-x border-b border-white/15 bg-gradient-to-b from-white/25 to-white/5" />
          </motion.div>

          {/* floating tool cards */}
          {TOOLS.map((t) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
              transition={{
                opacity: { delay: 2.8 + t.delay, duration: 0.6, ease: EASE },
                scale: { delay: 2.8 + t.delay, duration: 0.6, ease: EASE },
                y: { duration: 5 + t.delay, repeat: Infinity, ease: "easeInOut" },
              }}
              className={`absolute z-10 ${t.pos}`}
            >
              <div className="glass flex w-[78px] flex-col items-center gap-1.5 rounded-2xl border border-white/15 px-2 py-2.5 transition-transform duration-300 hover:scale-110 sm:w-[92px]">
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br ${t.tint}`}
                >
                  <t.icon className="h-4 w-4 text-foreground" />
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">{t.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

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
    </section>
  );
}
