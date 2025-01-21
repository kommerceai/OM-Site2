"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-blue-50/50 to-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            {/* Hero content */}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-sm font-medium text-[#0070FF] mb-6"
            >
              REVOLUTIONIZE YOUR TIKTOK PRESENCE
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-bold tracking-tight lg:text-6xl xl:text-7xl mb-6"
            >
              Amplify Your Brand's Organic Growth on TikTok
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg"
            >
              Unlock the power of authentic engagement, skyrocket your conversions, and dominate your niche with our
              data-driven organic marketing strategies and elite creator partnerships.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="bg-[#001F5A] hover:bg-[#0070FF] text-white group">
                Start Your Growth Journey
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Explore Success Stories
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[500px] hidden lg:block"
          >
            {/* Hero images */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute right-[20%] top-[10%] w-[200px] overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OL38JbxkZwOsWhQxetp81szfns.jpg-HmBInvcBrpBtqmp4uwjHMAo48yrRgQ.jpeg"
                alt="Creator content"
                width={200}
                height={356}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute right-[10%] top-[30%] w-[280px] overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JwywB0DINvvpwR8kpcxmxEUCFPs%20(1).jpg-BfpfCvA387EntXfxGkCIhb9TXVOMvX.jpeg"
                alt="Creator content"
                width={280}
                height={498}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute right-[35%] top-[45%] w-[240px] overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-INf3aBcDHjZlb215ACO2ul1qtqoYIO.png"
                alt="Product demonstration content"
                width={240}
                height={427}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="absolute inset-0"
            >
              <div className="absolute right-[25%] top-[20%] w-4 h-4 rounded-full bg-[#0070FF]/10" />
              <div className="absolute right-[45%] top-[40%] w-6 h-6 rounded-full bg-[#001F5A]/10" />
              <div className="absolute right-[15%] top-[60%] w-8 h-8 rounded-full bg-[#0070FF]/10" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

