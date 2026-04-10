import ButtonLink from './ButtonLink'
import { categoryThemeStyles, getCategoryTheme } from './cardThemes'

type PromptCardProps = {
  bestFor?: string
  buyLink: string
  category: string
  description: string
  highlights?: string[]
  id: string
  price: string
  promptCount?: number
  subtitle?: string
  title: string
}

function PromptCard({
  bestFor,
  buyLink,
  category,
  description,
  highlights,
  id,
  price,
  promptCount,
  subtitle,
  title,
}: PromptCardProps) {
  const theme = getCategoryTheme(category)
  const styles = categoryThemeStyles[theme]

  return (
    <article
      id={id}
      className={`group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] sm:p-7 ${styles.card}`}
    >
      <div
        className={`pointer-events-none absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full blur-2xl ${styles.glow}`}
      />

      <span
        className={`relative w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${styles.badge}`}
      >
        {category}
      </span>

      <h3 className="relative mt-5 text-2xl font-semibold text-slate-950">{title}</h3>
      {subtitle ? (
        <p className={`relative mt-2 text-sm font-medium ${styles.subtitle}`}>{subtitle}</p>
      ) : null}
      <p className="relative mt-4 flex-1 text-sm leading-7 text-slate-600">{description}</p>

      <div className="relative mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-[1.25rem] border border-white/70 bg-white/85 p-4 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            Best for
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            {bestFor ?? 'Creators and teams who want reusable, practical AI prompts.'}
          </p>
        </div>

        <div className="rounded-[1.25rem] border border-white/70 bg-white/85 p-4 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            Delivery
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Instant text download built for repeat use in ChatGPT and Gemini.
          </p>
        </div>
      </div>

      {highlights?.length ? (
        <div className="relative mt-6 flex flex-wrap gap-2">
          {highlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-full border border-white/70 bg-white/85 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm"
            >
              {highlight}
            </span>
          ))}
        </div>
      ) : null}

      <div className="relative mt-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-2xl font-bold text-slate-950">{price}</p>
            {promptCount ? (
              <p className={`mt-1 text-xs font-medium ${styles.accentText}`}>
                {promptCount} curated prompts
              </p>
            ) : null}
          </div>
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${styles.chip}`}>
            One-time download
          </span>
        </div>

        <div className="mt-4">
          <ButtonLink
            href={buyLink}
            variant="secondary"
            target="_blank"
            rel="noreferrer"
            className={`w-full sm:w-auto ${styles.button}`}
          >
            View Pack
          </ButtonLink>
          <p className="mt-3 text-xs font-medium text-slate-500">
            or get all 3 for $39
          </p>
        </div>
      </div>
    </article>
  )
}

export default PromptCard
