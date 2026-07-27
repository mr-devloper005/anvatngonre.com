import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'List Your Business & Grow Your Reach',
      description: 'Join the leading business listing platform. Get discovered by new customers, manage your online presence, and grow your business with verified listings.',
      openGraphTitle: 'List Your Business & Grow Your Reach',
      openGraphDescription: 'Join thousands of businesses growing their reach through verified listings and customer reviews.',
      keywords: ['business listing', 'local business', 'business directory', 'find businesses', 'list your business'],
    },
    hero: {
      badge: 'Trusted by thousands of businesses',
      title: ['List your business on', `${slot4BrandConfig.siteName} and grow your reach`],
      description: 'Get discovered by new customers, manage your online presence, and grow your business with our verified listing platform.',
      primaryCta: { label: 'List your business', href: '/create' },
      secondaryCta: { label: 'Browse businesses', href: '/listing' },
      searchPlaceholder: 'Search businesses, services, locations...',
      focusLabel: 'Popular',
      featureCardBadge: 'Verified listings',
      featureCardTitle: 'Every listing is verified for accuracy and trust.',
      featureCardDescription: 'We ensure all business information is current and reliable so customers can make confident decisions.',
    },
    intro: {
      badge: 'Why choose us',
      title: 'Everything you need to grow your business online.',
      paragraphs: [
        'Our platform connects businesses with potential customers through verified listings, detailed profiles, and customer reviews.',
        'Whether you run a restaurant, retail shop, service business, or professional practice, our listing tools help you reach the right audience.',
        'From managing your business profile to responding to customer inquiries, we provide the tools that make a difference.',
      ],
      sideBadge: 'Key benefits',
      sidePoints: [
        'Increased visibility through search-optimized business profiles.',
        'Direct customer inquiries through integrated contact tools.',
        'Review management to build trust and credibility.',
        'Analytics dashboard to track your listing performance.',
      ],
      primaryLink: { label: 'Browse businesses', href: '/listing' },
      secondaryLink: { label: 'Read guides', href: '/article' },
    },
    cta: {
      badge: 'Get started today',
      title: 'Ready to grow your business? List it now.',
      description: 'Join thousands of businesses already benefiting from increased visibility and customer connections on our platform.',
      primaryCta: { label: 'List Your Business', href: '/create' },
      secondaryCta: { label: 'Contact Sales', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Our Mission',
    title: 'Connecting businesses with the customers who need them.',
    description: `${slot4BrandConfig.siteName} is a comprehensive business listing platform designed to help local businesses increase their online visibility and connect with potential customers.`,
    paragraphs: [
      'We believe every business deserves to be discovered. Our platform provides the tools and visibility needed to reach new customers and grow sustainably.',
      'Through verified listings, customer reviews, and detailed business profiles, we create a trusted marketplace where customers can find exactly what they need.',
    ],
    values: [
      {
        title: 'Verified & Trustworthy',
        description: 'Every listing is reviewed for accuracy. We maintain high standards so customers can trust the information they find on our platform.',
      },
      {
        title: 'Local Discovery',
        description: 'Our search and discovery tools help customers find businesses near them, driving foot traffic and local engagement.',
      },
      {
        title: 'Business Growth Tools',
        description: 'From profile management to performance analytics, we provide businesses with the insights they need to grow.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'We are here to help your business succeed.',
    description: 'Whether you need help with your listing, want to explore partnership opportunities, or have questions about our platform, our team is ready to assist.',
    formTitle: 'Send us a message',
  },

  search: {
    metadata: {
      title: 'Search Businesses & Services',
      description: 'Find businesses, services, articles, and resources across our platform.',
    },
    hero: {
      badge: 'Search our directory',
      title: 'Find the right business or service.',
      description: 'Search by name, category, location, or service type to find exactly what you need.',
      placeholder: 'Search businesses, services, articles...',
    },
    resultsTitle: 'Featured businesses and content',
  },
  create: {
    metadata: {
      title: 'List Your Business',
      description: 'Create a business listing and reach new customers on our platform.',
    },
    locked: {
      badge: 'Business account required',
      title: 'Sign in to list your business.',
      description: 'Create an account or sign in to submit your business listing and start reaching new customers today.',
    },
    hero: {
      badge: 'Business listing workspace',
      title: 'Create your business listing.',
      description: 'Fill in your business details, add photos, and publish your listing to start attracting new customers.',
    },
    formTitle: 'Business details',
    submitLabel: 'Submit listing',
    successTitle: 'Your listing has been submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Sign in to manage your business listings.',
      badge: 'Welcome back',
      title: 'Sign in to your business account.',
      description: 'Access your dashboard, manage listings, respond to inquiries, and track your business performance.',
      formTitle: 'Sign in',
      submitLabel: 'Sign in',
      noAccount: 'No account found with these credentials. Please create an account first.',
      success: 'Sign in successful. Redirecting to your dashboard...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Create a business account to list your business.',
      badge: 'Join our platform',
      title: 'Create your business account today.',
      description: 'Sign up to list your business, manage your profile, and connect with customers looking for your services.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Password must be at least 4 characters.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Sign in instead',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Similar businesses',
      fallbackTitle: 'Business details',
    },
    image: {
      relatedTitle: 'More from the gallery',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Similar profiles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Website',
    },
  },
} as const
