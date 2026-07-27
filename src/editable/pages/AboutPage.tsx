import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="px-4 py-14 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-[var(--editable-container)]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--slot4-accent)]">{pagesContent.about.badge}</p>
            <h1 className="editable-display mt-4 text-4xl font-bold tracking-[-0.02em] sm:text-5xl">About {SITE_CONFIG.name}</h1>
            <p className="mt-5 text-base leading-7 text-[var(--slot4-muted-text)]">{pagesContent.about.description}</p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-4 text-sm leading-7 text-[var(--slot4-muted-text)]">
            {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {pagesContent.about.values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-[var(--editable-border)] bg-white p-6 transition hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
                <h2 className="editable-display text-lg font-bold">{value.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--slot4-muted-text)]">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
