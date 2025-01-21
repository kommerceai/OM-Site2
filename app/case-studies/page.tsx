import type { Metadata } from "next"
import { CaseStudiesHero } from "@/components/case-studies-hero"
import { CaseStudiesList } from "@/components/case-studies-list"
import { CaseStudiesTestimonials } from "@/components/case-studies-testimonials"
import { ContactCTA } from "@/components/contact-cta"
import { getCaseStudies } from "@/lib/api"
import { JsonLd } from "react-schemaorg"

export const metadata: Metadata = {
  title: "Case Studies | Organic Marketing",
  description:
    "Explore our successful TikTok marketing campaigns and see how we've helped brands achieve explosive growth.",
  openGraph: {
    title: "Case Studies | Organic Marketing",
    description:
      "Explore our successful TikTok marketing campaigns and see how we've helped brands achieve explosive growth.",
    images: [{ url: "/api/og?title=Case Studies&description=Explore our successful TikTok marketing campaigns" }],
  },
}

export const revalidate = 3600 // Revalidate every hour

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies()

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: caseStudies.map((study, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Article",
        name: study.title,
        description: study.description,
        url: `https://organicmarketing.com/case-studies/${study.slug}`,
      },
    })),
  }

  return (
    <main>
      <JsonLd<ItemList> item={structuredData} />
      <CaseStudiesHero />
      <CaseStudiesList caseStudies={caseStudies} />
      <CaseStudiesTestimonials />
      <ContactCTA />
    </main>
  )
}

