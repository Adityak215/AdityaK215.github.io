"use client";

import { FloatingNavbar, ParallaxSection } from "@/components/InteractiveBackground";
import HeroContent from "@/components/HeroContent";
import AboutContent from "@/components/AboutContent";
import SkillsContent from "@/components/SkillsContent";
import ExperienceContent from "@/components/ExperienceContent";
import ProjectsContent from "@/components/ProjectsContent";
import EducationContent from "@/components/EducationContent";
import ContactContent from "@/components/ContactContent";

export default function Page() {
  return (
    <main className="relative overflow-hidden animate-in fade-in duration-700">
      <FloatingNavbar />

      <ParallaxSection>
        <HeroContent />
      </ParallaxSection>

      <ParallaxSection>
        <AboutContent />
      </ParallaxSection>

      <ParallaxSection>
        <SkillsContent />
      </ParallaxSection>

      <ParallaxSection>
        <ExperienceContent />
      </ParallaxSection>

      <ParallaxSection>
        <ProjectsContent />
      </ParallaxSection>

      <ParallaxSection>
        <EducationContent />
      </ParallaxSection>

      <ParallaxSection>
        <ContactContent />
      </ParallaxSection>
    </main>
  );
}