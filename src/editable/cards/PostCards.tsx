import Link from 'next/link'
import { ArrowRight, Clock3 } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { TaskKey } from '@/lib/site-config'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'

export function dedupeUrls(urls: Array<string | null | undefined>): string[] {
  return Array.from(
    new Set(
      urls
        .map((url) => (typeof url === 'string' ? url.trim() : ''))
        .filter((url) => url.length > 0),
    ),
  )
}

export function getEditablePostImage(post?: SitePost | null) {
  const media = Array.isArray(post?.media) ? post?.media : []
  const mediaUrl = media.find((item) => typeof item?.url === 'string' && item.url)?.url
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  const images = Array.isArray(content.images) ? content.images : []
  const contentImage = images.find((url): url is string => typeof url === 'string' && Boolean(url))
  const logo = typeof content.logo === 'string' ? content.logo : ''
  return mediaUrl || contentImage || logo || 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=82'
}

export function toPlainText(value: unknown): string {
  if (typeof value !== 'string') return ''
  return value
    .replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#0?39;|&apos;/gi, "'")
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export function getEditableExcerpt(post?: SitePost | null, limit = 150) {
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  const raw =
    (typeof content.description === 'string' && content.description) ||
    (typeof content.summary === 'string' && content.summary) ||
    (typeof post?.summary === 'string' && post.summary) ||
    (typeof content.body === 'string' && content.body) ||
    (typeof content.excerpt === 'string' && content.excerpt) ||
    ''
  const clean = toPlainText(raw)
  const safe = clean || 'Discover practical details, local highlights, and useful information from our community.'
  return safe.length > limit ? `${safe.slice(0, limit).trim()}...` : safe
}

export function getEditableCategory(post?: SitePost | null) {
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  return (typeof content.category === 'string' && content.category.trim()) || post?.tags?.find(Boolean) || 'Local discovery'
}

export function postHref(task: TaskKey, post: SitePost, route = `/${task}`) {
  return `${route}/${post.slug}`
}

export function EditorialFeatureCard({ post, href, label = 'Featured' }: { post: SitePost; href: string; label?: string }) {
  return (
    <Link href={href} className="group block min-w-0 overflow-hidden rounded-2xl bg-[var(--slot4-dark-bg)] text-white transition duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.2)]">
      <div className="relative min-h-[480px] p-6 sm:p-8 lg:min-h-[560px]">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover opacity-50 transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.85))]" />
        <div className="relative z-10 flex h-full min-h-[440px] flex-col justify-end lg:min-h-[520px]">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--slot4-accent)]">{label}</span>
          <h3 className="editable-display mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{post.title}</h3>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">{getEditableExcerpt(post, 190)}</p>
          <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[var(--slot4-page-text)]">
            Read more <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  )
}

export function RailPostCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className={`group ${dc.layout.minRailCard} block overflow-hidden rounded-2xl border border-[var(--editable-border)] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg`}>
      <div className="relative aspect-[2/3] overflow-hidden bg-[var(--slot4-media-bg)]">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute left-3 top-3 rounded-full bg-[var(--slot4-dark-bg)] px-2.5 py-1 text-[10px] font-bold text-white">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--slot4-accent)]">{getEditableCategory(post)}</p>
        <h3 className="mt-2 line-clamp-3 text-base font-bold leading-snug">{post.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-[var(--slot4-muted-text)]">{getEditableExcerpt(post, 100)}</p>
      </div>
    </Link>
  )
}

export function CompactIndexCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group block rounded-2xl border border-[var(--editable-border)] bg-[var(--slot4-panel-bg)] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--slot4-dark-bg)] text-xs font-bold text-white">{index + 1}</span>
        <div className="min-w-0">
          <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--slot4-accent)]"><Clock3 className="h-3.5 w-3.5" /> {getEditableCategory(post)}</p>
          <h3 className="mt-2 line-clamp-2 text-lg font-bold leading-snug">{post.title}</h3>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-[var(--slot4-muted-text)]">{getEditableExcerpt(post, 105)}</p>
        </div>
      </div>
    </Link>
  )
}

export function ArticleListCard({ post, href, index: _index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group grid min-w-0 gap-5 overflow-hidden rounded-2xl border border-[var(--editable-border)] bg-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:grid-cols-[220px_minmax(0,1fr)]">
      <div className="relative aspect-[16/12] overflow-hidden rounded-xl bg-[var(--slot4-media-bg)] sm:aspect-auto sm:min-h-[180px]">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="min-w-0 p-2 sm:py-3 sm:pr-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--slot4-accent)]">{getEditableCategory(post)}</p>
        <h2 className="editable-display mt-2 line-clamp-2 text-xl font-bold leading-snug sm:text-2xl">{post.title}</h2>
        <p className="mt-3 line-clamp-2 text-sm leading-7 text-[var(--slot4-muted-text)]">{getEditableExcerpt(post, 160)}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--slot4-accent)]">Read article <ArrowRight className="h-4 w-4" /></span>
      </div>
    </Link>
  )
}
