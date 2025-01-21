import { Button } from "@/components/ui/button"

export function PricingHero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-24 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Choose the perfect plan to amplify your TikTok presence and drive organic growth.
          </p>
          <Button size="lg" className="bg-[#001F5A] hover:bg-[#0070FF] text-white">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  )
}

