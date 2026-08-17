export type TeamPhoto =
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

export type TeamEducation = {
  qualification: string
  institution: string
  detail?: string
}

export type TeamMember = {
  id: string
  number: string
  name: string
  firstName: string
  age?: number
  education: readonly TeamEducation[]
  introduction: string
  contribution: string
  photo: TeamPhoto
}

export const team = [
  {
    id: 'davi-agapito-dos-santos',
    number: '01',
    name: 'Davi Agapito dos Santos',
    firstName: 'Davi',
    age: 21,
    education: [
      {
        qualification: 'Técnico em Automação Industrial',
        institution: 'ICT — Instituto de Cultura Técnica',
      },
      {
        qualification: 'Elétrica residencial, predial e industrial',
        institution: 'SENAI',
        detail: 'Formação profissional',
      },
      {
        qualification: 'Engenharia Elétrica',
        institution: 'UGB',
        detail: 'Cursando',
      },
    ],
    introduction:
      'Davi possui formação técnica em Automação Industrial pelo ICT e formação profissional em elétrica residencial, predial e industrial pelo SENAI. Atualmente, cursa Engenharia Elétrica na UGB. Seu interesse por tecnologia foi direcionado para hardware, montagem, manutenção e performance de computadores.',
    contribution:
      "Na i'tech, participa da análise e da execução dos serviços com atenção à organização, à compatibilidade e ao cuidado com cada componente.",
    photo: {
      kind: 'image',
      src: '/davi.jpg',
      alt: "Davi Agapito dos Santos, sócio da i'tech",
      width: 640,
      height: 641,
    },
  },
  {
    id: 'william-wallace-martins-da-silva',
    number: '02',
    name: 'William Wallace Martins da Silva',
    firstName: 'William',
    age: 21,
    education: [
      {
        qualification: 'Técnico em Eletrônica',
        institution: 'ICT — Instituto de Cultura Técnica',
      },
      {
        qualification: 'Engenharia Elétrica',
        institution: 'UGB',
        detail: 'Cursando',
      },
    ],
    introduction:
      'William possui formação técnica em Eletrônica e cursa Engenharia Elétrica. Sua base em eletrônica contribui para uma leitura analítica dos componentes e do funcionamento dos equipamentos.',
    contribution:
      "Na i'tech, atua com diagnóstico, montagem, manutenção e análise de hardware, unindo conhecimento técnico à experiência prática com computadores.",
    photo: {
      kind: 'image',
      src: '/willian.jpeg',
      alt: "William Wallace Martins da Silva, sócio da i'tech",
      width: 1194,
      height: 1280,
    },
  },
] as const satisfies readonly TeamMember[]
