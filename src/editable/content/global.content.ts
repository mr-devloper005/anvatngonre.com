import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const globalContent = {
  site: {
    name: slot4BrandConfig.siteName,
    tagline: slot4BrandConfig.tagline || 'Business listing platform',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: 'Business listing platform',
    primaryLinks: [
      { label: 'Articles', href: '/article' },
      { label: 'Businesses', href: '/listing' },
      { label: 'Contact', href: '/contact' },
    ],
    actions: {
      primary: { label: 'List your business', href: '/create' },
      secondary: { label: 'Contact us', href: '/contact' },
    },
  },
  footer: {
    tagline: 'Your trusted business listing platform',
    description: 'Connecting businesses with customers through verified listings, expert reviews, and local discovery tools. Join thousands of businesses growing their reach.',
    columns: [
      {
        title: 'Explore',
        links: [
          { label: 'Business Listings', href: '/listing' },
          { label: 'Articles & Guides', href: '/article' },
          { label: 'Marketplace', href: '/classified' },
          { label: 'Business Gallery', href: '/image' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About Us', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    bottomNote: 'Helping businesses grow through better visibility and trusted connections.',
  },
  commonLabels: {
    readMore: 'Learn more',
    viewAll: 'View all',
    explore: 'Explore',
    latest: 'Latest',
    related: 'Related',
    published: 'Published',
  },
} as const
