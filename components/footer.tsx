"use client"

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react'

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Resources", href: "#" },
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "#" },
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" },
    ]
  }
]

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
]

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter signup logic
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GRADIENT%20ICON%20(2)-tBDutcoOsXPdf3IgKGwK5cibw3C9xd.png" alt="Organic Marketing logo" className="h-8 w-8" />
              <span className="text-xl font-bold">Organic Marketing</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Amplify your brand organically on TikTok with data-driven strategies and creator partnerships.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-[#0070FF] transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2">
            {footerLinks.map((category) => (
              <div key={category.title} className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider">{category.title}</h3>
                <ul className="space-y-2">
                  {category.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-muted-foreground hover:text-[#0070FF] transition-colors" prefetch>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 pt-8 border-t">
          <form onSubmit={handleSubmit} className="sm:flex sm:max-w-md lg:mt-0">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <Input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full min-w-0 px-4 py-2"
            />
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <Button type="submit" className="w-full bg-[#001F5A] hover:bg-[#0070FF] text-white">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
          <p className="mt-4 text-sm text-muted-foreground">
            By subscribing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
        <div className="mt-8 border-t pt-8">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Organic Marketing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

