"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Book, Menu, Sunset, Trees, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { UserButton, SignInButton, SignUpButton } from "@clerk/nextjs"
import { useUser } from "@clerk/nextjs"

const subMenuItemsOne = [
  {
    title: "Blog",
    description: "The latest industry news, updates, and info",
    icon: <Book className="size-5 shrink-0" />,
  },
  {
    title: "Company",
    description: "Our mission is to innovate and empower the world",
    icon: <Trees className="size-5 shrink-0" />,
  },
  {
    title: "Careers",
    description: "Browse job listing and discover our workspace",
    icon: <Sunset className="size-5 shrink-0" />,
  },
  {
    title: "Support",
    description: "Get in touch with our support team or visit our community forums",
    icon: <Zap className="size-5 shrink-0" />,
  },
]

const subMenuItemsTwo = [
  {
    title: "Help Center",
    description: "Get all the answers you need right here",
    icon: <Zap className="size-5 shrink-0" />,
  },
  {
    title: "Contact Us",
    description: "We are here to help you with any questions you have",
    icon: <Sunset className="size-5 shrink-0" />,
  },
  {
    title: "Status",
    description: "Check the current status of our services and APIs",
    icon: <Trees className="size-5 shrink-0" />,
  },
  {
    title: "Terms of Service",
    description: "Our terms and conditions for using our services",
    icon: <Book className="size-5 shrink-0" />,
  },
]

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { isSignedIn, user } = useUser()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.section
      className={cn(
        "py-4 fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GRADIENT%20ICON%20(2)-tBDutcoOsXPdf3IgKGwK5cibw3C9xd.png"
                className="w-8"
                alt="Organic Marketing logo"
              />
              <span className="text-xl font-bold">Organic Marketing</span>
            </div>
            <div className="flex items-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-muted-foreground",
                    navigationMenuTriggerStyle,
                    buttonVariants({
                      variant: "ghost",
                    }),
                  )}
                  prefetch
                >
                  {item.name}
                </Link>
              ))}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem className="text-muted-foreground">
                    <NavigationMenuTrigger>
                      <span>Products</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-80 p-3">
                        <NavigationMenuLink>
                          {subMenuItemsOne.map((item, idx) => (
                            <li key={idx}>
                              <div className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer">
                                {item.icon}
                                <div>
                                  <div className="text-sm font-semibold">{item.title}</div>
                                  <p className="text-sm leading-snug text-muted-foreground">{item.description}</p>
                                </div>
                              </div>
                            </li>
                          ))}
                        </NavigationMenuLink>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="text-muted-foreground">
                    <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-80 p-3">
                        <NavigationMenuLink>
                          {subMenuItemsTwo.map((item, idx) => (
                            <li key={idx}>
                              <div className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer">
                                {item.icon}
                                <div>
                                  <div className="text-sm font-semibold">{item.title}</div>
                                  <p className="text-sm leading-snug text-muted-foreground">{item.description}</p>
                                </div>
                              </div>
                            </li>
                          ))}
                        </NavigationMenuLink>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <>
                <SignInButton mode="modal">
                  <Button variant="ghost">Sign In</Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button>Sign Up</Button>
                </SignUpButton>
              </>
            )}
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GRADIENT%20ICON%20(2)-tBDutcoOsXPdf3IgKGwK5cibw3C9xd.png"
                className="w-8"
                alt="Organic Marketing logo"
              />
              <span className="text-xl font-bold">Organic Marketing</span>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center gap-2">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GRADIENT%20ICON%20(2)-tBDutcoOsXPdf3IgKGwK5cibw3C9xd.png"
                        className="w-8"
                        alt="Organic Marketing logo"
                      />
                      <span className="text-xl font-bold">Organic Marketing</span>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="mb-8 mt-8 flex flex-col gap-4">
                  {navItems.map((item) => (
                    <a key={item.name} href={item.href} className="font-semibold">
                      {item.name}
                    </a>
                  ))}
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="products" className="border-b-0">
                      <AccordionTrigger className="mb-4 py-0 font-semibold hover:no-underline">
                        Products
                      </AccordionTrigger>
                      <AccordionContent className="mt-2">
                        {subMenuItemsOne.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer"
                          >
                            {item.icon}
                            <div>
                              <div className="text-sm font-semibold">{item.title}</div>
                              <p className="text-sm leading-snug text-muted-foreground">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="resources" className="border-b-0">
                      <AccordionTrigger className="py-0 font-semibold hover:no-underline">Resources</AccordionTrigger>
                      <AccordionContent className="mt-2">
                        {subMenuItemsTwo.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer"
                          >
                            {item.icon}
                            <div>
                              <div className="text-sm font-semibold">{item.title}</div>
                              <p className="text-sm leading-snug text-muted-foreground">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div className="border-t pt-4">
                  <div className="grid grid-cols-2 justify-start">
                    <a
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "justify-start text-muted-foreground",
                      )}
                      href="#"
                    >
                      Press
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "justify-start text-muted-foreground",
                      )}
                      href="#"
                    >
                      Contact
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "justify-start text-muted-foreground",
                      )}
                      href="#"
                    >
                      Imprint
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "justify-start text-muted-foreground",
                      )}
                      href="#"
                    >
                      Sitemap
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "justify-start text-muted-foreground",
                      )}
                      href="#"
                    >
                      Legal
                    </a>
                    <a
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "justify-start text-muted-foreground",
                      )}
                      href="#"
                    >
                      Cookie Settings
                    </a>
                  </div>
                  <div className="mt-2 flex flex-col gap-3">
                    {isSignedIn ? (
                      <UserButton afterSignOutUrl="/" />
                    ) : (
                      <>
                        <SignInButton mode="modal">
                          <Button variant="ghost">Sign In</Button>
                        </SignInButton>
                        <SignUpButton mode="modal">
                          <Button>Sign Up</Button>
                        </SignUpButton>
                      </>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

