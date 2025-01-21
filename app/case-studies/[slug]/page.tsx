import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CaseStudyHero } from '@/components/case-study-hero'
import { CaseStudyContent } from '@/components/case-study-content'
import { CaseStudyResults } from '@/components/case-study-results'
import { CaseStudyTestimonial } from '@/components/case-study-testimonial'
import { ContactCTA } from '@/components/contact-cta'
import { JsonLd } from 'react-schemaorg'
import { getCaseStudies, getCaseStudy } from '@/lib/api'

export const revalidate = 3600 // Revalidate every hour

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const caseStudy = await getCaseStudy(params.slug)
  if (!caseStudy) return { title: 'Case Study Not Found' }

  return {
    title: `${caseStudy.title} | Organic Marketing Case Study`,
    description: caseStudy.description,
    openGraph: {
      title: `${caseStudy.title} | Organic Marketing Case Study`,
      description: caseStudy.description,
      images: [{ url: `/api/og?title=${encodeURIComponent(caseStudy.title)}&description=${encodeURIComponent(caseStudy.description)}` }],
    },
  }
}

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies()
  return caseStudies.map((study) => ({
    slug: study.slug,
  }))
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = await getCaseStudy(params.slug)

  if (!caseStudy) {
    notFound()
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": caseStudy.title,
    "description": caseStudy.description,
    "image": caseStudy.image,
    "author": {
      "@type": "Organization",
      "name": "Organic Marketing"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Organic Marketing",
      "logo": {
        "@type": "ImageObject",
        "url": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GRADIENT%20ICON%20(2)-tBDutcoOsXPdf3IgKGwK5cibw3C9xd.png"
      }
    },
    "datePublished": caseStudy.publishedDate,
    "dateModified": caseStudy.updatedDate,
  }

  return (
    <main>
      <JsonLd<Article>
        item={structuredData}
      />
      <CaseStudyHero 
        title={caseStudy.title}
        description={caseStudy.description}
        industry={caseStudy.industry}
        image={caseStudy.image}
      />
      <CaseStudyContent 
        challenge={caseStudy.challenge}
        solution={caseStudy.solution}
      />
      <CaseStudyResults results={caseStudy.results} />
      <CaseStudyTestimonial testimonial={caseStudy.testimonial} />
      <ContactCTA />
    </main>
  )
}

