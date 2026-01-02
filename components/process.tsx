import { Search, Lightbulb, Hammer, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description: "Deep-dive into your business, audience, and competitive landscape to uncover opportunities.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategize",
    description: "Craft data-backed roadmaps and creative concepts aligned with your objectives.",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Build",
    description: "Execute with precision across development, campaigns, content, and experiences.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Amplify",
    description: "Launch, optimize, and scale with continuous measurement and iteration.",
  },
]

export function Process() {
  return (
    <section id="process" className="py-32 bg-navy-light/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-warm/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Our
            <span className="text-gold-warm"> Process</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            A proven methodology refined through hundreds of successful engagements
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connecting Line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                )}

                {/* Step Content */}
                <div className="text-center">
                  {/* Number */}
                  <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>

                  {/* Icon */}
                  <div className="inline-flex w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 items-center justify-center mb-4">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
