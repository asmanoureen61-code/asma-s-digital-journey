import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import AnimatedBackground from "@/components/portfolio/AnimatedBackground";
import CustomCursor from "@/components/portfolio/CustomCursor";
import Intro from "@/components/portfolio/Intro";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Marquee from "@/components/portfolio/Marquee";
import Services from "@/components/portfolio/Services";
import ImpactStats from "@/components/portfolio/ImpactStats";
import Projects from "@/components/portfolio/Projects";
import WorkflowSection from "@/components/portfolio/Workflow";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const TITLE = "Asma Noureen — AI Web Developer & Creator";
const DESCRIPTION =
  "AI-powered web developer, video creator, and vibe coder transforming ideas into digital experiences that engage, inspire, and grow brands.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [, setIntroDone] = useState(false);

  return (
    <main className="relative text-foreground lg:cursor-none">
      <AnimatedBackground />
      <CustomCursor />
      <Intro onDone={() => setIntroDone(true)} />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Marquee />
      <Services />
      <ImpactStats />
      <Projects />
      <WorkflowSection />
      <Contact />
      <Footer />
    </main>
  );
}
