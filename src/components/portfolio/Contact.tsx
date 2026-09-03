import { useState, type FormEvent } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";
import { toast } from "sonner";
import { Eyebrow, Reveal, SectionShell, WordReveal } from "./primitives";

const TYPES = ["AI Website", "AI Video", "Automation", "Branding", "Other"];

export default function Contact() {
  const [type, setType] = useState(TYPES[0]);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.includes("@") || form.message.trim().length < 10) {
      toast.error("Please add your name, a valid email and a short message.");
      return;
    }
    toast.success("Thanks! Your message is ready — I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  }

  const input =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60";

  return (
    <SectionShell id="contact">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Let&apos;s Build</Eyebrow>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            <WordReveal text="Have an idea? Let&apos;s turn it into " />
            <WordReveal gradient text="impact." />
          </h2>
          <Reveal delay={0.1} className="mt-6 text-muted-foreground">
            Tell me what you&apos;re building. I reply to every serious project inquiry.
          </Reveal>
          <Reveal delay={0.2} className="mt-8 space-y-3">
            <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3.5">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-sm">hello@asmanoureen.com</span>
            </div>
            <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3.5">
              <MessageSquare className="h-4 w-4 text-accent" />
              <span className="text-sm">Response within 24 hours</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form onSubmit={submit} className="glass rounded-3xl p-6">
            <div className="flex flex-wrap gap-2">
              {TYPES.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setType(t)}
                  className={`rounded-full border px-3.5 py-1.5 font-mono text-[11px] transition-colors ${
                    type === t
                      ? "border-primary/50 bg-primary/20 text-foreground"
                      : "border-white/10 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="mt-5 space-y-3">
              <input
                className={input}
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                className={input}
                placeholder="Email address"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <textarea
                className={`${input} min-h-32 resize-none`}
                placeholder="Tell me about your project…"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="glow-primary mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.02]"
            >
              Send Message <Send className="h-4 w-4" />
            </button>
          </form>
        </Reveal>
      </div>
    </SectionShell>
  );
}
