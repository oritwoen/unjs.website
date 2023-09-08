import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

export interface ExplorePost extends ParsedContent {
  title: string
  description: string
  cover: {
    src: string
    alt: string
  }
  authors: {
    name: string
    picture: string
    twitter: string
    email?: string
  }[]
  packages: string[]
  publishedAt: Date
  modifiedAt: Date
  layout: 'explore-post'
}