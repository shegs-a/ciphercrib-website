import { Target, Database, Zap, Shield, Users, Globe } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "End-to-End Solutions",
    description: "From strategy to execution, we handle every aspect of your digital transformation journey.",
  },
  {
    icon: Database,
    title: "Data-Driven Execution",
    description: "Every decision backed by analytics, insights, and measurable performance metrics.",
  },
  {
    icon: Zap,
    title: "Modern Cloud Stack",
    description: "Built on cutting-edge technologies that scale with your ambitions and evolving needs.",
  },
  {
    icon: Shield,
    title: "Strategic Communications",
    description: "Crafted narratives that resonate with your audience and amplify your market position.",
  },
  {
    icon: Users,
    title: "Dedicated Expertise",
    description: "Access to specialized talent across development, marketing, PR, and event production.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "International experience with local execution for brands that think beyond borders.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-32 bg-background relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Why Choose
            <span className="text-primary"> Ciphercrib</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            The competitive advantages that set us apart in a crowded marketplace
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="group text-center">
              {/* Icon */}
              <div className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                <value.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed text-pretty">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
