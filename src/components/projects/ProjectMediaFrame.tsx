import type { ProjectMedia } from '../../data/projects'

type ProjectMediaFrameProps = {
  media: ProjectMedia
  className?: string
  meta?: string
  interactive?: boolean
  priority?: boolean
}

export function ProjectMediaFrame({
  media,
  className,
  meta,
  interactive = false,
  priority = false,
}: ProjectMediaFrameProps) {
  return (
    <div
      className={[
        'relative overflow-hidden border border-border bg-background',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {media.kind === 'image' ? (
        <img
          alt={media.alt}
          className={[
            'h-full w-full object-cover transition-ui',
            interactive ? 'motion-safe:group-hover:scale-[1.02]' : '',
          ].join(' ')}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          height={media.height}
          loading={priority ? 'eager' : 'lazy'}
          src={media.src}
          width={media.width}
        />
      ) : (
        <div
          aria-hidden="true"
          className={[
            'project-media-placeholder absolute inset-0 transition-ui',
            interactive ? 'motion-safe:group-hover:scale-[1.02]' : '',
          ].join(' ')}
        >
          <span className="type-label absolute left-4 top-4 text-text-muted sm:left-5 sm:top-5">
            {media.label}
          </span>
          {meta ? (
            <span className="type-label absolute bottom-4 right-4 text-text-muted sm:bottom-5 sm:right-5">
              {meta}
            </span>
          ) : null}
          <span className="absolute left-1/2 top-1/2 h-px w-16 -translate-x-1/2 bg-border-highlight" />
        </div>
      )}
    </div>
  )
}
