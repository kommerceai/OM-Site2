import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CaseStudyContentProps {
  challenge: string
  solution: string
}

export function CaseStudyContent({ challenge, solution }: CaseStudyContentProps) {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>The Challenge</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{challenge}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Our Solution</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{solution}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

