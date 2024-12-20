import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { Testimonials } from '@/components/testimonials'
import { Process } from '@/components/process'
import { FAQ } from '@/components/faq'
import Logos from '@/components/logos'
import { Footer } from '@/components/footer'
import { Contact } from '@/components/contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <Testimonials />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}

