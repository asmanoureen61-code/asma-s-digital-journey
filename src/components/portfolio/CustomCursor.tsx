import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 180, damping: 20, mass: 0.5 });
  const ry = useSpring(y, { stiffness: 180, damping: 20, mass: 0.5 });
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement | null;
      setActive(Boolean(el?.closest("a, button, input, textarea, select, [data-cursor]")));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[90] hidden lg:block">
      <motion.div
        style={{ x, y }}
        className="absolute -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-white"
      />
      <motion.div
        style={{ x: rx, y: ry }}
        animate={{ scale: active ? 1.8 : 1, opacity: active ? 1 : 0.55 }}
        transition={{ duration: 0.25 }}
        className="absolute -ml-5 -mt-5 h-10 w-10 rounded-full border border-primary/70"
      />
    </div>
  );
}
