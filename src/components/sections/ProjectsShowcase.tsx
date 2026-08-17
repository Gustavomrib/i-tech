import { motion, useReducedMotion } from 'motion/react'

import { projects } from '../../data/projects'
import { sectionHeaderVariants } from '../../lib/motion'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { ProjectCard } from '../projects/ProjectCard'

const homeProjects = projects.slice(0, 3)

export function ProjectsShowcase() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <Section
      aria-labelledby="projects-title"
      className="scroll-mt-18 border-t border-border bg-background-secondary"
      id="projetos"
    >
      <Container>
        <motion.header
          className="grid gap-6 lg:grid-cols-12 lg:gap-8"
          initial={prefersReducedMotion ? false : 'hidden'}
          variants={sectionHeaderVariants}
          viewport={{ once: true, amount: 0.5 }}
          whileInView="visible"
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

        <div className="mt-14 grid items-start gap-x-6 gap-y-12 sm:mt-18 md:grid-cols-2 lg:mt-24 lg:grid-cols-3 lg:gap-8">
          {homeProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
