import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

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
      "Email support",
    ],
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
      "Strategy consulting sessions",
    ],
    popular: true,
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
      "Custom integration support",
    ],
  },
]

export function PricingPlans() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <Card key={plan.name} className={`flex flex-col ${plan.popular ? "border-primary shadow-lg" : ""}`}>
              {plan.popular && (
                <div className="px-3 py-1 text-sm text-white bg-primary rounded-t-lg text-center">Most Popular</div>
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
                <Button className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}>
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

