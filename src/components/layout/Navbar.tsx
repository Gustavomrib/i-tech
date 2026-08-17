import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { Button } from '../ui/Button'
import { Container } from './Container'

const navigationItems = [
  { label: 'Início', href: '/#inicio' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Projetos', href: '/projetos' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Contato', href: '/#contato' },
] as const

const navigationLinkStyles =
  'rounded-control px-3 py-2 text-sm font-medium text-text-secondary transition-ui hover:text-text-primary focus-visible:outline-focus'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { pathname } = useLocation()
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return

      setIsMenuOpen(false)
      menuButtonRef.current?.focus()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)
  const isCurrentPage = (href: string) =>
    href === '/projetos' ? pathname.startsWith('/projetos') : href === '/#inicio' && pathname === '/'

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 border-b transition-ui',
        isScrolled || isMenuOpen
          ? 'border-border bg-background-secondary shadow-surface'
          : 'border-transparent bg-transparent',
      ].join(' ')}
    >
      <Container>
        <div className="flex h-18 items-center justify-between gap-6">
          <Link
            aria-label="i'tech — página inicial"
            className="rounded-control font-display text-xl font-bold tracking-[-0.035em] text-text-primary transition-ui hover:text-accent focus-visible:outline-focus md:text-2xl"
            onClick={closeMenu}
            to="/"
          >
            i<span className="text-primary">&apos;</span>tech
          </Link>

          <nav aria-label="Navegação principal" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <Link
                    aria-current={isCurrentPage(item.href) ? 'page' : undefined}
                    className={navigationLinkStyles}
                    to={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:block">
            <Button size="sm" to="/#contato" variant="secondary">
              Solicitar orçamento
            </Button>
          </div>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="inline-flex size-11 items-center justify-center rounded-control border border-border bg-surface text-text-primary transition-ui hover:border-border-highlight hover:bg-surface-hover focus-visible:outline-focus md:hidden"
            onClick={() => setIsMenuOpen((currentState) => !currentState)}
            ref={menuButtonRef}
            type="button"
          >
            {isMenuOpen ? (
              <X aria-hidden="true" size={21} />
            ) : (
              <Menu aria-hidden="true" size={21} />
            )}
          </button>
        </div>

        {isMenuOpen ? (
          <nav
            aria-label="Navegação mobile"
            className="border-t border-border pb-5 pt-3 md:hidden"
            id="mobile-navigation"
          >
            <ul className="grid gap-1">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <Link
                    aria-current={isCurrentPage(item.href) ? 'page' : undefined}
                    className="block rounded-control px-3 py-3 text-base font-medium text-text-secondary transition-ui hover:bg-surface-hover hover:text-text-primary focus-visible:outline-focus"
                    onClick={closeMenu}
                    to={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button className="mt-3 w-full" onClick={closeMenu} to="/#contato">
              Solicitar orçamento
            </Button>
          </nav>
        ) : null}
      </Container>
    </header>
  )
}
