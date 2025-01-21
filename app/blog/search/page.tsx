import type { Metadata } from "next"
import { BlogList } from "@/components/blog-list"
import { BlogSearch } from "@/components/blog-search"
import { searchPosts } from "@/lib/blog-api"

export const metadata: Metadata = {
  title: "Search Results | Blog | Organic Marketing",
  description: "Search results for blog posts on TikTok marketing and organic growth strategies.",
}

export default async function BlogSearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const query = typeof searchParams.q === "string" ? searchParams.q : ""
  const posts = await searchPosts(query)

  return (
    <main className="py-24">
      <div className="container">
        <h1 className="text-3xl font-bold mb-8">Search Results for "{query}"</h1>
        <BlogSearch />
        {posts.length > 0 ? (
          <BlogList posts={posts} />
        ) : (
          <p className="text-center text-muted-foreground">No posts found matching your search query.</p>
        )}
      </div>
    </main>
  )
}

