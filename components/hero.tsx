import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Futuristic Background */}
      <div className="absolute inset-0 gradient-hero">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(to right, hsl(var(--cyan-electric) / 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--cyan-electric) / 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-electric/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-warm/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Premium Hybrid Consultancy</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-tight animate-fade-in-up">
            Transform Your
            <span className="block mt-2 bg-gradient-to-r from-cyan-electric via-primary to-gold-warm bg-clip-text text-transparent">
              Digital Future
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-cool max-w-3xl mx-auto mb-10 text-pretty leading-relaxed animate-fade-in-up delay-200">
            End-to-end solutions in software development, digital growth, strategic communications, and premium event
            experiences. Where innovation meets execution.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
            <Button
              size="lg"
              className="gradient-cyan text-navy-deep font-semibold text-base px-8 py-6 hover:opacity-90 transition-all hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 text-base px-8 py-6 bg-transparent"
            >
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto animate-fade-in-up delay-500">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold-warm mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Team Experts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold-warm mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
