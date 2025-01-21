import { BlogPostCard } from "@/components/blog-post-card"
import type { Post } from "@/lib/blog-api"

interface BlogListProps {
  posts: Post[]
}

export function BlogList({ posts }: BlogListProps) {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}

