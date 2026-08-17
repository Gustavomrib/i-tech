import { Minus, Plus } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'

import { faqItems } from '../../data/faq'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'

export function Faq() {
  const [openItemId, setOpenItemId] = useState<string | null>(null)
  const prefersReducedMotion = useReducedMotion()

  return (
    <Section
      aria-labelledby="faq-title"
      className="scroll-mt-18 border-t border-border bg-background"
      id="faq"
    >
      <Container>
        <motion.header
          className="grid gap-6 lg:grid-cols-12 lg:gap-8"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.45 }}
          viewport={{ once: true, amount: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="type-label text-primary lg:col-span-3">Dúvidas frequentes</p>
          <div className="lg:col-span-8 lg:col-start-5">
            <h2 className="type-h1 text-text-primary" id="faq-title">
              Antes de enviar seu PC, talvez você queira{' '}
              <span className="text-primary">saber.</span>
            </h2>
            <p className="type-body mt-6 max-w-2xl text-text-secondary">
              Respostas para as principais dúvidas sobre atendimento, retirada e orçamento.
            </p>
          </div>
        </motion.header>

        <div className="mt-14 border-y border-border sm:mt-18 lg:mt-24">
          {faqItems.map((item) => {
            const isOpen = openItemId === item.id
            const questionId = `faq-question-${item.id}`
            const answerId = `faq-answer-${item.id}`

            return (
              <article className="border-b border-border last:border-b-0" key={item.id}>
                <h3>
                  <button
                    aria-controls={answerId}
                    aria-expanded={isOpen}
                    className="group grid min-h-18 w-full grid-cols-[2.5rem_1fr_auto] items-center gap-3 py-5 text-left transition-ui hover:bg-surface focus-visible:outline-focus sm:grid-cols-[4rem_1fr_auto] sm:gap-5 sm:px-4"
                    id={questionId}
                    onClick={() => setOpenItemId(isOpen ? null : item.id)}
                    type="button"
                  >
                    <span className="type-label text-text-muted">{item.number}</span>
                    <span className="text-base font-semibold text-text-primary sm:text-lg">
                      {item.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className="inline-flex size-10 items-center justify-center rounded-control border border-border text-text-secondary transition-ui group-hover:border-border-highlight group-hover:text-text-primary"
                    >
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      animate={{ height: 'auto', opacity: 1 }}
                      aria-labelledby={questionId}
                      className="overflow-hidden"
                      exit={{ height: 0, opacity: 0 }}
                      id={answerId}
                      initial={{ height: 0, opacity: 0 }}
                      role="region"
                      transition={{ duration: prefersReducedMotion ? 0 : 0.22 }}
                    >
                      <div className="grid grid-cols-[2.5rem_1fr] gap-3 pb-6 sm:grid-cols-[4rem_1fr] sm:gap-5 sm:px-4 sm:pb-8">
                        <span aria-hidden="true" />
                        <p
                          className={[
                            'max-w-3xl leading-relaxed',
                            item.emphasis
                              ? 'border-l-2 border-primary pl-4 font-semibold text-text-primary'
                              : 'text-text-secondary',
                          ].join(' ')}
                        >
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </article>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
