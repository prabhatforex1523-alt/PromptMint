type StoreFeatureCardProps = {
  description: string
  step: string
  title: string
  tone: 'amber' | 'emerald' | 'rose' | 'sky' | 'violet'
}

const toneStyles = {
  emerald: {
    card:
      'border-emerald-200 bg-linear-to-br from-emerald-50 via-white to-white hover:border-emerald-300',
    badge: 'bg-emerald-100 text-emerald-700',
  },
  sky: {
    card:
      'border-sky-200 bg-linear-to-br from-sky-50 via-white to-white hover:border-sky-300',
    badge: 'bg-sky-100 text-sky-700',
  },
  violet: {
    card:
      'border-violet-200 bg-linear-to-br from-violet-50 via-white to-white hover:border-violet-300',
    badge: 'bg-violet-100 text-violet-700',
  },
  amber: {
    card:
      'border-amber-200 bg-linear-to-br from-amber-50 via-white to-white hover:border-amber-300',
    badge: 'bg-amber-100 text-amber-700',
  },
  rose: {
    card:
      'border-rose-200 bg-linear-to-br from-rose-50 via-white to-white hover:border-rose-300',
    badge: 'bg-rose-100 text-rose-700',
  },
} as const

function StoreFeatureCard({
  description,
  step,
  title,
  tone,
}: StoreFeatureCardProps) {
  const styles = toneStyles[tone]

  return (
    <article
      className={`rounded-[1.6rem] border p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] sm:p-6 ${styles.card}`}
    >
      <span
        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] ${styles.badge}`}
      >
        Step {step}
      </span>
      <h3 className="mt-5 text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  )
}

export default StoreFeatureCard
