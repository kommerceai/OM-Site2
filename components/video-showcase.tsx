"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Volume2, VolumeX } from "lucide-react"

const videos = [
  {
    title: "Alma Success Story",
    views: "2.1M views",
    videoUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TSS_Alma_Hero2-1VbodiPm6BDLXq6C9Dibm0VPQ4nBtY.mp4",
    thumbnail: "/placeholder.svg?height=720&width=405",
    category: "Case Study",
  },
  {
    title: "Creator Collaboration",
    views: "1.5M views",
    videoUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/471362374_985842876798991_7785255489426254289_n-FDbLvOYC3pzxMZ4vmtvqndQpgazAz2.mp4",
    thumbnail: "/placeholder.svg?height=720&width=405",
    category: "Partnership",
  },
  {
    title: "Brand Growth Results",
    views: "3.2M views",
    videoUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/473706242_1251800805875924_7275661978841828043_n-7YCoZsFqr1WtkrGWCtkR4Tj50bK0aS.mp4",
    thumbnail: "/placeholder.svg?height=720&width=405",
    category: "Success Story",
  },
]

export function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null)
  const [muted, setMuted] = useState(true)

  const handleVideoClick = (index: number) => {
    setActiveVideo(activeVideo === index ? null : index)
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
          <h2 className="text-3xl font-bold tracking-tight mb-4">Success Stories</h2>
          <p className="text-lg text-muted-foreground">
            See how brands are achieving explosive organic growth with our platform
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-[9/16]">
                    {activeVideo === index ? (
                      <div className="relative w-full h-full">
                        <video
                          src={video.videoUrl}
                          autoPlay
                          loop
                          muted={muted}
                          playsInline
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-4 right-4 flex gap-2">
                          <Button
                            variant="secondary"
                            size="icon"
                            className="rounded-full bg-black/50 hover:bg-black/70"
                            onClick={(e) => {
                              e.stopPropagation()
                              setMuted(!muted)
                            }}
                          >
                            {muted ? (
                              <VolumeX className="h-4 w-4 text-white" />
                            ) : (
                              <Volume2 className="h-4 w-4 text-white" />
                            )}
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-full h-full cursor-pointer" onClick={() => handleVideoClick(index)}>
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <Button variant="secondary" size="icon" className="rounded-full">
                            <Play className="h-8 w-8" />
                          </Button>
                        </div>
                        <video src={video.videoUrl} muted playsInline className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white">
                        {video.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                    <p className="text-sm text-muted-foreground">{video.views}</p>
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

