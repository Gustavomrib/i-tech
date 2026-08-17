import { ArrowUpRight } from 'lucide-react'
import { motion, useReducedMotion, type Variants } from 'motion/react'

import { services } from '../../data/services'
import {
  createStaggerVariants,
  motionDuration,
  motionEase,
  revealItemVariants,
  sectionHeaderVariants,
} from '../../lib/motion'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { Button } from '../ui/Button'

const primaryServices = services.filter((service) => service.priority === 'primary')
const supportingServices = services.filter(
  (service) => service.priority !== 'primary',
)

const listVariants = createStaggerVariants(0.06)

const serviceVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionDuration.normal,
      ease: motionEase.reveal,
      staggerChildren: 0.035,
    },
  },
}

const servicePartVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionDuration.normal,
      ease: motionEase.reveal,
    },
  },
}

export function Services() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <Section
      aria-labelledby="services-title"
      className="scroll-mt-18 border-t border-border bg-background-secondary"
      id="servicos"
    >
      <Container>
        <motion.header
          className="grid gap-6 lg:grid-cols-12 lg:gap-8"
          initial={prefersReducedMotion ? false : 'hidden'}
          variants={sectionHeaderVariants}
          viewport={{ once: true, amount: 0.5 }}
          whileInView="visible"
        >
          <p className="type-label text-primary lg:col-span-3">O que fazemos</p>
          <div className="lg:col-span-8 lg:col-start-5">
            <h2 className="type-h1 text-text-primary" id="services-title">
              Do diagnóstico à <span className="text-primary">performance.</span>
            </h2>
            <p className="type-body mt-6 max-w-2xl text-text-secondary">
              Cada equipamento é analisado de acordo com o problema, o objetivo de
              uso e a configuração existente.
            </p>
          </div>
        </motion.header>

        <motion.ol
          className="mt-14 border-b border-border sm:mt-18 lg:mt-24"
          initial={prefersReducedMotion ? false : 'hidden'}
          variants={listVariants}
          viewport={{ once: true, amount: 0.12 }}
          whileInView="visible"
        >
          {primaryServices.map((service) => (
            <motion.li
              className="group grid gap-5 border-t border-border px-1 py-8 transition-ui hover:border-border-highlight hover:bg-surface sm:px-4 sm:py-10 lg:grid-cols-12 lg:gap-8 lg:px-6"
              key={service.number}
              variants={serviceVariants}
            >
              <motion.span
                className="type-label text-text-muted lg:col-span-1"
                variants={servicePartVariants}
              >
                {service.number} /
              </motion.span>
              <motion.div className="lg:col-span-5" variants={servicePartVariants}>
                <p className="type-label text-text-muted">{service.label}</p>
                <h3 className="type-h2 mt-3 text-text-primary transition-ui motion-safe:group-hover:translate-x-1 motion-safe:group-hover:text-primary">
                  {service.title}
                </h3>
              </motion.div>
              <motion.p
                className="type-body max-w-2xl text-text-secondary lg:col-span-6 lg:pt-6"
                variants={servicePartVariants}
              >
                {service.description}
              </motion.p>
            </motion.li>
          ))}
        </motion.ol>

        <motion.ol
          className="grid border-b border-border md:grid-cols-[1.4fr_0.6fr]"
          initial={prefersReducedMotion ? false : 'hidden'}
          start={5}
          variants={listVariants}
          viewport={{ once: true, amount: 0.2 }}
          whileInView="visible"
        >
          {supportingServices.map((service) => {
            const isComplementary = service.priority === 'complementary'

            return (
              <motion.li
                className={[
                  'p-6 sm:p-8 lg:p-10',
                  isComplementary
                    ? 'border-t border-border bg-background text-text-muted md:border-l md:border-t-0'
                    : 'bg-surface',
                ].join(' ')}
                key={service.number}
                variants={revealItemVariants}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="type-label text-text-muted">{service.number} /</span>
                  <span className="type-label text-text-muted">{service.label}</span>
                </div>
                <h3
                  className={[
                    'mt-8 text-text-primary',
                    isComplementary ? 'type-h3' : 'type-h2',
                  ].join(' ')}
                >
                  {service.title}
                </h3>
                <p
                  className={[
                    'mt-4 max-w-xl text-text-secondary',
                    isComplementary ? 'type-small' : 'type-body',
                  ].join(' ')}
                >
                  {service.description}
                </p>
              </motion.li>
            )
          })}
        </motion.ol>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-l border-border-highlight pl-5 sm:mt-16 sm:flex-row sm:items-center sm:pl-6">
          <div>
            <h3 className="type-h3 text-text-primary">Não sabe qual serviço precisa?</h3>
            <p className="mt-2 text-text-secondary">
              Conte o que está acontecendo com seu computador.
            </p>
          </div>
          <Button className="w-full sm:w-auto" href="#contato" variant="secondary">
            Solicitar diagnóstico
            <ArrowUpRight
              aria-hidden="true"
              className="transition-ui motion-safe:group-hover:translate-x-0.5"
              size={18}
            />
          </Button>
        </div>
      </Container>
    </Section>
  )
}
