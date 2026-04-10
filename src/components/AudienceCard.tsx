import type { ComponentType, SVGProps } from 'react'

type AudienceCardProps = {
  description: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  tone: 'amber' | 'emerald' | 'rose' | 'sky'
}

const toneStyles = {
  amber: {
    card:
      'border-amber-200 bg-linear-to-br from-amber-50 via-white to-white hover:border-amber-300',
    iconWrap:
      'bg-amber-100 text-amber-700 ring-1 ring-amber-200 group-hover:bg-amber-500 group-hover:text-white group-hover:ring-amber-300',
    eyebrow: 'text-amber-700',
  },
  emerald: {
    card:
      'border-emerald-200 bg-linear-to-br from-emerald-50 via-white to-white hover:border-emerald-300',
    iconWrap:
      'bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200 group-hover:bg-emerald-500 group-hover:text-white group-hover:ring-emerald-300',
    eyebrow: 'text-emerald-700',
  },
  rose: {
    card:
      'border-rose-200 bg-linear-to-br from-rose-50 via-white to-white hover:border-rose-300',
    iconWrap:
      'bg-rose-100 text-rose-700 ring-1 ring-rose-200 group-hover:bg-rose-500 group-hover:text-white group-hover:ring-rose-300',
    eyebrow: 'text-rose-700',
  },
  sky: {
    card:
      'border-sky-200 bg-linear-to-br from-sky-50 via-white to-white hover:border-sky-300',
    iconWrap:
      'bg-sky-100 text-sky-700 ring-1 ring-sky-200 group-hover:bg-sky-500 group-hover:text-white group-hover:ring-sky-300',
    eyebrow: 'text-sky-700',
  },
} as const

function AudienceCard({
  description,
  icon: Icon,
  title,
  tone,
}: AudienceCardProps) {
  const styles = toneStyles[tone]

  return (
    <article
      className={`group rounded-[1.5rem] border p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] ${styles.card}`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition duration-200 ${styles.iconWrap}`}
        >
          <Icon className="h-6 w-6" />
        </div>

        <div>
          <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${styles.eyebrow}`}>
            Who it helps
          </p>
          <h3 className="mt-2 text-lg font-semibold text-slate-950">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
        </div>
      </div>
    </article>
  )
}

export default AudienceCard
