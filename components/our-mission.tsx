import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'

const missionPoints = [
  "Empower brands with data-driven TikTok strategies",
  "Foster authentic connections between creators and audiences",
  "Drive sustainable, organic growth for businesses of all sizes",
  "Innovate and adapt to the ever-changing social media landscape",
]

export function OurMission() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're on a mission to revolutionize how brands approach TikTok marketing. By harnessing the power of organic growth and authentic engagement, we help businesses thrive in the digital age.
            </p>
            <ul className="space-y-4">
              {missionPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-[#0070FF]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <Card>
            <CardContent className="p-6">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-INf3aBcDHjZlb215ACO2ul1qtqoYIO.png"
                alt="Organic Marketing team collaboration"
                className="w-full h-auto rounded-lg"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

