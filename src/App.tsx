import { useEffect, useRef, useState } from 'react'
import AudienceCard from './components/AudienceCard'
import BundleCard from './components/BundleCard'
import CategoryCard from './components/CategoryCard'
import { categoryThemeStyles, getCategoryTheme } from './components/cardThemes'
import Footer from './components/Footer'
import FaqItem from './components/FaqItem'
import FreePromptCard from './components/FreePromptCard'
import Navbar from './components/Navbar'
import PromptCard from './components/PromptCard'
import SectionHeading from './components/SectionHeading'
import StoreFeatureCard from './components/StoreFeatureCard'
import ButtonLink from './components/ButtonLink'
import Toast from './components/Toast'
import TrustCard from './components/TrustCard'
import {
  audiences,
  bundleOffer,
  categories,
  faqs,
  footerSections,
  heroStats,
  heroTrustLine,
  navLinks,
  storeFeatures,
  trustPoints,
} from './data/homepageData'
import { prompts } from './data/prompts'

function App() {
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null)
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const feedbackTimer = useRef<number | null>(null)

  const featuredProducts = prompts.filter((prompt) => prompt.price !== 'Free').slice(0, 3)
  const freePrompts = prompts.filter((prompt) => prompt.price === 'Free').slice(0, 2)
  const promptCategoryByTheme = {
    business: 'Business',
    marketing: 'Marketing',
    youtube: 'YouTube',
  } as const
  const paidProductByCategory = {
    YouTube: featuredProducts.find((prompt) => prompt.category === 'YouTube'),
    Business: featuredProducts.find((prompt) => prompt.category === 'Business'),
    Marketing: featuredProducts.find((prompt) => prompt.category === 'Marketing'),
  }
  const totalPaidPromptCount = featuredProducts.reduce(
    (total, prompt) => total + (prompt.promptCount ?? 0),
    0,
  )

  useEffect(() => {
    return () => {
      if (feedbackTimer.current !== null) {
        window.clearTimeout(feedbackTimer.current)
      }
    }
  }, [])

  const handleCopyPrompt = async (promptId: string, promptText: string) => {
    if (!navigator.clipboard) {
      window.alert('Clipboard access is not available in this browser.')
      return
    }

    try {
      await navigator.clipboard.writeText(promptText)
      setCopiedPromptId(promptId)
      setToastMessage('Copied!')

      if (feedbackTimer.current !== null) {
        window.clearTimeout(feedbackTimer.current)
      }

      feedbackTimer.current = window.setTimeout(() => {
        setCopiedPromptId(null)
        setToastMessage(null)
      }, 2000)
    } catch {
      window.alert('The prompt could not be copied. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-transparent">
      <Navbar bundleLink={bundleOffer.buyLink} links={navLinks} />

      <main className="mx-auto flex max-w-7xl flex-col gap-6 px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <section
          id="home"
          className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white px-6 py-16 shadow-[var(--shadow-soft)] sm:px-10 lg:px-16 lg:py-24"
        >
          <div className="grid gap-12 lg:grid-cols-[1fr_0.88fr] lg:items-center">
            <div className="max-w-3xl text-center lg:text-left">
              <span className="motion-safe:animate-fade-up rounded-full border border-green-100 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
                Premium one-time digital downloads for creators and teams
              </span>

              <h1 className="motion-safe:animate-fade-up mt-6 font-display text-4xl leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Premium AI Prompt Packs for YouTube, Business, and Marketing
              </h1>

              <p
                className="motion-safe:animate-fade-up mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:max-w-xl"
                style={{ animationDelay: '120ms' }}
              >
                Get ready-to-use prompt packs built for real workflows. One-time
                purchase, instant download, no subscription.
              </p>

              <div
                className="motion-safe:animate-fade-up mt-8 flex w-full flex-col gap-3 sm:max-w-md sm:flex-row lg:justify-start"
                style={{ animationDelay: '220ms' }}
              >
                <ButtonLink
                  href={bundleOffer.buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get the Bundle
                </ButtonLink>
                <ButtonLink href="#products" variant="secondary">
                  Explore Packs
                </ButtonLink>
              </div>

              <p
                className="motion-safe:animate-fade-up mt-4 text-sm font-semibold text-slate-600"
                style={{ animationDelay: '260ms' }}
              >
                Get all 3 packs for <span className="text-slate-950">$39</span> instead of{' '}
                <span className="line-through">$72</span>
              </p>

              <p
                className="motion-safe:animate-fade-up mt-3 text-sm text-slate-500"
                style={{ animationDelay: '300ms' }}
              >
                {heroTrustLine}
              </p>

              <div
                className="motion-safe:animate-fade-up mt-12 grid gap-4 rounded-[2rem] border border-slate-200 bg-slate-50 p-5 text-left shadow-[var(--shadow-card)] sm:grid-cols-3"
                style={{ animationDelay: '320ms' }}
              >
                {heroStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-white p-5 shadow-sm">
                    <p className="text-sm font-semibold text-slate-500">{stat.label}</p>
                    <p className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="motion-safe:animate-fade-up mx-auto w-full max-w-xl rounded-[2rem] border border-slate-200 bg-linear-to-br from-slate-50 via-white to-green-50 p-5 shadow-[var(--shadow-card)] sm:p-6"
              style={{ animationDelay: '200ms' }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                    Inside PromptMint
                  </p>
                  <h2 className="mt-3 font-display text-2xl text-slate-950 sm:text-3xl">
                    Start with one pack or save with the full bundle
                  </h2>
                </div>

                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm">
                  {totalPaidPromptCount} prompts
                </span>
              </div>

              <div className="mt-6 space-y-3">
                {featuredProducts.map((product) => {
                  const theme = getCategoryTheme(product.category)
                  const styles = categoryThemeStyles[theme]

                  return (
                    <div
                      key={product.id}
                      className={`rounded-[1.5rem] border p-4 shadow-sm ${styles.miniCard}`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${styles.eyebrow}`}>
                            {product.category}
                          </p>
                          <h3 className="mt-2 text-lg font-semibold text-slate-950">
                            {product.title}
                          </h3>
                          {product.subtitle ? (
                            <p className="mt-2 text-sm text-slate-600">{product.subtitle}</p>
                          ) : null}
                        </div>

                        <div className="text-right">
                          <p className="text-lg font-bold text-slate-950">{product.price}</p>
                          {product.promptCount ? (
                            <p className="mt-1 text-xs text-slate-500">
                              {product.promptCount} prompts
                            </p>
                          ) : null}
                        </div>
                      </div>

                      <div className="mt-4 flex flex-col gap-3 border-t border-white/70 pt-4 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-xs font-medium text-slate-500">
                          Instant download after purchase
                        </p>

                        <ButtonLink
                          href={product.buyLink}
                          target="_blank"
                          rel="noreferrer"
                          variant="secondary"
                          className={`w-full sm:w-auto ${styles.button}`}
                        >
                          View Pack
                        </ButtonLink>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
                  Downloadable text packs
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
                  One-time purchase
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
                  Works with ChatGPT & Gemini
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white px-6 py-12 shadow-[var(--shadow-soft)] sm:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-green-600">
              Who Is This For?
            </p>
            <h2 className="mt-4 font-display text-3xl text-slate-950 sm:text-4xl">
              Built for people using AI to move faster every day
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Choose the pack that fits your workflow now, or grab the bundle to cover
              content, business, and marketing work together.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {audiences.map((audience) => (
              <AudienceCard
                key={audience.title}
                title={audience.title}
                description={audience.description}
                icon={audience.icon}
                tone={audience.tone}
              />
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm font-semibold text-slate-600 sm:text-base">
            If you use AI daily, this will save you hours every week
          </p>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white px-6 py-12 shadow-[var(--shadow-soft)] sm:px-10">
          <SectionHeading
            eyebrow="How It Works"
            title="A simpler buying experience from checkout to prompt use"
            description="PromptMint is designed to help buyers understand what they are getting, access it quickly, and put it to work without a learning curve."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {storeFeatures.map((feature) => (
              <StoreFeatureCard
                key={feature.step}
                step={feature.step}
                title={feature.title}
                description={feature.description}
                tone={feature.tone}
              />
            ))}
          </div>
        </section>

        <section
          id="browse"
          className="rounded-[2rem] border border-slate-200 bg-white px-6 py-12 shadow-[var(--shadow-soft)] sm:px-10"
        >
          <SectionHeading
            eyebrow="Categories"
            title="Prompt packs built for real-world results"
            description="Explore focused prompt packs for YouTube growth, business productivity, and marketing launches."
          />

          <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-3">
            {categories.map((category) => {
              const paidProduct = paidProductByCategory[promptCategoryByTheme[category.theme]]

              return (
                <CategoryCard
                  key={category.title}
                  title={category.title}
                  eyebrow={category.eyebrow}
                  description={category.description}
                  icon={category.icon}
                  theme={category.theme}
                  buyLink={paidProduct?.buyLink}
                  price={paidProduct?.price}
                />
              )
            })}
          </div>
        </section>

        <section
          id="products"
          className="rounded-[2rem] border border-slate-200 bg-white px-6 py-12 shadow-[var(--shadow-soft)] sm:px-10"
        >
          <SectionHeading
            eyebrow="Featured Products"
            title="Choose the prompt pack that fits your workflow"
            description="Each product is a one-time digital download built to help you create better output faster, without subscription complexity."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {featuredProducts.map((prompt) => (
              <PromptCard
                key={prompt.id}
                bestFor={prompt.bestFor}
                id={prompt.id}
                title={prompt.title}
                subtitle={prompt.subtitle}
                description={prompt.description}
                highlights={prompt.highlights}
                buyLink={prompt.buyLink}
                category={prompt.category}
                price={prompt.price}
                promptCount={prompt.promptCount}
              />
            ))}
          </div>
        </section>

        <section
          id="bundle"
          className="rounded-[2rem] border border-slate-200 bg-white px-6 py-12 shadow-[var(--shadow-soft)] sm:px-10"
        >
          <SectionHeading
            eyebrow="Bundle & Save"
            title="Get all 3 packs and save instantly"
            description="The bundle gives you the fastest path to better content, sharper workflow, and stronger launches in one purchase."
          />

          <div className="mt-10 grid gap-4 rounded-[1.75rem] border border-green-100 bg-linear-to-r from-green-50 via-white to-green-50 p-4 shadow-sm sm:grid-cols-3 sm:p-5">
            <div className="rounded-[1.25rem] border border-white/80 bg-white/85 p-4 text-center shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Buying separately
              </p>
              <p className="mt-2 text-3xl font-bold text-slate-950">{bundleOffer.originalPrice}</p>
            </div>
            <div className="rounded-[1.25rem] border border-green-200 bg-green-50 p-4 text-center shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green-700">
                Bundle price
              </p>
              <p className="mt-2 text-3xl font-bold text-green-700">{bundleOffer.bundlePrice}</p>
            </div>
            <div className="rounded-[1.25rem] border border-white/80 bg-white/85 p-4 text-center shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                You save
              </p>
              <p className="mt-2 text-3xl font-bold text-slate-950">
                {bundleOffer.saveText.replace('Save ', '')}
              </p>
            </div>
          </div>

          <div className="mt-10">
            <BundleCard
              badge={bundleOffer.badge}
              benefits={bundleOffer.benefits}
              buyLink={bundleOffer.buyLink}
              bundlePrice={bundleOffer.bundlePrice}
              includedProducts={bundleOffer.includedProducts}
              originalPrice={bundleOffer.originalPrice}
              saveText={bundleOffer.saveText}
              summaryItems={bundleOffer.summaryItems}
              subtitle={bundleOffer.subtitle}
              title={bundleOffer.title}
            />
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white px-6 py-12 shadow-[var(--shadow-soft)] sm:px-10">
          <SectionHeading
            eyebrow="Why Buy"
            title="Made to be easy to buy and easy to use"
            description="Everything here is built around one-time purchases, instant access, and practical prompts you can use right away."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
            {trustPoints.map((point) => (
              <TrustCard
                key={point.title}
                title={point.title}
                description={point.description}
                tone={point.tone}
              />
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white px-6 py-12 shadow-[var(--shadow-soft)] sm:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-green-600">
              Try before you buy
            </p>
          </div>

          <SectionHeading
            eyebrow="Free Prompts"
            title="Preview the quality before you purchase a full pack"
            description="Copy two free prompts and see how PromptMint products are structured for real-world work."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {freePrompts.map((prompt) => (
              <FreePromptCard
                key={prompt.id}
                title={prompt.title}
                description={prompt.description}
                category={prompt.category}
                content={prompt.content}
                buyLink={paidProductByCategory[prompt.category]?.buyLink}
                isCopied={copiedPromptId === prompt.id}
                onCopy={() => handleCopyPrompt(prompt.id, prompt.content)}
              />
            ))}
          </div>
        </section>

        <section
          id="faq"
          className="rounded-[2rem] border border-slate-200 bg-white px-6 py-12 shadow-[var(--shadow-soft)] sm:px-10"
        >
          <SectionHeading
            eyebrow="FAQ"
            title="Quick answers before you buy"
            description="These are the questions buyers usually want answered before picking a prompt pack or bundle."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {faqs.map((faq) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer sections={footerSections} />
      <Toast message={toastMessage} />
    </div>
  )
}

export default App
