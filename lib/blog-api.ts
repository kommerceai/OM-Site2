import { cache } from "react"

export type Post = {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  coverImage: string
  readingTime: number
}

// Mock data instead of database queries
export const getPosts = cache(async (page = 1): Promise<{ posts: Post[]; totalPages: number }> => {
  const posts: Post[] = [
    {
      slug: "tiktok-marketing-trends-2025",
      title: "Top TikTok Marketing Trends for 2025",
      date: "2025-01-15",
      category: "Trends",
      excerpt: "Discover the latest TikTok marketing trends that will dominate the platform in 2025.",
      coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1wM69uGTdE06nRk85zVAB8qPBxxY8E.png",
      readingTime: 5,
    },
    {
      slug: "organic-growth-strategies",
      title: "10 Proven Organic Growth Strategies for TikTok",
      date: "2025-01-10",
      category: "Strategy",
      excerpt: "Learn the top 10 strategies to grow your TikTok following organically and increase engagement.",
      coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-INf3aBcDHjZlb215ACO2ul1qtqoYIO.png",
      readingTime: 7,
    },
    // Add more mock posts as needed
  ]

  const POSTS_PER_PAGE = 9
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const start = (page - 1) * POSTS_PER_PAGE
  const end = start + POSTS_PER_PAGE

  return {
    posts: posts.slice(start, end),
    totalPages,
  }
})

export const getPost = cache(async (slug: string): Promise<Post | null> => {
  const { posts } = await getPosts(1)
  return posts.find((post) => post.slug === slug) || null
})

export const searchPosts = cache(async (query: string): Promise<Post[]> => {
  const { posts } = await getPosts(1)
  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase()),
  )
})

