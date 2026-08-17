import { Navbar } from '../components/layout/Navbar'
import { Hero } from '../components/sections/Hero'
import { ServiceProcess } from '../components/sections/ServiceProcess'
import { Services } from '../components/sections/Services'

export function HomePage() {
  return (
    <>
      <a
        className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-control bg-primary px-4 py-3 font-semibold text-text-on-primary transition-ui focus:translate-y-0"
        href="#conteudo-principal"
      >
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo-principal">
        <Hero />
        <Services />
        <ServiceProcess />
      </main>
    </>
  )
}
