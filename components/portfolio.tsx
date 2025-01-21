"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, MessageCircle, Share2, Expand, X } from 'lucide-react'

const portfolioItems = [
  {
    id: 1,
    thumbnail: "/placeholder.svg?height=720&width=405",
    video: "/placeholder.svg?height=720&width=405",
    title: "Fashion Brand Explosion",
    creator: "@style_guru",
    description: "How we helped a new fashion brand go viral on TikTok",
    likes: "120.5K",
    comments: "1.2K",
    shares: "3.4K"
  },
  {
    id: 2,
    thumbnail: "/placeholder.svg?height=720&width=405",
    video: "/placeholder.svg?height=720&width=405",
    title: "Tech Startup Success",
    creator: "@tech_insider",
    description: "Launching a tech product with organic TikTok marketing",
    likes: "89.2K",
    comments: "942",
    shares: "2.1K"
  },
  {
    id: 3,
    thumbnail: "/placeholder.svg?height=720&width=405",
    video: "/placeholder.svg?height=720&width=405",
    title: "Food Trend Takeover",
    creator: "@foodie_finds",
    description: "Creating a viral food trend for a restaurant chain",
    likes: "234.1K",
    comments: "2.3K",
    shares: "5.6K"
  },
  {
    id: 4,
    thumbnail: "/placeholder.svg?height=720&width=405",
    video: "/placeholder.svg?height=720&width=405",
    title: "Fitness Challenge Phenomenon",
    creator: "@fit_guru",
    description: "How we created a fitness challenge that swept TikTok",
    likes: "156.8K",
    comments: "1.8K",
    shares: "4.2K"
  },
]

function VideoCard({ item, onClick }: { item: typeof portfolioItems[0], onClick: () => void }) {
  return (
    <Card className="overflow-hidden cursor-pointer group" onClick={onClick}>
      <CardContent className="p-0">
        <div className="relative aspect-video">
          <img
            src={item.thumbnail || "/placeholder.svg"}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Expand className="text-white h-12 w-12" />
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{item.creator}</span>
            <div className="flex items-center space-x-2">
              <Heart className="h-4 w-4 text-red-500" />
              <span className="text-sm">{item.likes}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function FullscreenGallery({ items, currentIndex, onClose }: { items: typeof portfolioItems, currentIndex: number, onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black z-50 overflow-hidden">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
        onClick={onClose}
      >
        <X className="h-6 w-6" />
      </Button>
      
      <div className="h-full snap-y snap-mandatory overflow-y-auto scrollbar-hide">
        {items.map((item) => (
          <div
            key={item.id}
            className="h-full snap-start flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-[9/16]">
              <img
                src={item.video || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-medium mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm mb-4">{item.description}</p>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-white/20" />
                  <span className="text-white/90 text-sm">{item.creator}</span>
                </div>
              </div>
              <div className="absolute right-4 bottom-20 flex flex-col items-center gap-4">
                <div className="flex flex-col items-center">
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="text-white hover:bg-white/20"
                  >
                    <Heart className="h-6 w-6" />
                  </Button>
                  <span className="text-white text-xs">{item.likes}</span>
                </div>
                <div className="flex flex-col items-center">
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="text-white hover:bg-white/20"
                  >
                    <MessageCircle className="h-6 w-6" />
                  </Button>
                  <span className="text-white text-xs">{item.comments}</span>
                </div>
                <div className="flex flex-col items-center">
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="text-white hover:bg-white/20"
                  >
                    <Share2 className="h-6 w-6" />
                  </Button>
                  <span className="text-white text-xs">{item.shares}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Portfolio() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Our Work
          </h2>
          <p className="text-lg text-muted-foreground">
            We deliver ready-to-launch creatives for your DTC brand so that you don't have to spend 20 hours per week reaching out to influencers & ideating new scripts and scenes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {portfolioItems.map((item, index) => (
            <VideoCard
              key={item.id}
              item={item}
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#001F5A] to-[#0070FF] text-white hover:opacity-90"
          >
            Let's Scale My Brand
            <Expand className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FullscreenGallery
              items={portfolioItems}
              currentIndex={selectedIndex}
              onClose={() => setSelectedIndex(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

