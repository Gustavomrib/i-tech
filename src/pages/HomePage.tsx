import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { Navbar } from '../components/layout/Navbar'
import { SkipLink } from '../components/layout/SkipLink'
import { Hero } from '../components/sections/Hero'
import { ProjectsShowcase } from '../components/sections/ProjectsShowcase'
import { ServiceProcess } from '../components/sections/ServiceProcess'
import { Services } from '../components/sections/Services'

export function HomePage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return

    const animationFrame = window.requestAnimationFrame(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    })

    return () => window.cancelAnimationFrame(animationFrame)
  }, [hash])

  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="conteudo-principal">
        <Hero />
        <Services />
        <ServiceProcess />
        <ProjectsShowcase />
      </main>
    </>
  )
}
