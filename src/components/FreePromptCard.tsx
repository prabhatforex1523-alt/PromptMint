import ButtonLink from './ButtonLink'
import { categoryThemeStyles, getCategoryTheme } from './cardThemes'

type FreePromptCardProps = {
  buyLink?: string
  category: string
  content: string
  description: string
  isCopied: boolean
  onCopy: () => void
  title: string
}

function FreePromptCard({
  buyLink,
  category,
  content,
  description,
  isCopied,
  onCopy,
  title,
}: FreePromptCardProps) {
  const theme = getCategoryTheme(category)
  const styles = categoryThemeStyles[theme]

  return (
    <article
      className={`group relative overflow-hidden rounded-[1.75rem] border p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] sm:p-7 ${styles.card}`}
    >
      <div
        className={`pointer-events-none absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full blur-2xl ${styles.glow}`}
      />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${styles.eyebrow}`}>
            {category} free prompt
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-950">{title}</h3>
        </div>

        <button
          type="button"
          onClick={onCopy}
          className={`inline-flex shrink-0 items-center justify-center rounded-full px-4 py-2 text-sm font-semibold shadow-[var(--shadow-button)] transition hover:-translate-y-0.5 ${styles.iconWrap}`}
        >
          {isCopied ? 'Copied' : 'Copy'}
        </button>
      </div>

      <p className="relative mt-4 text-sm leading-7 text-slate-600">{description}</p>

      <div className="relative mt-6 flex items-center gap-2 text-sm font-medium text-slate-500">
        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-current/70" />
        <span>High-quality preview prompt</span>
      </div>

      <div className="relative mt-6 rounded-[1.5rem] border border-white/70 bg-white/90 p-4 shadow-sm sm:p-5">
        <p className="whitespace-pre-line text-sm leading-7 text-slate-700">{content}</p>
      </div>

      {buyLink ? (
        <div className="relative mt-6">
          <ButtonLink
            href={buyLink}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
            className={`w-full sm:w-auto ${styles.button}`}
          >
            Unlock Full Pack
          </ButtonLink>
          <p className="mt-3 text-xs font-medium text-slate-500">
            Unlock the full premium pack for this category
          </p>
        </div>
      ) : null}
    </article>
  )
}

export default FreePromptCard
