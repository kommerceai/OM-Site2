import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus } from 'lucide-react'

const addOns = [
  {
    title: "TikTok Shop Integration",
    description: "Seamlessly integrate your TikTok content with e-commerce functionality.",
    price: "$499/month",
  },
  {
    title: "Influencer Outreach Program",
    description: "Expand your reach with a customized influencer partnership strategy.",
    price: "$799/month",
  },
  {
    title: "24/7 Community Management",
    description: "Round-the-clock engagement with your TikTok community.",
    price: "$599/month",
  },
  {
    title: "Trend Monitoring & Alerts",
    description: "Stay ahead of the curve with real-time TikTok trend notifications.",
    price: "$299/month",
  },
]

export function ServicesAddOns() {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">Service Add-Ons</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {addOns.map((addon, index) => (
            <Card key={index}>
              <CardHeader>
                <Plus className="h-8 w-8 text-primary mb-4" />
                <CardTitle>{addon.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">{addon.description}</CardDescription>
                <p className="font-semibold text-lg">{addon.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

