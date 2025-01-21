import { Badge } from "@/components/ui/badge"
import Image from 'next/image'

interface CaseStudyHeroProps {
  title: string
  description: string
  industry: string
  image: string
}

export function CaseStudyHero({ title, description, industry, image }: CaseStudyHeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-24 md:py-32">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <Badge className="mb-4">{industry}</Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {description}
            </p>
          </div>
          <div className="relative aspect-video">
            <Image 
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

