import { useEffect } from 'react'

type PageMetadata = {
  title: string
  description: string
  type?: 'website' | 'article'
  robots?: 'index, follow' | 'noindex, follow'
}

function setMetaContent(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  )

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.append(element)
  }

  element.content = content
}

export function usePageMetadata({
  title,
  description,
  type = 'website',
  robots = 'index, follow',
}: PageMetadata) {
  useEffect(() => {
    document.title = title

    setMetaContent('name', 'description', description)
    setMetaContent('name', 'robots', robots)
    setMetaContent('property', 'og:title', title)
    setMetaContent('property', 'og:description', description)
    setMetaContent('property', 'og:type', type)
    setMetaContent('name', 'twitter:title', title)
    setMetaContent('name', 'twitter:description', description)
  }, [description, robots, title, type])
}
