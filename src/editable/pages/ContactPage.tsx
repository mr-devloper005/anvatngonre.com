'use client'

import { Building2, FileText, Headphones, Mail, MapPin, Phone } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

function getLanes(kind: ReturnType<typeof getProductKind>) {
  if (kind === 'directory') {
    return [
      { icon: Building2, title: 'Business onboarding', body: 'Get help setting up your business listing, verifying details, and going live on the platform.' },
      { icon: Phone, title: 'Partnership inquiries', body: 'Explore bulk listing options, advertising opportunities, and strategic partnerships.' },
      { icon: MapPin, title: 'Coverage expansion', body: 'Request coverage for new areas, industries, or business categories in our directory.' },
    ]
  }
  if (kind === 'editorial') {
    return [
      { icon: FileText, title: 'Content submissions', body: 'Submit articles, guides, and expert insights for review and publication.' },
      { icon: Mail, title: 'Collaboration inquiries', body: 'Discuss co-publishing opportunities, sponsored content, and industry partnerships.' },
      { icon: Headphones, title: 'Contributor support', body: 'Get assistance with your contributor account, content formatting, and publishing workflow.' },
    ]
  }
  return [
    { icon: Building2, title: 'Business onboarding', body: 'Get help setting up your business listing, verifying details, and going live on the platform.' },
    { icon: Phone, title: 'Partnership inquiries', body: 'Explore bulk listing options, advertising opportunities, and strategic partnerships.' },
    { icon: Headphones, title: 'General support', body: 'Questions about your account, listings, or how to get the most out of our platform.' },
  ]
}

export default function ContactPage() {
  const { recipe } = getFactoryState()
  const productKind = getProductKind(recipe)
  const lanes = getLanes(productKind)

  return (
    <EditableSiteShell>
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--slot4-accent)]">{pagesContent.contact.eyebrow}</p>
            <h1 className="editable-display mt-4 text-4xl font-bold tracking-[-0.02em] sm:text-5xl">{pagesContent.contact.title}</h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--slot4-muted-text)]">{pagesContent.contact.description}</p>
            <div className="mt-8 space-y-4">
              {lanes.map((lane) => (
                <div key={lane.title} className="rounded-2xl border border-[var(--editable-border)] bg-[var(--slot4-panel-bg)] p-5">
                  <lane.icon className="h-5 w-5 text-[var(--slot4-accent)]" />
                  <h2 className="editable-display mt-3 text-lg font-bold">{lane.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-[var(--slot4-muted-text)]">{lane.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--editable-border)] bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
            <h2 className="editable-display text-2xl font-bold">{pagesContent.contact.formTitle}</h2>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
