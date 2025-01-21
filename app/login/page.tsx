"use client"

import { useState } from "react"
import Link from "next/link"
import { FcGoogle } from "react-icons/fc"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // TODO: Implement authentication logic
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <section className="min-h-screen">
      <div className="container h-screen">
        <div className="grid lg:grid-cols-2 h-full">
          <div className="relative overflow-hidden py-10">
            <div className="mx-auto my-auto flex h-full w-full max-w-md flex-col justify-center gap-4 p-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 flex flex-col items-center text-center"
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GRADIENT%20ICON%20(2)-tBDutcoOsXPdf3IgKGwK5cibw3C9xd.png"
                  alt="Organic Marketing"
                  className="mb-7 h-12 w-auto"
                />
                <h1 className="mb-2 text-2xl font-bold">Welcome back</h1>
                <p className="text-muted-foreground">
                  Welcome back! Please enter your details.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="w-full rounded-md bg-background"
              >
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4">
                    <div className="grid gap-1.5">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="grid gap-1.5">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="remember"
                          className="border-muted-foreground"
                        />
                        <label
                          htmlFor="remember"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Remember me
                        </label>
                      </div>
                      <Link 
                        href="/forgot-password" 
                        className="text-sm font-medium text-[#0070FF] hover:text-[#001F5A] transition-colors"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <Button 
                      type="submit" 
                      className="mt-2 w-full bg-[#001F5A] hover:bg-[#0070FF]"
                      disabled={isLoading}
                    >
                      {isLoading ? "Signing in..." : "Sign in"}
                    </Button>
                    <Button variant="outline" className="w-full" disabled={isLoading}>
                      <FcGoogle className="mr-2 size-5" />
                      Sign in with Google
                    </Button>
                  </div>
                </form>
              </motion.div>
              <div className="mx-auto mt-3 flex justify-center gap-1 text-sm text-muted-foreground">
                <p>Don&apos;t have an account?</p>
                <Link href="/signup" className="font-medium text-[#0070FF] hover:text-[#001F5A] transition-colors">
                  Sign up
                </Link>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden lg:block relative h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#001F5A] to-[#0070FF]">
              <div className="relative h-full flex items-center justify-center">
                <div className="p-12 text-white max-w-lg">
                  <h2 className="text-3xl font-bold mb-6">Transform Your TikTok Presence</h2>
                  <p className="text-lg opacity-90 mb-8">Join thousands of brands achieving organic growth through data-driven strategies and creator partnerships.</p>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-bold mb-2">500K+</div>
                      <div className="text-sm opacity-75">Average Monthly Views</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-2">90%</div>
                      <div className="text-sm opacity-75">Engagement Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

