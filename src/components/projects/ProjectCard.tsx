import { ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'

import type { Project } from '../../data/projects'
import { Button } from '../ui/Button'

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
      <div
        className={[
          'relative overflow-hidden border border-border bg-background',
          isFeatured ? 'aspect-[4/3]' : 'aspect-video',
        ].join(' ')}
      >
        {project.media.kind === 'image' ? (
          <img
            alt={project.media.alt}
            className="h-full w-full object-cover transition-ui motion-safe:group-hover:scale-[1.02]"
            decoding="async"
            loading="lazy"
            src={project.media.src}
          />
        ) : (
          <div
            aria-hidden="true"
            className="project-media-placeholder absolute inset-0 transition-ui motion-safe:group-hover:scale-[1.02]"
          >
            <span className="type-label absolute left-4 top-4 text-text-muted sm:left-5 sm:top-5">
              {project.media.label}
            </span>
            <span className="type-label absolute bottom-4 right-4 text-text-muted sm:bottom-5 sm:right-5">
              {project.equipmentType}
            </span>
            <span className="absolute left-1/2 top-1/2 h-px w-16 -translate-x-1/2 bg-border-highlight" />
          </div>
        )}
      </div>

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
          aria-label={`Ver projeto: ${project.title}`}
          className="-ml-4 mt-5"
          size="sm"
          to={`/projetos/${project.slug}`}
          variant="ghost"
        >
          Ver projeto
          <ArrowUpRight aria-hidden="true" size={17} />
        </Button>
      </div>
    </motion.article>
  )
}
