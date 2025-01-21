import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function OfflinePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">You're Offline</h1>
      <p className="text-xl mb-8">Please check your internet connection and try again.</p>
      <Button asChild>
        <Link href="/">Retry</Link>
      </Button>
    </div>
  )
}

