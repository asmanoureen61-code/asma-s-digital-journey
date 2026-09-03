const WORDS = [
  "AI WEB DEVELOPMENT",
  "VIBE CODING",
  "AI VIDEO",
  "MOTION DESIGN",
  "BRAND EXPERIENCES",
  "CREATIVE ENGINEERING",
];

export default function Marquee() {
  const line = [...WORDS, ...WORDS];
  return (
    <div className="relative overflow-hidden border-y border-white/10 py-6">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {line.map((w, i) => (
          <span
            key={i}
            className="flex items-center gap-10 text-2xl font-extrabold tracking-tight text-white/15 sm:text-4xl"
          >
            {w}
            <span className="h-2 w-2 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </div>
  );
}
