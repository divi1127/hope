import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { siteConfig } from '../utils/seo'

export function useSEO(meta) {
  const location = useLocation()

  useEffect(() => {
    const { title, description } = meta || {}
    document.title = title || siteConfig.name
    let metaTag = document.querySelector('meta[name="description"]')
    if (!metaTag) {
      metaTag = document.createElement('meta')
      metaTag.name = 'description'
      document.head.appendChild(metaTag)
    }
    metaTag.setAttribute(
      'content',
      description || siteConfig.description,
    )
  }, [meta, location.pathname])
}