import { ArrowUpRight } from 'lucide-react'
import { motion, type Variants } from 'motion/react'

import { serviceProcess } from '../../data/serviceProcess'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { Button } from '../ui/Button'

const timelineVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.08,
    },
  },
}

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: [0.2, 0.8, 0.2, 1] },
  },
}

export function ServiceProcess() {
  return (
    <Section
      aria-labelledby="process-title"
      className="scroll-mt-18 border-t border-border bg-background"
      id="processo"
    >
      <Container>
        <motion.header
          className="grid gap-6 lg:grid-cols-12 lg:gap-8"
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
          viewport={{ once: true, amount: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="type-label text-primary lg:col-span-3">Como funciona</p>
          <div className="lg:col-span-8 lg:col-start-5">
            <h2 className="type-h1 text-text-primary" id="process-title">
              Da sua casa para nossa <span className="text-primary">bancada.</span>
            </h2>
            <p className="type-body mt-6 max-w-2xl text-text-secondary">
              Um processo simples e transparente, do primeiro contato à devolução
              do seu equipamento.
            </p>
          </div>
        </motion.header>

        <div className="process-timeline mt-14 sm:mt-18 lg:mt-24">
          <div aria-hidden="true" className="process-rail bg-border" />
          <motion.div
            aria-hidden="true"
            className="process-rail origin-top bg-primary"
            initial={{ scaleY: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            whileInView={{ scaleY: 1 }}
          />

          <motion.ol
            className="process-track"
            initial="hidden"
            variants={timelineVariants}
            viewport={{ once: true, amount: 0.08 }}
            whileInView="visible"
          >
            {serviceProcess.map((step) => (
              <motion.li
                className="process-step"
                key={step.number}
                variants={stepVariants}
              >
                <span
                  className={[
                    'process-marker type-label',
                    step.emphasis
                      ? 'border-primary bg-primary text-text-on-primary'
                      : 'border-border-highlight bg-background text-text-secondary',
                  ].join(' ')}
                >
                  {step.number}
                </span>

                <div
                  className={[
                    'process-content',
                    step.emphasis
                      ? 'border-l-2 border-primary bg-surface-elevated p-6 shadow-surface sm:p-8'
                      : '',
                  ].join(' ')}
                >
                  <p className="type-label text-text-muted">{step.label}</p>
                  <h3 className="type-h3 mt-3 text-text-primary">{step.title}</h3>
                  <p
                    className={[
                      'mt-3 max-w-lg leading-relaxed',
                      step.emphasis
                        ? 'font-semibold text-text-primary'
                        : 'text-text-secondary',
                    ].join(' ')}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 sm:mt-18 sm:flex-row sm:items-center sm:pt-10">
          <div>
            <h3 className="type-h3 text-text-primary">
              Seu computador precisa de atenção?
            </h3>
            <p className="mt-2 text-text-secondary">
              Atendimento em Volta Redonda e região.
            </p>
          </div>
          <Button className="w-full sm:w-auto" href="#contato">
            Solicitar orçamento
            <ArrowUpRight aria-hidden="true" size={18} />
          </Button>
        </div>
      </Container>
    </Section>
  )
}
