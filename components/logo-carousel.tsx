"use client"

import React, { useCallback, useEffect, useState } from "react"
import { motion } from "framer-motion"
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const logos = [
  {
    id: "logo-1",
    name: "Astro",
    image: "https://shadcnblocks.com/images/block/logos/astro.svg",
    caseStudy: "#astro-case-study",
  },
  {
    id: "logo-2",
    name: "Figma",
    image: "https://shadcnblocks.com/images/block/logos/figma.svg",
    caseStudy: "#figma-case-study",
  },
  {
    id: "logo-3",
    name: "Next.js",
    image: "https://shadcnblocks.com/images/block/logos/nextjs.svg",
    caseStudy: "#nextjs-case-study",
  },
  {
    id: "logo-4",
    name: "React",
    image: "https://shadcnblocks.com/images/block/logos/react.png",
    caseStudy: "#react-case-study",
  },
  {
    id: "logo-5",
    name: "Shadcn UI",
    image: "https://shadcnblocks.com/images/block/logos/shadcn-ui.svg",
    caseStudy: "#shadcn-case-study",
  },
  {
    id: "logo-6",
    name: "Supabase",
    image: "https://shadcnblocks.com/images/block/logos/supabase.svg",
    caseStudy: "#supabase-case-study",
  },
  {
    id: "logo-7",
    name: "Tailwind CSS",
    image: "https://shadcnblocks.com/images/block/logos/tailwind.svg",
    caseStudy: "#tailwind-case-study",
  },
  {
    id: "logo-8",
    name: "Vercel",
    image: "https://shadcnblocks.com/images/block/logos/vercel.svg",
    caseStudy: "#vercel-case-study",
  },
]

export function LogoCarousel() {
  const [isPaused, setIsPaused] = useState(false)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    AutoScroll({ playOnInit: true, stopOnInteraction: false }),
  ])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (emblaApi) {
      const autoScrollPlugin = emblaApi.plugins().autoScroll
      if (autoScrollPlugin) {
        if (isPaused) {
          autoScrollPlugin.stop()
        } else {
          autoScrollPlugin.play()
        }
      }
    }
  }, [emblaApi, isPaused])

  return (
    <section className="py-32">
      <div className="container flex flex-col items-center text-center">
        <h2 className="mb-6 text-3xl font-bold lg:text-4xl">Trusted by these companies</h2>
        <p className="max-w-2xl text-lg text-muted-foreground mb-12">
          Join the ranks of industry leaders who have transformed their TikTok presence with our organic marketing
          strategies.
        </p>
      </div>
      <div
        className="relative mx-auto lg:max-w-5xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {logos.map((logo) => (
              <div key={logo.id} className="flex-[0_0_16.66%] min-w-0 px-4">
                <motion.div
                  className="flex items-center justify-center h-24"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href={logo.caseStudy} className="block">
                    <img
                      src={logo.image || "/placeholder.svg"}
                      alt={logo.name}
                      className="h-12 w-auto transition-opacity duration-300 hover:opacity-80"
                    />
                  </a>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full"
          onClick={scrollPrev}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full"
          onClick={scrollNext}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}

