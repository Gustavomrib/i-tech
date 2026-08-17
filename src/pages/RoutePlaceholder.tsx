import { ArrowLeft } from 'lucide-react'

import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { Button } from '../components/ui/Button'

type RoutePlaceholderProps = {
  route: string
}

export function RoutePlaceholder({ route }: RoutePlaceholderProps) {
  return (
    <main>
      <Section>
        <Container className="max-w-content-narrow">
          <p className="type-label text-primary">Rota reservada</p>
          <h1 className="type-h1 mt-4 text-text-primary">{route}</h1>
          <p className="type-body mt-5 max-w-prose text-text-secondary">
            Este endereço já faz parte da estrutura de navegação, mas seu conteúdo
            será criado em uma etapa futura.
          </p>
          <Button className="mt-8" to="/" variant="secondary">
            <ArrowLeft aria-hidden="true" size={18} />
            Voltar ao Design System
          </Button>
        </Container>
      </Section>
    </main>
  )
}
