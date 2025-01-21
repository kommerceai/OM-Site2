import type { Metadata } from "next"
import { ServicesHero } from "@/components/services-hero"
import { ServicesList } from "@/components/services-list"
import { ServicesPricing } from "@/components/services-pricing"
import { ServicesAddOns } from "@/components/services-add-ons"
import { ContactCTA } from "@/components/contact-cta"

export const metadata: Metadata = {
  title: "Our Services | Organic Marketing",
  description:
    "Explore our comprehensive TikTok marketing services designed to skyrocket your brand's organic growth and engagement.",
}

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesList />
      <ServicesPricing />
      <ServicesAddOns />
      <ContactCTA />
    </main>
  )
}

