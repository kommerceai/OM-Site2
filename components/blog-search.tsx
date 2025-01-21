"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function BlogSearch() {
  const [query, setQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/blog/search?q=${encodeURIComponent(query)}`)
  }

  return (
    <form onSubmit={handleSearch} className="flex gap-2 mb-8">
      <Input
        type="search"
        placeholder="Search blog posts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow"
      />
      <Button type="submit">
        <Search className="h-4 w-4 mr-2" />
        Search
      </Button>
    </form>
  )
}

