"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    quote:
      "Ciphercrib transformed our entire digital presence. Their strategic approach and technical excellence delivered results beyond our expectations.",
    author: "Sarah Chen",
    role: "CEO, TechVentures Inc",
    avatar: "/professional-woman-executive.png",
    company: "TechVentures",
  },
  {
    quote:
      "The team's ability to handle everything from development to PR made our product launch seamless. True end-to-end partnership.",
    author: "Michael Rodriguez",
    role: "Founder, GrowthLabs",
    avatar: "/professional-man-founder.png",
    company: "GrowthLabs",
  },
  {
    quote:
      "Working with Ciphercrib elevated our brand positioning and drove measurable growth. Their expertise across disciplines is unmatched.",
    author: "Emily Thompson",
    role: "CMO, Innovate Solutions",
    avatar: "/professional-woman-cmo.png",
    company: "Innovate Solutions",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Client
            <span className="text-primary"> Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Trusted by industry leaders and innovative startups alike
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-border relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote className="w-24 h-24 text-primary" />
            </div>

            <CardContent className="p-12 relative">
              {/* Quote */}
              <blockquote className="text-2xl md:text-3xl font-medium text-foreground mb-8 text-balance leading-relaxed">
                "{testimonials[current].quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16 border-2 border-primary">
                  <AvatarImage src={testimonials[current].avatar || "/placeholder.svg"} />
                  <AvatarFallback className="bg-primary/10 text-primary font-bold">
                    {testimonials[current].author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-bold text-foreground text-lg">{testimonials[current].author}</div>
                  <div className="text-muted-foreground">{testimonials[current].role}</div>
                  <div className="text-sm text-gold-warm">{testimonials[current].company}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? "bg-primary w-8" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
