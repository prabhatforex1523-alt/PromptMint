import ButtonLink from './ButtonLink'
import { CheckIcon } from './icons'

type BundleCardProps = {
  badge: string
  benefits: string[]
  buyLink: string
  bundlePrice: string
  includedProducts: string[]
  originalPrice: string
  saveText: string
  summaryItems: string[]
  subtitle: string
  title: string
}

function BundleCard({
  badge,
  benefits,
  buyLink,
  bundlePrice,
  includedProducts,
  originalPrice,
  saveText,
  summaryItems,
  subtitle,
  title,
}: BundleCardProps) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-green-200 bg-linear-to-br from-slate-950 via-slate-900 to-green-950 p-6 text-white shadow-[var(--shadow-card)] sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-green-600">
            {badge}
          </span>

          <h3 className="mt-5 font-display text-3xl text-white sm:text-4xl">{title}</h3>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-200">{subtitle}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-300">
                Included products
              </p>
              <ul className="mt-4 space-y-3">
                {includedProducts.map((product) => (
                  <li key={product} className="flex items-start gap-3 text-sm text-slate-100">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20 text-green-300">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <span>{product}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-300">
                Why buyers love it
              </p>
              <ul className="mt-4 space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm text-slate-100">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20 text-green-300">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-white/10 p-6 shadow-[var(--shadow-soft)] backdrop-blur sm:p-7">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-300">
              Bundle pricing
            </p>
            <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
              {saveText}
            </span>
          </div>

          <div className="mt-5 flex items-end gap-3">
            <span className="text-2xl font-semibold text-slate-400 line-through">
              {originalPrice}
            </span>
            <span className="text-5xl font-bold text-white">{bundlePrice}</span>
          </div>

          <p className="mt-4 text-sm leading-7 text-slate-200">
            One-time payment • Instant download • Works with ChatGPT & Gemini
          </p>

          <p className="mt-3 text-sm font-semibold text-white">
            Stop writing prompts from scratch. Start getting results instantly.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {summaryItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-slate-100"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-7">
            <ButtonLink
              href={buyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border-white bg-white text-green-700 hover:border-white hover:bg-green-50 hover:text-green-800"
              variant="secondary"
            >
              Get the Bundle
            </ButtonLink>
            <p className="mt-3 text-xs font-medium text-slate-200">
              🔥 Launch price — increasing soon
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default BundleCard
