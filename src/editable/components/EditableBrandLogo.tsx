import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'

export function EditableBrandLogo({
  inverted = false,
  compact = false,
}: {
  inverted?: boolean
  compact?: boolean
}) {
  return (
    <span className="inline-flex min-w-0 items-center gap-2.5">
      <span
        className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-full border ${
          compact ? 'h-9 w-9' : 'h-11 w-11'
        } ${
          inverted
            ? 'border-white/35 bg-white shadow-[0_8px_24px_rgba(0,0,0,.2)]'
            : 'border-[#dce2eb] bg-white shadow-[0_6px_18px_rgba(16,24,40,.08)]'
        }`}
      >
        <img
          src="/favicon.png?v=20260413"
          alt=""
          aria-hidden="true"
          className="absolute h-[185%] w-[185%] max-w-none object-cover"
        />
      </span>
      <span className="min-w-0">
        <span
          className={`editable-display block truncate font-extrabold leading-none tracking-[-0.03em] ${
            compact ? 'text-base' : 'text-lg'
          } ${inverted ? 'text-white' : 'text-[#172033]'}`}
        >
          {SITE_CONFIG.name}
        </span>
        <span
          className={`mt-1 block truncate text-[9px] font-semibold leading-none ${
            inverted ? 'text-white/65' : 'text-[#7d8798]'
          }`}
        >
          {globalContent.nav?.tagline || SITE_CONFIG.tagline}
        </span>
      </span>
    </span>
  )
}
