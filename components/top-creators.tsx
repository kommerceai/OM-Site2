"use client"

import { motion } from "framer-motion"
import { CreatorProfile } from "./creator-profile-card"

const topCreators = [
  {
    name: "Kim Parkinson",
    username: "theonlykimz",
    verified: true,
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-15%20at%205.36.04%E2%80%AFPM-xnbSKeIvaOpCGomejCYnwjhLK5A0qx.png",
    posts: 4055,
    likes: 156,
    bio: "I will inspire 10 million people to do what they love to live their best life",
    reviews: 20,
    rating: 5,
    price: 2.50,
    responseTime: 5,
    engagement: 3
  },
  // Add more creators as needed
]

export function TopCreators() {
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
            Our Top Creators
          </h2>
          <p className="text-lg text-muted-foreground">
            Connect with industry-leading creators who consistently deliver exceptional results
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {topCreators.map((creator) => (
            <motion.div
              key={creator.username}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <CreatorProfile {...creator} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

