import { Link } from 'react-router-dom'

import { getWhatsAppUrl } from '../../data/contactOptions'
import { Container } from './Container'

const footerNavigation = [
  { label: 'Início', href: '/#inicio' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Trabalhos', href: '/#projetos' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Contato', href: '/#contato' },
] as const

const footerWhatsappMessage =
  "Olá! Vim pelo site da i'tech e gostaria de falar sobre atendimento."

const footerLinkStyles =
  'inline-flex min-h-11 items-center rounded-control text-sm text-text-secondary transition-ui hover:text-text-primary focus-visible:outline-focus'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <Container>
        <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
          <div className="lg:col-span-5">
            <Link
              aria-label="i'tech — página inicial"
              className="inline-flex rounded-control transition-ui focus-visible:outline-focus"
              to="/"
            >
              <img
                alt=""
                className="h-11 w-11 object-contain"
                height={44}
                src="/logo.webp"
                width={44}
              />
            </Link>
            <p className="mt-5 max-w-md leading-relaxed text-text-secondary">
              Hardware, manutenção e performance em Volta Redonda e região.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé" className="lg:col-span-2 lg:col-start-7">
            <p className="type-label text-text-muted">Navegação</p>
            <ul className="mt-4 grid">
              {footerNavigation.map((item) => (
                <li key={item.label}>
                  <Link className={footerLinkStyles} to={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="type-label text-text-muted">Contato</p>
            <address className="mt-4 grid not-italic">
              <a
                className={footerLinkStyles}
                href={getWhatsAppUrl(footerWhatsappMessage)}
                rel="noopener noreferrer"
                target="_blank"
              >
                WhatsApp&nbsp;·&nbsp;+55 24 99984-7722
              </a>
              <a
                className={footerLinkStyles}
                href="https://www.instagram.com/pulsetech.pc/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Instagram&nbsp;·&nbsp;@pulsetech.pc
              </a>
              <span className="flex min-h-11 items-center text-sm text-text-secondary">
                Volta Redonda — RJ
              </span>
            </address>
            <p className="type-small mt-4 max-w-sm text-text-muted">
              Atendimento em cidades da região mediante disponibilidade.
            </p>
          </div>
        </div>

        <div className="border-t border-border py-6">
          <p className="type-small text-text-muted">
            © {currentYear} i&apos;tech. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  )
}
