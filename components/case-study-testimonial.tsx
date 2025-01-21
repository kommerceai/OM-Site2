import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from 'lucide-react'

interface Testimonial {
  quote: string
  author: string
  role: string
}

interface CaseStudyTestimonialProps {
  testimonial: Testimonial
}

export function CaseStudyTestimonial({ testimonial }: CaseStudyTestimonialProps) {
  return (
    <section className="py-24">
      <div className="container">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-12">
            <Quote className="h-12 w-12 text-primary mb-6" />
            <blockquote className="text-2xl font-medium mb-6">
              "{testimonial.quote}"
            </blockquote>
            <div className="flex items-center">
              <Avatar className="h-12 w-12 mr-4">
                <AvatarImage src="/placeholder.svg?height=100&width=100" alt={testimonial.author} />
                <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

