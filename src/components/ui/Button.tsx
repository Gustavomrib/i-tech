import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'
import { Link, type LinkProps } from 'react-router-dom'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

type SharedProps = {
  children: ReactNode
  className?: string
  disabled?: boolean
  variant?: ButtonVariant
  size?: ButtonSize
}

type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never
    to?: never
  }

type AnchorButtonProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
    to?: never
  }

type RouterButtonProps = SharedProps &
  Omit<LinkProps, 'className' | 'children'> & {
    href?: never
  }

export type ButtonProps =
  | NativeButtonProps
  | AnchorButtonProps
  | RouterButtonProps

const baseStyles =
  'inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-control border px-5 font-semibold tracking-tight transition-ui focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-focus disabled:pointer-events-none disabled:opacity-45 aria-disabled:pointer-events-none aria-disabled:opacity-45'

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'border-primary bg-primary text-text-on-primary shadow-control hover:border-primary-hover hover:bg-primary-hover active:border-primary-active active:bg-primary-active',
  secondary:
    'border-border-highlight bg-surface text-text-primary hover:bg-surface-hover active:border-primary',
  ghost:
    'border-transparent bg-transparent text-text-secondary hover:bg-surface-hover hover:text-text-primary active:text-primary',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'min-h-10 px-4 text-sm',
  md: 'min-h-11 px-5 text-sm',
  lg: 'min-h-12 px-6 text-base',
}

function getClassName({
  className,
  variant = 'primary',
  size = 'md',
}: Pick<SharedProps, 'className' | 'variant' | 'size'>) {
  return [baseStyles, variantStyles[variant], sizeStyles[size], className]
    .filter(Boolean)
    .join(' ')
}

export function Button(props: ButtonProps) {
  if ('to' in props && props.to !== undefined) {
    const {
      children,
      className,
      disabled = false,
      onClick,
      size,
      tabIndex,
      variant,
      ...linkProps
    } = props
    return (
      <Link
        {...linkProps}
        aria-disabled={disabled || undefined}
        className={getClassName({ className, size, variant })}
        onClick={(event) => {
          if (disabled) {
            event.preventDefault()
            return
          }

          onClick?.(event)
        }}
        tabIndex={disabled ? -1 : tabIndex}
      >
        {children}
      </Link>
    )
  }

  if ('href' in props && props.href !== undefined) {
    const {
      children,
      className,
      disabled = false,
      onClick,
      rel,
      size,
      tabIndex,
      target,
      variant,
      ...anchorProps
    } = props
    return (
      <a
        {...anchorProps}
        aria-disabled={disabled || undefined}
        className={getClassName({ className, size, variant })}
        onClick={(event) => {
          if (disabled) {
            event.preventDefault()
            return
          }

          onClick?.(event)
        }}
        rel={target === '_blank' ? (rel ?? 'noopener noreferrer') : rel}
        tabIndex={disabled ? -1 : tabIndex}
        target={target}
      >
        {children}
      </a>
    )
  }

  const {
    children,
    className,
    disabled,
    size,
    variant,
    type = 'button',
    ...buttonProps
  } = props
  return (
    <button
      className={getClassName({ className, size, variant })}
      disabled={disabled}
      type={type}
      {...buttonProps}
    >
      {children}
    </button>
  )
}
