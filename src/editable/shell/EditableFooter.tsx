'use client'

import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'
import { EditableBrandLogo } from '@/editable/components/EditableBrandLogo'

export function EditableFooter() {
  const taskLinks = SITE_CONFIG.tasks.filter((task) => task.enabled && task.key !== 'listing')
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer className="border-t border-[#dfe5ef] bg-[var(--editable-footer-bg)] text-[var(--editable-footer-text)]">
      <div className="mx-auto max-w-[var(--editable-container)] px-4 pb-8 pt-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <EditableBrandLogo />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-[#667085]">{globalContent.footer?.description || SITE_CONFIG.description}</p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm text-[#667085]"><MapPin className="h-4 w-4 text-[var(--slot4-accent)]" />Local stories, useful discoveries</p>
            <a href="mailto:contact@anvatngonre.com" className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#d8deea] bg-white px-4 py-2 text-sm font-semibold text-[#246bfd] transition hover:border-[#246bfd]">
              <Mail className="h-4 w-4" /> contact@anvatngonre.com
            </a>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#172033]">About</h3>
            <div className="mt-4 grid gap-2.5">
              {[['About Us', '/about'], ['Contact', '/contact'], ['Search', '/search']].map(([label, href]) => (
                <Link key={href} href={href} className="text-sm text-[#667085] transition hover:text-[var(--slot4-accent)]">{label}</Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#172033]">Discover</h3>
            <div className="mt-4 grid gap-2.5">
              {taskLinks.map((task) => (
                <Link key={task.key} href={task.route} className="text-sm text-[#667085] transition hover:text-[var(--slot4-accent)]">{task.label}</Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#172033]">Account</h3>
            <div className="mt-4 grid gap-2.5">
              {session ? (
                <>
                  <Link href="/create" className="text-sm text-[#667085] transition hover:text-[var(--slot4-accent)]">Create Listing</Link>
                  <button type="button" onClick={logout} className="text-left text-sm text-[#667085] transition hover:text-[var(--slot4-accent)]">Logout</button>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-sm text-[#667085] transition hover:text-[var(--slot4-accent)]">Login</Link>
                  <Link href="/signup" className="text-sm text-[#667085] transition hover:text-[var(--slot4-accent)]">Sign up</Link>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#d8deea] pt-6">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-xs text-[#7f8b9f]">&copy; {year} {SITE_CONFIG.name}. All rights reserved.</p>
            <div className="flex gap-4 text-xs text-[#7f8b9f]">
              <Link href="/about" className="transition hover:text-[#172033]">Privacy</Link>
              <Link href="/about" className="transition hover:text-[#172033]">Terms</Link>
              <Link href="/about" className="transition hover:text-[#172033]">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
