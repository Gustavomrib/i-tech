import { ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'

import { Footer } from '../components/layout/Footer'
import { Navbar } from '../components/layout/Navbar'
import { SkipLink } from '../components/layout/SkipLink'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { ProjectCard } from '../components/projects/ProjectCard'
import { Button } from '../components/ui/Button'
import { projects } from '../data/projects'
import { usePageMetadata } from '../hooks/usePageMetadata'
import { createStaggerVariants } from '../lib/motion'

const projectGridVariants = createStaggerVariants(0.11, 0.04)

export function ProjectsPage() {
  const prefersReducedMotion = useReducedMotion()

  usePageMetadata({
    title: "Trabalhos realizados | i'tech",
    description:
      "Conheça trabalhos reais de limpeza e manutenção de PCs documentados pela i'tech, que atende Volta Redonda e região.",
  })

  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="conteudo-principal">
        <Section className="min-h-screen bg-background pt-32 sm:pt-36">
          <Container>
            <header className="grid gap-6 border-b border-border pb-12 lg:grid-cols-12 lg:gap-8 lg:pb-16">
              <div className="lg:col-span-3">
                <p className="type-label text-primary">Trabalhos realizados</p>
              </div>
              <div className="lg:col-span-8 lg:col-start-5">
                <h1 className="type-h1 text-text-primary">
                  Trabalho técnico visto de <span className="text-primary">perto.</span>
                </h1>
                <p className="type-body mt-6 max-w-2xl text-text-secondary">
                  Trabalhos reais de limpeza e manutenção documentados em nossa
                  bancada.
                </p>
              </div>
            </header>

            <motion.div
              className="mt-12 grid items-start gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
              initial={prefersReducedMotion ? false : 'hidden'}
              variants={projectGridVariants}
              viewport={{ once: true, amount: 0.12 }}
              whileInView="visible"
            >
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>

            <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:pt-10">
              <div>
                <h2 className="type-h3 text-text-primary">Tem um trabalho em mente?</h2>
                <p className="mt-2 text-text-secondary">
                  Conte o que você precisa para o seu computador.
                </p>
              </div>
              <Button className="w-full sm:w-auto" to="/#contato">
                Solicitar orçamento
                <ArrowUpRight aria-hidden="true" size={18} />
              </Button>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  )
}
