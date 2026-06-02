import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AICoreSection } from "@/components/ai-core-section"
import { FeaturesSection } from "@/components/features-section"
import { LiveInterfaceSection } from "@/components/live-interface-section"
import { SystemStatusSection } from "@/components/tizim-status-section"
import { UpdatesSection } from "@/components/yangilanishlar-section"
import { FutureSection } from "@/components/future-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Scanlines overlay */}
      <div className="scanlines" />
      
      <Navigation />
      
      <HeroSection />
      
      <section id="core">
        <AICoreSection />
      </section>
      
      <section id="features">
        <FeaturesSection />
      </section>
      
      <LiveInterfaceSection />
      
      <section id="tizim">
        <SystemStatusSection />
      </section>
      
      <section id="yangilanishlar">
        <UpdatesSection />
      </section>
      
      <section id="vision">
        <FutureSection />
      </section>
      
      <Footer />
    </main>
  )
}
