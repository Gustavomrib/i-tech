export type ContactOption = {
  id: string
  number: string
  label: string
  message: string
}

export const whatsappNumber = '5524999847722'

export const contactOptions: ContactOption[] = [
  {
    id: 'problema',
    number: '01',
    label: 'Meu PC está com problema',
    message:
      "Olá! Vim pelo site da i'tech. Meu computador está apresentando um problema e gostaria de solicitar uma avaliação.",
  },
  {
    id: 'montagem',
    number: '02',
    label: 'Quero montar um PC',
    message:
      "Olá! Vim pelo site da i'tech. Gostaria de solicitar um orçamento para montagem de um PC.",
  },
  {
    id: 'upgrade',
    number: '03',
    label: 'Quero fazer um upgrade',
    message:
      "Olá! Vim pelo site da i'tech. Gostaria de avaliar um upgrade para meu computador.",
  },
  {
    id: 'performance',
    number: '04',
    label: 'Quero otimizar meu PC',
    message:
      "Olá! Vim pelo site da i'tech. Gostaria de solicitar uma avaliação para otimização e performance do meu computador.",
  },
  {
    id: 'limpeza',
    number: '05',
    label: 'Quero limpeza ou manutenção',
    message:
      "Olá! Vim pelo site da i'tech. Gostaria de solicitar um orçamento para limpeza e manutenção do meu computador.",
  },
  {
    id: 'notebook',
    number: '06',
    label: 'Preciso de atendimento para notebook',
    message:
      "Olá! Vim pelo site da i'tech. Gostaria de verificar atendimento para meu notebook.",
  },
]

export function getWhatsAppUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}
