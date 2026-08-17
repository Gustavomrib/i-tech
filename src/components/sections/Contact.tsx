import { ArrowUpRight, AtSign, Check, MessageCircle } from 'lucide-react'
import { motion, useReducedMotion, type Variants } from 'motion/react'
import { useState } from 'react'

import { contactOptions, getWhatsAppUrl } from '../../data/contactOptions'
import {
  createStaggerVariants,
  motionDuration,
  motionEase,
  sectionHeaderVariants,
} from '../../lib/motion'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { Button } from '../ui/Button'

const optionsVariants = createStaggerVariants(0.05)

const optionVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motionDuration.normal, ease: motionEase.reveal },
  },
}

export function Contact() {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null)
  const prefersReducedMotion = useReducedMotion()
  const selectedOption = contactOptions.find(
    (option) => option.id === selectedOptionId,
  )

  return (
    <Section
      aria-labelledby="contact-title"
      className="scroll-mt-18 border-t border-border bg-background-secondary"
      id="contato"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <motion.div
            className="lg:col-span-5"
            initial={prefersReducedMotion ? false : 'hidden'}
            variants={sectionHeaderVariants}
            viewport={{ once: true, amount: 0.4 }}
            whileInView="visible"
          >
            <p className="type-label text-primary">Fale com a i&apos;tech</p>
            <h2 className="type-h1 mt-5 max-w-2xl text-text-primary" id="contact-title">
              Vamos cuidar do seu <span className="text-primary">PC?</span>
            </h2>
            <p className="type-body mt-6 max-w-xl text-text-secondary">
              Escolha o que você precisa e inicie uma conversa com a i&apos;tech pelo
              WhatsApp.
            </p>

            <dl className="mt-10 border-l-2 border-primary pl-5 sm:pl-6">
              <div>
                <dt className="type-label text-text-muted">Atendimento</dt>
                <dd className="mt-2 font-semibold text-text-primary">
                  Volta Redonda — RJ
                </dd>
              </div>
              <div className="mt-6">
                <dt className="type-label text-text-muted">Retirada</dt>
                <dd className="mt-2 max-w-md leading-relaxed text-text-secondary">
                  Combinada conforme disponibilidade em Volta Redonda e região.
                </dd>
              </div>
            </dl>

            <a
              className="mt-10 inline-flex min-h-11 items-center gap-2 rounded-control text-sm font-semibold text-text-secondary transition-ui hover:text-text-primary focus-visible:outline-focus"
              href="https://www.instagram.com/pulsetech.pc/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <AtSign aria-hidden="true" size={18} />
              @pulsetech.pc
              <ArrowUpRight aria-hidden="true" size={15} />
            </a>
          </motion.div>

          <div className="lg:col-span-6 lg:col-start-7">
            <fieldset>
              <legend className="type-label text-text-muted">
                Escolha o motivo do contato
              </legend>
              <motion.div
                className="mt-6 border-y border-border"
                initial={prefersReducedMotion ? false : 'hidden'}
                variants={optionsVariants}
                viewport={{ once: true, amount: 0.15 }}
                whileInView="visible"
              >
                {contactOptions.map((option) => {
                  const isSelected = selectedOptionId === option.id

                  return (
                    <motion.label
                      className="relative block cursor-pointer border-b border-border last:border-b-0"
                      key={option.id}
                      variants={optionVariants}
                    >
                      <input
                        checked={isSelected}
                        className="peer sr-only"
                        name="contact-reason"
                        onChange={() => setSelectedOptionId(option.id)}
                        type="radio"
                        value={option.id}
                      />
                      <span
                        className={[
                          'grid min-h-18 grid-cols-[2.5rem_1fr_auto] items-center gap-3 px-2 py-4 transition-ui peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-focus sm:grid-cols-[3.5rem_1fr_auto] sm:gap-4 sm:px-4',
                          isSelected
                            ? 'bg-surface-elevated text-text-primary'
                            : 'text-text-secondary hover:bg-surface hover:text-text-primary',
                        ].join(' ')}
                      >
                        <span className="type-label text-text-muted">{option.number}</span>
                        <span className="font-semibold">{option.label}</span>
                        <span
                          aria-hidden="true"
                          className={[
                            'inline-flex size-8 items-center justify-center rounded-full border transition-ui',
                            isSelected
                              ? 'scale-100 border-primary bg-primary text-text-on-primary'
                              : 'scale-75 border-border-highlight text-transparent',
                          ].join(' ')}
                        >
                          <Check size={16} strokeWidth={2.5} />
                        </span>
                      </span>
                    </motion.label>
                  )
                })}
              </motion.div>
            </fieldset>

            <p
              aria-live="polite"
              className="type-small mt-5 min-h-6 text-text-muted"
              id="contact-selection-status"
            >
              {selectedOption
                ? `Selecionado: ${selectedOption.label}.`
                : 'Selecione um motivo para habilitar o WhatsApp.'}
            </p>

            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              className="mt-5"
              initial={
                prefersReducedMotion ? false : { opacity: 0.78, scale: 0.985 }
              }
              key={selectedOption ? 'contact-enabled' : 'contact-disabled'}
              transition={{
                duration: prefersReducedMotion ? 0 : motionDuration.fast,
                ease: motionEase.enter,
              }}
            >
              {selectedOption ? (
                <Button
                  aria-describedby="contact-selection-status"
                  className="w-full"
                  href={getWhatsAppUrl(selectedOption.message)}
                  rel="noopener noreferrer"
                  size="lg"
                  target="_blank"
                >
                  <MessageCircle aria-hidden="true" size={19} />
                  Conversar no WhatsApp
                  <ArrowUpRight
                    aria-hidden="true"
                    className="transition-ui motion-safe:group-hover:translate-x-0.5"
                    size={17}
                  />
                </Button>
              ) : (
                <Button
                  aria-describedby="contact-selection-status"
                  className="w-full"
                  disabled
                  size="lg"
                >
                  <MessageCircle aria-hidden="true" size={19} />
                  Conversar no WhatsApp
                </Button>
              )}
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
