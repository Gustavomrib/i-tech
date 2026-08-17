import { ArrowUpRight } from 'lucide-react'

import { Navbar } from '../components/layout/Navbar'
import { SkipLink } from '../components/layout/SkipLink'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { ProjectCard } from '../components/projects/ProjectCard'
import { Button } from '../components/ui/Button'
import { projects } from '../data/projects'

const projectLayout = [
  'lg:col-span-7',
  'lg:col-span-5 lg:mt-18',
  'lg:col-span-5',
  'lg:col-span-7 lg:mt-18',
  'lg:col-span-8 lg:col-start-3',
] as const

export function ProjectsPage() {
  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="conteudo-principal">
        <Section className="min-h-screen border-b border-border bg-background pt-32 sm:pt-36">
          <Container>
            <header className="grid gap-6 border-b border-border pb-12 lg:grid-cols-12 lg:gap-8 lg:pb-16">
              <div className="lg:col-span-3">
                <p className="type-label text-primary">Serviços realizados</p>
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

            <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-y-20">
              {projects.map((project, index) => (
                <ProjectCard
                  className={projectLayout[index] ?? 'lg:col-span-6'}
                  key={project.id}
                  project={project}
                  variant={project.featured ? 'featured' : 'standard'}
                />
              ))}
            </div>

            <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:pt-10">
              <div>
                <h2 className="type-h3 text-text-primary">Tem um serviço em mente?</h2>
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
    </>
  )
}
