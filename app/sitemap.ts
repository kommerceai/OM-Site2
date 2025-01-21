import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://organicmarketing.com"

  const routes = ["", "/about", "/services", "/case-studies", "/pricing", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }))

  const caseStudies = ["fashionfrenzy-viral-challenge", "techgadget-product-launch", "foodiefaves-recipe-series"].map(
    (slug) => ({
      url: `${baseUrl}/case-studies/${slug}`,
      lastModified: new Date().toISOString(),
    }),
  )

  return [...routes, ...caseStudies]
}

