import type { Metadata } from "next"
import { BlogHero } from "@/components/blog-hero"
import { BlogList } from "@/components/blog-list"
import { BlogPagination } from "@/components/blog-pagination"
import { BlogSearch } from "@/components/blog-search"
import { getPosts } from "@/lib/blog-api"

export const metadata: Metadata = {
  title: "Blog | Organic Marketing",
  description: "Discover the latest trends and strategies in TikTok marketing and organic growth.",
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page = typeof searchParams.page === "string" ? Number(searchParams.page) : 1
  const { posts, totalPages } = await getPosts(page)

  return (
    <main>
      <BlogHero />
      <div className="container py-12">
        <BlogSearch />
        <BlogList posts={posts} />
        <BlogPagination currentPage={page} totalPages={totalPages} />
      </div>
    </main>
  )
}

