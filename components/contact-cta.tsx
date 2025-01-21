import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export function ContactCTA() {
  return (
    <section className="py-24 bg-[#001F5A] text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Ready to Amplify Your TikTok Presence?
          </h2>
          <p className="text-xl mb-8">
            Let's discuss how we can help your brand achieve organic growth and success on TikTok.
          </p>
          <Button size="lg" className="bg-white text-[#001F5A] hover:bg-[#0070FF] hover:text-white">
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

