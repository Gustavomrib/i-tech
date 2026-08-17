import { motion } from 'motion/react'

import { projects } from '../../data/projects'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { ProjectCard } from '../projects/ProjectCard'

const homeProjects = projects.slice(0, 3)
const projectLayout = [
  'lg:col-span-7 lg:row-span-2',
  'lg:col-span-5',
  'lg:col-span-5',
] as const

export function ProjectsShowcase() {
  return (
    <Section
      aria-labelledby="projects-title"
      className="scroll-mt-18 border-t border-border bg-background-secondary"
      id="projetos"
    >
      <Container>
        <motion.header
          className="grid gap-6 lg:grid-cols-12 lg:gap-8"
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
          viewport={{ once: true, amount: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="type-label text-primary lg:col-span-3">Na bancada</p>
          <div className="lg:col-span-8 lg:col-start-5">
            <h2 className="type-h1 text-text-primary" id="projects-title">
              Alguns dos nossos <span className="text-primary">trabalhos.</span>
            </h2>
            <p className="type-body mt-6 max-w-2xl text-text-secondary">
              Serviços reais de manutenção e cuidado com computadores que passaram
              pela i&apos;tech.
            </p>
          </div>
        </motion.header>

        <div className="mt-14 grid gap-10 sm:mt-18 lg:grid-cols-12 lg:items-start lg:gap-8 lg:mt-24">
          {homeProjects.map((project, index) => (
            <ProjectCard
              className={projectLayout[index]}
              key={project.id}
              project={project}
              variant={index === 0 ? 'featured' : 'standard'}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
