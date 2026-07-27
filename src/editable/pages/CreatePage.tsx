'use client'

import { FormEvent, useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Check, CheckCircle2, Lock, Send, ShieldCheck } from 'lucide-react'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

type DraftPost = {
  id: string
  task: TaskKey
  title: string
  category: string
  summary: string
  url: string
  image: string
  body: string
  createdAt: string
}

const STORE_KEY = 'slot4:created-posts'

const fieldClass = 'rounded-xl border border-[#d9e0ea] bg-[#f9fbfd] px-4 py-3.5 text-sm font-medium text-[var(--slot4-page-text)] outline-none transition placeholder:text-[#98a2b3] focus:border-[#2878f0] focus:bg-white focus:ring-4 focus:ring-[#2878f0]/10'

const saveDraft = (draft: DraftPost) => {
  try {
    const existing = JSON.parse(window.localStorage.getItem(STORE_KEY) || '[]')
    const list = Array.isArray(existing) ? existing : []
    window.localStorage.setItem(STORE_KEY, JSON.stringify([draft, ...list].slice(0, 50)))
  } catch {
    window.localStorage.setItem(STORE_KEY, JSON.stringify([draft]))
  }
}

export default function CreatePage() {
  const { session } = useEditableLocalAuthSession()
  const enabledTasks = useMemo(() => SITE_CONFIG.tasks.filter((task) => task.enabled), [])
  const [task] = useState<TaskKey>((enabledTasks[0]?.key || 'article') as TaskKey)
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [summary, setSummary] = useState('')
  const [url, setUrl] = useState('')
  const [image, setImage] = useState('')
  const [body, setBody] = useState('')
  const [created, setCreated] = useState<DraftPost | null>(null)

  const activeTask = enabledTasks.find((item) => item.key === task) || enabledTasks[0]

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const draft: DraftPost = {
      id: `draft-${Date.now()}`,
      task,
      title: title.trim(),
      category: category.trim() || 'uncategorized',
      summary: summary.trim(),
      url: url.trim(),
      image: image.trim(),
      body: body.trim(),
      createdAt: new Date().toISOString(),
    }
    saveDraft(draft)
    setCreated(draft)
    setTitle('')
    setCategory('')
    setSummary('')
    setUrl('')
    setImage('')
    setBody('')
  }

  if (!session) {
    return (
      <EditableSiteShell>
        <main className="min-h-screen bg-[var(--slot4-panel-bg)] px-4 py-16 text-[var(--slot4-page-text)] sm:px-6 lg:px-8">
          <section className="mx-auto grid max-w-5xl gap-8 rounded-2xl border border-[var(--editable-border)] bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] md:grid-cols-[0.9fr_1.1fr] md:p-10">
            <div className="flex h-full min-h-72 items-center justify-center rounded-2xl bg-[var(--slot4-dark-bg)] text-white">
              <Lock className="h-20 w-20 opacity-80" />
            </div>
            <div className="self-center">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--slot4-accent)]">{pagesContent.create.locked.badge}</p>
              <h1 className="editable-display mt-4 text-4xl font-bold leading-[1.1] tracking-[-0.02em] sm:text-5xl">{pagesContent.create.locked.title}</h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--slot4-muted-text)]">{pagesContent.create.locked.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/login" className="inline-flex items-center gap-2 rounded-xl bg-[var(--slot4-accent)] px-6 py-3 text-sm font-bold text-white">Login <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/signup" className="inline-flex items-center gap-2 rounded-xl border border-[var(--editable-border)] bg-white px-6 py-3 text-sm font-bold transition hover:shadow-md">Sign up</Link>
              </div>
            </div>
          </section>
        </main>
      </EditableSiteShell>
    )
  }

  return (
    <EditableSiteShell>
      <main className="min-h-screen bg-[#f5f7fb] text-[var(--slot4-page-text)]">
        <section className="bg-[#101828] text-white">
          <div className="mx-auto max-w-[var(--editable-container)] px-4 pb-28 pt-16 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#83adff]">{pagesContent.create.hero.badge}</p>
            <h1 className="editable-display mt-4 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-5xl">{pagesContent.create.hero.title}</h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65">{pagesContent.create.hero.description}</p>
          </div>
        </section>
        <section className="mx-auto -mt-16 max-w-[var(--editable-container)] px-4 pb-20 sm:px-6 lg:px-8">
          <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_320px]">
            <form onSubmit={submit} className="rounded-[26px] border border-[#e0e6ee] bg-white p-5 shadow-[0_20px_55px_rgba(16,24,40,.12)] sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#2878f0]">Create {activeTask?.label || 'post'}</p>
                  <h2 className="editable-display mt-2 text-2xl font-extrabold tracking-[-0.02em]">{pagesContent.create.formTitle}</h2>
                </div>
                <span className="rounded-full bg-[#eef4ff] px-4 py-2 text-xs font-bold text-[#2878f0]">{session.name}</span>
              </div>

              <div className="mt-6 grid gap-4">
                <input className={fieldClass} value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Post title" required />
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className={fieldClass} value={category} onChange={(event) => setCategory(event.target.value)} placeholder="Category" />
                  <input className={fieldClass} value={url} onChange={(event) => setUrl(event.target.value)} placeholder="Website or source URL" />
                </div>
                <input className={fieldClass} value={image} onChange={(event) => setImage(event.target.value)} placeholder="Featured image URL" />
                <textarea className={`${fieldClass} min-h-24`} value={summary} onChange={(event) => setSummary(event.target.value)} placeholder="Short summary" required />
                <textarea className={`${fieldClass} min-h-48`} value={body} onChange={(event) => setBody(event.target.value)} placeholder="Main content, details, notes, or description" required />
              </div>

              {created ? (
                <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
                  <p className="flex items-center gap-2 text-sm font-bold"><CheckCircle2 className="h-5 w-5" /> {pagesContent.create.successTitle}</p>
                  <p className="mt-1 text-sm text-emerald-700">{created.title}</p>
                </div>
              ) : null}

              <button type="submit" className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#2878f0] px-6 text-sm font-bold text-white shadow-[0_12px_26px_rgba(40,120,240,.24)] transition hover:-translate-y-0.5 hover:bg-[#1768df]">
                <Send className="h-4 w-4" /> {pagesContent.create.submitLabel}
              </button>
            </form>
            <aside className="space-y-5 lg:pt-4">
              <div className="rounded-2xl border border-[#e0e6ee] bg-white p-6">
                <ShieldCheck className="h-8 w-8 text-[#2878f0]" />
                <h2 className="mt-4 text-lg font-extrabold">Before you publish</h2>
                <div className="mt-5 space-y-4">
                  {['Use a clear, descriptive title', 'Add accurate contact information', 'Choose a relevant category', 'Include a high-quality image'].map((item) => (
                    <p key={item} className="flex gap-3 text-sm leading-6 text-[#667085]"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#2faf68]" />{item}</p>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl bg-[#eef4ff] p-6 text-sm leading-6 text-[#526581]">
                Your submission is saved to this browser and remains available to your signed-in session.
              </div>
            </aside>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
