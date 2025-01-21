"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const creators = [
  {
    id: 1,
    name: "Alex Johnson",
    handle: "@alexcreates",
    followers: "1.2M",
    engagement: "4.5%",
    niche: "Lifestyle",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Sarah Lee",
    handle: "@sarahcooks",
    followers: "800K",
    engagement: "5.2%",
    niche: "Cooking",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Mike Chen",
    handle: "@miketech",
    followers: "2.1M",
    engagement: "3.8%",
    niche: "Tech",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "Emma Watson",
    handle: "@emmafitness",
    followers: "950K",
    engagement: "6.1%",
    niche: "Fitness",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function CreatorsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCreators = creators.filter(
    (creator) =>
      creator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      creator.handle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      creator.niche.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">Creator Discovery</h2>
      <div className="flex space-x-2">
        <Input
          placeholder="Search creators..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Button>Search</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredCreators.map((creator) => (
          <Card key={creator.id}>
            <CardContent className="flex items-center space-x-4 p-6">
              <Avatar className="h-12 w-12">
                <AvatarImage src={creator.avatar} alt={creator.name} />
                <AvatarFallback>{creator.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <h3 className="font-semibold">{creator.name}</h3>
                <p className="text-sm text-muted-foreground">{creator.handle}</p>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">{creator.followers} followers</Badge>
                  <Badge variant="secondary">{creator.engagement} engagement</Badge>
                </div>
                <Badge>{creator.niche}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

