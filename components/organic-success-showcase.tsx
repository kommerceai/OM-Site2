import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlayCircle } from 'lucide-react'

const successStories = [
  {
    brand: "FashionFrenzy",
    metric: "3.2M",
    description: "organic views in 30 days",
    videoUrl: "/placeholder.svg?height=720&width=405"
  },
  {
    brand: "TechTrends",
    metric: "500K",
    description: "new followers organically",
    videoUrl: "/placeholder.svg?height=720&width=405"
  },
  {
    brand: "EcoEssentials",
    metric: "25%",
    description: "increase in organic conversions",
    videoUrl: "/placeholder.svg?height=720&width=405"
  }
]

export function OrganicSuccessShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Real Results, Real Growth
          </h2>
          <p className="text-lg text-muted-foreground">
            See how brands are achieving explosive organic growth with our platform
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <img src={story.videoUrl || "/placeholder.svg"} alt={`${story.brand} success story`} className="object-cover w-full h-full" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button variant="secondary" size="icon" className="rounded-full">
                        <PlayCircle className="h-8 w-8" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{story.brand}</h3>
                    <p className="text-3xl font-bold text-[#0070FF] mb-1">{story.metric}</p>
                    <p className="text-sm text-muted-foreground">{story.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

