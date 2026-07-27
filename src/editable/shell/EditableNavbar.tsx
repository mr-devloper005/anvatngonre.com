'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Search, X, PlusCircle, LogOut, UserRound } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'
import { EditableBrandLogo } from '@/editable/components/EditableBrandLogo'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const { session, logout } = useEditableLocalAuthSession()
  const navItems = useMemo(
    () => SITE_CONFIG.tasks.filter((task) => task.enabled && task.key !== 'listing').map((task) => ({ label: task.label, href: task.route })),
    []
  )

  return (
    <header className={`${isHome ? 'absolute inset-x-0 top-0 border-white/10 bg-transparent text-white' : 'sticky top-0 border-[var(--editable-border)] bg-[var(--editable-nav-bg)] shadow-[0_6px_24px_rgba(16,24,40,.04)] backdrop-blur-xl'} z-50 border-b`}>
      <nav className="mx-auto flex h-[72px] w-full max-w-[var(--editable-container)] items-center gap-5 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group min-w-0 max-w-[210px] shrink sm:max-w-none" aria-label={`${SITE_CONFIG.name} home`}>
          <EditableBrandLogo inverted={isHome} compact />
        </Link>

        <div className={`${isHome ? 'lg:hidden' : 'hidden lg:flex'} items-center gap-0.5`}>
          {navItems.slice(0, 5).map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-lg px-3.5 py-2 text-sm font-semibold transition ${
                  active ? 'text-[var(--slot4-accent)] after:absolute after:inset-x-3 after:-bottom-[17px] after:h-0.5 after:bg-[var(--slot4-accent)]' : 'text-[var(--slot4-muted-text)] hover:bg-[var(--slot4-panel-bg)] hover:text-[var(--slot4-page-text)]'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <Link href="/search" className={`${isHome ? 'hidden' : 'flex'} h-9 w-9 items-center justify-center rounded-full text-[var(--slot4-muted-text)] transition hover:bg-[var(--slot4-panel-bg)] hover:text-[var(--slot4-page-text)]`}>
            <Search className="h-4 w-4" />
          </Link>

          {session ? (
            <>
              <span className={`hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold sm:inline-flex ${isHome ? 'bg-white/15 text-white' : 'bg-[var(--slot4-panel-bg)] text-[var(--slot4-page-text)]'}`}><UserRound className={`h-4 w-4 ${isHome ? 'text-white' : 'text-[var(--slot4-accent)]'}`} />{session.name || 'Member'}</span>
              <Link
                href="/create"
                className="hidden items-center gap-1.5 rounded-xl bg-[#246bfd] px-4 py-2.5 text-sm font-bold text-white shadow-[0_8px_18px_rgba(36,107,253,.2)] transition hover:-translate-y-0.5 hover:bg-[#175cd3] sm:inline-flex"
              >
                <PlusCircle className="h-4 w-4" /> Create
              </Link>
              <button
                type="button"
                onClick={logout}
                className={`hidden h-10 w-10 items-center justify-center rounded-full border transition sm:flex ${isHome ? 'border-white/50 text-white hover:bg-white hover:text-black' : 'border-[var(--editable-border)] text-[var(--slot4-muted-text)] hover:border-[var(--slot4-accent)] hover:text-[var(--slot4-accent)]'}`}
                aria-label="Logout"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className={`hidden rounded-full border px-5 py-2 text-sm font-semibold transition sm:block ${isHome ? 'border-white text-white hover:bg-white hover:text-black' : 'border-[var(--slot4-page-text)] text-[var(--slot4-page-text)] hover:bg-[var(--slot4-page-text)] hover:text-white'}`}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="hidden rounded-full bg-[var(--slot4-accent)] px-5 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg sm:block"
              >
                Sign up
              </Link>
            </>
          )}

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--editable-border)] lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-[var(--editable-border)] bg-white px-4 py-4 lg:hidden">
          <form action="/search" className="mb-4 flex items-center gap-2 rounded-lg border border-[var(--editable-border)] bg-[var(--slot4-panel-bg)] px-3 py-2">
            <Search className="h-4 w-4 text-[var(--slot4-muted-text)]" />
            <input name="q" type="search" placeholder="Search businesses..." className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[var(--slot4-muted-text)]" />
          </form>
          {session ? <p className="mb-3 flex items-center gap-2 px-4 text-sm font-bold"><UserRound className="h-4 w-4 text-[var(--slot4-accent)]" />{session.name || 'Member'}</p> : null}
          <div className="grid gap-1">
            {[{ label: 'Home', href: '/' }, ...navItems, { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }, ...(session ? [{ label: 'Create', href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                    active
                      ? 'bg-[var(--slot4-accent-soft)] text-[var(--slot4-accent)]'
                      : 'text-[var(--slot4-muted-text)] hover:bg-[var(--slot4-panel-bg)]'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
            {session ? (
              <button type="button" onClick={() => { logout(); setOpen(false) }} className="rounded-lg px-4 py-2.5 text-left text-sm font-medium text-[var(--slot4-muted-text)] transition hover:bg-[var(--slot4-panel-bg)]">
                Logout
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
