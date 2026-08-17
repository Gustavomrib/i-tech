export type ProjectCategory =
  | 'Montagem'
  | 'Diagnóstico'
  | 'Alta performance'
  | 'Limpeza'
  | 'Upgrade'

export type ProjectMedia =
  | {
      kind: 'placeholder'
      label: string
    }
  | {
      kind: 'image'
      src: string
      alt: string
    }

export type Project = {
  id: string
  number: string
  slug: string
  title: string
  category: ProjectCategory
  shortDescription: string
  objective: string
  service: string
  equipmentType: 'PC desktop'
  featured: boolean
  media: ProjectMedia
}

/*
 * MOCK CONTENT: these cases exist only to validate layout and architecture.
 * Replace them with documented projects and real photographs before publication.
 */
export const mockProjects: readonly Project[] = [
  {
    id: 'mock-project-01',
    number: '01',
    slug: 'desktop-equilibrado-para-criacao',
    title: 'Desktop equilibrado para criação e uso diário',
    category: 'Montagem',
    shortDescription:
      'Uma configuração planejada para conciliar trabalho, uso cotidiano e futuras possibilidades de evolução.',
    objective:
      'Definir uma máquina coerente com a finalidade de uso e com margem para upgrades.',
    service: 'Planejamento, compatibilidade, montagem e verificação do conjunto.',
    equipmentType: 'PC desktop',
    featured: true,
    media: { kind: 'placeholder', label: 'Foto do projeto' },
  },
  {
    id: 'mock-project-02',
    number: '02',
    slug: 'diagnostico-de-instabilidade',
    title: 'Diagnóstico de instabilidade em desktop',
    category: 'Diagnóstico',
    shortDescription:
      'Análise organizada de falhas intermitentes para orientar a intervenção adequada no equipamento.',
    objective: 'Investigar a origem das falhas relatadas durante o uso da máquina.',
    service: 'Inspeção, testes de funcionamento e diagnóstico técnico.',
    equipmentType: 'PC desktop',
    featured: false,
    media: { kind: 'placeholder', label: 'Foto do projeto' },
  },
  {
    id: 'mock-project-03',
    number: '03',
    slug: 'revisao-termica-e-manutencao',
    title: 'Revisão térmica e manutenção interna',
    category: 'Limpeza',
    shortDescription:
      'Cuidado interno com o gabinete, componentes e sistema térmico para preservar o funcionamento do conjunto.',
    objective: 'Realizar manutenção preventiva e revisar as condições internas do PC.',
    service: 'Limpeza interna, inspeção visual e revisão térmica.',
    equipmentType: 'PC desktop',
    featured: false,
    media: { kind: 'placeholder', label: 'Foto do projeto' },
  },
  {
    id: 'mock-project-04',
    number: '04',
    slug: 'ajustes-de-estabilidade-e-desempenho',
    title: 'Ajustes de estabilidade e desempenho',
    category: 'Alta performance',
    shortDescription:
      'Revisão do sistema para buscar uma operação mais estável e um melhor aproveitamento do hardware existente.',
    objective: 'Identificar ajustes coerentes com a configuração e a rotina de uso.',
    service: 'Análise do conjunto, ajustes e verificação de funcionamento.',
    equipmentType: 'PC desktop',
    featured: false,
    media: { kind: 'placeholder', label: 'Foto do projeto' },
  },
  {
    id: 'mock-project-05',
    number: '05',
    slug: 'upgrade-orientado-de-configuracao',
    title: 'Upgrade orientado de configuração',
    category: 'Upgrade',
    shortDescription:
      'Avaliação da máquina atual para priorizar substituições compatíveis e relevantes para o objetivo de uso.',
    objective: 'Entender quais componentes faziam sentido manter ou substituir.',
    service: 'Leitura da configuração, análise de compatibilidade e orientação de upgrade.',
    equipmentType: 'PC desktop',
    featured: false,
    media: { kind: 'placeholder', label: 'Foto do projeto' },
  },
]

export function getProjectBySlug(slug: string | undefined) {
  return mockProjects.find((project) => project.slug === slug)
}
