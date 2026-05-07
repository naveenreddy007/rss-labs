import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Industries } from "@/components/industries"
import { TestingMatrix } from "@/components/testing-matrix"
import { EquipmentCatalogue } from "@/components/equipment-catalogue"
import { AmcPlans } from "@/components/amc-plans"
import { SupplyBrands } from "@/components/supply-brands"
import { Process } from "@/components/process"
import { About } from "@/components/about"
import { TrustCta } from "@/components/trust-cta"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Industries />
      <TestingMatrix />
      <EquipmentCatalogue />
      <AmcPlans />
      <SupplyBrands />
      <Process />
      <About />
      <TrustCta />
      <Contact />
      <Footer />
    </main>
  )
}
