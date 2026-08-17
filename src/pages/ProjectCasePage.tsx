import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { Container } from '../components/layout/Container'
import { Navbar } from '../components/layout/Navbar'
import { Section } from '../components/layout/Section'
import { SkipLink } from '../components/layout/SkipLink'
import { ProjectMediaFrame } from '../components/projects/ProjectMediaFrame'
import { Button } from '../components/ui/Button'
import {
  getAdjacentProjects,
  getProjectBySlug,
  type Project,
} from '../data/projects'

const galleryLayout = [
  'lg:col-span-8',
  'lg:col-span-4',
  'lg:col-span-4',
  'lg:col-span-8',
] as const

const galleryAspect = [
  'aspect-[4/3]',
  'aspect-square',
  'aspect-square',
  'aspect-[4/3]',
] as const

function ProjectNotFound() {
  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="conteudo-principal">
        <Section className="min-h-screen bg-background pt-32 sm:pt-36">
          <Container className="max-w-content-narrow">
            <p className="type-label text-primary">Projeto não encontrado</p>
            <h1 className="type-h1 mt-4 text-text-primary">
              Este endereço não corresponde a um projeto.
            </h1>
            <p className="type-body mt-6 max-w-2xl text-text-secondary">
              Confira os projetos demonstrativos disponíveis na página de projetos.
            </p>
            <Button className="mt-8" to="/projetos" variant="secondary">
              <ArrowLeft aria-hidden="true" size={18} />
              Voltar aos projetos
            </Button>
          </Container>
        </Section>
      </main>
    </>
  )
}

function ProjectNavigation({ project }: { project: Project }) {
  const { previous, next } = getAdjacentProjects(project.slug)

  return (
    <nav
      aria-label="Navegação entre projetos"
      className="mt-12 grid gap-4 border-t border-border pt-8 sm:mt-16 sm:grid-cols-2 sm:pt-10"
    >
      {previous ? (
        <Link
          aria-label={`Projeto anterior: ${previous.title}`}
          className="group min-w-0 border-l border-border-highlight p-5 transition-ui hover:border-primary hover:bg-surface focus-visible:outline-focus"
          to={`/projetos/${previous.slug}`}
        >
          <span className="type-label flex items-center gap-2 text-text-muted">
            <ArrowLeft aria-hidden="true" size={15} />
            Projeto anterior
          </span>
          <span className="mt-3 block font-display text-lg font-bold leading-snug text-text-primary transition-ui motion-safe:group-hover:translate-x-1">
            {previous.title}
          </span>
        </Link>
      ) : null}

      {next ? (
        <Link
          aria-label={`Próximo projeto: ${next.title}`}
          className="group min-w-0 border-r border-border-highlight p-5 text-right transition-ui hover:border-primary hover:bg-surface focus-visible:outline-focus sm:col-start-2"
          to={`/projetos/${next.slug}`}
        >
          <span className="type-label flex items-center justify-end gap-2 text-text-muted">
            Próximo projeto
            <ArrowRight aria-hidden="true" size={15} />
          </span>
          <span className="mt-3 block font-display text-lg font-bold leading-snug text-text-primary transition-ui motion-safe:group-hover:-translate-x-1">
            {next.title}
          </span>
        </Link>
      ) : null}
    </nav>
  )
}

export function ProjectCasePage() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [slug])

  if (!project) {
    return <ProjectNotFound />
  }

  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="conteudo-principal">
        <article>
          <header className="border-b border-border bg-background pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24">
            <Container className="layout-container-wide">
              <Button className="-ml-4" size="sm" to="/projetos" variant="ghost">
                <ArrowLeft aria-hidden="true" size={17} />
                Todos os projetos
              </Button>

              <motion.div
                className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-8"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <div className="lg:col-span-8">
                  <p className="type-label text-primary">
                    {project.number} / {project.category}
                  </p>
                  <h1 className="type-h1 mt-5 max-w-5xl text-text-primary">
                    {project.title}
                  </h1>
                  <p className="type-body mt-6 max-w-2xl text-text-secondary">
                    {project.shortDescription}
                  </p>
                </div>

                <dl className="grid gap-5 border-l border-border-highlight pl-5 sm:grid-cols-3 sm:border-l-0 sm:border-t sm:pl-0 sm:pt-5 lg:col-span-3 lg:col-start-10 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                  <div>
                    <dt className="type-label text-text-muted">Equipamento</dt>
                    <dd className="mt-2 text-sm text-text-primary">{project.equipmentType}</dd>
                  </div>
                  <div>
                    <dt className="type-label text-text-muted">Atuação</dt>
                    <dd className="mt-2 text-sm text-text-primary">{project.category}</dd>
                  </div>
                  <div>
                    <dt className="type-label text-text-muted">Status do conteúdo</dt>
                    <dd className="mt-2 text-sm text-text-secondary">Demonstrativo</dd>
                  </div>
                </dl>
              </motion.div>

              <motion.div
                className="mt-12 sm:mt-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.55 }}
              >
                <ProjectMediaFrame
                  className="aspect-[4/5] sm:aspect-[16/10] lg:aspect-[16/7]"
                  media={project.media}
                  meta="Fotografia principal"
                  priority
                />
                {project.media.caption ? (
                  <p className="type-small mt-3 text-text-muted">
                    {project.media.caption}
                  </p>
                ) : null}
              </motion.div>
            </Container>
          </header>

          <Section aria-labelledby="project-objective-title" className="bg-background">
            <Container>
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-6 lg:col-start-2">
                  <p className="type-label text-primary">Contexto / Objetivo</p>
                  <h2 className="type-h2 mt-4 text-text-primary" id="project-objective-title">
                    O objetivo
                  </h2>
                  <p className="type-body mt-6 text-text-secondary">{project.objective}</p>
                  <p className="mt-5 leading-relaxed text-text-secondary">
                    {project.context}
                  </p>
                </div>

                <aside className="border-l border-border-highlight pl-5 sm:pl-6 lg:col-span-4 lg:col-start-9 lg:self-end">
                  <p className="type-label text-text-muted">
                    {project.consideration.label}
                  </p>
                  <p className="mt-4 leading-relaxed text-text-primary">
                    {project.consideration.description}
                  </p>
                </aside>
              </div>
            </Container>
          </Section>

          <Section
            aria-labelledby="project-work-title"
            className="border-y border-border bg-background-secondary"
          >
            <Container>
              <div className="grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <p className="type-label text-primary">Processo técnico</p>
                  <h2 className="type-h2 mt-4 text-text-primary" id="project-work-title">
                    Trabalho realizado
                  </h2>
                  <p className="mt-5 max-w-md leading-relaxed text-text-secondary">
                    {project.service}
                  </p>
                </div>

                <ol className="border-b border-border lg:col-span-7 lg:col-start-6">
                  {project.approach.map((item, index) => (
                    <li
                      className="grid gap-4 border-t border-border py-6 sm:grid-cols-[3rem_1fr] sm:items-start"
                      key={item}
                    >
                      <span className="type-label text-text-muted">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="leading-relaxed text-text-primary">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Container>
          </Section>

          {project.configuration?.length ? (
            <Section aria-labelledby="project-configuration-title" className="bg-background">
              <Container>
                <div className="grid gap-8 lg:grid-cols-12">
                  <div className="lg:col-span-4">
                    <p className="type-label text-primary">Hardware</p>
                    <h2
                      className="type-h2 mt-4 text-text-primary"
                      id="project-configuration-title"
                    >
                      Configuração
                    </h2>
                  </div>
                  <dl className="border-b border-border lg:col-span-7 lg:col-start-6">
                    {project.configuration.map((item) => (
                      <div
                        className="grid gap-2 border-t border-border py-5 sm:grid-cols-2 sm:gap-6"
                        key={item.label}
                      >
                        <dt className="type-label text-text-muted">{item.label}</dt>
                        <dd className="text-text-primary">{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Container>
            </Section>
          ) : null}

          <Section aria-labelledby="project-result-title" className="bg-background">
            <Container>
              <div className="grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-3">
                  <p className="type-label text-primary">Resultado</p>
                </div>
                <div className="border-l-2 border-primary pl-5 sm:pl-8 lg:col-span-8 lg:col-start-5">
                  <h2 className="type-h2 text-text-primary" id="project-result-title">
                    Resultado do trabalho
                  </h2>
                  <p className="type-body mt-6 max-w-3xl text-text-secondary">
                    {project.result}
                  </p>
                </div>
              </div>
            </Container>
          </Section>

          <Section
            aria-labelledby="project-gallery-title"
            className="border-y border-border bg-background-secondary"
          >
            <Container>
              <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
                <p className="type-label text-primary lg:col-span-3">Documentação visual</p>
                <div className="lg:col-span-8 lg:col-start-5">
                  <h2 className="type-h2 text-text-primary" id="project-gallery-title">
                    Galeria do projeto
                  </h2>
                  <p className="mt-5 max-w-2xl leading-relaxed text-text-secondary">
                    Espaços preparados para registrar o equipamento, os detalhes e o
                    processo quando as fotografias reais estiverem disponíveis.
                  </p>
                </div>
              </div>

              <motion.div
                className="mt-12 grid gap-x-6 gap-y-10 sm:mt-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-14"
                initial={{ opacity: 0, y: 10 }}
                viewport={{ once: true, amount: 0.1 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
              >
                {project.gallery.map((media, index) => (
                  <figure
                    className={galleryLayout[index] ?? 'lg:col-span-6'}
                    key={`${media.role}-${index}`}
                  >
                    <ProjectMediaFrame
                      className={galleryAspect[index] ?? 'aspect-[4/3]'}
                      media={media}
                    />
                    <figcaption className="type-small mt-3 text-text-muted">
                      {media.caption}
                    </figcaption>
                  </figure>
                ))}
              </motion.div>
            </Container>
          </Section>

          <Section className="bg-background">
            <Container>
              <div className="flex flex-col items-start justify-between gap-6 border-l border-border-highlight pl-5 sm:flex-row sm:items-center sm:pl-6">
                <div>
                  <h2 className="type-h3 text-text-primary">Quer cuidar do seu PC?</h2>
                  <p className="mt-2 text-text-secondary">
                    Conte o que está acontecendo com seu computador.
                  </p>
                </div>
                <Button className="w-full sm:w-auto" to="/#contato">
                  Solicitar orçamento
                  <ArrowUpRight aria-hidden="true" size={18} />
                </Button>
              </div>

              <ProjectNavigation project={project} />
            </Container>
          </Section>
        </article>
      </main>
    </>
  )
}
