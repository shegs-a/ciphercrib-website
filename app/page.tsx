import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Process } from "@/components/process"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <Footer />
    </main>
  )
}
