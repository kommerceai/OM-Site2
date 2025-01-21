import { Button } from "@/components/ui/button"

export function ServicesHero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-24 md:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Elevate Your TikTok Presence
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover our suite of tailored services designed to amplify your brand's organic growth and engagement on TikTok.
          </p>
          <Button size="lg" className="bg-[#001F5A] hover:bg-[#0070FF] text-white">
            Explore Our Services
          </Button>
        </div>
      </div>
    </section>
  )
}

