import { ArrowUpRight } from 'lucide-react'
import { motion, type Variants } from 'motion/react'

import type { Project } from '../../data/projects'
import { motionDuration, motionEase } from '../../lib/motion'
import { Button } from '../ui/Button'
import { ProjectMediaFrame } from './ProjectMediaFrame'

type ProjectCardProps = {
  project: Project
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionDuration.reveal,
      ease: motionEase.reveal,
      staggerChildren: 0.07,
    },
  },
}

const mediaVariants: Variants = {
  hidden: { opacity: 0, scale: 0.985, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: motionDuration.editorial,
      ease: motionEase.reveal,
    },
  },
}

const copyPartVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionDuration.normal,
      ease: motionEase.reveal,
    },
  },
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      className="group flex min-w-0 flex-col border-t border-border pt-4 transition-ui hover:border-border-highlight motion-safe:hover:-translate-y-1"
      variants={cardVariants}
    >
      <motion.div variants={mediaVariants}>
        <ProjectMediaFrame
          className="aspect-[3/4]"
          fitFrame
          interactive
          media={project.media}
          meta={project.equipmentType}
        />
      </motion.div>

      <div className="pt-5">
        <motion.div
          className="flex items-center justify-between gap-4"
          variants={copyPartVariants}
        >
          <p className="type-label text-primary">{project.category}</p>
          <span className="type-label text-text-muted">{project.number}</span>
        </motion.div>
        <motion.h3
          className="mt-4 font-display text-2xl font-bold leading-tight tracking-[-0.02em] text-text-primary transition-ui motion-safe:group-hover:translate-x-1"
          variants={copyPartVariants}
        >
          {project.title}
        </motion.h3>
        <motion.p
          className="mt-4 max-w-2xl leading-relaxed text-text-secondary"
          variants={copyPartVariants}
        >
          {project.shortDescription}
        </motion.p>
        <motion.div variants={copyPartVariants}>
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
              className="transition-ui motion-safe:group-hover:translate-x-1.5"
              size={17}
            />
          </Button>
        </motion.div>
      </div>
    </motion.article>
  )
}
