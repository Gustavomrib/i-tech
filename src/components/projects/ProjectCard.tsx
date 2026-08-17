import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'

import type { Project } from '../../data/projects'
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
      initial={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
      viewport={{ once: true, amount: 0.16 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <ProjectMediaFrame
        className={isFeatured ? 'aspect-[4/3]' : 'aspect-video'}
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
          aria-label={`Ver serviço: ${project.title}`}
          className="-ml-4 mt-5"
          size="sm"
          to={`/projetos/${project.slug}`}
          variant="ghost"
        >
          Ver serviço
          <ArrowUpRight aria-hidden="true" size={17} />
        </Button>
      </div>
    </motion.article>
  )
}
