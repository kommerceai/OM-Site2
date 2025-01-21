import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import type { Post } from "@/lib/blog-api"

interface BlogPostCardProps {
  post: Post
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col">
      <div className="relative aspect-video">
        <Image
          src={post.coverImage || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary">{post.category}</Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-1 h-3 w-3" />
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
          </div>
        </div>
        <Link href={`/blog/${post.slug}`} className="hover:underline">
          <h3 className="text-xl font-semibold">{post.title}</h3>
        </Link>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="mr-1 h-3 w-3" />
          <span>{post.readingTime} min read</span>
        </div>
      </CardFooter>
    </Card>
  )
}

