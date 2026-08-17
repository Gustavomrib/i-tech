# i'tech

Site comercial da i'tech, empresa de assistência, manutenção e performance de computadores em Volta Redonda — RJ e região. O projeto apresenta os serviços, o processo de atendimento, trabalhos realizados e direciona solicitações para o WhatsApp.

## Stack

- React e TypeScript
- Vite
- Tailwind CSS
- React Router
- Motion
- Lucide Icons

## Funcionalidades

- Home responsiva com apresentação institucional e serviços
- Fluxo de atendimento, trabalhos realizados e cases individuais
- FAQ acessível
- Seleção de assunto e contato pelo WhatsApp
- Metadata global e específica por rota
- Navegação por teclado e suporte a movimento reduzido

## Executar localmente

Requisitos: Node.js e npm.

```bash
npm ci
npm run dev
```

Para validar e gerar a versão de produção:

```bash
npm run lint
npm run typecheck
npm run build
npm run preview
```

O resultado do build é gerado em `dist/`.

## Estrutura resumida

```text
src/
├── components/   # Layout, seções e componentes reutilizáveis
├── data/         # Conteúdo estruturado do site
├── hooks/        # Comportamentos compartilhados
├── pages/        # Home, listagem e cases
└── styles/       # Design System e estilos globais
```

## Conteúdo e imagens

As três fotografias em `public/` documentam serviços reais de limpeza e manutenção. Os depoimentos atuais estão explicitamente identificados no código como conteúdo demonstrativo e devem ser substituídos antes da publicação comercial definitiva.

## Deploy estático

O projeto é uma SPA com React Router. A hospedagem deve servir `index.html` como fallback para rotas desconhecidas, permitindo acesso direto a `/projetos` e `/projetos/:slug`.

O domínio final ainda não foi definido. Canonical, sitemap, imagem social e favicon oficial devem ser configurados quando domínio e identidade visual definitiva estiverem disponíveis.

## Status

Frontend funcional e preparado para build estático. Não inclui backend, CMS, analytics ou integração com WhatsApp Business API.
