"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const creators = [
  {
    name: "Alex Thompson",
    handle: "@techwithalex",
    niche: "Tech Reviews",
    followers: "1.2M",
    engagementRate: "5.8%",
    avatar: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Sophia Lee",
    handle: "@sophiacooks",
    niche: "Cooking & Recipes",
    followers: "890K",
    engagementRate: "7.2%",
    avatar: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Marcus Greene",
    handle: "@fitnesswithmarc",
    niche: "Fitness & Wellness",
    followers: "2.1M",
    engagementRate: "4.9%",
    avatar: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Emma Carter",
    handle: "@emmastravels",
    niche: "Travel & Lifestyle",
    followers: "1.5M",
    engagementRate: "6.3%",
    avatar: "/placeholder.svg?height=400&width=400",
  },
]

export function CreatorNetworkSpotlight() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextCreator = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % creators.length)
  }

  const prevCreator = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + creators.length) % creators.length)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Meet Our Top Creators</h2>
          <p className="text-lg text-muted-foreground">
            Connect with influential TikTok creators who can amplify your brand's message
          </p>
        </motion.div>
        <div className="relative">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
            onClick={prevCreator}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
            onClick={nextCreator}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `${-currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {creators.map((creator, index) => (
                <Card key={index} className="flex-shrink-0 w-full">
                  <CardContent className="p-6 flex items-center gap-6">
                    <img
                      src={creator.avatar || "/placeholder.svg"}
                      alt={creator.name}
                      className="w-32 h-32 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{creator.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{creator.handle}</p>
                      <p className="text-sm mb-1">
                        <strong>Niche:</strong> {creator.niche}
                      </p>
                      <p className="text-sm mb-1">
                        <strong>Followers:</strong> {creator.followers}
                      </p>
                      <p className="text-sm">
                        <strong>Engagement Rate:</strong> {creator.engagementRate}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Button className="bg-[#001F5A] hover:bg-[#0070FF] text-white">Explore Our Creator Network</Button>
        </div>
      </div>
    </section>
  )
}

