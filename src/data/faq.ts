export type FaqItem = {
  id: string
  number: string
  question: string
  answer: string
  emphasis?: boolean
}

export const faqItems: FaqItem[] = [
  {
    id: 'notebooks',
    number: '01',
    question: 'Vocês atendem notebooks?',
    answer:
      "Sim. A i'tech também realiza serviços compatíveis em notebooks, embora o foco principal seja PCs desktop.",
  },
  {
    id: 'retirada',
    number: '02',
    question: 'Vocês buscam o computador?',
    answer:
      'Sim. A retirada é combinada previamente, conforme disponibilidade em Volta Redonda e região.',
  },
  {
    id: 'orcamento',
    number: '03',
    question: 'O orçamento é feito antes do serviço?',
    answer:
      'Sim. Após a avaliação do equipamento, você recebe as informações sobre o serviço necessário e o orçamento antes da execução.',
  },
  {
    id: 'aprovacao',
    number: '04',
    question: 'O serviço pode ser realizado sem minha aprovação?',
    answer: 'Não. O serviço só é realizado após sua aprovação.',
    emphasis: true,
  },
  {
    id: 'valor',
    number: '05',
    question: 'Quanto custa?',
    answer:
      'O valor depende do equipamento, do problema identificado, da análise e do serviço necessário. Entre em contato para solicitar um orçamento.',
  },
  {
    id: 'prazo',
    number: '06',
    question: 'Quanto tempo demora?',
    answer:
      'O tempo depende do diagnóstico e do serviço necessário. Essa previsão é alinhada com você durante o atendimento.',
  },
  {
    id: 'pecas',
    number: '07',
    question: 'Vocês vendem peças?',
    answer:
      "Montagens e upgrades podem incluir orientação sobre componentes. A disponibilidade ou o fornecimento de peças deve ser confirmado diretamente com a i'tech.",
  },
]
