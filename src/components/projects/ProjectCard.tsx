import { ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'

import type { Project } from '../../data/projects'
import { revealItemVariants } from '../../lib/motion'
import { Button } from '../ui/Button'
import { ProjectMediaFrame } from './ProjectMediaFrame'

type ProjectCardProps = {
  project: Project
  variant?: 'featured' | 'standard'
  className?: string
}

export function ProjectCard({
  project,
  variant = 'standard',
  className,
}: ProjectCardProps) {
  const isFeatured = variant === 'featured'
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.article
      className={[
        'group flex h-full min-w-0 flex-col',
        isFeatured
          ? 'bg-surface-elevated p-4 shadow-surface sm:p-6'
          : 'border-t border-border pt-4 transition-ui hover:border-border-highlight',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      initial={prefersReducedMotion ? false : 'hidden'}
      variants={revealItemVariants}
      viewport={{ once: true, amount: 0.16 }}
      whileInView="visible"
    >
      <ProjectMediaFrame
        className={
          project.media.kind === 'placeholder'
            ? isFeatured
              ? 'aspect-[4/3]'
              : 'aspect-video'
            : undefined
        }
        interactive
        media={project.media}
        meta={project.equipmentType}
      />

      <div className={isFeatured ? 'pt-6 sm:pt-8' : 'pt-5'}>
        <div className="flex items-center justify-between gap-4">
          <p className="type-label text-primary">{project.category}</p>
          <span className="type-label text-text-muted">{project.number}</span>
        </div>
        <h3
          className={[
            'mt-4 text-text-primary transition-ui motion-safe:group-hover:translate-x-1',
            isFeatured
              ? 'type-h2'
              : 'font-display text-2xl font-bold leading-tight tracking-[-0.02em]',
          ].join(' ')}
        >
          {project.title}
        </h3>
        <p
          className={[
            'mt-4 max-w-2xl text-text-secondary',
            isFeatured ? 'type-body' : 'leading-relaxed',
          ].join(' ')}
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
