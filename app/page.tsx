import { Suspense } from "react"
import dynamic from "next/dynamic"
import { Hero } from "@/components/hero"
import { LogoCarousel } from "@/components/logo-carousel"
import { FeatureSection } from "@/components/feature-section"
import { ContentPlanningTools } from "@/components/content-planning-tools"
import { CreatorNetworkSpotlight } from "@/components/creator-network-spotlight"
import { SEOTrendOptimization } from "@/components/seo-trend-optimization"
import { CommunityEngagementHub } from "@/components/community-engagement-hub"
import { ROICalculator } from "@/components/roi-calculator"
import { Portfolio } from "@/components/portfolio"
import { Pricing } from "@/components/pricing"
import { ContactForm } from "@/components/contact-form"
import { InfluencerShowcase } from "@/components/influencer-showcase"
import { CaseStudies } from "@/components/case-studies"

const VideoShowcase = dynamic(() => import("@/components/video-showcase").then((mod) => mod.VideoShowcase), {
  loading: () => <p>Loading video showcase...</p>,
})

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoCarousel />
      <FeatureSection />
      <VideoShowcase />
      <ContentPlanningTools />
      <InfluencerShowcase />
      <CreatorNetworkSpotlight />
      <SEOTrendOptimization />
      <Suspense fallback={<div>Loading case studies...</div>}>
        <CaseStudies />
      </Suspense>
      <Portfolio />
      <CommunityEngagementHub />
      <ROICalculator />
      <Pricing />
      <ContactForm />
    </main>
  )
}

