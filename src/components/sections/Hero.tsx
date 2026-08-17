import { ArrowUpRight, MapPin, Truck } from 'lucide-react'
import { motion, type Variants } from 'motion/react'

import { Container } from '../layout/Container'
import { Button } from '../ui/Button'

const contentVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.08,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
  },
}

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate min-h-svh overflow-hidden bg-background pb-16 pt-30 sm:pb-20 sm:pt-36 lg:flex lg:items-center lg:pb-24 lg:pt-32"
      id="inicio"
    >
      <div aria-hidden="true" className="hero-page-grid absolute inset-0 -z-10" />

      <Container>
        <div className="grid items-center lg:grid-cols-12">
          <motion.div
            animate="visible"
            className="relative z-10 lg:col-span-8 lg:row-start-1"
            initial="hidden"
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
              Seu PC pode{' '}
              <span className="text-primary">entregar mais.</span>
            </motion.h1>

            <motion.div
              className="mt-8 max-w-xl border-l border-border-highlight pl-5 sm:mt-10 sm:pl-6"
              variants={itemVariants}
            >
              <p className="type-body text-text-secondary">
                Montagem, diagnóstico, manutenção e otimização de computadores em
                Volta Redonda e região.
              </p>
              <p className="mt-4 flex items-center gap-3 text-sm font-semibold text-text-primary sm:text-base">
                <Truck aria-hidden="true" className="shrink-0 text-primary" size={20} />
                Buscamos seu equipamento no local.
              </p>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
              variants={itemVariants}
            >
              <Button className="w-full sm:w-auto" href="#contato" size="lg">
                Solicitar orçamento
                <ArrowUpRight aria-hidden="true" size={19} />
              </Button>
              <Button className="w-full sm:w-auto" size="lg" to="/projetos" variant="secondary">
                Ver projetos
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

          <motion.figure
            animate="visible"
            aria-labelledby="hardware-placeholder-caption"
            className="hero-media relative mt-14 overflow-hidden border border-border bg-surface lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:mt-0 lg:translate-x-8"
            initial="hidden"
            variants={itemVariants}
          >
            <div aria-hidden="true" className="hero-technical-grid absolute inset-0" />
            <div aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-primary" />

            <div
              aria-hidden="true"
              className="absolute left-[16%] top-[13%] h-[68%] w-[62%] border border-border-highlight bg-background-secondary shadow-surface"
            >
              <div className="absolute inset-[7%] border border-border" />
              <div className="absolute left-[17%] top-[12%] size-[42%] rounded-full border border-border-highlight">
                <div className="absolute inset-[18%] rounded-full border border-border" />
                <div className="absolute inset-[38%] rounded-full bg-primary" />
              </div>
              <div className="absolute bottom-[14%] left-[17%] right-[17%] grid gap-2">
                <span className="h-px bg-border-highlight" />
                <span className="h-px bg-border" />
                <span className="h-px bg-border" />
              </div>
            </div>

            <div aria-hidden="true" className="absolute right-[9%] top-[9%] text-right">
              <span className="type-label block text-text-muted">Sistema</span>
              <span className="type-label mt-1 block text-text-primary">Desktop / 01</span>
            </div>

            <figcaption
              className="absolute bottom-0 left-0 right-0 border-t border-border bg-background-secondary p-5 sm:p-6"
              id="hardware-placeholder-caption"
            >
              <span className="type-label text-primary">Área de fotografia</span>
              <span className="mt-2 block text-sm text-text-secondary">
                Hardware em detalhe — imagem real será adicionada posteriormente.
              </span>
            </figcaption>
          </motion.figure>
        </div>
      </Container>
    </section>
  )
}
