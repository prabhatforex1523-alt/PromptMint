type TrustCardProps = {
  description: string
  tone: 'amber' | 'emerald' | 'rose' | 'sky' | 'violet'
  title: string
}

const toneStyles = {
  emerald: {
    card:
      'border-emerald-200 bg-linear-to-br from-emerald-50 via-white to-white hover:border-emerald-300',
    dot: 'bg-emerald-500',
    label: 'text-emerald-700',
  },
  sky: {
    card:
      'border-sky-200 bg-linear-to-br from-sky-50 via-white to-white hover:border-sky-300',
    dot: 'bg-sky-500',
    label: 'text-sky-700',
  },
  violet: {
    card:
      'border-violet-200 bg-linear-to-br from-violet-50 via-white to-white hover:border-violet-300',
    dot: 'bg-violet-500',
    label: 'text-violet-700',
  },
  amber: {
    card:
      'border-amber-200 bg-linear-to-br from-amber-50 via-white to-white hover:border-amber-300',
    dot: 'bg-amber-500',
    label: 'text-amber-700',
  },
  rose: {
    card:
      'border-rose-200 bg-linear-to-br from-rose-50 via-white to-white hover:border-rose-300',
    dot: 'bg-rose-500',
    label: 'text-rose-700',
  },
} as const

function TrustCard({ description, tone, title }: TrustCardProps) {
  const styles = toneStyles[tone]

  return (
    <article
      className={`rounded-[1.5rem] border p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] ${styles.card}`}
    >
      <span className={`inline-flex h-2.5 w-2.5 rounded-full ${styles.dot}`} />
      <p className={`mt-4 text-xs font-semibold uppercase tracking-[0.2em] ${styles.label}`}>
        Trust point
      </p>
      <h3 className="mt-3 text-lg font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  )
}

export default TrustCard
