import type { AdSkin } from '@/lib/ads/ad-frame'

export const adSkin: AdSkin = {
  radius: '16px',
  border: '1px solid rgba(0,0,0,0.06)',
  shadow: '0 4px 16px rgba(0,0,0,0.06)',
  background: '#ffffff',
  labelClassName: 'bg-[#e23744] text-white',
}

export const adSkinBySlot: Partial<Record<string, AdSkin>> = {
  sidebar: { radius: '12px', shadow: 'none', border: '1px solid rgba(0,0,0,0.08)' },
  popup: { radius: '20px' },
  header: { radius: '16px', background: '#f8f8f8' },
  rail: { radius: '12px' },
  feature: { radius: '16px' },
  interstitial: { radius: '20px', shadow: '0 20px 60px rgba(0,0,0,0.5)' },
  anchor: { radius: '12px', shadow: '0 6px 24px rgba(0,0,0,0.18)' },
}

export function skinFor(slot: string): AdSkin {
  return { ...adSkin, ...(adSkinBySlot[slot] ?? {}) }
}
