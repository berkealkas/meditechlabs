import Hero from "@/components/Hero"
import PatientComplaint from "@/components/PatientComplaint"
import About from "@/components/About"
import Features from "@/components/Features"
import Sustainability from "@/components/Sustainability"
import Services from "@/components/Services"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <div className="bg-sky-900 min-h-screen">
      <Hero />
      <PatientComplaint />
      <About />
      <Features />
      <Sustainability />
      <Services />
      <Contact />
    </div>
  )
}