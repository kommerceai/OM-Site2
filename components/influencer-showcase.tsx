"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Mic, ArrowUpRight, BadgeCheck, Mail, Bookmark, Youtube, Instagram, Twitter, TwitterIcon as TikTok } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const influencers = [
  {
    id: 1,
    name: "Sarah Johnson",
    handle: "@sarahjcreates",
    verified: true,
    location: "Los Angeles, USA",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20at%205.36.04%E2%80%AFPM-xnbSKeIvaOpCGomejCYnwjhLK5A0qx.png",
    followers: "1.2M",
    engagement: "5.8%",
    category: "Lifestyle",
    price: 3500,
    platforms: ["instagram", "tiktok", "youtube"],
    stats: {
      avgViews: "500K",
      avgLikes: "50K",
      avgComments: "1.2K"
    },
    recentCampaigns: [
      { brand: "FashionNova", performance: "+280% engagement" },
      { brand: "Sephora", performance: "2.1M views" }
    ]
  },
  {
    id: 2,
    name: "Alex Chen",
    handle: "@alexchentech",
    verified: true,
    location: "New York, USA",
    avatar: "/placeholder.svg?height=400&width=400",
    followers: "890K",
    engagement: "4.2%",
    category: "Tech",
    price: 2800,
    platforms: ["youtube", "twitter", "instagram"],
    stats: {
      avgViews: "300K",
      avgLikes: "35K",
      avgComments: "950"
    },
    recentCampaigns: [
      { brand: "Samsung", performance: "1.8M views" },
      { brand: "Dell", performance: "+320% engagement" }
    ]
  },
  {
    id: 3,
    name: "Emma Wilson",
    handle: "@emmawfit",
    verified: true,
    location: "London, UK",
    avatar: "/placeholder.svg?height=400&width=400",
    followers: "750K",
    engagement: "6.1%",
    category: "Fitness",
    price: 2200,
    platforms: ["instagram", "tiktok"],
    stats: {
      avgViews: "250K",
      avgLikes: "45K",
      avgComments: "1.5K"
    },
    recentCampaigns: [
      { brand: "GymShark", performance: "+400% engagement" },
      { brand: "MyProtein", performance: "1.5M views" }
    ]
  }
]

function InfluencerCard({ influencer, onClick }: { influencer: typeof influencers[0], onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-0">
          <div className="relative aspect-square">
            <img
              src={influencer.avatar || "/placeholder.svg"}
              alt={influencer.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-white font-semibold">{influencer.name}</span>
                {influencer.verified && (
                  <BadgeCheck className="h-4 w-4 text-[#0070FF]" />
                )}
              </div>
              <div className="text-white/80 text-sm">{influencer.location}</div>
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2">
                {influencer.platforms.includes("instagram") && <Instagram className="h-4 w-4" />}
                {influencer.platforms.includes("tiktok") && <TikTok className="h-4 w-4" />}
                {influencer.platforms.includes("youtube") && <Youtube className="h-4 w-4" />}
                {influencer.platforms.includes("twitter") && <Twitter className="h-4 w-4" />}
              </div>
              <span className="text-sm font-medium text-[#0070FF]">{influencer.category}</span>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <div className="text-sm font-semibold">{influencer.followers}</div>
                <div className="text-xs text-muted-foreground">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold">{influencer.engagement}</div>
                <div className="text-xs text-muted-foreground">Engagement</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold">${influencer.price}</div>
                <div className="text-xs text-muted-foreground">Per Post</div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button 
                className="flex-1 bg-[#0070FF] hover:bg-[#001F5A]"
                onClick={onClick}
              >
                View Profile
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Bookmark className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function InfluencerDetails({ influencer }: { influencer: typeof influencers[0] }) {
  return (
    <div className="grid gap-6">
      <div className="flex items-center gap-4">
        <img
          src={influencer.avatar || "/placeholder.svg"}
          alt={influencer.name}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold">{influencer.name}</h2>
            {influencer.verified && <BadgeCheck className="h-5 w-5 text-[#0070FF]" />}
          </div>
          <p className="text-muted-foreground">{influencer.handle}</p>
        </div>
      </div>

      <div className="grid gap-4">
        <h3 className="text-lg font-semibold">Performance Metrics</h3>
        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">{influencer.stats.avgViews}</div>
              <div className="text-sm text-muted-foreground">Avg. Views</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">{influencer.stats.avgLikes}</div>
              <div className="text-sm text-muted-foreground">Avg. Likes</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold">{influencer.stats.avgComments}</div>
              <div className="text-sm text-muted-foreground">Avg. Comments</div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid gap-4">
        <h3 className="text-lg font-semibold">Recent Campaigns</h3>
        <div className="space-y-3">
          {influencer.recentCampaigns.map((campaign, index) => (
            <Card key={index}>
              <CardContent className="p-4 flex justify-between items-center">
                <span className="font-medium">{campaign.brand}</span>
                <span className="text-[#0070FF]">{campaign.performance}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Button className="w-full bg-[#0070FF] hover:bg-[#001F5A]">
        Contact Creator
        <Mail className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}

export function InfluencerShowcase() {
  const [selectedInfluencer, setSelectedInfluencer] = useState<typeof influencers[0] | null>(null)

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Find the Perfect Creator
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Connect with industry-leading creators who consistently deliver exceptional results
          </p>
          
          <div className="relative max-w-xl mx-auto">
            <Input
              type="text"
              placeholder="Search creators by name, niche, or location..."
              className="pl-10 pr-12"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2"
            >
              <Mic className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {influencers.map((influencer) => (
            <InfluencerCard
              key={influencer.id}
              influencer={influencer}
              onClick={() => setSelectedInfluencer(influencer)}
            />
          ))}
        </div>

        <Dialog open={!!selectedInfluencer} onOpenChange={() => setSelectedInfluencer(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Creator Profile</DialogTitle>
            </DialogHeader>
            {selectedInfluencer && <InfluencerDetails influencer={selectedInfluencer} />}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

