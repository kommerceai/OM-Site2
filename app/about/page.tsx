import type { Metadata } from "next"
import { AboutHero } from "@/components/about-hero"
import { OurMission } from "@/components/our-mission"
import { TeamSection } from "@/components/team-section"
import { ContactCTA } from "@/components/contact-cta"

export const metadata: Metadata = {
  title: "About Organic Marketing | TikTok Growth Experts",
  description: "Learn about Organic Marketing, our mission, and the team behind our TikTok growth strategies.",
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <OurMission />
      <TeamSection />
      <ContactCTA />
    </main>
  )
}

