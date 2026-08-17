export type ProjectCategory =
  | 'Montagem'
  | 'Diagnóstico'
  | 'Alta performance'
  | 'Limpeza e manutenção'
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
  gallery?: readonly ProjectMedia[]
}

export const projects: readonly Project[] = [
  {
    id: 'clean-pc-01',
    number: '01',
    slug: 'clean-pc-01',
    title: 'Limpeza preventiva e revisão interna',
    category: 'Limpeza e manutenção',
    shortDescription:
      'Serviço real de limpeza interna e manutenção preventiva, com revisão visual do interior de um desktop.',
    objective:
      'Realizar a limpeza preventiva e revisar visualmente o interior do computador.',
    context:
      'O equipamento passou pela bancada para um serviço de limpeza e manutenção preventiva, com atenção ao interior do gabinete e aos componentes visíveis.',
    consideration: {
      label: 'Cuidado técnico',
      description:
        'O serviço exigiu cuidado com os componentes e atenção durante a inspeção visual do conjunto.',
    },
    service: 'Limpeza interna, manutenção preventiva e inspeção visual do conjunto.',
    approach: [
      'Inspeção visual do interior do gabinete e dos componentes.',
      'Limpeza interna com cuidado nas áreas acessíveis do equipamento.',
      'Revisão geral do conjunto durante a manutenção preventiva.',
    ],
    result:
      'Limpeza interna concluída e conjunto revisado visualmente durante o serviço de manutenção preventiva.',
    equipmentType: 'PC desktop',
    featured: true,
    media: {
      kind: 'image',
      src: '/clean-pc-01.webp',
      alt: 'Interior de gabinete branco aberto, com cabos e a parte traseira da placa-mãe visíveis.',
      width: 2560,
      height: 3413,
      role: 'cover',
      caption: 'Registro do interior do gabinete atendido.',
    },
  },
  {
    id: 'clean-pc-02',
    number: '02',
    slug: 'clean-pc-02',
    title: 'Manutenção preventiva de desktop',
    category: 'Limpeza e manutenção',
    shortDescription:
      'Manutenção preventiva realizada em um desktop, com limpeza interna e cuidado com os componentes.',
    objective:
      'Realizar manutenção preventiva com limpeza interna e revisão geral do equipamento.',
    context:
      'Este desktop recebeu um serviço de limpeza e manutenção voltado ao cuidado do interior do gabinete e de seus componentes.',
    consideration: {
      label: 'Preservação do conjunto',
      description:
        'A limpeza foi conduzida com atenção aos componentes presentes no interior do computador.',
    },
    service: 'Limpeza interna, inspeção visual e manutenção preventiva do desktop.',
    approach: [
      'Inspeção visual do conjunto durante o atendimento.',
      'Limpeza das áreas internas acessíveis com cuidado nos componentes.',
      'Revisão geral do equipamento durante a manutenção preventiva.',
    ],
    result:
      'Serviço de limpeza interna concluído, com o conjunto submetido a uma revisão visual geral.',
    equipmentType: 'PC desktop',
    featured: false,
    media: {
      kind: 'image',
      src: '/clean-pc-02.webp',
      alt: 'Gabinete de desktop com painel lateral transparente e iluminação interna em tom âmbar.',
      width: 2560,
      height: 3413,
      role: 'cover',
      caption: 'Registro do desktop atendido em manutenção preventiva.',
    },
  },
  {
    id: 'clean-pc-03',
    number: '03',
    slug: 'clean-pc-03',
    title: 'Limpeza interna e revisão geral',
    category: 'Limpeza e manutenção',
    shortDescription:
      'Limpeza interna acompanhada de inspeção visual e revisão geral do conjunto.',
    objective:
      'Cuidar do interior do computador por meio de limpeza e inspeção visual.',
    context:
      'O trabalho foi direcionado à manutenção preventiva do desktop, considerando a limpeza interna e a revisão visual do conjunto.',
    consideration: {
      label: 'Atenção aos componentes',
      description:
        'A manutenção priorizou o cuidado com os componentes durante a limpeza e a revisão interna.',
    },
    service: 'Limpeza interna, inspeção visual e revisão geral do computador.',
    approach: [
      'Inspeção visual das áreas internas do desktop.',
      'Limpeza interna com atenção aos componentes do conjunto.',
      'Revisão geral durante o serviço de manutenção preventiva.',
    ],
    result:
      'Interior do computador limpo e conjunto revisado visualmente no serviço de manutenção.',
    equipmentType: 'PC desktop',
    featured: false,
    media: {
      kind: 'image',
      src: '/clean-pc-03.webp',
      alt: 'Interior de desktop com placa de vídeo, memórias e iluminação azul visíveis.',
      width: 2560,
      height: 3413,
      role: 'cover',
      caption: 'Detalhe interno do desktop atendido.',
    },
  },
]

export function getProjectBySlug(slug: string | undefined) {
  return projects.find((project) => project.slug === slug)
}

export function getAdjacentProjects(slug: string) {
  const currentIndex = projects.findIndex((project) => project.slug === slug)

  if (currentIndex < 0) {
    return { previous: undefined, next: undefined }
  }

  return {
    previous: projects[currentIndex - 1],
    next: projects[currentIndex + 1],
  }
}
