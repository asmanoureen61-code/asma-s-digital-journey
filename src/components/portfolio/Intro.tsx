import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { EASE } from "./primitives";

export default function Intro({ onDone }: { onDone: () => void }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setShow(false);
      onDone();
    }, 1900);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div className="relative">
            <motion.svg
              viewBox="0 0 200 100"
              className="h-28 w-56"
              initial="hidden"
              animate="visible"
            >
              <motion.path
                d="M20 80 L55 20 L90 80 M32 62 H78"
                fill="none"
                stroke="url(#g)"
                strokeWidth="4"
                strokeLinecap="round"
                variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }}
                transition={{ duration: 1.1, ease: EASE }}
              />
              <motion.path
                d="M112 80 V22 L162 80 V22"
                fill="none"
                stroke="url(#g)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1 } }}
                transition={{ duration: 1.1, ease: EASE, delay: 0.25 }}
              />
              <defs>
                <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="oklch(0.78 0.16 210)" />
                  <stop offset="55%" stopColor="oklch(0.68 0.22 300)" />
                  <stop offset="100%" stopColor="oklch(0.72 0.19 340)" />
                </linearGradient>
              </defs>
            </motion.svg>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6, ease: EASE }}
              className="text-center font-mono text-[11px] tracking-[0.4em] text-muted-foreground uppercase"
            >
              Asma Noureen
            </motion.p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 1.2, ease: EASE }}
              className="mt-5 h-px w-full origin-left bg-gradient-to-r from-transparent via-primary to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
