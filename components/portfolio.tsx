import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "FinTech Platform Redesign",
    category: "Software Development",
    image: "/modern-fintech-dashboard.png",
    metrics: [
      { label: "User Growth", value: "+185%" },
      { label: "Time Saved", value: "40hrs/week" },
    ],
  },
  {
    title: "Global Brand Launch Campaign",
    category: "Digital Marketing",
    image: "/luxury-brand-marketing-campaign.jpg",
    metrics: [
      { label: "Reach", value: "2.4M" },
      { label: "Engagement", value: "+320%" },
    ],
  },
  {
    title: "Executive Summit Production",
    category: "Events",
    image: "/luxury-corporate-event-modern-stage.jpg",
    metrics: [
      { label: "Attendees", value: "1,200" },
      { label: "Satisfaction", value: "98%" },
    ],
  },
  {
    title: "SaaS Go-to-Market Strategy",
    category: "Communications & PR",
    image: "/modern-tech-startup-press-release.jpg",
    metrics: [
      { label: "Media Placements", value: "47" },
      { label: "Tier-1 Coverage", value: "12" },
    ],
  },
  {
    title: "E-commerce Platform Build",
    category: "Software Development",
    image: "/modern-ecommerce-shopping-interface.jpg",
    metrics: [
      { label: "Revenue Increase", value: "+240%" },
      { label: "Conversion Rate", value: "8.4%" },
    ],
  },
  {
    title: "Industry Thought Leadership",
    category: "Communications & PR",
    image: "/executive-speaking-at-conference.jpg",
    metrics: [
      { label: "Speaking Engagements", value: "23" },
      { label: "LinkedIn Growth", value: "+890%" },
    ],
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-navy-light/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-warm/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Featured
            <span className="text-gold-warm"> Case Studies</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Real results for ambitious brands and forward-thinking organizations
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-gold-warm/50 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-gold-warm/10"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm">
                  <span className="text-xs font-medium text-navy-deep">{project.category}</span>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-gold-warm transition-colors flex items-start justify-between">
                  <span className="text-pretty">{project.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-gold-warm opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </h3>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx}>
                      <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
