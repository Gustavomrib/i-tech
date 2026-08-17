import { ArrowUpRight, MapPin, Truck } from 'lucide-react'
import { motion, useReducedMotion, type Variants } from 'motion/react'

import { motionDuration, motionEase } from '../../lib/motion'
import { Container } from '../layout/Container'
import { Button } from '../ui/Button'

const contentVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.06,
      staggerChildren: 0.075,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motionDuration.reveal, ease: motionEase.reveal },
  },
}

const accentVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.12,
      duration: motionDuration.normal,
      ease: motionEase.reveal,
    },
  },
}

const detailsVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.065,
    },
  },
}

export function Hero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-background pb-16 pt-30 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-36 xl:pb-28 xl:pt-40"
      id="inicio"
    >
      <div aria-hidden="true" className="hero-page-grid absolute inset-0 -z-10" />

      <Container className="layout-container-wide">
        <div className="grid items-start lg:grid-cols-12">
          <motion.div
            animate="visible"
            className="relative z-10 min-w-0 max-w-5xl lg:col-span-8"
            initial={prefersReducedMotion ? false : 'hidden'}
            variants={contentVariants}
          >
            <motion.p className="type-label text-accent" variants={itemVariants}>
              Hardware <span aria-hidden="true">•</span> Performance{' '}
              <span aria-hidden="true">•</span> Manutenção
            </motion.p>

            <motion.h1
              className="type-display mt-5 max-w-5xl text-text-primary sm:mt-6"
              id="hero-title"
              variants={itemVariants}
            >
              <span className="lg:block">Seu PC pode</span>{' '}
              <span className="lg:block">
                entregar{' '}
                <motion.span
                  className="inline-block text-primary"
                  variants={accentVariants}
                >
                  mais.
                </motion.span>
              </span>
            </motion.h1>

            <motion.div
              className="mt-8 max-w-xl border-l border-border-highlight pl-5 sm:mt-10 sm:pl-6"
              variants={detailsVariants}
            >
              <motion.p className="type-body text-text-secondary" variants={itemVariants}>
                Montagem, diagnóstico, manutenção e otimização de computadores em
                Volta Redonda e região.
              </motion.p>
              <motion.p
                className="mt-4 flex items-center gap-3 text-sm font-semibold text-text-primary sm:text-base"
                variants={itemVariants}
              >
                <Truck aria-hidden="true" className="shrink-0 text-primary" size={20} />
                Buscamos seu equipamento no local.
              </motion.p>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
              variants={itemVariants}
            >
              <Button className="w-full sm:w-auto" href="#contato" size="lg">
                Solicitar orçamento
                <ArrowUpRight
                  aria-hidden="true"
                  className="transition-ui motion-safe:group-hover:translate-x-0.5"
                  size={19}
                />
              </Button>
              <Button className="w-full sm:w-auto" size="lg" to="/projetos" variant="secondary">
                Ver trabalhos
              </Button>
            </motion.div>

            <motion.p
              className="mt-7 flex items-center gap-2 text-sm text-text-muted"
              variants={itemVariants}
            >
              <MapPin aria-hidden="true" size={16} />
              Volta Redonda — RJ · Atendimento regional sob disponibilidade
            </motion.p>
          </motion.div>

          <div
            aria-hidden="true"
            className="relative hidden min-h-80 lg:col-span-3 lg:col-start-10 lg:block"
          >
            <span className="absolute right-6 top-8 h-48 w-px bg-border-highlight xl:right-10 xl:h-56" />
            <span className="absolute right-5 top-8 size-2 bg-primary xl:right-9" />
            <span className="absolute right-6 top-56 h-px w-20 bg-border xl:right-10 xl:top-64 xl:w-28" />
          </div>
        </div>
      </Container>
    </section>
  )
}
