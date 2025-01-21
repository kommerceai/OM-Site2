import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { HashIcon as Hashtag, Music, LineChart } from 'lucide-react'

const trendingHashtags = ['#OrganicGrowth', '#TikTokMarketing', '#ContentCreator', '#BrandStrategy']
const trendingSounds = ['Authentic Piano', 'Upbeat Pop', 'Viral Dance Beat', 'Inspirational Strings']

export function SEOTrendOptimization() {
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
            Stay Ahead with Trend Optimization
          </h2>
          <p className="text-lg text-muted-foreground">
            Leverage real-time insights to create content that resonates and ranks
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Hashtag className="mr-2 text-[#0070FF]" />
                Trending Hashtags
              </h3>
              <div className="flex flex-wrap gap-2">
                {trendingHashtags.map((hashtag, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-[#0070FF]/10 text-[#0070FF] px-3 py-1 rounded-full text-sm"
                  >
                    {hashtag}
                  </motion.span>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Music className="mr-2 text-[#0070FF]" />
                Trending Sounds
              </h3>
              <ul className="space-y-2">
                {trendingSounds.map((sound, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <span className="w-4 h-4 bg-[#0070FF] rounded-full mr-2" />
                    {sound}
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

