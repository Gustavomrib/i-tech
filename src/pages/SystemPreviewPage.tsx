import { ArrowUpRight } from 'lucide-react'

import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { Button } from '../components/ui/Button'

const colorTokens = [
  ['Background', 'bg-background'],
  ['Background secondary', 'bg-background-secondary'],
  ['Surface', 'bg-surface'],
  ['Surface elevated', 'bg-surface-elevated'],
  ['Primary', 'bg-primary'],
  ['Accent', 'bg-accent'],
] as const

export function SystemPreviewPage() {
  return (
    <main>
      <Section spacing="compact">
        <Container>
          <header className="border-b border-border pb-8">
            <p className="type-label text-primary">Etapa 01 · Fundação técnica</p>
            <h1 className="type-display mt-4 max-w-4xl text-text-primary">
              Precisão em cada camada.
            </h1>
            <p className="type-body mt-5 max-w-2xl text-text-secondary">
              Página temporária para validar os fundamentos visuais da i&apos;tech.
              Não representa a Home final.
            </p>
          </header>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <section aria-labelledby="colors-title">
              <h2 className="type-h3 text-text-primary" id="colors-title">
                Cores semânticas
              </h2>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {colorTokens.map(([label, colorClass]) => (
                  <div
                    className="overflow-hidden rounded-surface border border-border bg-surface"
                    key={label}
                  >
                    <div className={`h-20 ${colorClass}`} />
                    <p className="type-small px-3 py-3 text-text-secondary">{label}</p>
                  </div>
                ))}
              </div>
            </section>

            <section
              aria-labelledby="surface-title"
              className="rounded-surface border border-border bg-surface-elevated p-6 shadow-surface sm:p-8"
            >
              <p className="type-label text-accent">Surface elevada</p>
              <h2 className="type-h2 mt-3 text-text-primary" id="surface-title">
                Tecnologia com clareza.
              </h2>
              <p className="type-body mt-4 text-text-secondary">
                Contraste, ritmo e hierarquia para comunicar confiança sem excesso
                visual.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button>
                  Primary
                  <ArrowUpRight aria-hidden="true" size={18} />
                </Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button disabled>Disabled</Button>
              </div>
            </section>
          </div>
        </Container>
      </Section>
    </main>
  )
}
