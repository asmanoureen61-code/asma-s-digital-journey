import { Instagram, Youtube, Globe } from "lucide-react";
import { Reveal } from "./primitives";

const SOCIALS = [
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Globe, label: "Portfolio", href: "#hero" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-5 py-14 sm:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-8 sm:grid-cols-2 sm:items-end">
        <Reveal>
          <p className="text-gradient text-2xl font-bold tracking-tight sm:text-3xl">
            IDEA + AI + CREATIVITY = IMPACT
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Designed &amp; built by Asma Noureen — AI Web Developer &amp; Creator.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="sm:justify-self-end">
          <div className="flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="glass flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 hover:scale-110 hover:text-primary"
              >
                <s.icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
      <div className="mx-auto mt-10 flex w-full max-w-6xl items-center justify-between border-t border-white/10 pt-6 font-mono text-[11px] text-muted-foreground">
        <span>© {new Date().getFullYear()} Asma Noureen</span>
        <a href="#hero" className="hover:text-foreground">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
