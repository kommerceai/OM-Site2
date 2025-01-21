import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookOpen, Video, Users } from 'lucide-react'

const communityResources = [
  {
    icon: BookOpen,
    title: "Blog Posts",
    description: "Dive deep into organic growth strategies and tips",
    link: "#"
  },
  {
    icon: Video,
    title: "Webinars",
    description: "Learn from industry experts in our live sessions",
    link: "#"
  },
  {
    icon: Users,
    title: "Creator Community",
    description: "Connect with fellow creators and share insights",
    link: "#"
  }
]

export function CommunityEngagementHub() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Join Our Thriving Community
          </h2>
          <p className="text-lg text-muted-foreground">
            Access valuable resources and connect with like-minded creators
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {communityResources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <resource.icon className="h-12 w-12 text-[#0070FF] mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground mb-4">{resource.description}</p>
                  <Button variant="outline" asChild>
                    <a href={resource.link}>Explore</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Stay Updated</h3>
            <form className="flex flex-col sm:flex-row gap-4">
              <Input type="email" placeholder="Enter your email" className="flex-grow" />
              <Button type="submit" className="bg-[#001F5A] hover:bg-[#0070FF] text-white">
                Subscribe to Newsletter
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

