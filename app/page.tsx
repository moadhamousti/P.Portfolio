import Citation from "@/components/citation-section";
import HeroSection from "@/components/hero-section";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Skills from "@/components/skills";
import { FloatingDock } from "@/components/ui/floating-dock";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Meteors } from "@/components/ui/meteors";
import Works from "@/components/works-section";
import { navItems } from "@/data/index";

export default function Home() {
  return (
    <main className="container">
      <Meteors number={20} />
      <FloatingNav navItems={navItems} />
      <HeroSection />
      <Citation />
      <Services />
      <Skills />
      {/* <Projects/> */}
      <Works />
    </main>
  );
}
