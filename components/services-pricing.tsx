import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from 'lucide-react'

const pricingPlans = [
  {
    name: "Starter",
    price: "$999",
    description: "Perfect for small businesses starting their TikTok journey",
    features: [
      "TikTok account audit",
      "Basic content strategy",
      "2 original TikTok videos per week",
      "Weekly performance reports",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "$2,499",
    description: "Ideal for businesses ready to scale their TikTok presence",
    features: [
      "Everything in Starter, plus:",
      "Advanced content strategy",
      "5 original TikTok videos per week",
      "2 creator collaborations per month",
      "TikTok ads management (up to $1000 ad spend)",
      "Bi-weekly strategy calls",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For established brands requiring comprehensive management",
    features: [
      "Everything in Growth, plus:",
      "Unlimited TikTok video production",
      "Unlimited creator collaborations",
      "Advanced TikTok ads management",
      "Dedicated account manager",
      "24/7 priority support",
    ],
  },
]

export function ServicesPricing() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">Pricing Plans</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <Card key={plan.name} className={`flex flex-col ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
              {plan.popular && (
                <div className="px-3 py-1 text-sm text-white bg-primary rounded-t-lg text-center">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}>
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

