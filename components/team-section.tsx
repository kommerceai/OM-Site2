import { Card, CardContent } from "@/components/ui/card"
import { LinkedinIcon as LinkedIn, Twitter } from 'lucide-react'

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=400&width=400",
    bio: "With over a decade of experience in digital marketing, Sarah founded Organic Marketing to help brands authentically connect with their audience on TikTok.",
    linkedin: "https://www.linkedin.com/in/sarahjohnson",
    twitter: "https://twitter.com/sarahjohnson",
  },
  {
    name: "Michael Chen",
    role: "Head of Strategy",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Michael's innovative approach to content strategy has helped numerous brands achieve viral success on TikTok.",
    linkedin: "https://www.linkedin.com/in/michaelchen",
    twitter: "https://twitter.com/michaelchen",
  },
  {
    name: "Emily Rodriguez",
    role: "Creator Relations Manager",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Emily's expertise in influencer marketing and her vast network of creators make her an invaluable asset to our team and clients.",
    linkedin: "https://www.linkedin.com/in/emilyrodriguez",
    twitter: "https://twitter.com/emilyrodriguez",
  },
]

export function TeamSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name}>
              <CardContent className="p-6">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-1 text-center">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 text-center">{member.role}</p>
                <p className="text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#0070FF] hover:text-[#001F5A]">
                    <LinkedIn className="h-5 w-5" />
                  </a>
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-[#0070FF] hover:text-[#001F5A]">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

