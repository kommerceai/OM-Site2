import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, TrendingUp, Users, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { CaseStudy } from '@/lib/api'

interface CaseStudiesListProps {
  caseStudies: CaseStudy[]
}

export function CaseStudiesList({ caseStudies }: CaseStudiesListProps) {
  const getIcon = (industry: string) => {
    switch (industry.toLowerCase()) {
      case 'fashion':
        return TrendingUp
      case 'technology':
        return Users
      case 'food & beverage':
        return ShoppingBag
      default:
        return TrendingUp
    }
  }

  return (
    <section className="py-24">
      <div className="container">
        <div className="grid gap-12">
          {caseStudies.map((study, index) => {
            const Icon = getIcon(study.industry)
            return (
              <Card key={index} className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="order-2 md:order-1">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="h-5 w-5 text-primary" />
                        <Badge variant="secondary">{study.industry}</Badge>
                      </div>
                      <CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">{study.description}</p>
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-2xl font-bold text-primary">{result.value}</div>
                            <div className="text-sm text-muted-foreground">{result.label}</div>
                          </div>
                        ))}
                      </div>
                      <Button asChild>
                        <Link href={`/case-studies/${study.slug}`}>
                          Read Full Case Study
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                  <div className="order-1 md:order-2 relative aspect-video">
                    <Image
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

