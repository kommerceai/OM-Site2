import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import { getPost } from "@/lib/blog-api"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug)
  if (!post) return { title: "Post Not Found" }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
    },
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="py-24">
      <div className="container max-w-4xl">
        <div className="mb-8">
          <Badge variant="secondary" className="mb-2">
            {post.category}
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>
        </div>
        <div className="relative aspect-video mb-8">
          <Image
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="prose prose-lg max-w-none">
          {/* In a real application, this would be the full content of the blog post */}
          <p>{post.excerpt}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <h2>Key Takeaways</h2>
          <ul>
            <li>Important point 1</li>
            <li>Critical insight 2</li>
            <li>Valuable strategy 3</li>
          </ul>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </div>
      </div>
    </article>
  )
}

