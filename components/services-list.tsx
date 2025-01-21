import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, TrendingUp, Users, Video, BarChart, Zap } from 'lucide-react'

const services = [
  {
    title: "TikTok Strategy Development",
    description: "Custom-tailored content strategies aligned with your brand voice and target audience.",
    icon: TrendingUp,
    features: [
      "Audience analysis and targeting",
      "Content calendar planning",
      "Trend forecasting and integration",
    ],
  },
  {
    title: "Creator Collaborations",
    description: "Connect with influential TikTok creators to amplify your brand message.",
    icon: Users,
    features: [
      "Creator vetting and selection",
      "Campaign ideation and execution",
      "Performance tracking and optimization",
    ],
  },
  {
    title: "Content Creation & Production",
    description: "High-quality, engaging TikTok content that resonates with your audience.",
    icon: Video,
    features: [
      "Script writing and storyboarding",
      "Professional filming and editing",
      "Music and sound effect selection",
    ],
  },
  {
    title: "Analytics & Reporting",
    description: "In-depth analysis of your TikTok performance to drive data-informed decisions.",
    icon: BarChart,
    features: [
      "Custom performance dashboards",
      "Monthly comprehensive reports",
      "Competitor benchmarking",
    ],
  },
  {
    title: "TikTok Ads Management",
    description: "Strategic paid campaigns to boost your organic content and reach new audiences.",
    icon: Zap,
    features: [
      "Ad creative development",
      "Audience targeting and optimization",
      "Budget management and ROI tracking",
    ],
  },
]

export function ServicesList() {
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <service.icon className="h-10 w-10 text-[#0070FF] mb-4" />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

