"use client"

import { motion } from "framer-motion"
import { ChevronLeft, MoreHorizontal, Star, Clock, DollarSign, Zap, BadgeCheck } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface CreatorProfileProps {
  name: string
  username: string
  verified?: boolean
  avatar: string
  posts: number
  likes: number
  bio: string
  reviews: number
  rating: number
  price: number
  responseTime: number
  engagement: number
  onBack?: () => void
  onMore?: () => void
}

export function CreatorProfile({
  name,
  username,
  verified = false,
  avatar,
  posts,
  likes,
  bio,
  reviews,
  rating,
  price,
  responseTime,
  engagement,
  onBack,
  onMore,
}: CreatorProfileProps) {
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader className="relative p-4">
        <div className="flex justify-between items-center">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={onBack}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={onMore}
          >
            <MoreHorizontal className="h-6 w-6" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <div className="flex gap-4 items-start mb-6">
          <Avatar className="h-16 w-16">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-xl font-semibold">{name}</h2>
              {verified && (
                <BadgeCheck className="h-5 w-5 text-[#0070FF]" />
              )}
            </div>
            <p className="text-sm text-muted-foreground mb-2">@{username}</p>
            <div className="flex gap-4 text-sm">
              <span><strong>{posts.toLocaleString()}</strong> posts</span>
              <span><strong>{likes.toLocaleString()}</strong> likes</span>
            </div>
          </div>
        </div>

        <p className="text-sm mb-6">{bio}</p>

        <div className="flex items-center gap-1 mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <Star
                className={`h-5 w-5 ${
                  i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                }`}
              />
            </motion.div>
          ))}
          <span className="ml-2 text-sm text-muted-foreground">
            {reviews} reviews
          </span>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center p-3 rounded-lg bg-gray-50">
            <div className="flex items-center gap-1 text-sm font-medium mb-1">
              <DollarSign className="h-4 w-4" />
              <span>{price.toFixed(2)}</span>
            </div>
            <span className="text-xs text-muted-foreground">Price</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-lg bg-gray-50">
            <div className="flex items-center gap-1 text-sm font-medium mb-1">
              <Clock className="h-4 w-4" />
              <span>{responseTime}m</span>
            </div>
            <span className="text-xs text-muted-foreground">Response</span>
          </div>
          <div className="flex flex-col items-center p-3 rounded-lg bg-gray-50">
            <div className="flex items-center gap-1 text-sm font-medium mb-1">
              <Zap className="h-4 w-4" />
              <span>{engagement}E</span>
            </div>
            <span className="text-xs text-muted-foreground">Engagement</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

