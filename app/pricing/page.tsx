import type { Metadata } from "next"
import { PricingHero } from "@/components/pricing-hero"
import { PricingPlans } from "@/components/pricing-plans"
import { PricingFAQ } from "@/components/pricing-faq"
import { ContactCTA } from "@/components/contact-cta"

export const metadata: Metadata = {
  title: "Pricing | Organic Marketing",
  description: "Explore our flexible pricing plans designed to fit your TikTok marketing needs and budget.",
}

export default function PricingPage() {
  return (
    <main>
      <PricingHero />
      <PricingPlans />
      <PricingFAQ />
      <ContactCTA />
    </main>
  )
}

