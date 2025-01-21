import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface BlogPaginationProps {
  currentPage: number
  totalPages: number
}

export function BlogPagination({ currentPage, totalPages }: BlogPaginationProps) {
  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      <Button
        variant="outline"
        size="icon"
        as={Link}
        href={`/blog?page=${currentPage - 1}`}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Button
          key={page}
          variant={currentPage === page ? "default" : "outline"}
          size="icon"
          as={Link}
          href={`/blog?page=${page}`}
        >
          {page}
        </Button>
      ))}
      <Button
        variant="outline"
        size="icon"
        as={Link}
        href={`/blog?page=${currentPage + 1}`}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

