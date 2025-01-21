"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function ROICalculator() {
  const [followers, setFollowers] = useState("")
  const [engagementRate, setEngagementRate] = useState("")
  const [conversionRate, setConversionRate] = useState("")
  const [averageOrderValue, setAverageOrderValue] = useState("")
  const [roi, setROI] = useState<number | null>(null)

  const calculateROI = () => {
    const potentialReach = Number(followers) * (Number(engagementRate) / 100)
    const potentialConversions = potentialReach * (Number(conversionRate) / 100)
    const potentialRevenue = potentialConversions * Number(averageOrderValue)
    const estimatedCost = 5000 // Assuming a fixed cost for the organic marketing campaign
    const calculatedROI = ((potentialRevenue - estimatedCost) / estimatedCost) * 100
    setROI(calculatedROI)
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
          <h2 className="text-3xl font-bold tracking-tight mb-4">Calculate Your Potential ROI</h2>
          <p className="text-lg text-muted-foreground">
            See the impact of organic marketing on your TikTok performance
          </p>
        </motion.div>
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-6">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                calculateROI()
              }}
              className="space-y-4"
            >
              <div>
                <Label htmlFor="followers">Current TikTok Followers</Label>
                <Input
                  id="followers"
                  type="number"
                  value={followers}
                  onChange={(e) => setFollowers(e.target.value)}
                  placeholder="e.g., 10000"
                  required
                />
              </div>
              <div>
                <Label htmlFor="engagementRate">Average Engagement Rate (%)</Label>
                <Input
                  id="engagementRate"
                  type="number"
                  value={engagementRate}
                  onChange={(e) => setEngagementRate(e.target.value)}
                  placeholder="e.g., 5"
                  required
                />
              </div>
              <div>
                <Label htmlFor="conversionRate">Expected Conversion Rate (%)</Label>
                <Input
                  id="conversionRate"
                  type="number"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(e.target.value)}
                  placeholder="e.g., 2"
                  required
                />
              </div>
              <div>
                <Label htmlFor="averageOrderValue">Average Order Value ($)</Label>
                <Input
                  id="averageOrderValue"
                  type="number"
                  value={averageOrderValue}
                  onChange={(e) => setAverageOrderValue(e.target.value)}
                  placeholder="e.g., 50"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-[#001F5A] hover:bg-[#0070FF] text-white">
                Calculate ROI
              </Button>
            </form>
            {roi !== null && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-[#0070FF]/10 rounded-lg text-center"
              >
                <h3 className="text-xl font-semibold mb-2">Estimated ROI</h3>
                <p className="text-3xl font-bold text-[#0070FF]">{roi.toFixed(2)}%</p>
                <p className="text-sm text-muted-foreground mt-2">
                  This is an estimate based on the provided information and average industry data.
                </p>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

