import { ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'

import type { Project } from '../../data/projects'
import { revealItemVariants } from '../../lib/motion'
import { Button } from '../ui/Button'
import { ProjectMediaFrame } from './ProjectMediaFrame'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.article
      className="group flex min-w-0 flex-col border-t border-border pt-4 transition-ui hover:border-border-highlight"
      initial={prefersReducedMotion ? false : 'hidden'}
      variants={revealItemVariants}
      viewport={{ once: true, amount: 0.16 }}
      whileInView="visible"
    >
      <ProjectMediaFrame
        className="aspect-[3/4]"
        fitFrame
        interactive
        media={project.media}
        meta={project.equipmentType}
      />

      <div className="pt-5">
        <div className="flex items-center justify-between gap-4">
          <p className="type-label text-primary">{project.category}</p>
          <span className="type-label text-text-muted">{project.number}</span>
        </div>
        <h3
          className="mt-4 font-display text-2xl font-bold leading-tight tracking-[-0.02em] text-text-primary transition-ui motion-safe:group-hover:translate-x-1"
        >
          {project.title}
        </h3>
        <p
          className="mt-4 max-w-2xl leading-relaxed text-text-secondary"
        >
          {project.shortDescription}
        </p>
        <Button
          aria-label={`Ver detalhes: ${project.title}`}
          className="-ml-4 mt-5"
          size="sm"
          to={`/projetos/${project.slug}`}
          variant="ghost"
        >
          Ver detalhes
          <ArrowUpRight
            aria-hidden="true"
            className="transition-ui motion-safe:group-hover:translate-x-0.5"
            size={17}
          />
        </Button>
      </div>
    </motion.article>
  )
}
