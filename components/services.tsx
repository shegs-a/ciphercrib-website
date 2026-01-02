"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, TrendingUp, Megaphone, Calendar } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web & Software Development",
    description:
      "Modern, scalable applications built with cutting-edge technologies and cloud infrastructure. From MVPs to enterprise systems.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & Growth",
    description:
      "Data-driven strategies that amplify your brand and accelerate growth. SEO, paid media, conversion optimization, and analytics.",
  },
  {
    icon: Megaphone,
    title: "Communications & PR Consulting",
    description:
      "Strategic narrative development and media relations that position your brand as an industry leader and thought pioneer.",
  },
  {
    icon: Calendar,
    title: "Events Consulting",
    description:
      "Immersive experiences that captivate audiences. From corporate conferences to exclusive brand activations.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-32 bg-background relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Comprehensive
            <span className="text-primary"> Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Four core pillars of expertise, unified under one strategic vision
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
