export type ServiceProcessStep = {
  number: string
  label: string
  title: string
  description: string
  emphasis?: boolean
}

export const serviceProcess: readonly ServiceProcessStep[] = [
  {
    number: '01',
    label: 'Primeiro passo',
    title: 'Contato',
    description:
      'Você entra em contato e explica o problema, a necessidade ou o serviço desejado.',
  },
  {
    number: '02',
    label: 'Logística',
    title: 'Retirada',
    description:
      'Combinamos a retirada e buscamos o equipamento no local, conforme disponibilidade.',
  },
  {
    number: '03',
    label: 'Análise técnica',
    title: 'Diagnóstico',
    description:
      'O equipamento é analisado para identificar problemas, necessidades e possíveis soluções.',
  },
  {
    number: '04',
    label: 'Transparência',
    title: 'Orçamento',
    description:
      'Você recebe o diagnóstico e o orçamento antes da execução do serviço.',
  },
  {
    number: '05',
    label: 'Sua decisão',
    title: 'Aprovação',
    description: 'O serviço só é realizado após sua aprovação.',
    emphasis: true,
  },
  {
    number: '06',
    label: 'Na bancada',
    title: 'Serviço',
    description:
      'Realizamos o trabalho acordado e verificamos o funcionamento do equipamento.',
  },
  {
    number: '07',
    label: 'Conclusão',
    title: 'Devolução',
    description: 'O computador é devolvido após a conclusão do atendimento.',
  },
]
