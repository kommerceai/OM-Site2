"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, TrendingUp } from "lucide-react"

const tools = [
  {
    number: "01",
    icon: Calendar,
    title: "Content Calendar",
    description: "Plan and schedule your TikTok content in advance for consistent posting.",
  },
  {
    number: "02",
    icon: Clock,
    title: "Auto-Scheduler",
    description: "Set it and forget it with our AI-powered optimal posting time predictor.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Trend Analyzer",
    description: "Stay ahead of the curve with real-time TikTok trend insights and suggestions.",
  },
]

export function ContentPlanningTools() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container relative">
        {/* Decorative Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#0070FF]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#001F5A]/5 rounded-full blur-3xl" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-medium text-[#0070FF] mb-6"
            >
              LAUNCH WITH CONFIDENCE
            </motion.span>
            <h2 className="text-4xl font-bold tracking-tight lg:text-5xl xl:text-6xl mb-6">
              Streamline Your TikTok Strategy
            </h2>
            <p className="text-lg text-muted-foreground">
              Simplify your workflow with our tools that provide clear insights, minimizing the complexity of managing
              your TikTok presence.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

            <div className="space-y-12">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-16"
                >
                  <div className="absolute left-0 flex items-center justify-center w-16 h-16">
                    <div className="absolute w-4 h-4 bg-background border-2 border-[#0070FF] rounded-full" />
                    <span className="absolute -left-2 text-4xl font-bold text-muted-foreground/20">{tool.number}</span>
                  </div>
                  <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <div className="w-12 h-12 rounded-lg bg-[#0070FF]/10 flex items-center justify-center group-hover:bg-[#0070FF] transition-colors duration-300">
                          <tool.icon className="h-6 w-6 text-[#0070FF] group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                      <p className="text-muted-foreground">{tool.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

