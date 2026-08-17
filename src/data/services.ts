export type ServicePriority = 'primary' | 'intermediate' | 'complementary'

export type Service = {
  number: string
  label: string
  title: string
  description: string
  priority: ServicePriority
}

export const services = [
  {
    number: '01',
    label: 'Montagem',
    title: 'Montagem personalizada',
    description:
      'Planejamento e montagem conforme finalidade, orçamento, compatibilidade dos componentes, equilíbrio da configuração e possibilidade de upgrades.',
    priority: 'primary',
  },
  {
    number: '02',
    label: 'Diagnóstico',
    title: 'Diagnóstico técnico',
    description:
      'Investigação de travamentos, superaquecimento, falhas de inicialização, perda de desempenho, incompatibilidades e possíveis falhas de componentes.',
    priority: 'primary',
  },
  {
    number: '03',
    label: 'Otimização',
    title: 'Alta performance',
    description:
      'Análise e otimização do computador para melhorar desempenho, estabilidade, temperaturas e aproveitamento do hardware.',
    priority: 'primary',
  },
  {
    number: '04',
    label: 'Manutenção',
    title: 'Limpeza e manutenção',
    description:
      'Limpeza interna, revisão térmica, inspeção dos componentes e manutenção preventiva para preservar o funcionamento da máquina.',
    priority: 'primary',
  },
  {
    number: '05',
    label: 'Evolução',
    title: 'Upgrade',
    description:
      'Avaliação da configuração atual para identificar quais componentes realmente fazem sentido substituir.',
    priority: 'intermediate',
  },
  {
    number: '06',
    label: 'Atendimento complementar',
    title: 'Notebooks',
    description:
      'Atendimento para notebooks em serviços compatíveis com a atuação técnica da i\'tech.',
    priority: 'complementary',
  },
] as const satisfies readonly Service[]
