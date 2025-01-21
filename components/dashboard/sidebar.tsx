"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, BarChart, Calendar, Users, Settings, LogOut } from "lucide-react"
import { useClerk } from "@clerk/nextjs"
import { useRouter } from "next/navigation"

const navItems = [
  { name: "Overview", href: "/dashboard", icon: Home },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart },
  { name: "Calendar", href: "/dashboard/calendar", icon: Calendar },
  { name: "Creators", href: "/dashboard/creators", icon: Users },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()
  const { signOut } = useClerk()
  const router = useRouter()

  const handleSignOut = () => {
    signOut(() => router.push("/"))
  }

  return (
    <div className="flex flex-col w-64 bg-[#001F5A] text-white">
      <div className="flex items-center justify-center h-16 px-4">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GRADIENT%20ICON%20(2)-tBDutcoOsXPdf3IgKGwK5cibw3C9xd.png"
          alt="Organic Marketing logo"
          className="h-8 w-auto mr-2"
        />
        <span className="text-xl font-semibold">Organic Marketing</span>
      </div>
      <nav className="flex-1 px-2 py-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-4 py-2 mt-2 text-sm transition-colors duration-200 ${
                isActive
                  ? "bg-[#0070FF] text-white rounded-lg"
                  : "text-gray-300 hover:bg-[#0070FF]/10 hover:text-white rounded-lg"
              }`}
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.name}
            </Link>
          )
        })}
      </nav>
      <button
        onClick={handleSignOut}
        className="flex items-center px-4 py-2 mt-auto text-sm text-gray-300 hover:bg-[#0070FF]/10 hover:text-white rounded-lg"
      >
        <LogOut className="h-5 w-5 mr-3" />
        Sign Out
      </button>
    </div>
  )
}

