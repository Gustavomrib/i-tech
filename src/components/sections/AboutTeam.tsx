import { motion, type Variants } from 'motion/react'

import { team, type TeamMember, type TeamPhoto } from '../../data/team'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'

const teamVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const profileVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
  },
}

function TeamPortrait({ photo }: { photo: TeamPhoto }) {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden border border-border bg-surface-elevated">
      {photo.kind === 'image' ? (
        <img
          alt={photo.alt}
          className="h-full w-full object-cover"
          decoding="async"
          height={photo.height}
          loading="lazy"
          src={photo.src}
          width={photo.width}
        />
      ) : (
        <div aria-hidden="true" className="team-media-placeholder absolute inset-0">
          <span className="type-label absolute left-5 top-5 text-text-muted">
            {photo.label}
          </span>
          <span className="absolute left-1/2 top-1/2 h-px w-16 -translate-x-1/2 bg-border-highlight" />
          <span className="type-label absolute bottom-5 right-5 text-text-muted">
            Retrato / 4:5
          </span>
        </div>
      )}
    </div>
  )
}

function TeamProfile({ member, index }: { member: TeamMember; index: number }) {
  const isReversed = index % 2 === 1

  return (
    <motion.article
      aria-labelledby={`${member.id}-name`}
      className="grid gap-8 border-t border-border pt-10 sm:gap-10 sm:pt-14 lg:grid-cols-12 lg:items-center lg:gap-8 lg:pt-16"
      variants={profileVariants}
    >
      <div
        className={[
          'w-full max-w-lg',
          isReversed
            ? 'lg:col-span-5 lg:col-start-8 lg:justify-self-end'
            : 'lg:col-span-5 lg:col-start-1',
        ].join(' ')}
      >
        <TeamPortrait photo={member.photo} />
      </div>

      <div
        className={[
          'min-w-0',
          isReversed
            ? 'lg:col-span-6 lg:col-start-1 lg:row-start-1'
            : 'lg:col-span-6 lg:col-start-7',
        ].join(' ')}
      >
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="type-label text-primary">{member.number} / Sócio</p>
          {member.age ? (
            <p className="type-label text-text-muted">{member.age} anos</p>
          ) : null}
        </div>
        <h3
          className="type-h2 mt-4 text-text-primary"
          id={`${member.id}-name`}
        >
          {member.name}
        </h3>

        <div className="mt-6 max-w-2xl space-y-4 leading-relaxed text-text-secondary">
          <p>{member.introduction}</p>
          <p>{member.contribution}</p>
        </div>

        <ul
          aria-label={`Formação técnica de ${member.firstName}`}
          className="mt-8 border-b border-border"
        >
          {member.education.map((education) => (
            <li
              className="grid gap-2 border-t border-border py-4 sm:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] sm:gap-6"
              key={`${education.qualification}-${education.institution}`}
            >
              <span className="text-sm font-semibold text-text-primary">
                {education.qualification}
              </span>
              <span className="type-small text-text-muted sm:text-right">
                {education.institution}
                {education.detail ? ` · ${education.detail}` : ''}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}

export function AboutTeam() {
  return (
    <Section
      aria-labelledby="about-title"
      className="scroll-mt-18 border-t border-border bg-background"
      id="sobre"
    >
      <Container>
        <motion.header
          className="grid gap-6 lg:grid-cols-12 lg:gap-8"
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
          viewport={{ once: true, amount: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="type-label text-primary lg:col-span-3">Sobre a i&apos;tech</p>
          <div className="lg:col-span-8 lg:col-start-5">
            <h2 className="type-h1 text-text-primary" id="about-title">
              Quem cuida da sua <span className="text-primary">máquina.</span>
            </h2>
            <p className="type-body mt-6 max-w-2xl text-text-secondary">
              Formação técnica, interesse por hardware e um atendimento próximo para
              cuidar de cada computador com clareza e precisão.
            </p>
          </div>
        </motion.header>

        <div className="mt-14 grid gap-8 border-y border-border py-8 sm:mt-18 sm:py-10 lg:mt-24 lg:grid-cols-12 lg:py-12">
          <p className="type-label text-text-muted lg:col-span-3">A empresa</p>
          <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-text-secondary lg:col-span-6 lg:col-start-5">
            <p>
              A i&apos;tech nasceu da afinidade com tecnologia, hardware e resolução de
              problemas. O foco está em montagem, diagnóstico, manutenção, upgrades e
              performance de computadores.
            </p>
            <p>
              Cada atendimento combina proximidade, análise técnica e transparência do
              primeiro contato à devolução do equipamento.
            </p>
          </div>
          <p className="border-l border-border-highlight pl-5 font-display text-xl font-bold leading-snug text-text-primary lg:col-span-2 lg:col-start-11 lg:self-end">
            Performance começa por dentro.
          </p>
        </div>

        <motion.div
          className="mt-14 grid gap-14 sm:mt-18 sm:gap-18 lg:mt-24 lg:gap-24"
          initial="hidden"
          variants={teamVariants}
          viewport={{ once: true, amount: 0.08 }}
          whileInView="visible"
        >
          {team.map((member, index) => (
            <TeamProfile index={index} key={member.id} member={member} />
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
