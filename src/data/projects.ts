export type ProjectCategory =
  | 'Montagem'
  | 'Diagnóstico'
  | 'Alta performance'
  | 'Limpeza'
  | 'Upgrade'

export type ProjectMediaRole =
  | 'cover'
  | 'overview'
  | 'internal-detail'
  | 'component'
  | 'process'
  | 'before'
  | 'after'
  | 'final'

type ProjectMediaBase = {
  role: ProjectMediaRole
  caption?: string
}

export type ProjectMedia = ProjectMediaBase &
  (
    | {
        kind: 'placeholder'
        label: string
      }
    | {
        kind: 'image'
        src: string
        alt: string
        width: number
        height: number
      }
  )

export type ProjectConfigurationItem = {
  label: string
  value: string
}

export type Project = {
  id: string
  number: string
  slug: string
  title: string
  category: ProjectCategory
  shortDescription: string
  objective: string
  context: string
  consideration: {
    label: string
    description: string
  }
  service: string
  approach: readonly string[]
  result: string
  configuration?: readonly ProjectConfigurationItem[]
  equipmentType: 'PC desktop'
  featured: boolean
  media: ProjectMedia
  gallery: readonly ProjectMedia[]
}

function createPlaceholderMedia(
  label: string,
  role: ProjectMediaRole,
  caption: string,
): ProjectMedia {
  return { kind: 'placeholder', label, role, caption }
}

function createPlaceholderGallery(
  items: readonly { role: ProjectMediaRole; caption: string }[],
) {
  return items.map((item, index) =>
    createPlaceholderMedia(
      `Foto ${String(index + 1).padStart(2, '0')}`,
      item.role,
      item.caption,
    ),
  )
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
    context:
      'O projeto partiu da necessidade de organizar uma configuração completa em torno da rotina de uso prevista, sem priorizar um componente isoladamente.',
    consideration: {
      label: 'Requisitos do projeto',
      description:
        'Compatibilidade, equilíbrio entre os componentes e possibilidade de evolução precisavam orientar cada decisão da montagem.',
    },
    service: 'Planejamento, compatibilidade, montagem e verificação do conjunto.',
    approach: [
      'Leitura da finalidade de uso e das prioridades da configuração.',
      'Verificação de compatibilidade e equilíbrio entre os componentes.',
      'Montagem e organização interna do conjunto.',
      'Verificação de funcionamento após a montagem.',
    ],
    result:
      'Máquina montada e preparada para o uso pretendido, com o conjunto organizado e o funcionamento verificado.',
    equipmentType: 'PC desktop',
    featured: true,
    media: createPlaceholderMedia(
      'Foto principal',
      'cover',
      'Vista principal do desktop finalizado.',
    ),
    gallery: createPlaceholderGallery([
      { role: 'component', caption: 'Componentes separados antes da montagem.' },
      { role: 'process', caption: 'Etapa de montagem e organização interna.' },
      { role: 'internal-detail', caption: 'Detalhe interno do conjunto montado.' },
      { role: 'final', caption: 'Resultado final preparado para entrega.' },
    ]),
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
    context:
      'O equipamento apresentava comportamento instável durante o uso, exigindo uma análise ordenada antes de qualquer intervenção.',
    consideration: {
      label: 'Desafio técnico',
      description:
        'Falhas intermitentes podem ter diferentes origens, por isso o diagnóstico precisava evitar substituições sem evidência.',
    },
    service: 'Inspeção, testes de funcionamento e diagnóstico técnico.',
    approach: [
      'Registro do comportamento relatado e das condições em que ocorria.',
      'Inspeção do conjunto e verificação das conexões relevantes.',
      'Testes direcionados para isolar possíveis causas.',
      'Organização das conclusões para orientar o serviço adequado.',
    ],
    result:
      'Diagnóstico organizado, possíveis causas delimitadas e funcionamento revisto após os testes aplicáveis.',
    equipmentType: 'PC desktop',
    featured: false,
    media: createPlaceholderMedia(
      'Foto principal',
      'cover',
      'Vista geral do equipamento analisado.',
    ),
    gallery: createPlaceholderGallery([
      { role: 'overview', caption: 'Condição geral do equipamento na bancada.' },
      { role: 'internal-detail', caption: 'Detalhes internos observados na inspeção.' },
      { role: 'process', caption: 'Etapa de testes e diagnóstico.' },
      { role: 'final', caption: 'Equipamento após a verificação do conjunto.' },
    ]),
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
    context:
      'A manutenção foi planejada para revisar o estado interno da máquina e os pontos ligados à conservação dos componentes.',
    consideration: {
      label: 'Ponto de atenção',
      description:
        'A limpeza precisava respeitar cada componente e ser acompanhada por uma revisão visual e térmica do conjunto.',
    },
    service: 'Limpeza interna, inspeção visual e revisão térmica.',
    approach: [
      'Inspeção inicial das condições internas do gabinete.',
      'Limpeza cuidadosa dos componentes e áreas de ventilação.',
      'Revisão dos pontos térmicos e da organização interna.',
      'Verificação de funcionamento após a manutenção.',
    ],
    result:
      'Parte interna revisada, componentes limpos e funcionamento verificado após a manutenção preventiva.',
    equipmentType: 'PC desktop',
    featured: false,
    media: createPlaceholderMedia(
      'Foto principal',
      'cover',
      'Vista principal do gabinete durante a manutenção.',
    ),
    gallery: createPlaceholderGallery([
      { role: 'before', caption: 'Condição interna antes da manutenção.' },
      { role: 'process', caption: 'Processo de limpeza dos componentes.' },
      { role: 'internal-detail', caption: 'Detalhe da revisão interna e térmica.' },
      { role: 'after', caption: 'Conjunto após a manutenção preventiva.' },
    ]),
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
    context:
      'A análise considerou o comportamento da máquina, sua configuração existente e a forma como o computador era utilizado.',
    consideration: {
      label: 'Objetivo técnico',
      description:
        'Os ajustes precisavam preservar estabilidade e temperaturas adequadas, sem prometer resultados além do que o conjunto poderia oferecer.',
    },
    service: 'Análise do conjunto, ajustes e verificação de funcionamento.',
    approach: [
      'Leitura da configuração e das condições atuais de uso.',
      'Revisão dos pontos relacionados a estabilidade e desempenho.',
      'Aplicação apenas dos ajustes coerentes com o hardware.',
      'Verificação do funcionamento após as alterações.',
    ],
    result:
      'Sistema revisado e ajustado para aproveitar melhor a configuração existente, com funcionamento verificado.',
    equipmentType: 'PC desktop',
    featured: false,
    media: createPlaceholderMedia(
      'Foto principal',
      'cover',
      'Vista do desktop utilizado no trabalho de otimização.',
    ),
    gallery: createPlaceholderGallery([
      { role: 'overview', caption: 'Visão geral da configuração analisada.' },
      { role: 'internal-detail', caption: 'Detalhes do conjunto e da organização interna.' },
      { role: 'process', caption: 'Etapa de análise e ajustes.' },
      { role: 'final', caption: 'Máquina após a verificação de funcionamento.' },
    ]),
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
    context:
      'O ponto de partida foi uma configuração existente que precisava evoluir sem substituir componentes que ainda atendiam à finalidade de uso.',
    consideration: {
      label: 'Critério de evolução',
      description:
        'Compatibilidade, prioridade de uso e equilíbrio do conjunto precisavam vir antes da escolha de qualquer componente novo.',
    },
    service: 'Leitura da configuração, análise de compatibilidade e orientação de upgrade.',
    approach: [
      'Levantamento da configuração existente e do objetivo do upgrade.',
      'Identificação dos componentes que poderiam ser mantidos.',
      'Análise de compatibilidade das possíveis substituições.',
      'Atualização do conjunto e verificação de funcionamento.',
    ],
    result:
      'Configuração atualizada nos pontos coerentes com o objetivo, mantendo os componentes que ainda faziam sentido.',
    equipmentType: 'PC desktop',
    featured: false,
    media: createPlaceholderMedia(
      'Foto principal',
      'cover',
      'Vista principal da configuração atualizada.',
    ),
    gallery: createPlaceholderGallery([
      { role: 'before', caption: 'Configuração antes da atualização.' },
      { role: 'component', caption: 'Componentes considerados para o upgrade.' },
      { role: 'process', caption: 'Etapa de substituição e organização.' },
      { role: 'after', caption: 'Configuração após a atualização.' },
    ]),
  },
]

export function getProjectBySlug(slug: string | undefined) {
  return mockProjects.find((project) => project.slug === slug)
}

export function getAdjacentProjects(slug: string) {
  const currentIndex = mockProjects.findIndex((project) => project.slug === slug)

  if (currentIndex < 0) {
    return { previous: undefined, next: undefined }
  }

  return {
    previous: mockProjects[currentIndex - 1],
    next: mockProjects[currentIndex + 1],
  }
}
