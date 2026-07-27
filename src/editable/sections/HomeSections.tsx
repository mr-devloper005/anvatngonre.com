import Link from 'next/link'
import {
  ArrowRight, BadgePercent, Building2, Check, ChevronDown,
  Headphones, Mail, Store, Users,
} from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { getEditableCategory, getEditableExcerpt, getEditablePostImage, postHref } from '@/editable/cards/PostCards'
import { EditableHeroCollage } from '@/editable/sections/EditableHeroCollage'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

type StoryCard = {
  title: string
  text: string
  name: string
  post?: SitePost
}

const container = 'mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12'

function safePosts(posts: SitePost[], timeSections: HomeTimeSection[]) {
  const unique = new Map<string, SitePost>()
  for (const post of [...posts, ...timeSections.flatMap((section) => section.posts)]) {
    const key = post.slug || post.id || post.title
    if (key && !unique.has(key)) unique.set(key, post)
  }
  return [...unique.values()]
}

function usableImages(posts: SitePost[]) {
  return posts.map(getEditablePostImage).filter(Boolean).slice(0, 6)
}

export function EditableHomeHero({ posts, timeSections }: HomeSectionProps) {
  const pool = safePosts(posts, timeSections)
  return (
    <section className="relative isolate bg-[#171816] text-white">
      <div className="relative min-h-[760px] overflow-hidden pb-36 pt-28 sm:min-h-[800px] sm:pt-32 lg:min-h-[760px]">
        <EditableHeroCollage images={usableImages(pool)} />
        <div className="absolute inset-0 bg-black/58" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,45,45,.15),rgba(0,0,0,.78))]" />
        <div className={`relative z-10 flex flex-col items-center text-center ${container}`}>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[.24em] text-white/70">Business partner programme</p>
          <h1 className="editable-display max-w-4xl text-balance text-4xl font-extrabold leading-[1.12] sm:text-5xl lg:text-[56px]">
            Partner with {SITE_CONFIG.name} and<br className="hidden sm:block" /> grow your business
          </h1>
          <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/45 px-5 py-3 text-left shadow-xl backdrop-blur-md">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2878f0]"><BadgePercent className="h-5 w-5" /></span>
            <span>
              <strong className="block text-sm">Free featured placement for new partners</strong>
              <span className="block text-xs text-white/65">Available during your first month</span>
            </span>
          </div>
          <Link href="/create" className="mt-8 rounded-xl bg-[#2878f0] px-9 py-4 text-base font-bold text-white shadow-[0_16px_36px_rgba(40,120,240,.32)] transition hover:-translate-y-1 hover:bg-[#1467df]">
            Register your business
          </Link>
        </div>
      </div>

      <div className={`relative z-20 -mt-36 ${container}`}>
        <div className="grid overflow-hidden rounded-2xl bg-white p-6 text-[#172033] shadow-[0_18px_50px_rgba(16,24,40,.18)] sm:p-8 lg:grid-cols-[1.4fr_.8fr] lg:gap-10">
          <div>
            <h2 className="editable-display text-2xl font-extrabold">Get started: it only takes 10 minutes</h2>
            <p className="mt-1 text-sm text-[#78849a]">Keep these details ready for a smooth business registration.</p>
            <div className="mt-7 grid gap-x-8 gap-y-4 text-sm font-semibold sm:grid-cols-2">
              {[
                'Business or personal identity',
                'Contact and location details',
                'Service or menu information',
                'Business profile images',
                'Payment details, when applicable',
              ].map((item) => (
                <span key={item} className="flex items-center gap-2.5">
                  <Check className="h-5 w-5 rounded-full bg-[#30b663] p-1 text-white" />{item}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-8 flex min-h-36 items-center rounded-xl bg-[#eef4ff] p-5 lg:mt-0">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2878f0] text-white"><Store className="h-6 w-6" /></div>
            <div className="ml-4">
              <p className="text-xs font-bold uppercase tracking-[.16em] text-[#2878f0]">Partner onboarding</p>
              <h3 className="mt-1 font-bold">Build a complete profile customers can trust.</h3>
              <Link href="/create" className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-[#2878f0]">Start now <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryRoute }: HomeSectionProps) {
  const benefits = [
    { icon: Users, title: 'Attract new customers', body: 'Reach people actively searching for trusted local businesses and useful services.' },
    { icon: Store, title: 'Simple business discovery', body: 'Present your details, services, images, and contact information in one useful profile.' },
    { icon: Mail, title: 'Onboarding support', body: 'Get practical help from our team while preparing and publishing your business page.' },
  ]
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className={container}>
        <div className="flex items-center gap-5">
          <span className="h-px flex-1 bg-[#b8c0cf]" />
          <h2 className="editable-display text-center text-2xl font-extrabold sm:text-4xl">Why should you partner with {SITE_CONFIG.name}?</h2>
          <span className="h-px flex-1 bg-[#b8c0cf]" />
        </div>
        <div className="mt-14 grid gap-12 md:grid-cols-3">
          {benefits.map(({ icon: Icon, title, body }) => (
            <div key={title} className="text-center">
              <Icon className="mx-auto h-11 w-11 stroke-[1.8] text-[#2878f0]" />
              <h3 className="editable-display mt-7 text-xl font-bold">{title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-[#667085]">{body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href={primaryRoute} className="inline-flex items-center gap-2 text-sm font-bold text-[#2878f0]">Explore partner profiles <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const real = safePosts(posts, timeSections).slice(0, 3)
  const fallback = [
    { title: 'A more visible local presence', text: `The platform gave our business a clearer online presence and made it easier for new customers to understand what we offer.`, name: 'Local business owner' },
    { title: 'An easier way to be discovered', text: `Our profile brings our services, contact details, and latest updates together in one reliable place.`, name: 'Independent service provider' },
    { title: 'Support that made a difference', text: `The onboarding process was straightforward, and the guidance helped us publish a polished business profile.`, name: 'Community partner' },
  ]
  const cards: StoryCard[] = real.length
    ? real.map((post) => ({ title: getEditableCategory(post), text: getEditableExcerpt(post, 190), name: post.title, post }))
    : fallback

  return (
    <section className="bg-[#edf4ff] py-20 sm:py-24">
      <div className={container}>
        <h2 className="editable-display text-center text-3xl font-extrabold sm:text-4xl">Business success stories</h2>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {cards.map((card, index) => {
            const body = (
              <article className="flex h-full min-h-60 flex-col rounded-2xl bg-white p-6 shadow-[0_10px_28px_rgba(39,72,122,.06)] transition hover:-translate-y-1 hover:shadow-xl">
                <p className="text-sm leading-6 text-[#64704e]">{card.text}</p>
                <div className="mt-auto border-t border-[#edf0f4] pt-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#eaf0fa] text-sm font-extrabold text-[#2878f0]">{String(index + 1).padStart(2, '0')}</span>
                    <div><h3 className="line-clamp-1 text-sm font-bold text-[#30394b]">{card.name}</h3><p className="mt-0.5 text-xs text-[#8a94a6]">{card.title}</p></div>
                  </div>
                </div>
              </article>
            )
            return card.post
              ? <Link key={card.post.id || card.post.slug} href={postHref(primaryTask, card.post, primaryRoute)}>{body}</Link>
              : <div key={card.name}>{body}</div>
          })}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const feed = safePosts(posts, timeSections).slice(0, 8)
  if (!feed.length) return null
  return (
    <section className="overflow-hidden bg-white py-20">
      <div className={container}>
        <div className="flex items-end justify-between gap-5">
          <div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#2878f0]">Latest discoveries</p><h2 className="editable-display mt-2 text-3xl font-extrabold">Explore our partner community</h2></div>
          <Link href={primaryRoute} className="hidden items-center gap-2 text-sm font-bold text-[#2878f0] sm:flex">View all <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-9 flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {feed.map((post) => (
            <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="group w-[280px] shrink-0 snap-start overflow-hidden rounded-2xl border border-[#e4e7ec] bg-white transition hover:-translate-y-1 hover:shadow-xl sm:w-[320px]">
              <div className="aspect-[16/10] overflow-hidden bg-[#eef2f7]"><img src={getEditablePostImage(post)} alt={post.title || 'Business profile'} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div>
              <div className="p-5"><span className="text-xs font-bold uppercase tracking-[.14em] text-[#2878f0]">{getEditableCategory(post)}</span><h3 className="mt-2 line-clamp-2 text-lg font-bold">{post.title || 'Community business'}</h3><p className="mt-2 line-clamp-2 text-sm leading-6 text-[#667085]">{getEditableExcerpt(post, 110)}</p></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  const faqs = [
    ['What details do I need to publish a business profile?', 'Prepare your business name, description, contact details, location, service information, and clear profile images.'],
    ['How long does it take for a profile to go live?', 'Most complete submissions can be reviewed quickly. Timing can vary when additional information or verification is required.'],
    ['Is there a fee to create a listing?', 'Available options are shown clearly during registration so you can choose what suits your business.'],
    ['How can I get help if I get stuck?', 'Use the contact page to reach our support team with questions about onboarding, editing, or managing your profile.'],
    ['How do customers find my business?', 'Customers can discover profiles through search, categories, articles, and related recommendations across the site.'],
    ['Can I update my business information later?', 'Yes. Signed-in members can manage their submitted content and keep important business information current.'],
  ]
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className={container}>
        <h2 className="editable-display text-center text-3xl font-extrabold sm:text-4xl">Frequently asked questions</h2>
        <div className="mx-auto mt-16 max-w-6xl space-y-5">
          {faqs.map(([question, answer]) => (
            <details key={question} className="group rounded-2xl border border-[#e4e8ef] bg-white open:shadow-lg">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 text-sm font-semibold sm:px-7 sm:text-base">
                {question}<ChevronDown className="h-5 w-5 shrink-0 text-[#9aabc0] transition group-open:rotate-180" />
              </summary>
              <p className="border-t border-[#edf0f4] px-5 py-5 text-sm leading-7 text-[#667085] sm:px-7">{answer}</p>
            </details>
          ))}
        </div>
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          <Link href="/create" className="inline-flex items-center gap-2 rounded-xl bg-[#2878f0] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#1467df]"><Building2 className="h-4 w-4" /> Register your business</Link>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl border border-[#d8dee9] px-7 py-3.5 text-sm font-bold transition hover:border-[#2878f0] hover:text-[#2878f0]"><Headphones className="h-4 w-4" /> Contact support</Link>
        </div>
      </div>
    </section>
  )
}
