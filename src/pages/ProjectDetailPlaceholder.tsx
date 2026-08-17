import { ArrowLeft } from 'lucide-react'
import { useParams } from 'react-router-dom'

import { Container } from '../components/layout/Container'
import { Navbar } from '../components/layout/Navbar'
import { Section } from '../components/layout/Section'
import { SkipLink } from '../components/layout/SkipLink'
import { Button } from '../components/ui/Button'
import { getProjectBySlug } from '../data/projects'

export function ProjectDetailPlaceholder() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="conteudo-principal">
        <Section className="min-h-screen bg-background pt-32 sm:pt-36">
          <Container className="max-w-content-narrow">
            <p className="type-label text-primary">
              {project ? project.category : 'Projeto não encontrado'}
            </p>
            <h1 className="type-h1 mt-4 text-text-primary">
              {project ? project.title : 'Este endereço não corresponde a um projeto.'}
            </h1>
            <p className="type-body mt-6 max-w-2xl text-text-secondary">
              {project
                ? 'A página individual deste projeto está reservada para a próxima etapa.'
                : 'Confira os projetos demonstrativos disponíveis na página de projetos.'}
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
