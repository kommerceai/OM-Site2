"use client"

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from 'lucide-react'

const plans = [
  {
    name: "Starter",
    price: "$999",
    description: "Perfect for small businesses starting their TikTok journey",
    features: [
      "Basic TikTok Shop setup",
      "Monthly content calendar",
      "2 creator collaborations",
      "Basic analytics reporting",
      "Email support"
    ]
  },
  {
    name: "Growth",
    price: "$2,499",
    description: "Ideal for businesses ready to scale their TikTok presence",
    features: [
      "Advanced TikTok Shop management",
      "Weekly content calendar",
      "5 creator collaborations",
      "Advanced analytics dashboard",
      "Priority email & chat support",
      "Strategy consulting sessions"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For established brands requiring comprehensive management",
    features: [
      "Full TikTok Shop management",
      "Daily content optimization",
      "Unlimited creator collaborations",
      "Custom analytics & reporting",
      "24/7 dedicated support",
      "Monthly strategy reviews",
      "Custom integration support"
    ]
  }
]

export function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm text-[#0070FF] mb-2">PRICING</p>
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the perfect plan to scale your TikTok presence
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className={`relative h-full ${plan.popular ? 'border-[#0070FF] shadow-lg' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-0 right-0 mx-auto w-fit px-4 py-1 rounded-full bg-[#0070FF] text-white text-sm">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-[#0070FF] flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-[#0070FF] hover:bg-[#001F5A]' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

