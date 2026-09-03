import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 60, damping: 24, mass: 0.4 });
  const hueShift = useTransform(progress, [0, 1], [0, 90]);
  const x1 = useTransform(progress, [0, 1], ["-10%", "35%"]);
  const y1 = useTransform(progress, [0, 1], ["-5%", "40%"]);
  const x2 = useTransform(progress, [0, 1], ["60%", "10%"]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let stars: { x: number; y: number; z: number; r: number }[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = window.innerWidth < 768 ? 45 : 110;
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        z: Math.random() * 0.8 + 0.2,
        r: Math.random() * 1.4 + 0.3,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (const s of stars) {
        s.y -= s.z * 0.16;
        if (s.y < -4) s.y = window.innerHeight + 4;
        const twinkle = 0.35 + Math.abs(Math.sin((frame + s.x) * 0.004)) * 0.5;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(190,180,255,${twinkle * s.z})`;
        ctx.fill();
      }
      frame++;
      raf = requestAnimationFrame(draw);
    };

    resize();
    let raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <motion.div
        style={{ x: x1, y: y1, filter: useTransform(hueShift, (h) => `hue-rotate(${h}deg)`) }}
        className="absolute -top-40 left-0 h-[65vh] w-[65vh] rounded-full bg-primary/25 blur-[120px]"
      />
      <motion.div
        style={{ x: x2 }}
        className="absolute top-1/3 right-0 h-[55vh] w-[55vh] rounded-full bg-accent/20 blur-[130px]"
      />
      <div className="absolute bottom-0 left-1/4 h-[45vh] w-[45vh] rounded-full bg-electric/15 blur-[140px]" />
      <div className="grid-lines absolute inset-0 opacity-[0.5] [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
