import ButtonLink from './ButtonLink'
import type { ComponentType, SVGProps } from 'react'
import { categoryThemeStyles, type CategoryTheme } from './cardThemes'

type CategoryCardProps = {
  buyLink?: string
  description: string
  eyebrow: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  price?: string
  theme: CategoryTheme
  title: string
}

function CategoryCard({
  buyLink,
  description,
  eyebrow,
  icon: Icon,
  price,
  theme,
  title,
}: CategoryCardProps) {
  const styles = categoryThemeStyles[theme]

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] sm:p-7 ${styles.card}`}
    >
      <div
        className={`pointer-events-none absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full blur-2xl ${styles.glow}`}
      />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className={`text-xs font-semibold uppercase tracking-[0.22em] ${styles.eyebrow}`}>
            {eyebrow}
          </p>
          <h3 className="mt-4 text-xl font-semibold text-slate-950 sm:text-2xl">{title}</h3>
        </div>

        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition duration-200 ${styles.iconWrap}`}
        >
          <Icon className="h-7 w-7" />
        </div>
      </div>

      <p className="relative mt-5 text-sm leading-7 text-slate-600">{description}</p>

      <div className="relative mt-6 flex items-center gap-2 text-sm font-medium text-slate-500">
        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-current/70" />
        <span>Designed for quick implementation</span>
      </div>

      {buyLink ? (
        <div className="relative mt-6 border-t border-white/70 pt-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              {price ? <p className="text-xl font-bold text-slate-950">{price}</p> : null}
              <p className="mt-1 text-xs font-medium text-slate-500">
                Instant download after purchase
              </p>
            </div>

            <ButtonLink
              href={buyLink}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              className={`w-full sm:w-auto ${styles.button}`}
            >
              Get Instant Access
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </article>
  )
}

export default CategoryCard
