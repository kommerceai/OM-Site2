import { cache } from "react"

export type CaseStudy = {
  id: number
  title: string
  description: string
  industry: string
  challenge: string
  solution: string
  results: Array<{ label: string; value: string }>
  testimonial: {
    quote: string
    author: string
    role: string
  }
  image: string
  slug: string
  publishedDate: string
  updatedDate: string
}

// Mock data instead of database queries
export const getCaseStudies = cache(async (): Promise<CaseStudy[]> => {
  // Demo data
  return [
    {
      id: 1,
      title: "FashionFrenzy's Viral Challenge",
      description: "How we helped a fashion brand reach 10M+ views with a user-generated content campaign.",
      industry: "Fashion",
      challenge: "FashionFrenzy wanted to increase brand awareness and engagement on TikTok.",
      solution:
        "We created a viral challenge that encouraged users to showcase their most creative outfits using FashionFrenzy items.",
      results: [
        { label: "Views", value: "10M+" },
        { label: "Engagement Rate", value: "8.5%" },
        { label: "Sales Increase", value: "215%" },
      ],
      testimonial: {
        quote:
          "Organic Marketing's strategy transformed our TikTok presence. The viral challenge they created not only boosted our visibility but also significantly increased our sales.",
        author: "Sarah Johnson",
        role: "Marketing Director, FashionFrenzy",
      },
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mia1eXBa3ilngbS0jNBpIH86YNTD0X.png",
      slug: "fashionfrenzy-viral-challenge",
      publishedDate: "2023-01-15T00:00:00.000Z",
      updatedDate: "2023-01-15T00:00:00.000Z",
    },
    // Add more mock case studies as needed
  ]
})

export const getCaseStudy = cache(async (slug: string): Promise<CaseStudy | null> => {
  const caseStudies = await getCaseStudies()
  return caseStudies.find((study) => study.slug === slug) || null
})

