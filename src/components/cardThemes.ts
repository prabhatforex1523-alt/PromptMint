export type CategoryTheme = 'business' | 'marketing' | 'youtube'

export const categoryThemeStyles = {
  youtube: {
    card:
      'border-rose-200 bg-linear-to-br from-rose-50 via-white to-white hover:border-rose-300',
    miniCard: 'border-rose-200 bg-rose-50/85',
    glow: 'bg-rose-100/80',
    iconWrap:
      'bg-rose-100 text-rose-600 ring-1 ring-rose-200 group-hover:bg-rose-500 group-hover:text-white group-hover:ring-rose-300',
    eyebrow: 'text-rose-700',
    badge: 'bg-rose-100 text-rose-700',
    subtitle: 'text-rose-700',
    accentText: 'text-rose-600',
    button:
      'border-rose-200 bg-white text-rose-700 hover:border-rose-300 hover:bg-rose-50 hover:text-rose-800',
    chip: 'bg-rose-100/80 text-rose-700',
  },
  business: {
    card:
      'border-sky-200 bg-linear-to-br from-sky-50 via-white to-white hover:border-sky-300',
    miniCard: 'border-sky-200 bg-sky-50/85',
    glow: 'bg-sky-100/80',
    iconWrap:
      'bg-sky-100 text-sky-700 ring-1 ring-sky-200 group-hover:bg-sky-600 group-hover:text-white group-hover:ring-sky-300',
    eyebrow: 'text-sky-700',
    badge: 'bg-sky-100 text-sky-700',
    subtitle: 'text-sky-700',
    accentText: 'text-sky-600',
    button:
      'border-sky-200 bg-white text-sky-700 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-800',
    chip: 'bg-sky-100/80 text-sky-700',
  },
  marketing: {
    card:
      'border-emerald-200 bg-linear-to-br from-emerald-50 via-white to-white hover:border-emerald-300',
    miniCard: 'border-emerald-200 bg-emerald-50/85',
    glow: 'bg-emerald-100/80',
    iconWrap:
      'bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200 group-hover:bg-emerald-600 group-hover:text-white group-hover:ring-emerald-300',
    eyebrow: 'text-emerald-700',
    badge: 'bg-emerald-100 text-emerald-700',
    subtitle: 'text-emerald-700',
    accentText: 'text-emerald-600',
    button:
      'border-emerald-200 bg-white text-emerald-700 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800',
    chip: 'bg-emerald-100/80 text-emerald-700',
  },
} as const

export function getCategoryTheme(category: string): CategoryTheme {
  if (category === 'Business') {
    return 'business'
  }

  if (category === 'Marketing') {
    return 'marketing'
  }

  return 'youtube'
}
