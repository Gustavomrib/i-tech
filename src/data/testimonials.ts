export type Testimonial = {
  id: string
  number: string
  name: string
  service: string
  quote: string
  featured: boolean
  isMock: true
}

export type TrustSignal = {
  id: string
  number: string
  title: string
  description: string
}

/*
 * MOCK CONTENT: these testimonials exist only to validate layout and tone.
 * Replace every item with authorized, real customer feedback before publication.
 */
export const mockTestimonials = [
  {
    id: 'mock-testimonial-01',
    number: '01',
    name: 'Lucas M.',
    service: 'Montagem personalizada',
    quote:
      'Expliquei como pretendia usar o computador e recebi orientação sobre compatibilidade e equilíbrio da configuração antes da montagem. O processo foi claro e organizado.',
    featured: true,
    isMock: true,
  },
  {
    id: 'mock-testimonial-02',
    number: '02',
    name: 'Marina R.',
    service: 'Diagnóstico técnico',
    quote:
      'O computador desligava durante o uso. O diagnóstico e as possibilidades de solução foram explicados antes de qualquer serviço.',
    featured: false,
    isMock: true,
  },
  {
    id: 'mock-testimonial-03',
    number: '03',
    name: 'Rafael C.',
    service: 'Limpeza e manutenção',
    quote:
      'Recebi uma explicação sobre o estado interno da máquina e o que seria revisado. O cuidado com os componentes ficou claro durante o atendimento.',
    featured: false,
    isMock: true,
  },
  {
    id: 'mock-testimonial-04',
    number: '04',
    name: 'Ana P.',
    service: 'Upgrade',
    quote:
      'Em vez de trocar tudo, a análise mostrou quais peças ainda faziam sentido e quais mudanças eram coerentes com o meu uso.',
    featured: false,
    isMock: true,
  },
  {
    id: 'mock-testimonial-05',
    number: '05',
    name: 'Bruno S.',
    service: 'Alta performance',
    quote:
      'A configuração foi analisada antes dos ajustes, e cada alteração proposta foi explicada de forma objetiva, sem promessas exageradas.',
    featured: false,
    isMock: true,
  },
] as const satisfies readonly Testimonial[]

export const trustSignals = [
  {
    id: 'local-pickup',
    number: '01',
    title: 'Retirada combinada',
    description: 'Buscamos o equipamento no local conforme disponibilidade.',
  },
  {
    id: 'prior-quote',
    number: '02',
    title: 'Orçamento antes do serviço',
    description: 'O diagnóstico e o orçamento são apresentados antes da execução.',
  },
  {
    id: 'approval-first',
    number: '03',
    title: 'Aprovação primeiro',
    description: 'O serviço somente é realizado após a autorização do cliente.',
  },
  {
    id: 'service-area',
    number: '04',
    title: 'Volta Redonda e região',
    description: 'Atendimento local e em cidades próximas, conforme disponibilidade.',
  },
] as const satisfies readonly TrustSignal[]
