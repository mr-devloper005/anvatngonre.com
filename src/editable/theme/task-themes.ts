import type { CSSProperties } from 'react'
import type { TaskKey } from '@/lib/site-config'

export type TaskTheme = {
  kicker: string
  note: string
  dark: boolean
  fontDisplay: string
  fontBody: string
  bg: string
  surface: string
  raised: string
  text: string
  muted: string
  line: string
  accent: string
  accentSoft: string
  onAccent: string
  glow: string
  radius: string
}

const FONT = "'Plus Jakarta Sans', 'Inter', system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif"

const base = {
  dark: false,
  fontDisplay: FONT,
  fontBody: "'Inter', system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif",
  bg: '#ffffff',
  surface: '#ffffff',
  raised: '#f8f8f8',
  text: '#1c1c1c',
  muted: '#696969',
  line: '#e8e8e8',
  accent: '#e23744',
  accentSoft: '#fff1f2',
  onAccent: '#ffffff',
  glow: 'rgba(226,55,68,0.06)',
  radius: '1rem',
} satisfies Omit<TaskTheme, 'kicker' | 'note'>

export const taskThemes: Record<TaskKey, TaskTheme> = {
  article: { ...base, kicker: 'Articles', note: 'Expert insights, in-depth guides, and industry updates for business owners.' },
  listing: { ...base, kicker: 'Businesses', note: 'Discover, compare, and connect with verified local businesses.' },
  classified: { ...base, kicker: 'Marketplace', note: 'Browse active offers, deals, and business opportunities near you.' },
  image: { ...base, kicker: 'Gallery', note: 'Visual showcases from listed businesses and community events.' },
  sbm: { ...base, kicker: 'Resources', note: 'Curated tools, guides, and reference links for business growth.' },
  pdf: { ...base, kicker: 'Documents', note: 'Downloadable reports, compliance guides, and business templates.' },
  profile: { ...base, kicker: 'Directory', note: 'Find business owners, service providers, and local professionals.' },
}

export function getTaskTheme(task: TaskKey): TaskTheme {
  return taskThemes[task] || taskThemes.article
}

export function taskThemeStyle(task: TaskKey): CSSProperties {
  const t = getTaskTheme(task)
  return {
    '--tk-bg': t.bg,
    '--tk-surface': t.surface,
    '--tk-raised': t.raised,
    '--tk-text': t.text,
    '--tk-muted': t.muted,
    '--tk-line': t.line,
    '--tk-accent': t.accent,
    '--tk-accent-soft': t.accentSoft,
    '--tk-on-accent': t.onAccent,
    '--tk-glow': t.glow,
    '--tk-radius': t.radius,
    '--slot4-accent': t.accent,
    '--slot4-accent-fill': t.accent,
    '--editable-font-display': t.fontDisplay,
    '--editable-font-body': t.fontBody,
    fontFamily: t.fontBody,
  } as CSSProperties
}
