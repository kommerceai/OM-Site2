import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Organic Marketing's strategies transformed our TikTok presence. We saw unprecedented engagement and a significant boost in sales.",
    author: "Sarah Johnson",
    role: "Marketing Director, FashionFrenzy",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "The team's creativity and data-driven approach helped us launch our product to a massive, engaged audience. The results exceeded our expectations.",
    author: "Michael Chen",
    role: "CEO, TechGadget",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "Our restaurant became a local sensation thanks to Organic Marketing. The increase in foot traffic and online orders was remarkable.",
    author: "Emily Rodriguez",
    role: "Owner, FoodieFaves",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export function CaseStudiesTestimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">What Our Clients Say</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-lg mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

