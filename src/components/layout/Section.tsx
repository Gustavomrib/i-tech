import type { HTMLAttributes } from 'react'

type SectionProps = HTMLAttributes<HTMLElement> & {
  spacing?: 'compact' | 'default'
}

export function Section({
  className,
  spacing = 'default',
  ...props
}: SectionProps) {
  return (
    <section
      className={[
        spacing === 'compact' ? 'layout-section-compact' : 'layout-section',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
  )
}
