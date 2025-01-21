import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { getCaseStudies } from '@/lib/api'

export async function CaseStudies() {
  const caseStudies = await getCaseStudies()

  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">Case Studies</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Card key={study.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <img src={study.image || "/placeholder.svg"} alt={study.title} className="w-full h-48 object-cover" />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">{study.title}</CardTitle>
                <p className="text-muted-foreground mb-4">{study.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-primary">{study.metric}</span>
                  <Link href={`/case-studies/${study.slug}`} className="flex items-center text-sm font-medium text-primary hover:underline">
                    Read More
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/case-studies" className="inline-flex items-center text-primary hover:underline">
            View All Case Studies
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

