import type { TaskKey } from '@/lib/site-config'

export type TaskPageVoice = {
  eyebrow: string
  headline: string
  description: string
  filterLabel: string
  secondaryNote: string
  chips: string[]
}

export const taskPageVoices = {
  article: {
    eyebrow: 'Business Insights',
    headline: 'Guides, tips, and expert advice for growing your business.',
    description: 'Stay informed with industry insights, marketing strategies, and actionable advice from business experts and experienced owners.',
    filterLabel: 'Filter by topic',
    secondaryNote: 'Expert-curated content to help you make better business decisions.',
    chips: ['Marketing Tips', 'Growth Strategy', 'Industry News'],
  },
  classified: {
    eyebrow: 'Marketplace',
    headline: 'Business opportunities, deals, and offers in your area.',
    description: 'Browse active business opportunities, equipment sales, commercial spaces, and promotional offers from verified businesses.',
    filterLabel: 'Filter by type',
    secondaryNote: 'Time-sensitive offers and opportunities updated regularly.',
    chips: ['Deals', 'Opportunities', 'Equipment'],
  },
  sbm: {
    eyebrow: 'Business Resources',
    headline: 'Curated tools and resources for business owners.',
    description: 'A collection of useful tools, templates, compliance resources, and reference materials to help run your business effectively.',
    filterLabel: 'Filter resources',
    secondaryNote: 'Handpicked resources vetted by business professionals.',
    chips: ['Tools', 'Templates', 'Compliance'],
  },
  profile: {
    eyebrow: 'Business Directory',
    headline: 'Find business owners and service providers near you.',
    description: 'Browse verified profiles of business owners, consultants, and service providers across various industries and locations.',
    filterLabel: 'Filter by industry',
    secondaryNote: 'Every profile is verified for authenticity and accuracy.',
    chips: ['Verified', 'Local', 'Professional'],
  },
  pdf: {
    eyebrow: 'Document Library',
    headline: 'Business documents, forms, and downloadable guides.',
    description: 'Access compliance guides, licensing information, business plan templates, and industry reports in one convenient library.',
    filterLabel: 'Filter documents',
    secondaryNote: 'All documents are reviewed and kept up to date.',
    chips: ['Compliance', 'Templates', 'Reports'],
  },
  listing: {
    eyebrow: 'Business Listings',
    headline: 'Discover and connect with trusted local businesses.',
    description: 'Browse verified business listings with reviews, contact details, and service information to find exactly what you need.',
    filterLabel: 'Filter by category',
    secondaryNote: 'All listings are verified for accuracy and reliability.',
    chips: ['Verified', 'Reviewed', 'Local'],
  },
  image: {
    eyebrow: 'Business Gallery',
    headline: 'Visual showcases from businesses and community events.',
    description: 'Explore photos from listed businesses, community events, product showcases, and behind-the-scenes moments.',
    filterLabel: 'Filter gallery',
    secondaryNote: 'High-quality images from verified businesses.',
    chips: ['Showcases', 'Events', 'Products'],
  },
} satisfies Record<TaskKey, TaskPageVoice>
