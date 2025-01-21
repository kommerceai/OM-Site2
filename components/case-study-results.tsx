import { Card, CardContent } from "@/components/ui/card"

interface Result {
  label: string
  value: string
}

interface CaseStudyResultsProps {
  results: Result[]
}

export function CaseStudyResults({ results }: CaseStudyResultsProps) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">Results</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {results.map((result, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <p className="text-4xl font-bold text-primary mb-2">{result.value}</p>
                <p className="text-lg text-muted-foreground">{result.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

