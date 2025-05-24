
import { AboutSection } from "@/components/sections/about-section"
import { HeroSection } from "@/components/sections/hero-section"
import { ProjectSection } from "@/components/sections/project-section"
import { BackgroundWrapper } from "@/components/sections/background-wrapper"

export default function Page() {
  return (
    <main className="flex flex-col gap-2">
      <BackgroundWrapper>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
      </BackgroundWrapper>
    </main>
  )
}
