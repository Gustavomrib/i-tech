import { ArrowUpRight } from 'lucide-react'
import { motion, type Variants } from 'motion/react'

import {
  mockTestimonials,
  trustSignals,
  type Testimonial,
} from '../../data/testimonials'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { Button } from '../ui/Button'

const testimonialLayout = [
  'lg:col-span-7 lg:row-span-2',
  'lg:col-span-5',
  'lg:col-span-5',
  'lg:col-span-6',
  'lg:col-span-6',
] as const

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.2, 0.8, 0.2, 1] },
  },
}

function TestimonialItem({
  testimonial,
  index,
}: {
  testimonial: Testimonial
  index: number
}) {
  const isFeatured = testimonial.featured

  return (
    <motion.li
      className={[
        'group min-w-0 bg-background-secondary transition-ui hover:bg-surface',
        isFeatured ? 'p-6 sm:p-10 lg:p-12' : 'p-6 sm:p-8',
        testimonialLayout[index],
      ]
        .filter(Boolean)
        .join(' ')}
      variants={itemVariants}
    >
      <figure className={isFeatured ? 'flex h-full flex-col' : ''}>
        <div className="flex items-center justify-between gap-4">
          <span className="type-label text-text-muted">{testimonial.number} /</span>
          <span aria-hidden="true" className="font-display text-3xl text-border-highlight">
            “
          </span>
        </div>

        <blockquote className={isFeatured ? 'my-auto py-8 sm:py-12' : 'py-6'}>
          <p
            className={[
              'max-w-3xl text-text-primary',
              isFeatured
                ? 'font-display text-2xl font-bold leading-relaxed sm:text-3xl'
                : 'text-lg leading-relaxed',
            ].join(' ')}
          >
            {testimonial.quote}
          </p>
        </blockquote>

        <figcaption className="border-t border-border pt-5">
          <span className="block text-sm font-semibold text-text-primary">
            {testimonial.name}
          </span>
          <span className="type-small mt-1 block text-text-muted">
            {testimonial.service}
          </span>
        </figcaption>
      </figure>
    </motion.li>
  )
}

export function Testimonials() {
  const hasMockContent = mockTestimonials.some((testimonial) => testimonial.isMock)

  return (
    <Section
      aria-labelledby="testimonials-title"
      className="scroll-mt-18 border-t border-border bg-background-secondary"
      id="depoimentos"
    >
      <Container>
        <motion.header
          className="grid gap-6 lg:grid-cols-12 lg:gap-8"
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
          viewport={{ once: true, amount: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="lg:col-span-3">
            <p className="type-label text-primary">Experiências</p>
            {hasMockContent ? (
              <p className="type-small mt-3 text-text-muted">Conteúdo demonstrativo</p>
            ) : null}
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <h2 className="type-h1 text-text-primary" id="testimonials-title">
              Confiança construída em cada <span className="text-primary">máquina.</span>
            </h2>
            <p className="type-body mt-6 max-w-2xl text-text-secondary">
              Atendimento próximo, comunicação clara e cuidado em cada etapa do
              serviço.
            </p>
          </div>
        </motion.header>

        <ul
          aria-label="Compromissos do atendimento"
          className="mt-14 grid border-y border-border sm:mt-18 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4"
        >
          {trustSignals.map((signal, index) => (
            <li
              className={[
                'min-w-0 py-6 sm:p-6 lg:p-7',
                index > 0 ? 'border-t border-border' : '',
                index % 2 === 1 ? 'sm:border-l sm:border-border' : '',
                index === 1 ? 'sm:border-t-0' : '',
                index > 1 ? 'lg:border-t-0' : '',
                index > 0 ? 'lg:border-l lg:border-border' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              key={signal.id}
            >
              <span className="type-label text-text-muted">{signal.number}</span>
              <h3 className="mt-4 text-sm font-semibold text-text-primary">
                {signal.title}
              </h3>
              <p className="type-small mt-2 text-text-secondary">{signal.description}</p>
            </li>
          ))}
        </ul>

        <motion.ol
          aria-label="Depoimentos demonstrativos"
          className="mt-14 grid gap-px bg-border sm:mt-18 md:grid-cols-2 lg:mt-24 lg:grid-cols-12"
          initial="hidden"
          variants={listVariants}
          viewport={{ once: true, amount: 0.08 }}
          whileInView="visible"
        >
          {mockTestimonials.map((testimonial, index) => (
            <TestimonialItem
              index={index}
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </motion.ol>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 sm:mt-16 sm:flex-row sm:items-center sm:pt-10">
          <div>
            <h3 className="type-h3 text-text-primary">
              Seu PC pode ser o próximo projeto.
            </h3>
            <p className="mt-2 text-text-secondary">
              Conte o que sua máquina precisa.
            </p>
          </div>
          <Button className="w-full sm:w-auto" to="/#contato">
            Solicitar orçamento
            <ArrowUpRight aria-hidden="true" size={18} />
          </Button>
        </div>
      </Container>
    </Section>
  )
}
